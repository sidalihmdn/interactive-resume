// Serves the static export in ./out under /interactive-resume/, like GitHub Pages does.
// Used by the Playwright tests, Lighthouse and the CV generator.
// Usage: node scripts/serve-static.mjs [port]
import { createReadStream, statSync } from "node:fs"
import { createServer } from "node:http"
import { extname, join, normalize, resolve } from "node:path"

const ROOT = resolve(import.meta.dirname, "..", "out")
const BASE = "/interactive-resume"

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".pdf": "application/pdf",
}

function resolveFile(urlPath) {
  const relative = normalize(decodeURIComponent(urlPath.slice(BASE.length))).replace(/^(\.\.[/\\])+/, "")
  const candidates = [join(ROOT, relative), join(ROOT, relative, "index.html"), join(ROOT, `${relative}.html`)]
  for (const file of candidates) {
    try {
      if (file.startsWith(ROOT) && statSync(file).isFile()) return file
    } catch {}
  }
  return null
}

export function startServer(port = 4173) {
  const server = createServer((req, res) => {
    const { pathname } = new URL(req.url ?? "/", "http://localhost")
    if (pathname === "/" || pathname === BASE) {
      res.writeHead(301, { Location: `${BASE}/` }).end()
      return
    }
    const file = pathname.startsWith(`${BASE}/`) ? resolveFile(pathname) : null
    if (!file) {
      res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found")
      return
    }
    const { size } = statSync(file)
    const type = TYPES[extname(file)] ?? "application/octet-stream"
    // Browsers request video in ranges; support them so <video> behaves as on Pages.
    const range = req.headers.range?.match(/bytes=(\d*)-(\d*)/)
    if (range) {
      const start = range[1] ? Number(range[1]) : 0
      const end = range[2] ? Number(range[2]) : size - 1
      res.writeHead(206, {
        "Content-Type": type,
        "Content-Range": `bytes ${start}-${end}/${size}`,
        "Content-Length": end - start + 1,
        "Accept-Ranges": "bytes",
      })
      createReadStream(file, { start, end }).pipe(res)
      return
    }
    res.writeHead(200, { "Content-Type": type, "Content-Length": size, "Accept-Ranges": "bytes" })
    createReadStream(file).pipe(res)
  })
  return new Promise((done) => server.listen(port, () => done(server)))
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.argv[2] ?? 4173)
  await startServer(port)
  console.log(`Serving out/ at http://localhost:${port}${BASE}/`)
}
