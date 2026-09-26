import data from "./skills.json";
import { upstreamSkillUrl } from "./site";

export type Category = (typeof data.categories)[number];

export type Skill = {
  slug: string;
  title: string;
  category: Category;
  foundation?: boolean;
  summary: string;
  prompt: string;
  related: string[];
};

export const categories = data.categories;
export const skills = data.skills as Skill[];

export const architectureColumns = data.columns.map((column) => ({
  title: column.title,
  skills: column.slugs.map((slug) => {
    const skill = getSkill(slug);
    if (!skill) throw new Error(`Unknown skill in architecture map: ${slug}`);
    return skill;
  }),
}));

export function getSkill(slug: string) {
  return skills.find((skill) => skill.slug === slug);
}

export function relatedSkills(skill: Skill) {
  return skill.related
    .map((slug) => getSkill(slug))
    .filter((item): item is Skill => Boolean(item));
}

export function skillHref(slug: string) {
  return `/skills/${slug}`;
}

export function skillSource(slug: string) {
  return upstreamSkillUrl(slug);
}

export const foundationSkills = [
  "product-marketing",
  "content-strategy",
  "social",
  "copywriting",
  "copy-editing",
].map((slug) => {
  const skill = getSkill(slug);
  if (!skill) throw new Error(slug);
  return skill;
});
