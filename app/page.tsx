"use client";

import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { PhaseRoadmap } from "@/components/PhaseRoadmap";
import { TimelinePlanner } from "@/components/TimelinePlanner";
import { ShotListBuilder } from "@/components/ShotListBuilder";
import { EquipmentChecklist } from "@/components/EquipmentChecklist";
import { DistributionChecklist } from "@/components/DistributionChecklist";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { IdeaGenerator } from "@/components/IdeaGenerator";

const deliverables = [
  {
    title: "Storyboard Canvas",
    detail: "Map hook-beat-CTA flow with thumbnails, script notes, and emotive direction.",
    action: "Duplicate the storyboard template and sketch each beat before production."
  },
  {
    title: "Shot Inventory",
    detail: "Track A-roll, B-roll, and audio coverage against the storyboard.",
    action: "Check items in the Shot List Builder to guarantee editing-ready footage."
  },
  {
    title: "Edit Checklist",
    detail: "Color pass, audio sweetening, captions, graphics, loop ending, aspect ratios.",
    action: "Run this list before exporting to maintain brand quality standards."
  }
];

export default function Page() {
  return (
    <main className="flex flex-col gap-20 pb-20">
      <Hero />

      <section className="space-y-10" id="workflow">
        <SectionTitle
          eyebrow="Workflow"
          title="Build a short-form production pipeline that scales."
          description="Follow the three-phase roadmap to align your story, capture cinematic footage, and deliver edits that retain viewers. Each card keeps you focused on the essentials."
        />
        <PhaseRoadmap />
      </section>

      <section className="space-y-10">
        <SectionTitle
          eyebrow="Planning"
          title="Design your runtime and narrative flow."
          description="Select a platform, adjust pacing, and instantly view how much time to dedicate to each beat. Use this before filming to keep talent on script and B-roll purposeful."
        />
        <TimelinePlanner />
      </section>

      <section className="space-y-10">
        <SectionTitle
          eyebrow="Script Lab"
          title="Spin up a hook-first script in minutes."
          description="Blend your topic, audience, and tone to generate a ready-to-record outline. Iterate until the narrative feels irresistible."
        />
        <IdeaGenerator />
      </section>

      <section className="space-y-10">
        <SectionTitle
          eyebrow="Coverage"
          title="Organize shots for a polished short."
          description="Pick a template and follow the shooting priorities. Never leave set without the inserts, reveals, and CTAs your edit demands."
        />
        <ShotListBuilder />
      </section>

      <section className="space-y-10">
        <SectionTitle
          eyebrow="Gear"
          title="Pack a nimble creator kit."
          description="Choose equipment that maximizes quality without slowing your production day. Keep backups ready for audio and light."
        />
        <EquipmentChecklist />
      </section>

      <section className="space-y-10">
        <SectionTitle
          eyebrow="Deliverables"
          title="Lock the handoff to post-production."
          description="Anchor your workflow with tangible outputs. Review each deliverable before calling the project complete."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              <p className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-400">
                {item.action}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionTitle
          eyebrow="Distribution"
          title="Ship the edit and sustain momentum."
          description="Customize captions, thumbnails, and posting cadence for each platform. Batch schedule releases and monitor retention to iterate."
        />
        <DistributionChecklist />
      </section>

      <section className="space-y-10" id="resources">
        <SectionTitle
          eyebrow="Resources"
          title="Tools to accelerate your next shoot."
          description="Download templates, swipe proven storytelling formats, and keep your kit nimble. All resources are free or freemium."
        />
        <ResourceLibrary />
      </section>
    </main>
  );
}
