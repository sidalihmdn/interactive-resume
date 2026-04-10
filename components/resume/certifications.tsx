"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

const certifications = [
  {
    year: "2025",
    title: "ISTQB Advanced Level: Test Automation Engineer",
    issuer: "ISTQB — International Software Testing Qualifications Board",
    description:
      "Advanced certification covering test automation architecture, frameworks, and best practices for designing, implementing, and maintaining automated test solutions.",
  },
  {
    year: "2024",
    title: "ISTQB Certified Tester Foundation Level (CTFL)",
    issuer: "ISTQB — International Software Testing Qualifications Board",
    description:
      "Foundation certification validating core software testing knowledge including testing principles, test management, and test techniques.",
  },
]

export function Certifications() {
  return (
    <section
      id="certifications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Certifications"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-8 lg:bg-transparent lg:backdrop-blur-none"
      >
        <h2 className="text-lg font-bold uppercase tracking-widest text-foreground">
          Certifications
        </h2>
      </motion.div>

      <ol className="group/list">
        {certifications.map((cert, index) => (
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
                aria-label={cert.year}
              >
                {cert.year}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="flex items-center gap-2 font-medium leading-snug text-foreground">
                  <Award className="h-4 w-4 shrink-0 text-primary" />
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-primary">
                  {cert.issuer}
                </p>
                <p className="mt-2 text-sm leading-normal text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
