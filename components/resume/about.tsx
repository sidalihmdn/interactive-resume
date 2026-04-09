"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <p className="mb-4 text-muted-foreground leading-relaxed">
          I&apos;m a Software Test Engineer passionate about ensuring software quality
          through comprehensive testing strategies and automation. My expertise lies in
          designing test frameworks, identifying edge cases, and collaborating with
          development teams to deliver reliable, bug-free software.
        </p>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          Currently, I&apos;m a QA Engineer at{" "}
          <a
            href="#"
            className="font-medium text-foreground hover:text-primary transition-colors"
          >
            Company Name
          </a>
          , where I lead test automation initiatives and implement CI/CD testing
          pipelines. I work closely with developers to integrate testing best practices
          throughout the software development lifecycle.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Throughout my career, I&apos;ve worked across various industries including{" "}
          <span className="font-medium text-foreground">fintech</span>,{" "}
          <span className="font-medium text-foreground">e-commerce</span>,{" "}
          <span className="font-medium text-foreground">healthcare</span>, and{" "}
          <span className="font-medium text-foreground">SaaS platforms</span>, bringing
          quality assurance expertise to each domain.
        </p>
      </motion.div>
    </section>
  )
}
