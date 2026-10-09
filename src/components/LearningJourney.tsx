"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { BookOpen, Compass, Lightbulb, Shield, Code, Layers, CheckCircle2 } from "lucide-react";

export default function LearningJourney() {
  return (
    <section id="journey" className="border-b border-neutral-800/80 bg-neutral-900/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <Compass className="h-3.5 w-3.5" />
            <span>Learning Pathway</span>
          </div>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-balance">
            From Cybersecurity Intern to Web Development
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            How hands-on system training and supervisor mentorship inspired me to build software with Next.js.
          </p>
        </motion.div>

        {/* Narrative Box */}
        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-4 text-sm leading-relaxed text-neutral-300 lg:col-span-7">
              <p>
                As a 5th-semester BICTE student at Tribhuvan University, I wanted real-world exposure early on, which led me to a <span className="font-semibold text-white">3-month cybersecurity internship</span> at Inpro Academy.
              </p>
              <p>
                Working with Kali Linux, virtual environments, and network protocols gave me a solid appreciation for system security. Yet whenever we analyzed web applications, I found myself drawn to <span className="text-emerald-400 font-medium">how modern web architectures and user interfaces are constructed</span>.
              </p>

              {/* Supervisor Pivot Callout */}
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      The Turning Point
                    </h4>
                    <p className="mt-1 text-xs text-neutral-300 leading-relaxed">
                      My internship supervisor noticed my enthusiasm for UI structures and database schemas and gave me pivotal advice: <span className="italic text-white">&ldquo;You have a genuine knack for building software. Direct your effort into modern full-stack web engineering.&rdquo;</span>
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Since then, I have been actively coding daily — building responsive projects with Next.js, mastering React components, and connecting full-stack data flows.
              </p>
            </div>

            {/* Development Practice Card */}
            <div className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-950/60 p-6 lg:col-span-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
                  <Layers className="h-4 w-4 text-emerald-400" />
                  <span>Daily Development Practice</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-white">
                  Hands-on Project Building
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  Focused on building practical code, reviewing documentation, and understanding architecture:
                </p>
                <ul className="mt-4 space-y-2.5 text-xs text-neutral-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Writing reusable React components with clean state management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Exploring Next.js App Router, layout composition, and API routes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Modeling relational data with SQL, MySQL, and Prisma ORM.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Deploying applications cleanly to Vercel with version control via Git.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-lg border border-neutral-800 bg-neutral-900/80 p-3 text-xs text-neutral-400">
                <span className="font-semibold text-emerald-400">Goal:</span> Seeking an internship where I can contribute to real production web codebases.
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Journey Progression */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.journeySteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 transition-colors hover:border-neutral-700"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-emerald-400">0{idx + 1}</span>
                {idx === 0 && <BookOpen className="h-4 w-4 text-neutral-400" />}
                {idx === 1 && <Shield className="h-4 w-4 text-neutral-400" />}
                {idx === 2 && <Lightbulb className="h-4 w-4 text-emerald-400" />}
                {idx === 3 && <Code className="h-4 w-4 text-emerald-400" />}
              </div>
              <h3 className="mt-3 text-sm font-bold text-white">{step.title}</h3>
              <p className="text-xs font-medium text-emerald-400/90">{step.subtitle}</p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
