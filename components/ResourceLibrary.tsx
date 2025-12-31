"use client";

const resources = [
  {
    title: "Shot Sequencer Template",
    description: "Duplicate-ready Google Sheets template for planning beats, camera moves, and overlays.",
    url: "https://docs.google.com/spreadsheets/",
    badge: "Template"
  },
  {
    title: "Mobile Filmmaking Essentials",
    description: "Curated gear list with budget, mid-tier, and pro options tailored to short-form.",
    url: "https://kit.co/",
    badge: "Guide"
  },
  {
    title: "Short-Form Storytelling Swipe File",
    description: "Breakdowns of 20+ viral short videos with script, hook pattern, and pacing notes.",
    url: "https://notion.so/",
    badge: "Swipe File"
  },
  {
    title: "Color Grading LUT Pack",
    description: "Free LUT collection designed for skin tones and neon accents for social content.",
    url: "https://gumroad.com/",
    badge: "Download"
  }
];

export function ResourceLibrary() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {resources.map((resource) => (
        <a
          key={resource.title}
          href={resource.url}
          target="_blank"
          rel="noreferrer"
          className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-light">
            {resource.badge}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-primary-light">
            {resource.title}
          </h3>
          <p className="mt-2 text-sm text-slate-300">{resource.description}</p>
        </a>
      ))}
    </div>
  );
}
