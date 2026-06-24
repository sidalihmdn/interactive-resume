"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, Github, Layers3 } from "lucide-react"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

type Project = {
  title: string
  description: string
  technologies: string[]
  links: {
    github: string
    live?: string
  }
  preview: {
    thumbnail: string
    video?: string
  }
  caseStudy: {
    problem: string
    action: string
    result: string
  }
}

const BASE_PATH = "/interactive-resume"

const withBasePath = (path: string) => {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${BASE_PATH}${normalized}`
}

const projects: Project[] = [
  {
    title: "lashtest - API Testing Library",
    description:
      "A Python library for expressive API tests with fluent request building, rich assertions, auth strategies, retries, and reporting integrations.",
    technologies: ["Python", "pytest", "Allure", "lxml", "JSONPath"],
    links: {
      github: "https://github.com/sidalihmdn/lashtest",
      live: "https://pypi.org/project/lashtest/",
    },
    preview: {
      thumbnail: "/placeholder.jpg",
      video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    },
    caseStudy: {
      problem: "API test suites were hard to read and maintain across multiple services.",
      action: "Built a DSL-style library with reusable request builders and assertion chains, plus auth/retry/reporting modules.",
      result: "Reduced boilerplate in tests and improved readability and consistency for API quality checks.",
    },
  },
  {
    title: "Test Manager SaaS Platform",
    description:
      "A platform to manage Gherkin test scenarios, runs, and campaigns with a Python backend and React frontend.",
    technologies: ["Python", "React", "GitHub Actions", "Docker"],
    links: {
      live: "#",
      github: "https://github.com/sidalihmdn/TestBase",
    },
    preview: {
      thumbnail: "/placeholder.jpg",
      video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    },
    caseStudy: {
      problem: "Teams lacked one place to manage scenario authoring, run planning, and campaign tracking.",
      action: "Designed a SaaS architecture with feature-oriented test modeling and traceable run execution workflows.",
      result: "Created a foundation for centralized planning and faster visibility on test campaign status.",
    },
  },
  {
    title: "OS Kernel - Pet Project",
    description:
      "A Linux-like kernel project in C/C++ focused on low-level systems design: memory management, drivers, and filesystem work.",
    technologies: ["C", "C++", "Assembly", "QEMU"],
    links: {
      github: "https://github.com/sidalihmdn/OS_from_scratch",
      live: "#",
    },
    preview: {
      thumbnail: "/scratchos.png",
      video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    },
    caseStudy: {
      problem: "Wanted deeper mastery of OS internals beyond application-level development.",
      action: "Implemented core components incrementally while validating behavior in a virtualized environment.",
      result: "Strengthened low-level debugging skills and systems understanding applied back to test engineering.",
    },
  },
]

export function Projects() {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills")
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-8 lg:bg-transparent lg:backdrop-blur-none"
      >
        <h2 className="text-lg font-bold uppercase tracking-widest text-foreground">Projects</h2>
      </motion.div>

      <ul className="space-y-8">
        {projects.map((project, index) => (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group rounded-2xl border border-border/60 bg-card/70 p-4 shadow-sm transition-colors hover:border-primary/30"
          >
            <div className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-6">
              <div className="relative overflow-hidden rounded-xl border border-border/60">
                <motion.img
                  src={withBasePath(project.preview.thumbnail)}
                  alt={`${project.title} preview`}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.15 }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div>
                <h3 className="text-base font-semibold leading-tight text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.links.live && project.links.live !== "#" && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-border/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Demo
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                  <button
                    type="button"
                    onClick={scrollToSkills}
                    className="inline-flex items-center gap-1 rounded-full border border-border/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Layers3 className="h-3.5 w-3.5" />
                    Stack
                  </button>

                  <Drawer>
                    <DrawerTrigger asChild>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        Case Study
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader className="mx-auto w-full max-w-3xl text-left">
                        <DrawerTitle>{project.title}</DrawerTitle>
                        <DrawerDescription>Problem -&gt; Action -&gt; Result</DrawerDescription>
                        <div className="mt-4 space-y-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Problem</p>
                            <p className="mt-1 text-sm text-muted-foreground">{project.caseStudy.problem}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Action</p>
                            <p className="mt-1 text-sm text-muted-foreground">{project.caseStudy.action}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Result</p>
                            <p className="mt-1 text-sm text-muted-foreground">{project.caseStudy.result}</p>
                          </div>
                        </div>
                      </DrawerHeader>
                    </DrawerContent>
                  </Drawer>
                </div>

                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <span className="inline-flex items-center rounded-full bg-primary/12 px-2.5 py-1 text-xs font-medium text-primary">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
