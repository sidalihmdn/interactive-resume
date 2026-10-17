"use client"

import { useLanguage } from "@/lib/context/LanguageContext"
import { Section } from "./section"
import { TagList } from "./tag-list"

export function Skills() {
  const { t } = useLanguage()

  return (
    <Section id="skills" title={t.skills.title}>
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 print:grid-cols-2 print:gap-y-3">
        {t.skills.groups.map((group) => (
          <div key={group.title}>
            <dt className="font-semibold text-foreground print:text-sm">{group.title}</dt>
            <dd className="mt-3 print:mt-1">
              <TagList label={group.title} items={group.skills} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
