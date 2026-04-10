"use client"

import { Header } from "@/components/resume/header"
import { About } from "@/components/resume/about"
import { Experience } from "@/components/resume/experience"
import { Projects } from "@/components/resume/projects"
import { Skills } from "@/components/resume/skills"
import { Certifications } from "@/components/resume/certifications"
import { Contact } from "@/components/resume/contact"
import { Navigation } from "@/components/resume/navigation"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-24 lg:px-12">
        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* Left Column - Sticky Header & Navigation */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <Header />
            <Navigation />
          </header>

          {/* Right Column - Main Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  )
}
