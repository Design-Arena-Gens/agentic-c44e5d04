"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const heroItems = [
  "Define a clear hook within the first 3 seconds.",
  "Keep each scene purpose-driven.",
  "Plan B-roll that reinforces the narration.",
  "Polish the edit with captions and bold typography."
];

export function Hero() {
  return (
    <header className="mb-16 flex flex-col gap-10 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/70 via-slate-900 to-slate-950 p-10 shadow-2xl shadow-primary/10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary-light">
            <span>Short-Form Production Toolkit</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Create compelling short videos with a production-ready playbook.
          </h1>
          <p className="text-lg text-slate-300">
            Step through pre-production, shooting, and editing with interactive planners,
            checklists, and pro tips. Built for marketers, creators, and educators aiming
            to deliver impactful stories in under 60 seconds.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#workflow"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
            >
              Build My Production Workflow
            </a>
            <Link
              href="#resources"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Browse Templates
            </Link>
          </div>
        </div>
        <div className="grid gap-4 text-sm text-slate-300 md:w-80">
          {heroItems.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs text-primary-light">
                {idx + 1}
              </span>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </header>
  );
}
