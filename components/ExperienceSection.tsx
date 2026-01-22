"use client";

import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { useTranslations } from "next-intl";

export const ExperienceSection = () => {
  const t = useTranslations("Experience");
  const jobs = t.raw("jobs");

  return (
    <div className="py-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24">
            <h2 className="font-manrope text-4xl lg:text-6xl font-medium text-white tracking-tight">
              Experience
            </h2>
            <p className="text-neutral-400 font-light text-base max-w-md mt-4 lg:mt-0 lg:text-right leading-relaxed">
              A focused overview of my professional background, from early web
              development to full-stack systems and automation.
            </p>
          </div>
        </RevealOnScroll>

        <ExperienceTimeline items={jobs} />
      </div>
    </div>
  );
};

