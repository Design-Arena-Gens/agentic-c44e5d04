"use client";

import { useMemo, useState } from "react";

type ShotTemplate = {
  id: string;
  label: string;
  description: string;
  shots: { name: string; priority: "essential" | "nice-to-have"; direction: string }[];
};

const templates: ShotTemplate[] = [
  {
    id: "tutorial",
    label: "Tutorial / How-To",
    description: "Great for teaching a repeatable process or sharing quick tips.",
    shots: [
      { name: "Hook statement (close)", priority: "essential", direction: "Deliver the promise with animated captions and a confident smile." },
      { name: "Steps demo (medium)", priority: "essential", direction: "Show each step with overhead or POV angles; keep cuts tight." },
      { name: "Result hero shot (wide)", priority: "essential", direction: "Reveal the transformation with dramatic lighting or motion." },
      { name: "Detail cutaways (macro)", priority: "nice-to-have", direction: "Capture textures or tools to overlay as B-roll." },
      { name: "Engagement CTA", priority: "essential", direction: "Point to on-screen text with motion or align eye-line with camera." }
    ]
  },
  {
    id: "product",
    label: "Product Spotlight",
    description: "Perfect for ecommerce, launch announcements, and feature reveals.",
    shots: [
      { name: "Hero reveal (macro)", priority: "essential", direction: "Open with a light sweep or spin to plant intrigue." },
      { name: "Benefit montage (medium)", priority: "essential", direction: "Stack 2-3 quick shots showing product in action." },
      { name: "Social proof overlay", priority: "nice-to-have", direction: "Layer screenshots or headlines in a split-screen layout." },
      { name: "Narrated close-up", priority: "essential", direction: "Highlight the main feature while narrating usefulness." },
      { name: "CTA bumper (graphic)", priority: "essential", direction: "End with bold typography and link icon pointing to the offer." }
    ]
  },
  {
    id: "story",
    label: "Founder / Origin Story",
    description: "Use this when building a human connection with your audience.",
    shots: [
      { name: "Relatable opener", priority: "essential", direction: "Start with a moment of tension or challenge that mirrors the audience." },
      { name: "Behind-the-scenes (handheld)", priority: "nice-to-have", direction: "Capture candid footage that feels unpolished and real." },
      { name: "Turning point (talking head)", priority: "essential", direction: "Speak directly to camera; punch in for emphasis on key lines." },
      { name: "Proof montage", priority: "essential", direction: "Layer stats, user clips, or milestones as high-energy B-roll." },
      { name: "Future vision CTA", priority: "essential", direction: "Invite the viewer to join, subscribe, or take the next step." }
    ]
  }
];

const priorityStyles: Record<"essential" | "nice-to-have", string> = {
  essential: "border-primary/50 bg-primary/10 text-primary-light",
  "nice-to-have": "border-slate-700 bg-slate-900/70 text-slate-300"
};

export function ShotListBuilder() {
  const [templateId, setTemplateId] = useState(templates[0].id);
  const template = useMemo(
    () => templates.find((item) => item.id === templateId) ?? templates[0],
    [templateId]
  );

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
            Shot List Builder
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Dial in your coverage</h3>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            Select a format and follow the recommended shot hierarchy. Batch record B-roll while
            your main talent resets lines to keep production efficient.
          </p>
        </div>
        <label className="flex flex-col text-xs uppercase tracking-widest text-slate-500">
          Format
          <select
            value={templateId}
            onChange={(event) => setTemplateId(event.target.value)}
            className="mt-2 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white focus:border-primary focus:outline-none"
          >
            {templates.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-8 space-y-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
          <p className="text-sm font-semibold text-white">{template.label}</p>
          <p className="mt-2 text-xs text-slate-300">{template.description}</p>
        </div>
        <ul className="space-y-4">
          {template.shots.map((shot) => (
            <li
              key={shot.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">{shot.name}</p>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${priorityStyles[shot.priority]}`}
                >
                  {shot.priority === "essential" ? "Essential" : "Nice to have"}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-300">{shot.direction}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
