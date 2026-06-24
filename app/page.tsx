"use client"

import { About } from "@/components/resume/about"
import { Experience } from "@/components/resume/experience"
import { Projects } from "@/components/resume/projects"
import { Skills } from "@/components/resume/skills"
import { Certifications } from "@/components/resume/certifications"
import { Contact } from "@/components/resume/contact-translated"
import { Navigation } from "@/components/resume/navigation"
import { HeroLanding } from "@/components/resume/hero-landing"
import { UtilityRow } from "@/components/resume/utility-row"
import { ScrollFadeSection } from "@/components/scroll-fade-section"

export default function ResumePage() {
  return (
    <div className="bg-background">
      {/* ── Full-screen hero with scroll effects ── */}
      <HeroLanding />

      {/* ── Resume content ── */}
      <div className="relative z-10 bg-background">
        <Navigation />
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-12 lg:py-24">
          <main className="pt-12 lg:pt-16">
            <ScrollFadeSection>
              <About />
            </ScrollFadeSection>
            <ScrollFadeSection>
              <Experience />
            </ScrollFadeSection>
            <ScrollFadeSection>
              <Projects />
            </ScrollFadeSection>
            <ScrollFadeSection>
              <Certifications />
            </ScrollFadeSection>
            <ScrollFadeSection>
              <Skills />
            </ScrollFadeSection>
            <ScrollFadeSection>
              <Contact />
            </ScrollFadeSection>
            <ScrollFadeSection>
              <UtilityRow />
            </ScrollFadeSection>
          </main>
        </div>
      </div>
    </div>
  )
}
