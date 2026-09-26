import type { Metadata } from "next";
import Link from "next/link";
import { ArchitectureMap } from "@/components/ArchitectureMap";
import { PageHeader } from "@/components/PageHeader";
import { skillHref } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Architecture",
  description: "How Marketing Skills share product context and cross-reference each other.",
};

const loops = [
  {
    title: "Pages that have to convert",
    body: "Copy, conversion review, and experiments cite each other. Write with copywriting, critique the page with cro, then turn a real disagreement into ab-testing.",
    slugs: ["copywriting", "cro", "ab-testing"],
  },
  {
    title: "Pipeline from first touch to sales",
    body: "Revenue operations, the sales artifacts, and outbound email assume the same lifecycle. A lead definition that lives in only one of them will drift.",
    slugs: ["revops", "sales-enablement", "cold-email"],
  },
  {
    title: "Being found",
    body: "A technical audit, structured data, and AI-answer visibility are one system. Fixing titles while the site is unindexed, or unmarked, wastes the pass.",
    slugs: ["seo-audit", "schema", "ai-seo"],
  },
  {
    title: "Research before words",
    body: "Customer research is an input, not a sibling campaign. It should change the context file, then copywriting, cro, and competitor pages.",
    slugs: ["customer-research", "copywriting", "cro", "competitors"],
  },
];

export default function ArchitecturePage() {
  return (
    <article>
      <PageHeader
        kicker="Architecture"
        title="One context file. Then a web of specialists."
        lede="The upstream pack is not fifty independent prompts. product-marketing is the foundation. Every other skill is told to read it before doing the job, and many skills name the next skill when the work changes shape."
      />

      <ArchitectureMap />

      <section className="mt-12">
        <h2 className="font-serif text-3xl tracking-tight">What “reads it first” means</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            [
              "The file",
              ".agents/product-marketing.md holds the product, the audience, the language customers use, the proof, and the voice.",
            ],
            [
              "The check",
              "A skill looks for that path, then older locations under .claude/, including the legacy product-marketing-context.md name.",
            ],
            [
              "The effect",
              "If the file exists, the agent should only ask for what this task still needs. If it does not, you will re-explain the company every time.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-line bg-paper-2 p-5">
              <h3 className="font-serif text-xl">{title}</h3>
              <p className="mt-2 text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl tracking-tight">Cross-references worth remembering</h2>
        <p className="prose-measure mt-3 text-muted">
          Each skill&apos;s own “Related skills” section is the full map. These four loops are the
          ones the upstream README draws explicitly. The arrows are working relationships, not a
          required order.
        </p>
        <ul className="mt-6 space-y-4">
          {loops.map((loop) => (
            <li key={loop.title} className="rounded-2xl border border-line bg-paper-2 p-5">
              <h3 className="font-serif text-2xl">{loop.title}</h3>
              <p className="mt-2 text-muted">{loop.body}</p>
              <p className="mt-3 flex flex-wrap gap-2">
                {loop.slugs.map((slug) => (
                  <Link
                    key={slug}
                    href={skillHref(slug)}
                    className="rounded-full bg-sienna-soft px-3 py-1 font-mono text-xs text-ink"
                  >
                    {slug}
                  </Link>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl border border-line bg-forest-soft p-6">
        <h2 className="font-serif text-2xl">The columns are a map, not a menu you must finish</h2>
        <p className="mt-2 max-w-3xl text-muted">
          Install everything, or install the foundation plus the column you are in this week. A
          landing page does not need the events skill. An SEO audit does not need a referral
          program. The catalog is there so you can pick.{" "}
          <Link className="quiet" href="/skills">
            Open the catalog
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
