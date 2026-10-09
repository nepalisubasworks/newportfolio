"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningJourney from "@/components/LearningJourney";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      <Navbar />
      <main>
        {/* Hero renders immediately on mount - never waits for scroll */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Hero />
        </motion.div>

        {/* Scroll entry sections */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LearningJourney />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Projects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Timeline />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Contact />
        </motion.div>
      </main>

      <footer className="border-t border-neutral-800 bg-neutral-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start text-xs text-neutral-400">
            <p className="font-semibold text-white">
              {profile.name} · {profile.role}
            </p>
            <p className="mt-1">
              5th Semester BICTE · Tribhuvan University · Full-Stack Web Development
            </p>
          </div>

          <div className="flex items-center gap-5 text-xs text-neutral-400">
            <a
              href="#about"
              className="hover:text-emerald-400 transition-colors"
            >
              About
            </a>
            <a
              href="#journey"
              className="hover:text-emerald-400 transition-colors"
            >
              Journey
            </a>
            <a
              href="#projects"
              className="hover:text-emerald-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-emerald-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-emerald-400 transition-colors"
            >
              Experience
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-neutral-800/60 pt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {profile.name}. Personal portfolio. Built with Next.js & Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}
