/** Site-wide constants. The base path must match `basePath` in next.config.mjs. */
export const BASE_PATH = "/interactive-resume"
export const SITE_URL = "https://sidalihmdn.github.io/interactive-resume/"

/** Prefix a file in /public with the base path (Next only does this for next/image and links). */
export const asset = (path: string) => `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`

export const EMAIL = "hamdane.sidali@hotmail.com"
export const CALENDLY_URL = "https://calendly.com/hamdane-sidali/30min"
export const GITHUB_URL = "https://github.com/sidalihmdn"
export const LINKEDIN_URL = "https://www.linkedin.com/in/sidali-hamdane"
export const SOURCE_URL = "https://github.com/sidalihmdn/interactive-resume"

/** The CV PDFs are generated from the print view at deploy time (see scripts/generate-cv.mjs). */
export const cvFile = (language: "en" | "fr") => asset(`/Sid-Ali-HAMDANE-CV-${language.toUpperCase()}.pdf`)

export const SECTION_IDS = ["about", "experience", "projects", "certifications", "skills", "contact"] as const
export type SectionId = (typeof SECTION_IDS)[number]
