"use client";

import { useEffect, useMemo, useState } from "react";

type Segment = {
  name: string;
  percentage: number;
  tip: string;
};

type PlatformPreset = {
  id: string;
  label: string;
  description: string;
  defaultDuration: number;
  segments: Segment[];
};

const presets: PlatformPreset[] = [
  {
    id: "tiktok",
    label: "TikTok / Shorts Hook",
    description: "Fast-paced, high-energy punch with a decisive CTA.",
    defaultDuration: 35,
    segments: [
      { name: "Hook & Pattern Interrupt", percentage: 0.22, tip: "Front-load the strongest visual and deliver the promise immediately." },
      { name: "Context & Proof", percentage: 0.38, tip: "Show the transformation with tight jump cuts; reveal results before the method." },
      { name: "Tutorial / Breakdown", percentage: 0.25, tip: "Teach or entertain in micro-beats; keep sentences under 10 words." },
      { name: "CTA / Next Step", percentage: 0.15, tip: "Drive a single action and flash supporting graphics twice." }
    ]
  },
  {
    id: "reels",
    label: "Instagram Reels Story",
    description: "Balanced storytelling with emphasis on personality and aesthetic.",
    defaultDuration: 45,
    segments: [
      { name: "Hook & Setup", percentage: 0.2, tip: "Leverage text overlays to tease the outcome before it happens." },
      { name: "Behind-the-Scenes Beat", percentage: 0.25, tip: "Use candid audio and whip pans to make it feel handmade." },
      { name: "Hero Payoff", percentage: 0.35, tip: "Show the reveal in slow motion, then replay in real-time for authenticity." },
      { name: "CTA Sequence", percentage: 0.2, tip: "Stack voice, captions, and end card to reinforce the subscribe/follow ask." }
    ]
  },
  {
    id: "youtube",
    label: "YouTube Shorts Teaser",
    description: "Hook leads viewers into a longer video or playlist.",
    defaultDuration: 50,
    segments: [
      { name: "Explosive Cold Open", percentage: 0.2, tip: "Start with the moment of highest tension to create a loop-worthy intro." },
      { name: "Why It Matters", percentage: 0.3, tip: "Drop a stat or bold statement that reframes the problem." },
      { name: "Signature Moment", percentage: 0.3, tip: "Deliver your unique insight with layered text and cutaways." },
      { name: "Redirect & CTA", percentage: 0.2, tip: "Link to the long-form piece; highlight value of watching next." }
    ]
  }
];

const durationRange = { min: 15, max: 120 };

const formatSeconds = (seconds: number) => `${seconds.toFixed(0)}s`;

export function TimelinePlanner() {
  const [platformId, setPlatformId] = useState(presets[0].id);
  const [duration, setDuration] = useState(presets[0].defaultDuration);
  const [pace, setPace] = useState<"fast" | "balanced" | "deliberate">("balanced");

  const preset = useMemo(
    () => presets.find((item) => item.id === platformId) ?? presets[0],
    [platformId]
  );

  useEffect(() => {
    setDuration(preset.defaultDuration);
  }, [preset]);

  const adjustedSegments = useMemo(() => {
    const paceMultiplier =
      pace === "fast" ? 0.95 : pace === "deliberate" ? 1.08 : 1;
    const adjustedDuration = duration * paceMultiplier;
    const totalPercentage = preset.segments.reduce((total, segment) => total + segment.percentage, 0);

    return preset.segments.map((segment) => {
      const seconds = (segment.percentage / totalPercentage) * adjustedDuration;
      return { ...segment, seconds };
    });
  }, [duration, pace, preset]);

  const totalSeconds = adjustedSegments.reduce((sum, segment) => sum + segment.seconds, 0);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
            Timeline Planner
          </p>
          <h3 className="text-2xl font-semibold text-white">{preset.label}</h3>
          <p className="max-w-xl text-sm text-slate-300">{preset.description}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="flex flex-col text-xs uppercase tracking-widest text-slate-500">
            Platform
            <select
              value={platformId}
              onChange={(event) => setPlatformId(event.target.value)}
              className="mt-2 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white focus:border-primary focus:outline-none"
            >
              {presets.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col text-xs uppercase tracking-widest text-slate-500">
            Pacing
            <select
              value={pace}
              onChange={(event) => setPace(event.target.value as typeof pace)}
              className="mt-2 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white focus:border-primary focus:outline-none"
            >
              <option value="fast">Fast (energetic)</option>
              <option value="balanced">Balanced</option>
              <option value="deliberate">Deliberate</option>
            </select>
          </label>
          <label className="flex flex-col text-xs uppercase tracking-widest text-slate-500">
            Target Length
            <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-2">
              <input
                className="w-32 appearance-none bg-transparent text-sm text-white focus:outline-none"
                type="number"
                min={durationRange.min}
                max={durationRange.max}
                value={duration}
                onChange={(event) => setDuration(Number(event.target.value))}
              />
              <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">seconds</span>
            </div>
          </label>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <div className="h-3 w-full rounded-full bg-slate-800">
          <div className="flex h-full w-full overflow-hidden rounded-full">
            {adjustedSegments.map((segment) => (
              <div
                key={segment.name}
                className="h-full"
                style={{
                  width: `${(segment.seconds / totalSeconds) * 100}%`,
                  backgroundImage: "linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)"
                }}
                title={`${segment.name} · ${formatSeconds(segment.seconds)}`}
              />
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {adjustedSegments.map((segment) => (
            <div
              key={segment.name}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">{segment.name}</p>
                  <p className="mt-1 text-xs text-primary-light">
                    {formatSeconds(segment.seconds)}
                  </p>
                </div>
                <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
                  {(segment.percentage * 100).toFixed(0)}%
                </span>
              </div>
              <p className="mt-3 text-xs text-slate-300">{segment.tip}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-slate-400">
          Total runtime: <span className="font-semibold text-white">{formatSeconds(totalSeconds)}</span>{" "}
          with pacing adjustments. Cushion an extra 5 seconds during production to capture room tone
          and alternate reactions.
        </div>
      </div>
    </div>
  );
}
