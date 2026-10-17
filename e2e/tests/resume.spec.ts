import { expect, test, type Page } from "@playwright/test"

// Third-party scripts (analytics, visitor counter) are not under test and may be offline in CI.
const isFirstParty = (url: string) => url.startsWith("http://localhost")

async function collectErrors(page: Page) {
  const errors: string[] = []
  page.on("pageerror", (err) => errors.push(err.message))
  page.on("console", (msg) => {
    if (msg.type() === "error" && isFirstParty(msg.location().url)) errors.push(msg.text())
  })
  page.on("response", (res) => {
    if (isFirstParty(res.url()) && res.status() >= 400) errors.push(`${res.status()} ${res.url()}`)
  })
  return errors
}

test.beforeEach(async ({ page }) => {
  await page.route(/goatcounter|gc\.zgo\.at/, (route) => route.abort())
})

test("loads without errors and shows the resume", async ({ page }) => {
  const errors = await collectErrors(page)
  await page.goto("./?lang=en")

  await expect(page.getByRole("heading", { level: 1, name: "Sid-Ali Hamdane" })).toBeVisible()
  for (const name of ["About", "Experience", "Projects", "Certifications", "Skills", "Contact"]) {
    await expect(page.getByRole("heading", { level: 2, name })).toBeAttached()
  }
  await page.waitForLoadState("networkidle")
  expect(errors).toEqual([])
})

test("the hero test run finishes with every check passing", async ({ page }) => {
  await page.goto("./?lang=en")
  await expect(page.getByText("6 passed in 2.52s")).toBeVisible({ timeout: 10_000 })
  await expect(page.getByText("PASSED", { exact: true })).toHaveCount(6)
})

test("with reduced motion the test run is already finished", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.goto("./?lang=en")
  await expect(page.getByText("6 passed in 2.52s")).toBeVisible({ timeout: 1_000 })
  await expect(page.getByRole("button", { name: "Run again" })).toHaveCount(0)
})

test("switching to French translates the page and is remembered", async ({ page }) => {
  await page.goto("./?lang=en")
  await page.getByRole("button", { name: "FR", exact: true }).click()

  await expect(page.locator("html")).toHaveAttribute("lang", "fr")
  await expect(page.getByRole("heading", { level: 2, name: "Compétences" })).toBeAttached()
  await expect(page.getByRole("heading", { level: 2, name: "Projets" })).toBeAttached()
  await expect(page.getByRole("link", { name: "Télécharger le CV", exact: true })).toHaveAttribute(
    "href",
    "/interactive-resume/Sid-Ali-HAMDANE-CV-FR.pdf",
  )

  await page.goto("./")
  await expect(page.locator("html")).toHaveAttribute("lang", "fr")
})

test("French browsers get French by default", async ({ browser }) => {
  const context = await browser.newContext({ locale: "fr-FR" })
  const page = await context.newPage()
  await page.goto("http://localhost:4173/interactive-resume/")
  await expect(page.locator("html")).toHaveAttribute("lang", "fr")
  await context.close()
})

test("the theme toggle switches between light and dark", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" })
  await page.goto("./?lang=en")
  const html = page.locator("html")
  await expect(html).not.toHaveClass(/dark/)

  await page.getByRole("button", { name: "Switch to dark theme" }).click()
  await expect(html).toHaveClass(/dark/)

  await page.reload()
  await expect(html).toHaveClass(/dark/)
  await page.getByRole("button", { name: "Switch to light theme" }).click()
  await expect(html).not.toHaveClass(/dark/)
})

test("every local asset and CV link resolves", async ({ page, request }) => {
  await page.goto("./?lang=en")
  const urls = await page.evaluate(() =>
    [
      ...Array.from(document.querySelectorAll<HTMLImageElement>("img"), (el) => el.currentSrc || el.src),
      ...Array.from(document.querySelectorAll<HTMLSourceElement>("video source"), (el) => el.src),
      ...Array.from(document.querySelectorAll<HTMLVideoElement>("video[poster]"), (el) => el.poster),
      ...Array.from(document.querySelectorAll<HTMLAnchorElement>("a[download]"), (el) => el.href),
    ].filter((url) => url.startsWith(location.origin)),
  )
  expect(urls.length).toBeGreaterThan(4)
  for (const url of new Set(urls)) {
    const res = await request.get(url)
    expect(res.status(), url).toBe(200)
  }
})

test("project case studies open with their three steps", async ({ page }) => {
  await page.goto("./?lang=en")
  await page.getByRole("button", { name: "Read case study" }).first().click()
  const dialog = page.getByRole("dialog")
  await expect(dialog.getByRole("heading", { name: "Lashtest Lab" })).toBeVisible()
  for (const step of ["Problem", "What I did", "Result"]) {
    await expect(dialog.getByText(step, { exact: true })).toBeVisible()
  }
  await page.keyboard.press("Escape")
  await expect(dialog).toBeHidden()
})

test("nothing overflows horizontally", async ({ page }) => {
  await page.goto("./?lang=fr")
  await page.waitForLoadState("networkidle")
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
  expect(overflow).toBeLessThanOrEqual(0)
})

test.describe("mobile", () => {
  test.skip(({ isMobile }) => !isMobile, "mobile only")

  test("the avatar is large and the section menu works", async ({ page }) => {
    await page.goto("./?lang=en")
    const avatar = page.getByRole("img", { name: "Portrait of Sid-Ali Hamdane" })
    expect((await avatar.boundingBox())?.width).toBe(160)

    await page.getByRole("button", { name: "Sections" }).click()
    await page.getByRole("navigation", { name: "Sections" }).getByRole("link", { name: "Skills" }).click()
    await expect(page.getByRole("heading", { level: 2, name: "Skills" })).toBeInViewport()
    await expect(page.getByRole("button", { name: "Sections" })).toHaveAttribute("aria-expanded", "false")
  })
})

test.describe("screenshots for review", () => {
  for (const colorScheme of ["light", "dark"] as const) {
    for (const lang of ["en", "fr"]) {
      test(`${colorScheme} ${lang}`, async ({ page }, testInfo) => {
        await page.emulateMedia({ colorScheme, reducedMotion: "reduce" })
        await page.goto(`./?lang=${lang}`)
        await page.waitForLoadState("networkidle")
        await page.evaluate(() => document.fonts.ready)
        await page.screenshot({
          path: testInfo.outputPath(`${testInfo.project.name}-${colorScheme}-${lang}.png`),
          fullPage: true,
        })
      })
    }
  }
})
