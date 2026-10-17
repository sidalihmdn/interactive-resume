import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { About } from "@/components/resume/about"
import { Certifications } from "@/components/resume/certifications"
import { Contact } from "@/components/resume/contact"
import { Experience } from "@/components/resume/experience"
import { Hero } from "@/components/resume/hero"
import { PrintHeader } from "@/components/resume/print-header"
import { Projects } from "@/components/resume/projects"
import { Skills } from "@/components/resume/skills"

export default function ResumePage() {
  return (
    <div id="top">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 print:max-w-none print:px-0">
        <main>
          <PrintHeader />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Skills />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
