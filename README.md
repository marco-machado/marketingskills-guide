# Marketing Skills Guide

A public teaching site for installing and using [Marketing Skills](https://github.com/coreyhaines31/marketingskills) with AI coding agents (Cursor, Claude Code, Codex, Windsurf, and anything that follows the [Agent Skills spec](https://agentskills.io)).

The skills are an MIT-licensed pack by [Corey Haines](https://corey.co). This repository is an independent guide. It does not contain the skill files and it is not the upstream project.

| | |
| --- | --- |
| Guide | https://marketingskills-guide.vercel.app |
| This repo | https://github.com/marco-machado/marketingskills-guide |
| Upstream skills | https://github.com/coreyhaines31/marketingskills |
| Spec | https://agentskills.io |

## What the site covers

- What the skills are and how an agent loads them
- Install paths: `npx skills add`, a subset install, the Claude Code marketplace, and clone or copy
- Why `product-marketing` is the foundation every other skill reads first
- A searchable catalog of all 50 skills, each linking to its upstream folder
- Worked workflows for a landing page, a social calendar, and an SEO audit
- A deep-dive on the personal-brand set: product marketing, content strategy, social, copywriting, and copy editing

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
```

The catalog data in `lib/skills.json` is teaching copy for this guide. When the upstream pack adds or renames a skill, update that file and the pages that describe the architecture. The canonical workflows stay in `skills/*/SKILL.md` upstream.
