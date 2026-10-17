import { cn } from "@/lib/utils"

export function TagList({ label, items, className }: { label: string; items: string[]; className?: string }) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md bg-secondary px-2 py-1 text-[13px] leading-none text-secondary-foreground print:bg-transparent print:px-0 print:pr-2 print:text-xs"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
