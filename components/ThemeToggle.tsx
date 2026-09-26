"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-full border border-line bg-paper-2 px-3 py-1.5 text-sm text-muted transition hover:text-ink"
      aria-pressed={dark}
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
