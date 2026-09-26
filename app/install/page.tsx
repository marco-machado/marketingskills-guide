import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Install",
  description: "Install Marketing Skills into Cursor, Claude Code, Codex, Windsurf, and other agents.",
};

const renames = [
  ["ab-test-setup", "ab-testing"],
  ["analytics-tracking", "analytics"],
  ["aso-audit", "aso"],
  ["competitor-alternatives", "competitors"],
  ["email-sequence", "emails"],
  ["form-cro", "merged into cro"],
  ["free-tool-strategy", "free-tools"],
  ["launch-strategy", "launch"],
  ["onboarding-cro", "onboarding"],
  ["page-cro", "cro"],
  ["paid-ads", "ads"],
  ["paywall-upgrade-cro", "paywalls"],
  ["popup-cro", "popups"],
  ["pricing-strategy", "pricing"],
  ["product-marketing-context", "product-marketing"],
  ["referral-program", "referrals"],
  ["schema-markup", "schema"],
  ["signup-flow-cro", "signup"],
  ["social-content", "social"],
];

export default function InstallPage() {
  return (
    <article>
      <PageHeader
        kicker="Install"
        title="Put the skills where your agent can read them."
        lede="The recommended path is one command. It detects Cursor, Claude Code, Codex, Windsurf, and other agents that follow the Agent Skills spec, then asks where to install."
      />

      <section>
        <h2 className="font-serif text-3xl tracking-tight">1. CLI install</h2>
        <p className="prose-measure mt-3 text-muted">
          Use{" "}
          <a className="quiet" href={site.skillsCli}>
            npx skills
          </a>{" "}
          from the project you want the agent to work in. This is the method the upstream README
          recommends.
        </p>
        <CodeBlock
          label="All skills"
          code={`npx skills add coreyhaines31/marketingskills`}
        />
        <p className="text-muted">
          Install a subset when you only want the personal-brand set, or one job:
        </p>
        <CodeBlock
          label="Subset"
          code={`npx skills add coreyhaines31/marketingskills --skill product-marketing copywriting social`}
        />
        <CodeBlock
          label="List what the repo ships"
          code={`npx skills add coreyhaines31/marketingskills --list`}
        />
        <div className="mt-4 rounded-2xl border border-line bg-paper-2 p-5">
          <p className="font-semibold">Where the files land</p>
          <ul className="mt-2 space-y-2 text-muted">
            <li>
              Claude Code reads <span className="inline-code">.claude/skills/</span>.
            </li>
            <li>
              Universal agents share <span className="inline-code">.agents/skills/</span>.
            </li>
          </ul>
          <p className="mt-3 text-muted">
            If you run the command from inside an agent session, the CLI is non-interactive and
            may only write <span className="inline-code">.agents/skills/</span>, which Claude Code
            does not read. Name the agent:
          </p>
          <CodeBlock
            label="Inside Claude Code"
            code={`npx skills add coreyhaines31/marketingskills -a claude-code`}
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl tracking-tight">2. Claude Code marketplace</h2>
        <p className="prose-measure mt-3 text-muted">
          Claude Code can install the pack as a plugin from its marketplace.
        </p>
        <CodeBlock
          label="Claude Code"
          code={`/plugin marketplace add coreyhaines31/marketingskills\n/plugin install marketing-skills`}
        />
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl tracking-tight">3. Clone and copy</h2>
        <p className="prose-measure mt-3 text-muted">
          Useful when you want to read the files first, or your environment cannot run the CLI.
        </p>
        <CodeBlock
          label="Copy into the shared skills folder"
          code={`git clone https://github.com/coreyhaines31/marketingskills.git\ncp -r marketingskills/skills/* .agents/skills/`}
        />
        <p className="text-muted">
          For Claude Code, copy into <span className="inline-code">.claude/skills/</span> instead.
          Keep <span className="inline-code">product-marketing</span> even if you only copy a few
          others — the rest of the pack expects it.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl tracking-tight">4. Other ways in</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-line bg-paper-2 p-5">
            <h3 className="font-serif text-xl">Submodule</h3>
            <p className="mt-2 text-sm text-muted">Pin the repo and update it with git.</p>
            <CodeBlock
              label="Submodule"
              code={`git submodule add https://github.com/coreyhaines31/marketingskills.git .agents/marketingskills`}
            />
            <p className="text-sm text-muted">
              Skills then live at{" "}
              <span className="inline-code">.agents/marketingskills/skills/</span>.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper-2 p-5">
            <h3 className="font-serif text-xl">Fork</h3>
            <p className="mt-2 text-sm text-muted">
              Fork the upstream repo, edit skills for your company, and clone your fork into
              projects. Send improvements you want everyone to have back as a pull request.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper-2 p-5">
            <h3 className="font-serif text-xl">SkillKit</h3>
            <p className="mt-2 text-sm text-muted">
              <a className="quiet" href={site.skillkit}>
                SkillKit
              </a>{" "}
              installs the same repo across several agents in one pass.
            </p>
            <CodeBlock
              label="SkillKit"
              code={`npx skillkit install coreyhaines31/marketingskills`}
            />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl tracking-tight">Agents this pack is written for</h2>
        <p className="prose-measure mt-3 text-muted">
          Anything that supports{" "}
          <a className="quiet" href={site.spec}>
            agentskills.io
          </a>{" "}
          can load these files. The upstream project calls out Claude Code, OpenAI Codex, Cursor,
          and Windsurf. The CLI asks which of your installed agents should receive a copy.
        </p>
        <p className="mt-3 text-muted">
          After install, continue with{" "}
          <Link className="quiet" href="/how-to-use">
            how to use the pack
          </Link>{" "}
          — the first real task is the product marketing context, not a landing page.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl tracking-tight">Upgrading from v1 names</h2>
        <p className="prose-measure mt-3 text-muted">
          v2 renamed 17 skills and folded page and form conversion into{" "}
          <span className="inline-code">cro</span>. A fresh install does not delete the old
          folders, so both names can sit side by side. From the directory where the skills were
          installed:
        </p>
        <CodeBlock
          label="Remove stale v1 folders"
          code={`rm -rf page-cro form-cro \\\n  ab-test-setup analytics-tracking aso-audit competitor-alternatives \\\n  email-sequence free-tool-strategy launch-strategy onboarding-cro \\\n  paid-ads paywall-upgrade-cro popup-cro pricing-strategy \\\n  product-marketing-context referral-program schema-markup \\\n  signup-flow-cro social-content`}
        />
        <p className="text-muted">
          The context file also moved. v2 reads{" "}
          <span className="inline-code">.agents/product-marketing.md</span>. Older setups used{" "}
          <span className="inline-code">.claude/product-marketing-context.md</span>. Skills still
          check the old path as a fallback.
        </p>
        <CodeBlock
          label="Move an existing context file"
          code={`mkdir -p .agents\nmv .claude/product-marketing.md .agents/product-marketing.md 2>/dev/null\nmv .claude/product-marketing-context.md .agents/product-marketing.md 2>/dev/null`}
        />
        <div className="mt-4 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="bg-paper-2 text-faint">
              <tr>
                <th className="px-4 py-2 font-medium">v1 folder</th>
                <th className="px-4 py-2 font-medium">v2 name</th>
              </tr>
            </thead>
            <tbody>
              {renames.map(([from, to]) => (
                <tr key={from} className="border-t border-line">
                  <td className="px-4 py-2 font-mono text-xs">{from}</td>
                  <td className="px-4 py-2 font-mono text-xs">{to}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
