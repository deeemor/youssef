"use client";
import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";

interface ExperienceItem {
    company: string;
    dateRange: string;
    role: string;
    outcomes: string[];
    tech: string[];
}

interface ExperienceTimelineProps {
    items: ExperienceItem[];
}

export const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => {
    return (
        <RevealOnScroll className="w-full">
            <div className="relative">
                {/* Timeline Line - Desktop */}
                <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-white/10"></div>

                {/* Timeline Items */}
                <div className="space-y-12 lg:space-y-16">
                    {items.map((item, index) => (
                        <div key={index} className="relative flex flex-col lg:flex-row lg:gap-12">
                            {/* Timeline Dot - Desktop */}
                            <div className="hidden lg:flex items-start pt-2">
                                <div className="relative z-10 w-4 h-4 rounded-full bg-white border-4 border-[#030303]"></div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 lg:pl-4">
                                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 lg:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-2">
                                        <div>
                                            <h3 className="text-xl lg:text-2xl font-manrope font-semibold text-white mb-1">
                                                {item.company}
                                            </h3>
                                            <p className="text-emerald-400 font-mono text-sm">{item.role}</p>
                                        </div>
                                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider lg:text-right">
                                            {item.dateRange}
                                        </span>
                                    </div>

                                    {/* Outcomes */}
                                    <ul className="space-y-3 mb-6">
                                        {item.outcomes.map((outcome, outcomeIndex) => (
                                            <li key={outcomeIndex} className="flex gap-3">
                                                <span className="text-emerald-400 mt-1">•</span>
                                                <span className="text-neutral-300 leading-relaxed text-sm lg:text-base">
                                                    {outcome}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                                        {item.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400 font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </RevealOnScroll>
    );
};

