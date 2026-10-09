"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, ProjectConcept } from "@/data/portfolio";
import {
  ExternalLink,
  FolderGit2,
  ArrowRight,
  X,
  CheckCircle2,
  Lightbulb,
  Code2
} from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectConcept | null>(null);

  return (
    <section id="projects" className="border-b border-neutral-800/80 bg-neutral-950 py-20">
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
            <Code2 className="h-3.5 w-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-balance">
            Projects & Practice Prototypes
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Hands-on web applications built to practice Next.js, React component architecture, and database integrations.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-200 hover:border-emerald-500/40 hover:bg-neutral-900"
            >
              <div>
                {/* Category Badge */}
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                    {project.category}
                  </span>
                  <span className="font-mono text-[11px] text-neutral-500">
                    {project.tech[0]}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="mt-4 text-lg font-bold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  {project.tagline}
                </p>

                {/* Concept Explored Box */}
                <div className="mt-4 rounded-lg border border-neutral-800/80 bg-neutral-950 p-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                    <Lightbulb className="h-3.5 w-3.5" />
                    <span>Focus Area:</span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-300 leading-relaxed">
                    {project.conceptExplored}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-neutral-800/80 px-2 py-0.5 text-[10px] font-mono text-neutral-300 border border-neutral-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Project Details</span>
                  <ArrowRight className="h-3 w-3" />
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                      title="GitHub Code"
                    >
                      <FolderGit2 className="h-4 w-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-emerald-400 transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
              className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
              aria-hidden="true"
            />
            <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-6 py-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span className="font-semibold text-white">{selectedProject.title}</span>
                  <span>·</span>
                  <span className="text-emerald-400">{selectedProject.category}</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="mt-1 text-xs text-neutral-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Core Concept Explored */}
                <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Core Technical Concept
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-neutral-300">
                    {selectedProject.conceptExplored}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                    Key Features & Implementations:
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {selectedProject.keyFeatures.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-neutral-700 bg-neutral-950 px-2.5 py-1 text-xs font-mono text-emerald-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 border-t border-neutral-800 pt-4 text-xs">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-2 font-semibold text-neutral-950 hover:bg-emerald-400 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800 px-3.5 py-2 font-medium text-white hover:border-neutral-600 transition-colors"
                    >
                      <FolderGit2 className="h-3.5 w-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
