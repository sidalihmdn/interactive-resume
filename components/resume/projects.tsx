"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Test Automation Framework",
    description:
      "A scalable, modular test automation framework built with Page Object Model design pattern. Supports parallel execution across multiple browsers and integrates with CI/CD pipelines for continuous testing.",
    technologies: ["Cypress", "TypeScript", "GitHub Actions", "Docker"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "API Testing Suite",
    description:
      "Comprehensive API testing solution with automated contract testing, data validation, and performance benchmarking. Includes detailed reporting and integration with Slack for real-time notifications.",
    technologies: ["Postman", "Newman", "Python", "pytest"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Performance Testing Dashboard",
    description:
      "Real-time performance monitoring dashboard that visualizes load test results, identifies bottlenecks, and tracks performance metrics over time across multiple environments.",
    technologies: ["JMeter", "Grafana", "InfluxDB", "Python"],
    links: {
      live: "#",
      github: "#",
    },
  },
]

export function Projects() {
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
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </motion.div>

      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.title}
                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-3 flex items-center gap-4">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>

                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
