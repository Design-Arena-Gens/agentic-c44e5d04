"use client";

import { FormEvent, useState } from "react";

const tones = ["Energetic", "Inspirational", "Educational", "Humorous"] as const;

const hooks = [
  {
    tone: "Energetic",
    template: (topic: string, audience: string) =>
      `Stop scrolling! ${audience ? `${audience}, ` : ""}here's how to ${topic} in 30 seconds flat.`
  },
  {
    tone: "Inspirational",
    template: (topic: string, audience: string) =>
      `I used to think ${topic} was impossible${audience ? ` for ${audience}` : ""}. Here's what changed everything.`
  },
  {
    tone: "Educational",
    template: (topic: string, audience: string) =>
      `Three science-backed steps to ${topic}${audience ? ` for ${audience}` : ""}.`
  },
  {
    tone: "Humorous",
    template: (topic: string, audience: string) =>
      `If ${topic} had a cheat code, this would be it. ${audience || "You"} ready?`
  }
] as const;

const ctas = [
  {
    tone: "Energetic",
    template: (callToAction: string) => `Hit follow and ${callToAction} right now—don't let this momentum slip.`
  },
  {
    tone: "Inspirational",
    template: (callToAction: string) => `Save this and ${callToAction}. Future you will be thankful you started today.`
  },
  {
    tone: "Educational",
    template: (callToAction: string) => `Bookmark this play, share it with a teammate, and ${callToAction} next.`
  },
  {
    tone: "Humorous",
    template: (callToAction: string) => `Double-tap so the algorithm remembers and ${callToAction} before you forget.`
  }
] as const;

const transitions = [
  "Here's the 15-second breakdown:",
  "Let me show you the exact system:",
  "Do this step-by-step:",
  "Here's the playbook:"
];

const beatTemplates = [
  "Frame the pain point with a quick story or stat.",
  "Introduce the first action with an over-the-shoulder shot.",
  "Layer in proof: testimonial, result screenshot, or before/after.",
  "Pose a contrasting idea that builds curiosity for the CTA."
];

const buildOutline = (
  topic: string,
  audience: string,
  tone: typeof tones[number],
  callToAction: string
) => {
  const hookTemplate = hooks.find((item) => item.tone === tone) ?? hooks[0];
  const ctaTemplate = ctas.find((item) => item.tone === tone) ?? ctas[0];

  const hookLine = hookTemplate.template(topic, audience);
  const transitionLine = transitions[Math.floor(Math.random() * transitions.length)];
  const beats = beatTemplates.map((beat, idx) => `${idx + 1}. ${beat}`);
  const ctaLine = ctaTemplate.template(callToAction);

  return [hookLine, transitionLine, ...beats, ctaLine];
};

export function IdeaGenerator() {
  const [topic, setTopic] = useState("launch a memorable short video");
  const [audience, setAudience] = useState("solo creators");
  const [tone, setTone] = useState<typeof tones[number]>("Energetic");
  const [callToAction, setCallToAction] = useState("grab the free storyboard template");
  const [outline, setOutline] = useState<string[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOutline(buildOutline(topic, audience, tone, callToAction));
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
              Idea Generator
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Draft a short-form script</h3>
            <p className="mt-2 text-sm text-slate-300">
              Describe your topic, choose a tone, and tailor the call to action. Instantly get a
              hook-first narrative outline to take into production.
            </p>
          </div>
          <div className="grid gap-4">
            <label className="flex flex-col gap-2 text-xs uppercase tracking-widest text-slate-500">
              Topic / Promise
              <input
                className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white focus:border-primary focus:outline-none"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                placeholder="e.g. repurpose a webinar into shorts"
              />
            </label>
            <label className="flex flex-col gap-2 text-xs uppercase tracking-widest text-slate-500">
              Audience (optional)
              <input
                className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white focus:border-primary focus:outline-none"
                value={audience}
                onChange={(event) => setAudience(event.target.value)}
                placeholder="e.g. SaaS founders"
              />
            </label>
            <label className="flex flex-col gap-2 text-xs uppercase tracking-widest text-slate-500">
              Tone
              <select
                value={tone}
                onChange={(event) => setTone(event.target.value as typeof tone)}
                className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white focus:border-primary focus:outline-none"
              >
                {tones.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-xs uppercase tracking-widest text-slate-500">
              Call to action
              <input
                className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white focus:border-primary focus:outline-none"
                value={callToAction}
                onChange={(event) => setCallToAction(event.target.value)}
                placeholder="e.g. download the checklist"
              />
            </label>
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
          >
            Generate Outline
          </button>
        </div>
        <div className="lg:col-span-7">
          <div className="h-full rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Script Outline
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-200">
              {outline.length === 0 ? (
                <p className="text-slate-400">
                  Fill in the fields and hit Generate to view a ready-to-record script outline.
                  Adjust tone or audience to instantly reshape the storytelling angle.
                </p>
              ) : (
                outline.map((line, idx) => (
                  <div
                    key={`${line}-${idx}`}
                    className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
                  >
                    {line}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
