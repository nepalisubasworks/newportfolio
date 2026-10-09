"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { BookOpen, Shield, Code2, Sparkles, MapPin, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="border-b border-neutral-800/80 bg-neutral-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Portrait & Details */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-xl">
              <div className="relative aspect-square w-full max-w-xs mx-auto overflow-hidden rounded-2xl border-2 border-emerald-500/30 shadow-lg shadow-emerald-500/10">
                <Image
                  src="/profile.jpg"
                  alt={`${profile.name} portrait`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-neutral-800/80 pb-2">
                  <span className="text-neutral-400">Undergraduate Degree</span>
                  <span className="font-semibold text-white">5th Sem BICTE</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-neutral-800/80 pb-2">
                  <span className="text-neutral-400">University</span>
                  <span className="font-semibold text-white">Tribhuvan University</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-neutral-800/80 pb-2">
                  <span className="text-neutral-400">Current Role</span>
                  <span className="font-semibold text-emerald-400">Cybersecurity Intern</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-1">
                  <span className="text-neutral-400">Location</span>
                  <span className="font-semibold text-white flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-neutral-400" />
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>About Me</span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-balance">
              Student, Builder & Continuous Learner
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-300">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Development Foundations */}
            <div className="mt-8 space-y-4 border-t border-neutral-800/80 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Core Development Principles:
              </h3>

              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4 transition-colors hover:border-neutral-700">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <BookOpen className="h-4 w-4 text-emerald-400" />
                    <span>Strong Fundamentals</span>
                  </div>
                  <p className="mt-1.5 text-neutral-400 leading-relaxed">
                    Prioritizing semantic HTML, clean CSS layouts with Tailwind, and modern JavaScript (ES6+) principles.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4 transition-colors hover:border-neutral-700">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <Code2 className="h-4 w-4 text-emerald-400" />
                    <span>Next.js & React Architecture</span>
                  </div>
                  <p className="mt-1.5 text-neutral-400 leading-relaxed">
                    Structuring components cleanly, managing UI states with React hooks, and leveraging App Router capabilities.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4 transition-colors hover:border-neutral-700">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <Shield className="h-4 w-4 text-emerald-400" />
                    <span>Security Awareness</span>
                  </div>
                  <p className="mt-1.5 text-neutral-400 leading-relaxed">
                    Applying lessons from my cybersecurity internship to build safe inputs, proper auth flows, and sound validation.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4 transition-colors hover:border-neutral-700">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    <span>Hungry to Grow</span>
                  </div>
                  <p className="mt-1.5 text-neutral-400 leading-relaxed">
                    Passionate about learning new tools, taking constructive code feedback, and contributing productively to a dev team.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
