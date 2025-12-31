"use client";

import { motion } from "framer-motion";

type Phase = {
  title: string;
  duration: string;
  focus: string;
  tasks: { label: string; tip: string }[];
};

const phases: Phase[] = [
  {
    title: "Pre-Production Blueprint",
    duration: "30-45 min",
    focus: "Clarify the narrative, audience, and assets before you hit record.",
    tasks: [
      { label: "Pinpoint the goal", tip: "What action should the viewer take within 10 seconds of finishing?" },
      { label: "Write a punchy hook", tip: "Lead with conflict, curiosity, or a bold promise." },
      { label: "Storyboard 4-6 beats", tip: "Each beat should earn its screen time with a clear outcome." },
      { label: "Prep shooting space", tip: "Lock in lighting, audio, and background before talent arrives." }
    ]
  },
  {
    title: "Production Sprint",
    duration: "20-40 min",
    focus: "Capture primary narration and supporting visuals with efficiency.",
    tasks: [
      { label: "Record A-roll takes", tip: "Capture at least 3 energy levels to give editing flexibility." },
      { label: "Collect B-roll", tip: "Shoot close, medium, and wide angles for each beat." },
      { label: "Grab cutaway audio", tip: "Record room tone and wild lines for smoother edits." },
      { label: "Review footage on set", tip: "Confirm focus and exposure; reshoot weak coverage immediately." }
    ]
  },
  {
    title: "Post-Production Polish",
    duration: "45-90 min",
    focus: "Cut fast, layer captions, and reinforce the message with motion and sound.",
    tasks: [
      { label: "Select the tightest takes", tip: "Trim silence ruthlessly—pace matters more than transitions." },
      { label: "Design captions and titles", tip: "Use on-brand colors and contrast for mobile readability." },
      { label: "Add punchy sound design", tip: "Accent key beats with risers, hits, and swells." },
      { label: "Prep export variations", tip: "Deliver 9:16, 1:1, and 16:9 cuts with tailored CTA slides." }
    ]
  }
];

export function PhaseRoadmap() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {phases.map((phase, index) => (
        <motion.article
          key={phase.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          className="group flex flex-col gap-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/30 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-primary/20"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Phase {index + 1}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">{phase.title}</h3>
            <p className="mt-2 text-sm text-primary-light">{phase.duration}</p>
            <p className="mt-3 text-sm text-slate-300">{phase.focus}</p>
          </div>
          <ul className="space-y-4">
            {phase.tasks.map((task) => (
              <li key={task.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-sm font-semibold text-white">{task.label}</p>
                <p className="mt-1 text-xs text-slate-400">{task.tip}</p>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
