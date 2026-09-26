import Link from "next/link";
import { architectureColumns, skillHref } from "@/lib/skills";

export function ArchitectureMap() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-sienna/40 bg-sienna-soft px-5 py-5 text-center">
        <p className="kicker">Read first</p>
        <h3 className="mt-1 font-serif text-2xl">
          <Link href={skillHref("product-marketing")} className="hover:underline">
            product-marketing
          </Link>
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
          Every other skill checks this context before it asks you to repeat your product,
          audience, or positioning.
        </p>
      </div>
      <div className="hidden justify-center text-faint md:block" aria-hidden>
        ↓
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {architectureColumns.map((column) => (
          <section key={column.title} className="rounded-2xl border border-line bg-paper-2 p-4">
            <h3 className="font-serif text-lg">{column.title}</h3>
            <ul className="mt-3 space-y-1.5">
              {column.skills.map((skill) => (
                <li key={skill.slug}>
                  <Link href={skillHref(skill.slug)} className="text-sm text-muted hover:text-ink">
                    <span className="font-mono text-xs text-faint">{skill.slug}</span>
                    <span className="mt-0.5 block text-ink">{skill.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
