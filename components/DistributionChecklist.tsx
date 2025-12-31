"use client";

const distribution = [
  {
    platform: "TikTok",
    steps: [
      "Trim to 60s max; lean into 6-8s loop ending.",
      "Add keywords to captions; include 3 niche hashtags.",
      "Use native text overlays for algorithmic indexing."
    ],
    cadence: "Post 3-4x per week. Repurpose top performer with new hook."
  },
  {
    platform: "Instagram Reels",
    steps: [
      "Enable Remix and Duet equivalents to encourage collaboration.",
      "Design a 4:5 thumbnail that works in the grid.",
      "Cross-post to Stories with a poll sticker to drive traffic."
    ],
    cadence: "Publish every other day to stabilize reach. Engage comments within 15 minutes."
  },
  {
    platform: "YouTube Shorts",
    steps: [
      "Front-load keywords verbally and in captions for retention.",
      "Pin a comment that links to the long-form video or lead magnet.",
      "Add end screen overlays driving to related playlists."
    ],
    cadence: "Batch 5 Shorts per week; schedule between 12-3 PM in target region."
  }
];

export function DistributionChecklist() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {distribution.map((item) => (
        <div
          key={item.platform}
          className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
        >
          <p className="text-sm font-semibold text-primary-light">{item.platform}</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {item.steps.map((step) => (
              <li key={step} className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4">
                {step}
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-400">
            <span className="font-semibold text-white">Cadence:</span> {item.cadence}
          </p>
        </div>
      ))}
    </div>
  );
}
