"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2023 — Present",
    title: "Software Test Engineer / Release Manager",
    company: "Rakuten France",
    companyUrl: "https://global.rakuten.com/corp/about/company/",
    description:
      "Led test automation initiatives in the Mobile Apps team and implemented comprehensive testing strategies. Designed, implemented, and maintained automated test frameworks using Selenium/Appium and Cypress. Maintained the release schedule and monitored application health in production to ensure stability and reliability. Refactored the automation testing project to enable parallel execution across multiple devices and OS versions, reducing time to production by 80% and significantly preventing production bugs.",
    technologies: ["Selenium", "Appium", "Pytest", "Jenkins", "Github actions", "SQL", "Python", "Postman", "Bruno", "JIRA"],
  },
  {
    period: "2023 — 2023",
    title: "Software Test Engineer Intern",
    company: "Rakuten France",
    companyUrl: "https://global.rakuten.com/corp/about/company/",
    description:
      "Ensured the automation of tests for new features, maintained the existing test base, and implemented UI visual validation using image processing algorithms with OpenCV. I also developed and executed test plans for web and mobile applications, and performed regression, integration, and performance testing across multiple product releases.",
    technologies: ["Selenium", "Appium", "Pytest", "Jenkins", "Github actions", "SQL", "Python", "Postman", "Bruno"],
  }
]

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-8 lg:bg-transparent lg:backdrop-blur-none"
      >
        <h2 className="text-lg font-bold uppercase tracking-widest text-foreground">
          Experience
        </h2>
      </motion.div>

      <div>
        <ol className="group/list">
          {experiences.map((experience, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={experience.period}
                >
                  {experience.period}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${experience.title} at ${experience.company}`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {experience.title} ·{" "}
                          <span className="inline-block">
                            {experience.company}
                            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {experience.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {experience.technologies.map((tech) => (
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
        </ol>
      </div>
    </section>
  )
}
