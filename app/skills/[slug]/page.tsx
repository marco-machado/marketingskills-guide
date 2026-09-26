import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/CodeBlock";
import { getSkill, relatedSkills, skills, skillHref, skillSource } from "@/lib/skills";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) return { title: "Skill" };
  return {
    title: skill.title,
    description: skill.summary,
  };
}

export default async function SkillPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) notFound();
  const related = relatedSkills(skill);
  const isFoundation = skill.slug === "product-marketing";

  return (
    <article>
      <p className="text-sm text-faint">
        <Link href="/skills" className="quiet">
          Catalog
        </Link>
        <span aria-hidden> / </span>
        <span className="font-mono">{skill.slug}</span>
      </p>
      <header className="mt-4 border-b border-line pb-8">
        <p className="kicker">{skill.category}</p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">{skill.title}</h1>
        <p className="prose-measure mt-4 text-lg text-muted">{skill.summary}</p>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <h2 className="font-serif text-2xl">Ask for it like this</h2>
          <p className="mt-2 text-muted">
            Once the skill is installed, describe the job. Agents that support slash commands can
            also open it as <span className="inline-code">/{skill.slug}</span>. The words below are
            a starting prompt, not a required script.
          </p>
          <CodeBlock label="Prompt" code={skill.prompt} />
          <h2 className="mt-8 font-serif text-2xl">What happens before the work</h2>
          {isFoundation ? (
            <p className="mt-2 text-muted">
              This skill is the exception. It creates the context file the others read. Run it on
              a new project before you ask for copy, a calendar, or an audit. It can draft from
              the repo you already have, then you correct it.
            </p>
          ) : (
            <p className="mt-2 text-muted">
              This skill is written to look for{" "}
              <span className="inline-code">.agents/product-marketing.md</span> first, with older{" "}
              <span className="inline-code">.claude/</span> paths as fallbacks. If that file is
              thin, fill{" "}
              <Link className="quiet" href={skillHref("product-marketing")}>
                product-marketing
              </Link>{" "}
              before you spend a session on this task. Otherwise the agent will ask you for the
              audience, the offer, and the voice again.
            </p>
          )}
          <p className="mt-4 text-muted">
            The step-by-step workflow — questions, frameworks, and output format — lives in the
            upstream file. This page does not reprint it.
          </p>
          <p className="mt-4">
            <a className="quiet" href={skillSource(skill.slug)}>
              Open skills/{skill.slug}/SKILL.md
            </a>
          </p>
        </div>
        <aside className="h-fit rounded-2xl border border-line bg-paper-2 p-5">
          <p className="kicker">Related</p>
          <ul className="mt-3 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={skillHref(item.slug)} className="font-medium hover:text-sienna">
                  {item.title}
                </Link>
                <p className="text-sm text-muted">{item.summary}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-faint">
            Pack by{" "}
            <a className="quiet" href={site.author}>
              {site.authorName}
            </a>
            . MIT license.
          </p>
        </aside>
      </div>
    </article>
  );
}
