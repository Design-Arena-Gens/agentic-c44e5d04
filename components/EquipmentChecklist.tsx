"use client";

const categories = [
  {
    name: "Audio",
    items: [
      { label: "Lapel mic (wired/wireless)", tip: "Tape the cable down the back of clothing to avoid rustle." },
      { label: "Handheld recorder", tip: "Capture backup audio and ambient sound for layering." },
      { label: "Foam windscreen", tip: "Eliminate plosives when recording outdoors or near vents." }
    ]
  },
  {
    name: "Lighting",
    items: [
      { label: "Key light with softbox", tip: "Aim at 45° angle and dim until highlights fit under 90 IRE." },
      { label: "Bounce card / reflector", tip: "Fill shadows gently while keeping mobile footprint small." },
      { label: "Practical light accent", tip: "Add depth to background with RGB or warm bulbs." }
    ]
  },
  {
    name: "Support",
    items: [
      { label: "Tripod or C-stand", tip: "Keep horizon straight; mark legs with gaffer tape to lock framing." },
      { label: "Phone clamp / cage", tip: "Stabilize smartphone rigs and enable accessory mounting." },
      { label: "Teleprompter app", tip: "Use mirrored display or scrollable script for precise delivery." }
    ]
  },
  {
    name: "Post-production",
    items: [
      { label: "Caption template", tip: "Design once, reuse in editing software for brand consistency." },
      { label: "Sound fx library", tip: "Curate a micro library of hits, whooshes, transitions." },
      { label: "Color LUTs", tip: "Apply a neutral LUT for quick base grading before fine tuning." }
    ]
  }
];

export function EquipmentChecklist() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {categories.map((category) => (
        <div
          key={category.name}
          className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            {category.name}
          </p>
          <ul className="mt-4 space-y-4">
            {category.items.map((item) => (
              <li key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-xs text-slate-300">{item.tip}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
