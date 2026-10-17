export type Language = "en" | "fr"

export type Experience = {
  period: string
  title: string
  company: string
  companyUrl: string
  description: string
  technologies: string[]
}

export type ProjectPreview =
  | { kind: "video"; src: string; poster: string }
  | { kind: "image"; src: string }
  | { kind: "code"; language: string; code: string }

export type Project = {
  title: string
  description: string
  technologies: string[]
  links: { github: string; live?: string }
  preview: ProjectPreview
  caseStudy: { problem: string; action: string; result: string }
}

export type Certification = {
  year: string
  title: string
  issuer: string
  description: string
  link: string
}

export type SkillGroup = { title: string; skills: string[] }

/** One line of the hero "test run": a resume fact written as an assertion. */
export type Check = { name: string; detail: string }

/**
 * Everything the page says, in one language. Every language file must satisfy
 * this type, so a missing translation is a type error instead of a blank spot.
 */
export type Content = {
  meta: { title: string; description: string }
  nav: {
    about: string
    experience: string
    projects: string
    certifications: string
    skills: string
    contact: string
    sections: string
    language: string
    theme: { toLight: string; toDark: string }
  }
  hero: {
    role: string
    intro: string
    bookCall: string
    downloadCv: string
    photoAlt: string
    run: {
      command: string
      checks: Check[]
      summary: (passed: number, seconds: string) => string
      replay: string
    }
  }
  about: { title: string; paragraphs: string[] }
  experience: { title: string; stackLabel: string; items: Experience[] }
  projects: {
    title: string
    demo: string
    code: string
    caseStudy: string
    caseStudyLabels: { problem: string; action: string; result: string }
    previewAlt: (title: string) => string
    items: Project[]
  }
  certifications: { title: string; view: string; items: Certification[] }
  skills: { title: string; groups: SkillGroup[] }
  contact: {
    title: string
    heading: string
    description: string
    location: string
    copyEmail: string
    copied: string
    bookCall: string
    downloadCv: string
  }
  footer: { views: (count: string) => string; builtWith: string; source: string }
}
