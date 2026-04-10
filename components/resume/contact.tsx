"use client"

import { motion } from "framer-motion"
import { Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
      aria-label="Contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-8 lg:bg-transparent lg:backdrop-blur-none"
      >
        <h2 className="text-lg font-bold uppercase tracking-widest text-foreground">
          Contact
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="rounded-lg border border-border bg-card p-6"
      >
        <h3 className="text-xl font-semibold text-foreground mb-4">
          {"Let's work together"}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {"I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!"}
        </p>

        <div className="space-y-4">
          <a
            href="mailto:hamdane.sidali@hotmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
              <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
            </div>
            <span>hamdane.sidali@hotmail.com</span>
          </a>

          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <MapPin className="h-5 w-5" />
            </div>
            <span>Paris, FR</span>
          </div>
        </div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16 text-sm text-muted-foreground"
      >
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            className="font-medium text-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com"
            className="font-medium text-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            href="https://pages.github.com"
            className="font-medium text-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Pages
          </a>
          .
        </p>
      </motion.footer>
    </section>
  )
}
