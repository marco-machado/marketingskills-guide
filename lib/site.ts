export const site = {
  name: "Marketing Skills Guide",
  description:
    "A teaching site for installing and using Corey Haines' Marketing Skills with AI coding agents.",
  github: "https://github.com/marco-machado/marketingskills-guide",
  upstream: "https://github.com/coreyhaines31/marketingskills",
  author: "https://corey.co",
  authorName: "Corey Haines",
  spec: "https://agentskills.io",
  skillsCli: "https://github.com/vercel-labs/skills",
  skillkit: "https://github.com/rohitg00/skillkit",
  codingForMarketers: "https://codingformarketers.com",
  conversionFactory: "https://conversionfactory.co",
} as const;

export const nav = [
  { href: "/install", label: "Install" },
  { href: "/architecture", label: "Architecture" },
  { href: "/skills", label: "Catalog" },
  { href: "/how-to-use", label: "How to use" },
  { href: "/foundation", label: "Foundation" },
] as const;

export function upstreamSkillUrl(slug: string) {
  return `${site.upstream}/tree/main/skills/${slug}`;
}
