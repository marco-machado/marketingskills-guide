import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import { PageHeader } from "@/components/PageHeader";
import { skillHref } from "@/lib/skills";

export const metadata: Metadata = {
  title: "How to use",
  description: "A practical workflow for Marketing Skills: context first, then the skill that matches the job.",
};

const examples = [
  {
    title: "A landing page",
    skill: "copywriting",
    also: ["copy-editing", "cro"],
    prompt:
      "Write homepage copy for this product. One primary action: start a trial. Use the copywriting skill and our product marketing context.",
    then: "When a draft exists, ask for a copy-editing pass, then a cro review of the same page. Those are three skills, not one overloaded prompt.",
  },
  {
    title: "A social calendar",
    skill: "social",
    also: ["content-strategy"],
    prompt:
      "Using our product marketing context, build a two-week LinkedIn and X calendar with the social skill. Three pillars, mostly educational, one promotional post.",
    then: "If you do not yet know the pillars, run content-strategy first. Social is for the posts. Strategy is for what the posts are about.",
  },
  {
    title: "An SEO audit",
    skill: "seo-audit",
    also: ["schema", "ai-seo"],
    prompt:
      "Audit this site for SEO. Start with the seo-audit skill, then tell me whether schema or ai-seo should come next.",
    then: "Let the audit name the next skill. Structured data and AI-answer visibility are follow-on jobs, not a substitute for finding out whether the site is indexed.",
  },
];

export default function HowToUsePage() {
  return (
    <article>
      <PageHeader
        kicker="How to use"
        title="Context first. Then one job."
        lede="The pack works when the agent already knows who the product is for. Fill that in once. After that, name the skill that matches the task in front of you."
      />

      <ol className="space-y-6">
        {[
          {
            title: "Install into this project",
            body: (
              <>
                Run the CLI from the repo the agent is editing. Confirm the files exist under{" "}
                <span className="inline-code">.agents/skills/</span> or, for Claude Code,{" "}
                <span className="inline-code">.claude/skills/</span>. The{" "}
                <Link className="quiet" href="/install">
                  install page
                </Link>{" "}
                has the subset flag and the in-session Claude Code caveat.
              </>
            ),
          },
          {
            title: "Create the product marketing context",
            body: (
              <>
                Ask for the{" "}
                <Link className="quiet" href={skillHref("product-marketing")}>
                  product-marketing
                </Link>{" "}
                skill before copy, campaigns, or audits. Let it draft from the README and the
                site, then correct the draft. The file it writes is{" "}
                <span className="inline-code">.agents/product-marketing.md</span>.
              </>
            ),
          },
          {
            title: "Pick the skill that owns the artifact",
            body: (
              <>
                A landing page is copywriting. A content plan is content-strategy. A broken
                ranking is seo-audit. If you are unsure, describe the artifact you want and let
                the agent choose — then check the catalog if the choice feels off.
              </>
            ),
          },
          {
            title: "Hand off when the job changes",
            body: (
              <>
                Skills point at each other on purpose. Do not ask copywriting to also design the
                experiment and the email sequence in one breath. Finish one artifact, then name
                the next skill.
              </>
            ),
          },
        ].map((step, index) => (
          <li key={step.title} className="grid gap-3 border-b border-line pb-6 md:grid-cols-[4rem_1fr]">
            <p className="font-serif text-3xl text-sienna">0{index + 1}</p>
            <div>
              <h2 className="font-serif text-2xl tracking-tight">{step.title}</h2>
              <p className="mt-2 text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-12">
        <h2 className="font-serif text-3xl tracking-tight">The first prompt</h2>
        <CodeBlock
          label="Foundation"
          code={`Create my product marketing context. Draft it from this repo, then I'll correct what's wrong and fill the gaps.`}
        />
        <p className="text-muted">
          Prefer a conversation to a dump of every section. The skill is written to walk one
          section at a time if you start from scratch, and to show you a full draft if you let it
          read the codebase. Say which of those you want.
        </p>
      </section>

      <section className="mt-12 space-y-8">
        <h2 className="font-serif text-3xl tracking-tight">Three jobs, after the context exists</h2>
        {examples.map((example) => (
          <div key={example.title} className="rounded-2xl border border-line bg-paper-2 p-5 md:p-6">
            <p className="kicker">{example.title}</p>
            <p className="mt-2 text-muted">
              Open{" "}
              <Link className="quiet" href={skillHref(example.skill)}>
                {example.skill}
              </Link>
              . Often followed by{" "}
              {example.also.map((slug, index) => (
                <span key={slug}>
                  {index > 0 ? " and " : ""}
                  <Link className="quiet" href={skillHref(slug)}>
                    {slug}
                  </Link>
                </span>
              ))}
              .
            </p>
            <CodeBlock label="Prompt" code={example.prompt} />
            <p className="text-muted">{example.then}</p>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl tracking-tight">What you should see the agent do</h2>
        <ul className="mt-4 space-y-3 text-muted">
          <li>Read the context file before asking questions you already answered there.</li>
          <li>Ask only for the gap: the page&apos;s one action, the channel, the constraint.</li>
          <li>Produce the artifact the skill promises, not a generic marketing essay.</li>
          <li>Name a related skill when the next step is a different job.</li>
        </ul>
        <p className="mt-4 text-muted">
          If it skips the context, say so: “Read .agents/product-marketing.md and redo this using
          the copywriting skill.” You can also invoke skills directly with{" "}
          <span className="inline-code">/cro</span>, <span className="inline-code">/emails</span>,
          or <span className="inline-code">/seo-audit</span> in agents that support that.
        </p>
        <p className="mt-6">
          <Link
            href="/foundation"
            className="rounded-full bg-ink px-5 py-2.5 text-paper hover:bg-forest"
          >
            Go deeper on the personal-brand set
          </Link>
        </p>
      </section>
    </article>
  );
}
