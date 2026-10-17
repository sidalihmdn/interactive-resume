import type { Content } from "./types"
import { certificationLinks, links, previews, rakuten, skills, stack } from "./shared"

export const en: Content = {
  meta: {
    title: "Sid-Ali Hamdane, Software Test Engineer",
    description:
      "Software Test Engineer and release manager at Rakuten France. Test automation for web, API and mobile apps.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    certifications: "Certifications",
    skills: "Skills",
    contact: "Contact",
    sections: "Sections",
    language: "Language",
    theme: { toLight: "Switch to light theme", toDark: "Switch to dark theme" },
  },
  hero: {
    role: "Software Test Engineer",
    intro:
      "I build test automation for web, API and mobile apps, and run releases for the mobile team at Rakuten France.",
    bookCall: "Book a call",
    downloadCv: "Download CV",
    photoAlt: "Portrait of Sid-Ali Hamdane",
    run: {
      command: "pytest tests/test_sidali.py",
      checks: [
        { name: "test_role", detail: "Software Test Engineer at Rakuten France since 2023" },
        { name: "test_release_speed", detail: "parallel device runs cut time to production by 80%" },
        { name: "test_certified", detail: "ISTQB Advanced Test Automation Engineer, 2025" },
        { name: "test_stack", detail: "Selenium, Appium, Playwright, Pytest" },
        { name: "test_background", detail: "Master's in Embedded Systems Engineering" },
        { name: "test_location", detail: "Paris, France" },
      ],
      summary: (passed, seconds) => `${passed} passed in ${seconds}s`,
      replay: "Run again",
    },
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm a Software Test Engineer at Rakuten France with a Master's degree in Embedded Systems Engineering. I design and build automated testing across web end-to-end, API and mobile applications.",
      "I've led projects including a device pool that lets tests run in parallel, automated visual validation of the UI, and a local SaaS platform for managing test runs. In my spare time I build embedded systems projects, which keeps me close to my academic roots.",
      "I like building tools and systems that make testing faster, more scalable and more reliable, and I care about the impact they have on real releases.",
    ],
  },
  experience: {
    title: "Experience",
    stackLabel: "Technologies used",
    items: [
      {
        period: "2023 – now",
        title: "Software Test Engineer",
        ...rakuten,
        description:
          "Lead test automation for the Mobile Apps team and own the testing strategy. Design, build and maintain automated test frameworks with Selenium, Appium and Pytest. Keep the release schedule and monitor app health in production. Refactored the automation project to run in parallel across devices and OS versions, cutting time to production by 80% and preventing production bugs.",
        technologies: stack.current,
      },
      {
        period: "2023",
        title: "Software Test Engineer intern",
        ...rakuten,
        description:
          "Automated tests for new features, maintained the existing test base and built visual UI validation using image processing with OpenCV. Wrote and ran test plans for web and mobile apps, with regression, integration and performance testing across several releases.",
        technologies: stack.intern,
      },
    ],
  },
  projects: {
    title: "Projects",
    demo: "Visit site",
    code: "Source code",
    caseStudy: "Read case study",
    caseStudyLabels: { problem: "Problem", action: "What I did", result: "Result" },
    previewAlt: (title) => `Preview of ${title}`,
    items: [
      {
        title: "Lashtest Lab",
        description:
          "A test management workspace that connects CI, JIRA and Linear to manage Gherkin scenarios, runs and campaigns. Python backend, React frontend.",
        technologies: ["Python", "React", "GitHub Actions", "Docker"],
        links: links.lashtestLab,
        preview: previews.lashtestLab,
        caseStudy: {
          problem: "Teams had no single place to write scenarios, plan runs and track campaigns.",
          action: "Designed a SaaS architecture with feature-oriented test modeling and traceable run execution.",
          result: "A foundation for centralized planning and faster visibility on test campaign status.",
        },
      },
      {
        title: "lashtest",
        description:
          "A Python library for readable API tests: fluent request building, rich assertions, auth strategies, retries and Allure reporting. Published on PyPI.",
        technologies: ["Python", "pytest", "Allure", "lxml", "JSONPath"],
        links: links.lashtest,
        preview: previews.lashtest,
        caseStudy: {
          problem: "API test suites were hard to read and maintain across multiple services.",
          action: "Built a DSL-style library with reusable request builders and assertion chains, plus auth, retry and reporting modules.",
          result: "Less boilerplate in tests, and API checks that read the same way across teams.",
        },
      },
      {
        title: "ScratchOS",
        description:
          "A Linux-like kernel written from scratch in C and C++, covering memory management, drivers and a filesystem.",
        technologies: ["C", "C++", "Assembly", "QEMU"],
        links: links.scratchOs,
        preview: previews.scratchOs,
        caseStudy: {
          problem: "I wanted to understand OS internals beyond application-level development.",
          action: "Implemented core components one at a time and validated their behavior in QEMU.",
          result: "Sharper low-level debugging skills that I bring back to test engineering.",
        },
      },
    ],
  },
  certifications: {
    title: "Certifications",
    view: "View credential",
    items: [
      {
        year: "2025",
        title: "ISTQB Advanced Level: Test Automation Engineer",
        issuer: "International Software Testing Qualifications Board",
        description:
          "Test automation architecture, frameworks and practices for designing, building and maintaining automated test solutions.",
        link: certificationLinks.ctal,
      },
      {
        year: "2024",
        title: "ISTQB Certified Tester Foundation Level",
        issuer: "International Software Testing Qualifications Board",
        description: "Core testing knowledge: testing principles, test management and test techniques.",
        link: certificationLinks.ctfl,
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      { title: "Test automation", skills: skills.automation },
      { title: "Languages", skills: skills.languages },
      { title: "Tools and platforms", skills: skills.tools },
      { title: "Testing types", skills: ["API", "Performance", "Security", "Mobile", "End-to-end", "Regression"] },
    ],
  },
  contact: {
    title: "Contact",
    heading: "Let's work together",
    description:
      "I'm always interested in new projects and opportunities. Whether you have a question or just want to say hi, get in touch.",
    location: "Paris, France",
    copyEmail: "Copy email",
    copied: "Email copied",
    bookCall: "Book a 30-minute call",
    downloadCv: "Download CV (PDF)",
  },
  footer: {
    views: (count) => `${count} visits`,
    builtWith: "Built with Next.js and tested with Playwright.",
    source: "Source on GitHub",
  },
}
