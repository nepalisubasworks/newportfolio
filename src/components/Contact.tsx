"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import {
  Mail,
  Copy,
  Check,
  FolderGit2,
  Globe,
  MapPin,
  ExternalLink,
  MessageCircle
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

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
    <section id="contact" className="bg-neutral-950 py-20 border-t border-neutral-800/80">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
            Get in Touch
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-neutral-400 text-balance">
            I am actively looking for software engineering internships and junior developer opportunities. Feel free to reach out directly!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-10 grid gap-4 sm:grid-cols-2"
        >
          {/* Email Direct Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 transition-all hover:border-emerald-500/40">
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Mail className="h-5 w-5" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800/80 px-2.5 py-1 text-xs font-medium text-neutral-200 transition-colors hover:border-emerald-500 hover:text-white"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 text-neutral-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Direct Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 block text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
              >
                {profile.email}
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-800/80">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-neutral-950 transition-colors hover:bg-emerald-400"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Compose Email</span>
              </a>
            </div>
          </div>

          {/* Social Profiles & Location Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 transition-all hover:border-neutral-700">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Profiles & Location
              </p>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950/60 p-3 text-xs text-neutral-200 hover:border-neutral-700 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <FolderGit2 className="h-4 w-4 text-neutral-400" />
                  <span className="font-medium">GitHub</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-500" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950/60 p-3 text-xs text-neutral-200 hover:border-neutral-700 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Globe className="h-4 w-4 text-emerald-400" />
                  <span className="font-medium">LinkedIn</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-500" />
              </a>

              <div className="flex items-center gap-2 rounded-xl border border-neutral-800/80 bg-neutral-950/40 p-3 text-xs text-neutral-400">
                <MapPin className="h-4 w-4 text-neutral-500 shrink-0" />
                <span>{profile.location} · Open to remote opportunities</span>
              </div>
            </div>

            <div className="mt-4 pt-3 text-center text-xs text-neutral-500">
              Response time: usually within 24 hours
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
