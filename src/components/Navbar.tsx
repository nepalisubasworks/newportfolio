"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { FileText, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ResumeModal from "./ResumeModal";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-neutral-800/80 bg-neutral-950/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-2.5">
            <a
              href="#"
              className="text-base font-bold tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              {profile.name}
            </a>
            <span className="hidden sm:inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
              Next.js Dev
            </span>
          </div>

          {/* Navigation links - Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <ThemeToggle />
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-700/80 bg-neutral-900/60 px-3 py-1.5 text-xs font-medium text-neutral-200 transition-colors hover:border-emerald-500/60 hover:text-emerald-400 whitespace-nowrap"
            >
              <FileText className="h-3.5 w-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-neutral-950 transition-colors hover:bg-emerald-400 whitespace-nowrap"
            >
              <Mail className="h-3 w-3" />
              <span>Contact</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-1.5 text-neutral-400 hover:text-white md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-b border-neutral-800 bg-neutral-950 px-6 py-4 md:hidden"
            >
              <div className="flex flex-col gap-3 text-sm font-medium text-neutral-300">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-1 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
