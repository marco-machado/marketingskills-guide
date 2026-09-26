import Link from "next/link";
import { categories, skills } from "@/lib/skills";
import { site } from "@/lib/site";

const steps = [
  {
    n: "01",
    title: "Install the markdown",
    body: "Skills are files, not a plugin you have to learn. A CLI copies them into the folder your agent already reads.",
    href: "/install",
  },
  {
    n: "02",
    title: "Write the foundation",
    body: "product-marketing builds .agents/product-marketing.md. Later skills read that file instead of interviewing you from scratch.",
    href: "/foundation",
  },
  {
    n: "03",
    title: "Ask for the job",
    body: "Describe the work in plain language, or name the skill. The description in each file tells the agent when it applies.",
    href: "/how-to-use",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="grid items-end gap-10 border-b border-line pb-12 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="kicker">Agent Skills · 50 workflows · MIT</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight text-balance md:text-6xl">
            Teach your coding agent how to market.
          </h1>
          <p className="prose-measure mt-5 text-lg text-muted">
            Marketing Skills is an open-source pack by{" "}
            <a className="quiet" href={site.author}>
              {site.authorName}
            </a>
            . Each skill is a markdown workflow for a real marketing job — copy, SEO, ads,
            lifecycle, pricing — written for agents that follow the{" "}
            <a className="quiet" href={site.spec}>
              Agent Skills spec
            </a>
            .
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/install"
              className="rounded-full bg-ink px-5 py-2.5 text-paper hover:bg-forest"
            >
              Install the pack
            </Link>
            <Link
              href="/skills"
              className="rounded-full border border-line bg-paper-2 px-5 py-2.5 text-ink hover:border-sienna"
            >
              Browse {skills.length} skills
            </Link>
          </div>
        </div>
        <aside className="rounded-2xl border border-line bg-paper-2 p-5 shadow-[var(--shadow)]">
          <p className="kicker">Who this is for</p>
          <ul className="mt-3 space-y-3 text-muted">
            <li>Founders who already live in Cursor, Claude Code, Codex, or Windsurf.</li>
            <li>Technical marketers who want a repeatable brief, not a one-off chat.</li>
            <li>Anyone new to agents who wants the install path written out.</li>
          </ul>
          <p className="mt-4 text-sm text-faint">
            New to the terminal? Corey&apos;s companion is{" "}
            <a className="quiet" href={site.codingForMarketers}>
              Coding for Marketers
            </a>
            .
          </p>
        </aside>
      </section>

      <section className="grid gap-6 py-12 md:grid-cols-3">
        {steps.map((step) => (
          <Link
            key={step.n}
            href={step.href}
            className="rounded-2xl border border-line bg-paper-2 p-5 shadow-[var(--shadow)] hover:border-sienna"
          >
            <p className="font-serif text-3xl text-sienna">{step.n}</p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight">{step.title}</h2>
            <p className="mt-2 text-muted">{step.body}</p>
          </Link>
        ))}
      </section>

      <section className="grid gap-10 border-t border-line py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="kicker">How a skill works</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight">A file the agent can recognize.</h2>
          <p className="mt-4 text-muted">
            You add the pack to a project. When you ask for a marketing task, the agent matches
            your request to a skill&apos;s description, then follows that skill&apos;s workflow.
            You can also call a skill by name.
          </p>
        </div>
        <div className="space-y-3">
          {[
            ["You say", "Help me optimize this landing page for conversions"],
            ["The agent opens", "cro — page and form conversion"],
            ["It reads first", ".agents/product-marketing.md, if you have one"],
            ["You can also type", "/cro   /emails   /seo-audit"],
          ].map(([label, value]) => (
            <div key={label} className="grid gap-1 border-b border-line py-3 sm:grid-cols-[9rem_1fr]">
              <p className="text-sm font-semibold tracking-wide text-faint uppercase">{label}</p>
              <p className="font-mono text-sm text-ink">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker">The map</p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight">One foundation, then the job.</h2>
          </div>
          <Link href="/architecture" className="quiet">
            See how they reference each other
          </Link>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/skills?category=${encodeURIComponent(category)}`}
                className="inline-block rounded-full border border-line bg-paper-2 px-3 py-1 text-sm text-muted hover:border-sienna hover:text-ink"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-muted">
          Start with the personal-brand set — product marketing, content strategy, social,
          copywriting, and copy editing — then pull in SEO, conversion, ads, or sales skills as
          the work shows up.
        </p>
        <Link
          href="/foundation"
          className="mt-4 inline-block rounded-full border border-line bg-paper-2 px-4 py-2 text-sm hover:border-sienna"
        >
          Read the foundation deep-dive
        </Link>
      </section>

      <section className="rounded-2xl border border-line bg-forest-soft px-6 py-8 md:px-8">
        <p className="kicker">Credit</p>
        <p className="mt-3 max-w-3xl font-serif text-3xl leading-snug tracking-tight">
          Built and maintained by {site.authorName}. Free under the MIT license. This guide only
          teaches the pack.
        </p>
        <p className="mt-4 max-w-2xl text-muted">
          The canonical files live in{" "}
          <a className="quiet" href={site.upstream}>
            coreyhaines31/marketingskills
          </a>
          . For hands-on conversion work, Corey points people to{" "}
          <a className="quiet" href={site.conversionFactory}>
            Conversion Factory
          </a>
          .
        </p>
      </section>
    </div>
  );
}
