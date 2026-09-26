import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SkillCatalog } from "@/components/SkillCatalog";
import { categories, skills } from "@/lib/skills";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Skill catalog",
  description: "Searchable catalog of the 50 Marketing Skills, with links to the upstream folders.",
};

export default async function SkillsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initialCategory = categories.find((item) => item === category) ?? "All";

  return (
    <article>
      <PageHeader
        kicker="Catalog"
        title="Fifty skills. Pick the job, not the whole library."
        lede="Short descriptions on this site are a guide to when to open each skill. The canonical workflow is the SKILL.md in the upstream repo. Nothing here replaces those files."
      />
      <p className="mb-8 text-sm text-faint">
        Source:{" "}
        <a className="quiet" href={site.upstream}>
          github.com/coreyhaines31/marketingskills
        </a>
        . {skills.length} skills under <span className="inline-code">skills/*/SKILL.md</span>.
      </p>
      <SkillCatalog
        skills={skills}
        categories={[...categories]}
        initialCategory={initialCategory}
      />
    </article>
  );
}
