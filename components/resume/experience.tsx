"use client"

import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/context/LanguageContext"
import { Section } from "./section"
import { TagList } from "./tag-list"

export function Experience() {
  const { t } = useLanguage()

  return (
    <Section id="experience" title={t.experience.title}>
      {/* A real sequence, so it reads as a timeline: the line and dots carry the order. */}
      <ol className="relative space-y-12 border-l border-border pl-7 print:space-y-4 print:border-0 print:pl-0">
        {t.experience.items.map((job, i) => (
          <li key={`${job.title}-${job.period}`} className="relative">
            <span
              aria-hidden="true"
              className={
                "absolute -left-[calc(1.75rem+5px)] top-1.5 size-[9px] rounded-full ring-4 ring-background print:hidden " +
                (i === 0 ? "bg-primary" : "bg-border")
              }
            />
            <p className="text-sm text-muted-foreground">{job.period}</p>
            <h3 className="mt-1 text-lg font-semibold leading-snug text-foreground">
              {job.title},{" "}
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-0.5 text-primary hover:underline underline-offset-4"
              >
                {job.company}
                <ArrowUpRight
                  className="size-4 translate-y-0.5 transition-transform group-hover:-translate-y-0 group-hover:translate-x-0.5 print:hidden"
                  aria-hidden="true"
                />
              </a>
            </h3>
            <p className="mt-3 max-w-[42rem] leading-relaxed text-muted-foreground print:max-w-none print:text-sm">
              {job.description}
            </p>
            <TagList label={t.experience.stackLabel} items={job.technologies} className="mt-4" />
          </li>
        ))}
      </ol>
    </Section>
  )
}
