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
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-8 lg:bg-transparent lg:backdrop-blur-none"
      >
        <h2 className="text-lg font-bold uppercase tracking-widest text-foreground">
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
          Passionate Software Test Engineer at <a href="#" className="font-medium text-foreground hover:text-primary transition-colors"> Rakuten France </a> with a Master’s degree in Embedded Systems Engineering. I specialize in designing and implementing automated testing solutions across web end-to-end, API, and mobile applications. I’ve led several impactful projects, including building a device pool to enable test parallelization, automating UI visual validation, and developing a local SaaS platform for test run management. A technology enthusiast, I actively explore embedded systems projects in my spare time, staying connected to my academic roots.
        </p>

<p className="text-muted-foreground leading-relaxed">
  I enjoy building tools and systems that make testing more efficient, scalable, and reliable, with a strong focus on delivering real impact.
</p>
      </motion.div>
    </section>
  )
}
