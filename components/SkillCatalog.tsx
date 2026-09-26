"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Category, Skill } from "@/lib/skills";
import { skillHref, skillSource } from "@/lib/skills";

export function SkillCatalog({
  skills,
  categories,
  initialCategory = "All",
}: {
  skills: Skill[];
  categories: Category[];
  initialCategory?: Category | "All";
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "All">(initialCategory);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return skills.filter((skill) => {
      if (category !== "All" && skill.category !== category) return false;
      if (!needle) return true;
      const haystack = `${skill.title} ${skill.slug} ${skill.summary} ${skill.category}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [skills, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <label className="block">
          <span className="kicker">Search</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Try copy, SEO, pricing, email…"
            className="mt-2 w-full rounded-xl border border-line bg-paper-2 px-4 py-3 text-ink placeholder:text-faint"
          />
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {(["All", ...categories] as const).map((item) => {
            const active = item === category;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-3 py-1 text-sm ${
                  active
                    ? "border-sienna bg-sienna-soft text-ink"
                    : "border-line bg-paper-2 text-muted hover:text-ink"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <p className="text-sm text-faint">
          {filtered.length} of {skills.length} skills
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-xl border border-dashed border-line bg-paper-2 px-5 py-8 text-muted">
          Nothing matches that search. Try a job to be done, like “cold email” or “schema”.
        </p>
      ) : (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {filtered.map((skill) => (
            <li key={skill.slug}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-paper-2 p-5 shadow-[var(--shadow)]">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-semibold tracking-wide text-sienna uppercase">
                    {skill.category}
                  </p>
                  {skill.foundation ? (
                    <span className="rounded-full bg-forest-soft px-2 py-0.5 text-xs text-forest">
                      Personal brand
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-2 font-serif text-2xl tracking-tight">
                  <Link href={skillHref(skill.slug)} className="hover:text-sienna">
                    {skill.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-muted">{skill.summary}</p>
                <p className="mt-4 font-mono text-xs text-faint">{skill.slug}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  <Link className="quiet" href={skillHref(skill.slug)}>
                    How to use it
                  </Link>
                  <a className="quiet" href={skillSource(skill.slug)}>
                    Upstream folder
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
