import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-xl text-ink">An independent guide</p>
          <p className="mt-2 max-w-xl text-muted">
            The skills are an MIT-licensed pack by{" "}
            <a className="quiet" href={site.author}>
              {site.authorName}
            </a>
            . This site teaches how to install and use them. It does not host or replace the
            skill files.
          </p>
        </div>
        <ul className="space-y-1 text-muted">
          <li>
            <a className="quiet" href={site.upstream}>
              coreyhaines31/marketingskills
            </a>
          </li>
          <li>
            <a className="quiet" href={site.spec}>
              Agent Skills spec
            </a>
          </li>
          <li>
            <a className="quiet" href={site.github}>
              This guide on GitHub
            </a>
          </li>
          <li>
            <a className="quiet" href={site.codingForMarketers}>
              Coding for Marketers
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
