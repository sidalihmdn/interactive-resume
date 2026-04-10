"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/lib/hooks/useTranslation"

export function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={t("about.title")}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-8 lg:bg-transparent lg:backdrop-blur-none"
      >
        <h2 className="text-lg font-bold uppercase tracking-widest text-foreground">
          {t("about.title")}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
       <p className="mb-4 text-muted-foreground leading-relaxed">
          {t("about.paragraph1")} <a href={t("about.companyUrl")} className="font-medium text-foreground hover:text-primary transition-colors"> {t("about.companyName")} </a> {t("about.paragraph1Rest")}
        </p>

<p className="text-muted-foreground leading-relaxed">
  {t("about.paragraph2")}
</p>
      </motion.div>
    </section>
  )
}
