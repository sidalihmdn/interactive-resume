import type { SectionId } from "@/lib/site"
import { cn } from "@/lib/utils"

/**
 * A resume section: heading in a narrow left column on wide screens,
 * content on the right. Stacks on mobile and in print.
 */
export function Section({
  id,
  title,
  children,
  className,
}: {
  id: SectionId
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "grid gap-6 border-t border-border py-14 md:grid-cols-[11rem_1fr] md:gap-10 md:py-20 print:block print:py-4",
        className,
      )}
    >
      <h2
        id={`${id}-title`}
        className="text-2xl font-semibold tracking-tight text-foreground md:text-xl md:leading-8 print:mb-2 print:text-base print:text-primary"
      >
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  )
}
