// Prints the site's print view to PDF, once per language, into ./out.
// The "Download CV" buttons link to these files, so the CV always matches the site.
// Run after `pnpm build`, with Playwright installed (see e2e/package.json):
//   node scripts/generate-cv.mjs
import { createRequire } from "node:module"
import { resolve } from "node:path"
import { startServer } from "./serve-static.mjs"

// Playwright is installed in e2e/, not in the site's own dependencies.
const require = createRequire(resolve(import.meta.dirname, "..", "e2e", "package.json"))
const { chromium } = require("playwright")

const PORT = 4174
const server = await startServer(PORT)
const browser = await chromium.launch()

try {
  for (const language of ["en", "fr"]) {
    const page = await browser.newPage()
    await page.goto(`http://localhost:${PORT}/interactive-resume/?lang=${language}`, { waitUntil: "networkidle" })
    // Wait until the detected language is applied, then for web fonts.
    await page.waitForFunction((lang) => document.documentElement.lang === lang, language)
    await page.evaluate(() => document.fonts.ready)
    const path = resolve(import.meta.dirname, "..", "out", `Sid-Ali-HAMDANE-CV-${language.toUpperCase()}.pdf`)
    await page.pdf({ path, format: "A4", printBackground: true, preferCSSPageSize: true })
    console.log(`Wrote ${path}`)
    await page.close()
  }
} finally {
  await browser.close()
  server.close()
}
