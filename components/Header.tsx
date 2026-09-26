import Link from "next/link";
import { nav, site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-30 focus:bg-paper-2 focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="group min-w-0">
          <span className="block font-serif text-lg leading-none tracking-tight text-ink">
            Marketing Skills
          </span>
          <span className="text-xs tracking-wide text-faint">Guide for coding agents</span>
        </Link>
        <nav className="hidden items-center gap-5 text-[0.95rem] md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-line bg-paper-2 px-3 py-1.5 text-sm text-muted">
              Menu
            </summary>
            <nav
              className="absolute right-0 mt-2 w-52 rounded-xl border border-line bg-paper-2 p-2 shadow-[var(--shadow)]"
              aria-label="Mobile"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-ink hover:bg-sienna-soft"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={site.upstream}
                className="block rounded-lg px-3 py-2 text-muted hover:bg-sienna-soft"
              >
                Upstream repo
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
