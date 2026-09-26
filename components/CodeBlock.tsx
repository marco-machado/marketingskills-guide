"use client";

import { useState } from "react";

export function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <figure className="my-4 overflow-hidden rounded-xl border border-line bg-paper-2 shadow-[var(--shadow)]">
      <figcaption className="flex items-center justify-between gap-3 border-b border-line px-3 py-2 text-xs tracking-wide text-faint">
        <span>{label ?? "Terminal"}</span>
        <button type="button" onClick={copy} className="text-muted hover:text-ink">
          {copied ? "Copied" : "Copy"}
        </button>
      </figcaption>
      <pre className="overflow-x-auto px-4 py-3 text-sm leading-relaxed text-ink">
        <code>{code}</code>
      </pre>
    </figure>
  );
}
