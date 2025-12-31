"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionTitleProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function SectionTitle({ id, eyebrow, title, description, actions }: SectionTitleProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="space-y-3">
          {eyebrow ? (
            <span className="inline-flex rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
          {description ? <p className="max-w-2xl text-base text-slate-300">{description}</p> : null}
        </div>
        {actions}
      </div>
    </motion.section>
  );
}
