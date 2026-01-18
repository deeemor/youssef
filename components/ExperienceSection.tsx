"use client";

import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";

const experienceData = [
  {
    company: "LIFA Innovative Lichtsysteme GmbH",
    dateRange: "2025 – Present",
    role: "Senior Full-Stack Developer",
    outcomes: [
      "Rebuilt an outdated WordPress-based B2B website into a modern, scalable platform.",
      "Designed a structured product system with fast filtering and improved search.",
      "Integrated a hybrid AI support chatbot with notifications and human handoff.",
      "Focused on performance, SEO, and long-term maintainability in production."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "AI Integrations"]
  },
  {
    company: "morphe* Information Design",
    dateRange: "2025 – Present",
    role: "Data Automation Engineer",
    outcomes: [
      "Built automation pipelines to extract and normalize unstructured web data.",
      "Designed reusable scraping workflows with error handling and retries.",
      "Delivered structured datasets for internal processing and analysis."
    ],
    tech: ["Node.js", "Python", "Web Scraping", "Automation"]
  },
  {
    company: "Independent Client Projects",
    dateRange: "2024 – 2025",
    role: "Full-Stack Developer",
    outcomes: [
      "Delivered client-facing websites focused on UX, performance, and clarity.",
      "Built platforms for beauty, gastronomy, fitness, and real estate businesses.",
      "Handled projects end-to-end: concept, implementation, and iteration."
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
   {
        company: "Software Engineering Intern — Odoo & Python",
        dateRange: "Jan 2023 – May 2023 · Internship",
        role: "Software Engineering Intern",
        outcomes: [
            "Developed a custom Odoo ERP module for a gym and fitness center.",
            "Implemented core business logic using Python.",
            "Gained hands-on experience with backend systems and real-world requirements."
        ],
        tech: ["Python", "Odoo", "ERP Systems"]
    },
  {
    company: "Web Development Internship",
    dateRange: "2022",
    role: "Junior Web Developer (Internship)",
    outcomes: [
      "Built and maintained WordPress pages for small business websites.",
      "Implemented layouts and components using HTML, CSS, and JavaScript.",
      "Worked on responsive design, content updates, and basic optimizations."
    ],
    tech: ["WordPress", "HTML", "CSS", "JavaScript"]
  }
];

export const ExperienceSection = () => {
  return (
    <RevealOnScroll
      id="experience"
      className="relative w-full py-20 lg:py-24 bg-[#030303] border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-14">
          <h2 className="font-manrope text-4xl lg:text-6xl font-medium text-white tracking-tight">
            Experience
          </h2>
          <p className="text-neutral-400 font-light text-base max-w-md mt-4 lg:mt-0 lg:text-right leading-relaxed">
            A focused overview of my professional background, from early web
            development to full-stack systems and automation.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 lg:p-8"
            >
              {/* Top Row */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.company}
                  </h3>
                  <span className="text-sm text-neutral-400">
                    {item.role}
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-500 mt-2 lg:mt-0">
                  {item.dateRange}
                </span>
              </div>

              {/* Outcomes */}
              <ul className="space-y-2 mb-4">
                {item.outcomes.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-neutral-300 text-sm leading-relaxed"
                  >
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};
