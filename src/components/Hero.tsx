"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import {
  ArrowRight,
  Mail,
  Check,
  Copy,
  FolderGit2,
  Globe,
  FileText,
  GraduationCap,
  Briefcase,
  Code2,
  MapPin
} from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-neutral-800/80 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900/50 py-16 sm:py-24">
        {/* Subtle background ambient blur */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left 7 cols: Bio & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span>Active Full-Stack Learner · Next.js & React</span>
              </div>

              {/* Headline */}
              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
                Building modern web apps from fundamentals up.
              </h1>

              {/* Role */}
              <p className="mt-3 text-base font-semibold text-emerald-400">
                Subas Nepali · BICTE Student & Cybersecurity Intern
              </p>

              {/* Concise Pitch */}
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300">
                I am a 5th-semester BICTE undergraduate at Tribhuvan University, Nepal, currently completing a 3-month cybersecurity internship. Encouraged by my supervisor to explore software engineering, I am building practical web applications using Next.js, React, TypeScript, and relational databases.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-neutral-950 shadow-sm transition-all hover:bg-emerald-400 hover:shadow-emerald-500/20"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2.5 text-xs font-medium text-neutral-200 transition-colors hover:border-emerald-500 hover:text-white"
                >
                  <FileText className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Resume</span>
                </button>

                {/* Email Copy Affordance */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-xs font-mono text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-neutral-400" />
                      <span className="text-[11px]">{profile.email}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-7 flex items-center gap-4 text-xs text-neutral-400">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-400"
                >
                  <FolderGit2 className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
                <span aria-hidden="true" className="text-neutral-700">·</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-400"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
                <span aria-hidden="true" className="text-neutral-700">·</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-400"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>

            {/* Right 5 cols: Profile Card with Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <div className="relative mx-auto max-w-md rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-2xl backdrop-blur transition-all duration-300 hover:border-neutral-700">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-emerald-500/40 shadow-md shadow-emerald-500/10">
                    <Image
                      src="/profile.jpg"
                      alt={profile.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                      priority
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">{profile.name}</h2>
                    <p className="flex items-center gap-1 text-xs text-neutral-400">
                      <MapPin className="h-3 w-3 text-neutral-500" />
                      {profile.location}
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                      <Code2 className="h-3 w-3 text-emerald-400" />
                      <span>Next.js & Full-Stack</span>
                    </div>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="mt-5 space-y-2.5 border-t border-neutral-800 pt-4 text-xs">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="h-3.5 w-3.5 text-neutral-500" />
                      <span>Academics:</span>
                    </span>
                    <span className="font-medium text-neutral-200">5th Sem BICTE · TU</span>
                  </div>

                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-neutral-500" />
                      <span>Internship:</span>
                    </span>
                    <span className="font-medium text-neutral-200">Cybersecurity Intern</span>
                  </div>

                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="h-3.5 w-3.5 text-neutral-500" />
                      <span>Core Stack:</span>
                    </span>
                    <span className="font-medium text-emerald-400">Next.js · React · MySQL</span>
                  </div>
                </div>

                {/* Learner summary card */}
                <div className="mt-5 rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-3 text-xs text-neutral-400">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-neutral-200">Objective: </span>
                    Seeking opportunities to apply my web development and security fundamentals to production software projects.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-12 grid grid-cols-2 gap-4 border-t border-neutral-800/80 pt-6 sm:grid-cols-4"
          >
            {profile.quickFacts.map((fact) => (
              <div key={fact.label} className="border-l border-neutral-800 pl-4">
                <p className="text-sm font-bold text-white">{fact.value}</p>
                <p className="mt-0.5 text-xs text-neutral-400">{fact.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
