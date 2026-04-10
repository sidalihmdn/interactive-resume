"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Test Automation",
    skills: ["Selenium",, "Playwright", "Appium", "Pytest", "Cucumber"],
  },
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C++", "C", "Java", "SQL", "Bash/Shell", "Gherkin"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Jenkins", "GitHub Actions", "Docker", "Postman", "Bruno", "Charles proxy", "Docker", "Kubernetes", "Grafana", "Metabase"],
  },
  {
    title: "Testing Types",
    skills: ["API Testing", "Performance", "Security", "Mobile", "E2E", "Regression"],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Skills"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-8 lg:bg-transparent lg:backdrop-blur-none"
      >
        <h2 className="text-lg font-bold uppercase tracking-widest text-foreground">
          Skills
        </h2>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-primary/10 hover:text-primary">
                    {skill}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
