import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import { PageHeader } from "@/components/PageHeader";
import { foundationSkills, skillHref, skillSource } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Foundation",
  description:
    "How to use product-marketing, content-strategy, social, copywriting, and copy-editing together.",
};

const contextSections = [
  ["Product overview", "One line, what it does, the category people search, the business model."],
  ["Target audience", "Who buys, the primary use case, and the jobs they hire the product for."],
  ["Personas", "For B2B, the user, champion, buyer, and technical influencer — skip if they are the same person."],
  ["Problems", "The pain, why current options fail, what it costs, and the emotional tension."],
  ["Competitors", "Direct, secondary, and indirect alternatives, and where each falls short."],
  ["Differentiation", "What you can do that they cannot, and why a customer would switch."],
  ["Objections", "The three you actually hear, plus who is not a customer."],
  ["Switching", "Push, pull, habit, and anxiety — why they move, and why they stay put."],
  ["Customer language", "Verbatim phrases to use, words to avoid, and a short glossary."],
  ["Brand voice", "Tone, style, and a few personality words the later skills can obey."],
  ["Proof", "Metrics, customers, and quotes you are willing to publish."],
  ["Goals", "The business goal and the single conversion action."],
];

export default function FoundationPage() {
  return (
    <article>
      <PageHeader
        kicker="Foundation"
        title="The personal-brand set, in the order you should touch it."
        lede="Five skills carry a solo founder or a small marketing team: product marketing, content strategy, social, copywriting, and copy editing. The other forty-five assume this layer exists."
      />

      <nav aria-label="On this page" className="mb-10 flex flex-wrap gap-2">
        {foundationSkills.map((skill) => (
          <a
            key={skill.slug}
            href={`#${skill.slug}`}
            className="rounded-full border border-line bg-paper-2 px-3 py-1 text-sm hover:border-sienna"
          >
            {skill.title}
          </a>
        ))}
      </nav>

      <section id="product-marketing" className="scroll-mt-24 border-t border-line pt-10">
        <p className="kicker">01 · Foundation</p>
        <h2 className="mt-2 font-serif text-4xl tracking-tight">Product marketing</h2>
        <p className="prose-measure mt-3 text-muted">
          This is the skill every other file is told to open first. It does not write your
          homepage. It writes{" "}
          <span className="inline-code">.agents/product-marketing.md</span>, a versioned brief the
          rest of the pack can trust.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-paper-2 p-5">
            <h3 className="font-serif text-xl">If the file is missing</h3>
            <p className="mt-2 text-muted">
              Ask for an auto-draft from the repo. The skill reads the README, landing copy, and
              package metadata, then you mark what is wrong. Starting from a blank interview is
              the slower path, and the skill will do that if you ask.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper-2 p-5">
            <h3 className="font-serif text-xl">If the file exists</h3>
            <p className="mt-2 text-muted">
              Have it summarize the current version and changelog, then update only the sections
              that changed. Real repositioning gets a new version line. A typo does not.
            </p>
          </div>
        </div>
        <h3 className="mt-8 font-serif text-2xl">What the document is trying to capture</h3>
        <p className="mt-2 text-sm text-faint">
          Section names follow the upstream skill. The questions below are the teaching version.
          The template and the save rules are in the{" "}
          <a className="quiet" href={skillSource("product-marketing")}>
            product-marketing folder
          </a>
          .
        </p>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {contextSections.map(([title, body], index) => (
            <li key={title} className="rounded-xl border border-line bg-paper-2 p-4">
              <p className="text-xs font-semibold tracking-wide text-sienna">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 font-medium">{title}</p>
              <p className="text-sm text-muted">{body}</p>
            </li>
          ))}
        </ol>
        <CodeBlock
          label="Prompt"
          code={`Create my product marketing context. Draft it from this repo, then I'll correct what's wrong. Capture customer language verbatim, and save it to .agents/product-marketing.md.`}
        />
      </section>

      <section id="content-strategy" className="scroll-mt-24 mt-14 border-t border-line pt-10">
        <p className="kicker">02 · Strategy</p>
        <h2 className="mt-2 font-serif text-4xl tracking-tight">Content strategy</h2>
        <p className="prose-measure mt-3 text-muted">
          Open this when you do not know what to make. It plans pillars, clusters, and a priority
          list. It is the wrong skill for “write this blog post” — that is copywriting.
        </p>
        <ul className="mt-5 space-y-3 text-muted">
          <li>
            <span className="text-ink">Searchable or shareable.</span> Searchable content answers
            a query someone already has. Shareable content gives people a reason to pass an idea
            on. The skill wants each piece to be one of those, and treats search as the base.
          </li>
          <li>
            <span className="text-ink">Pillars before posts.</span> A few themes that match the
            audience in the context file, then topics under them. Random ideas do not compound.
          </li>
          <li>
            <span className="text-ink">Score before you commit a quarter.</span> The skill weighs
            customer impact, fit, search potential, and the effort you actually have.
          </li>
        </ul>
        <p className="mt-4 text-muted">
          It should read the context file and only ask what is missing: the goal of the content,
          what you can produce, and where competitors already publish.
        </p>
        <CodeBlock
          label="Prompt"
          code={`Plan a content strategy from our product marketing context. I can publish one strong piece a week. Give me pillars, the next five topics, and which are searchable versus shareable.`}
        />
        <p>
          <a className="quiet" href={skillSource("content-strategy")}>
            Upstream content-strategy skill
          </a>
        </p>
      </section>

      <section id="social" className="scroll-mt-24 mt-14 border-t border-line pt-10">
        <p className="kicker">03 · Distribution</p>
        <h2 className="mt-2 font-serif text-4xl tracking-tight">Social</h2>
        <p className="prose-measure mt-3 text-muted">
          Use social once you know the point of view. It covers LinkedIn, X, Instagram, TikTok,
          and Facebook: calendars, hooks, carousels, repurposing, and short-form video. Paid
          creative is a different skill.
        </p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="bg-paper-2 text-faint">
              <tr>
                <th className="px-4 py-2 font-medium">Platform</th>
                <th className="px-4 py-2 font-medium">The skill treats it as</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              {[
                ["LinkedIn", "B2B and point of view. Carousels and stories, a few times a week."],
                ["X", "Short takes and threads, more often, for people who already care."],
                ["Instagram", "Visual proof. Reels and carousels, plus stories."],
                ["TikTok", "Short video for reach. The first seconds have to earn the rest."],
                ["Facebook", "Communities and local businesses more than feed novelty."],
              ].map(([platform, note]) => (
                <tr key={platform} className="border-t border-line">
                  <td className="px-4 py-2 text-ink">{platform}</td>
                  <td className="px-4 py-2">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-muted">
          A practical calendar splits attention across a few pillars and keeps promotion rare. The
          skill&apos;s founder example is roughly industry insight, behind the scenes, teaching,
          personal, and a thin slice of product. Steal the shape, not the percentages, if your
          proof is elsewhere.
        </p>
        <p className="mt-3 text-muted">
          Hooks are the first line. The skill groups them as curiosity, story, value, and
          contrarian. Ask it to pick one hook type per post so a week does not sound like one
          trick repeated.
        </p>
        <CodeBlock
          label="Prompt"
          code={`Build a two-week LinkedIn and X calendar from our product marketing context. Pillars: teaching, a build-in-public note, and one offer. Write the hooks, not just the topics.`}
        />
        <p>
          <a className="quiet" href={skillSource("social")}>
            Upstream social skill
          </a>
        </p>
      </section>

      <section id="copywriting" className="scroll-mt-24 mt-14 border-t border-line pt-10">
        <p className="kicker">04 · The page</p>
        <h2 className="mt-2 font-serif text-4xl tracking-tight">Copywriting</h2>
        <p className="prose-measure mt-3 text-muted">
          This is the skill for homepage, landing, pricing, feature, about, and product pages.
          Email, popups, and the offer underneath the words have their own skills. Editing a page
          you already like is copy-editing.
        </p>
        <h3 className="mt-6 font-serif text-2xl">Give it four facts if the context file lacks them</h3>
        <ol className="mt-3 grid gap-3 sm:grid-cols-2">
          {[
            ["Page purpose", "What kind of page, and the one action."],
            ["Audience", "Who arrives, what they are trying to do, what they distrust."],
            ["Offer", "What is being sold, what is different, what proof you can show."],
            ["Context", "Where the visit came from, and what they already believe."],
          ].map(([title, body]) => (
            <li key={title} className="rounded-xl border border-line bg-paper-2 p-4">
              <p className="font-medium">{title}</p>
              <p className="text-sm text-muted">{body}</p>
            </li>
          ))}
        </ol>
        <h3 className="mt-6 font-serif text-2xl">Rules the skill will enforce</h3>
        <ul className="mt-3 space-y-2 text-muted">
          <li>Clarity before a clever line.</li>
          <li>Benefits before a feature list, and a specific number before a vague promise.</li>
          <li>Customer language from the context file, not the company&apos;s internal nickname.</li>
          <li>One idea in each section, with the value above the fold.</li>
        </ul>
        <p className="mt-4 text-muted">
          Ask for the page, a few annotations on why a line exists, and an alternate headline.
          Then stop. The next pass is a different skill.
        </p>
        <CodeBlock
          label="Prompt"
          code={`Write the homepage with the copywriting skill. Primary action: start a trial. Traffic is mostly from a founder audience that already feels the pain. Give me the page, two headline alternatives, and notes on what you refused to say.`}
        />
        <p>
          <a className="quiet" href={skillSource("copywriting")}>
            Upstream copywriting skill
          </a>
        </p>
      </section>

      <section id="copy-editing" className="scroll-mt-24 mt-14 border-t border-line pt-10">
        <p className="kicker">05 · The edit</p>
        <h2 className="mt-2 font-serif text-4xl tracking-tight">Copy editing</h2>
        <p className="prose-measure mt-3 text-muted">
          Use this when the page exists and the message should stay. The skill&apos;s method is
          seven sweeps. Each sweep looks for one failure, then checks that the earlier sweeps
          still hold. It also covers refreshing a page that has gone out of date.
        </p>
        <ol className="mt-5 space-y-2">
          {[
            ["Clarity", "Can a new reader tell what you mean?"],
            ["Voice and tone", "Does it sound like one brand the whole way down?"],
            ["So what", "Does every claim answer why the reader should care?"],
            ["Prove it", "Is the claim backed by something you can show?"],
            ["Specificity", "Did a vague verb survive where a number or noun belongs?"],
            ["Heightened emotion", "Is there a human stake, without turning the page into a speech?"],
            ["Zero risk", "What fear is still in the way of the action, and did you answer it?"],
          ].map(([name, body], index) => (
            <li key={name} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-3">
              <span className="font-serif text-xl text-sienna">{index + 1}</span>
              <p>
                <span className="font-medium">{name}.</span> <span className="text-muted">{body}</span>
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-muted">
          Paste the draft, or point at the file. Ask the agent to keep the offer intact and to
          show what each sweep changed. The full checks live in the{" "}
          <a className="quiet" href={skillSource("copy-editing")}>
            copy-editing skill
          </a>
          .
        </p>
        <CodeBlock
          label="Prompt"
          code={`Edit the homepage draft with the copy-editing skill. Do not change the offer. Walk the seven sweeps, then give me the revised page.`}
        />
      </section>

      <section className="mt-14 rounded-2xl border border-line bg-sienna-soft p-6">
        <h2 className="font-serif text-3xl tracking-tight">A week that uses all five</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted">
          <li>Monday: product-marketing, until the context file is something you would sign.</li>
          <li>Tuesday: content-strategy, pillars and the next five pieces.</li>
          <li>Wednesday: copywriting on the one page those pieces should point at.</li>
          <li>Thursday: copy-editing on that page.</li>
          <li>Friday: social, a two-week calendar that repeats the page&apos;s point of view.</li>
        </ol>
        <p className="mt-4 text-sm">
          {foundationSkills.map((skill) => (
            <Link key={skill.slug} href={skillHref(skill.slug)} className="mr-3 quiet">
              {skill.slug}
            </Link>
          ))}
        </p>
      </section>
    </article>
  );
}
