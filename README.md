# Interactive resume

Sid-Ali Hamdane's resume and portfolio, live at https://sidalihmdn.github.io/interactive-resume/.

A static Next.js site deployed to GitHub Pages, in English and French, with light and dark themes. The downloadable CV is printed from the site itself, so it never drifts from the page.

## Editing content

All text lives in `lib/content/`:

- `en.ts` and `fr.ts` hold everything the page says, one file per language. Both must match the `Content` type in `types.ts`, so a missing translation fails the type check.
- `shared.ts` holds what doesn't change between languages: links, stacks, media.

Media goes in `public/`. Keep images as WebP and videos as both `.mp4` and `.webm`.

## Running it

```bash
pnpm install
pnpm dev          # http://localhost:3000/interactive-resume/
pnpm typecheck
pnpm build        # static export to out/
```

## Tests

End-to-end tests use Playwright and run against the built site:

```bash
pnpm build
cd e2e && npm install && npx playwright install chromium
node ../scripts/generate-cv.mjs   # writes the CV PDFs into out/
npx playwright test
```

Every pull request runs the type check, the build, the Playwright suite on desktop and mobile, and a Lighthouse audit. Screenshots of both themes in both languages are attached to the run.

## Deploying

Pushing to `master` builds the site, prints the CV PDFs and publishes to GitHub Pages.
