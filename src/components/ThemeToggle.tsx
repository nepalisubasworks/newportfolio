"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
  };
}

function getSnapshot() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

function getServerSnapshot() {
  return "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const isLight = document.documentElement.classList.contains("light");
    if (isLight) {
      document.documentElement.classList.remove("light");
      try {
        localStorage.setItem("theme", "dark");
      } catch {
        /* ignore */
      }
    } else {
      document.documentElement.classList.add("light");
      try {
        localStorage.setItem("theme", "light");
      } catch {
        /* ignore */
      }
    }
    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      title={theme === "dark" ? "Switch to High-Contrast Light Mode" : "Switch to Dark Mode"}
      aria-label={theme === "dark" ? "Switch to High-Contrast Light Mode" : "Switch to Dark Mode"}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-700/80 bg-neutral-900/60 text-neutral-200 transition-all hover:border-emerald-500/60 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-emerald-600 transition-transform duration-200 hover:-rotate-12" />
      ) : (
        <Sun className="h-4 w-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
      )}
    </button>
  );
}
