"use client"

import { BookOpen, ExternalLink, Github } from "lucide-react"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useLanguage } from "@/lib/context/LanguageContext"
import type { Project } from "@/lib/content/types"
import { ProjectPreview } from "./project-preview"
import { Section } from "./section"
import { TagList } from "./tag-list"

const linkClass =
  "inline-flex h-9 items-center gap-1.5 rounded-lg border border-border px-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"

function CaseStudy({ project }: { project: Project }) {
  const { t } = useLanguage()
  const labels = t.projects.caseStudyLabels
  const steps = [
    { label: labels.problem, text: project.caseStudy.problem },
    { label: labels.action, text: project.caseStudy.action },
    { label: labels.result, text: project.caseStudy.result },
  ]

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button type="button" className={linkClass}>
          <BookOpen className="size-4" aria-hidden="true" />
          {t.projects.caseStudy}
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="mx-auto w-full max-w-2xl px-6 pb-10 text-left">
          <DrawerTitle className="text-xl">{project.title}</DrawerTitle>
          <DrawerDescription className="sr-only">{t.projects.caseStudy}</DrawerDescription>
          {/* Problem, action, result is a real sequence, so it is shown as one. */}
          <ol className="mt-6 space-y-5">
            {steps.map((step, i) => (
              <li key={step.label} className="grid grid-cols-[1.75rem_1fr] gap-x-3">
                <span className="grid size-7 place-items-center rounded-full bg-secondary text-sm font-semibold text-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{step.label}</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <Section id="projects" title={t.projects.title}>
      <ul className="space-y-14 print:space-y-4">
        {t.projects.items.map((project) => (
          <li key={project.title}>
            <article className="grid gap-6 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-8">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-secondary ring-1 ring-border print:hidden">
                <ProjectPreview preview={project.preview} label={t.projects.previewAlt(project.title)} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 max-w-[38rem] leading-relaxed text-muted-foreground print:max-w-none print:text-sm">
                  {project.description}
                </p>
                <TagList label={t.experience.stackLabel} items={project.technologies} className="mt-4" />

                <div className="mt-5 flex flex-wrap gap-2 print:hidden">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      <ExternalLink className="size-4" aria-hidden="true" />
                      {t.projects.demo}
                    </a>
                  )}
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    <Github className="size-4" aria-hidden="true" />
                    {t.projects.code}
                  </a>
                  <CaseStudy project={project} />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
