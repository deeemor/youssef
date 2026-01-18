"use client";
import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export const Expertise = () => {
    return (
        <section id="process" className="relative w-full px-6 lg:px-12 py-24 bg-neutral-950/50 border-y border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <RevealOnScroll className="reveal-group flex flex-col md:flex-row justify-between items-end mb-16">
                    <h2 className="font-manrope text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[0.9]">
                        <span className="reveal-text-line block">End-to-End</span>
                        <span className="reveal-text-line block text-neutral-600 transition-delay-100">
                            Development
                        </span>
                    </h2>
                    <p className="reveal-blur transition-delay-200 text-neutral-400 max-w-xs text-sm font-mono mt-6 md:mt-0">
                        // FRONTEND // BACKEND // AUTOMATION
                    </p>
                </RevealOnScroll>

                {/* Bento Grid Layout */}
                <RevealOnScroll className="stagger-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 w-full max-w-[1200px] mx-auto py-12 items-start h-auto">
                    {/* Left Feature: Architecture */}
                    <div className="flex flex-col gap-6 group md:pr-4">
                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold text-white tracking-tight">
                                Component Architecture
                            </h3>
                            <p className="text-neutral-400 font-light text-base leading-relaxed max-w-md">
                                Creating reusable, type-safe component libraries with React and TypeScript that ensure consistency across the entire platform.
                            </p>
                        </div>

                        {/* Visual Container */}
                        <div className="aspect-[4/3] overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 bg-gradient-to-br from-white/[0.03] to-transparent w-full border-white/10 border rounded-xl pt-8 pr-8 pb-0 pl-8 relative shadow-2xl">
                            {/* Inner Card Interface */}
                            <div className="flex-1 rounded-t-lg border-t border-x border-white/5 bg-[#0A0A0A] relative overflow-hidden shadow-inner ring-1 ring-white/5">
                                {/* Inner Glow */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

                                <div className="p-6 h-full flex flex-col relative z-10">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-medium text-white tracking-tight">
                                            UI Consistency
                                        </span>
                                    </div>

                                    {/* Legend */}
                                    <div className="flex gap-4 text-[10px] text-neutral-500 font-mono mb-8">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-[1px] bg-neutral-600"></div>
                                            Design
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-[1px] bg-indigo-500"></div>
                                            Logic
                                        </div>
                                    </div>

                                    {/* Chart Area */}
                                    <div className="flex-1 w-full relative mt-auto">
                                        <svg className="w-full h-full overflow-visible" viewBox="0 0 300 150" preserveAspectRatio="none">
                                            {/* Dashed Guidelines */}
                                            <line x1="0" y1="100" x2="300" y2="100" stroke="#333" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"></line>
                                            <line x1="0" y1="50" x2="300" y2="50" stroke="#333" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"></line>

                                            {/* Curve: Scope (Grey) */}
                                            <path d="M0 120 C 50 120, 100 110, 150 100 S 250 95, 300 95" fill="none" stroke="#525252" strokeWidth="1.5" className="wave-solid"></path>

                                            {/* Curve: Completed (Indigo Solid + Glow) */}
                                            <path d="M0 150 C 80 145, 140 130, 200 80 S 260 50, 300 45" fill="none" stroke="#6366F1" strokeWidth="2" className="wave-solid"></path>
                                            {/* Subtle glow under the main line */}
                                            <path d="M0 150 C 80 145, 140 130, 200 80 S 260 50, 300 45" fill="none" stroke="#6366F1" strokeWidth="6" opacity="0.1" className="wave-solid"></path>
                                        </svg>

                                        {/* X Axis Labels */}
                                        <div className="flex justify-between text-[10px] text-neutral-600 font-mono mt-2 absolute bottom-0 w-full translate-y-full pt-1">
                                            <span>Mockup</span>
                                            <span>Production</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Feature: Systems Logic */}
                    <div className="flex flex-col gap-6 group md:pl-4">
                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold text-white tracking-tight">
                                System Logic &amp; Backend
                            </h3>
                            <p className="text-neutral-400 font-light text-base leading-relaxed max-w-md">
                                Building robust backend services, APIs, and data automation pipelines that power the business logic behind the UI.
                            </p>
                        </div>

                        {/* Visual Container */}
                        <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-white/[0.03] to-transparent rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col pt-8 pl-8 pr-8 pb-0 hover:border-white/20 transition-colors duration-500">
                            {/* Inner Card Interface */}
                            <div className="flex-1 rounded-t-lg border-t border-x border-white/5 bg-[#0A0A0A] relative overflow-hidden shadow-inner ring-1 ring-white/5">
                                {/* Inner Glow */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

                                <div className="p-6 h-full flex flex-col relative z-10">
                                    <div className="text-sm font-medium text-white tracking-tight mb-6">
                                        Data Pipeline
                                    </div>

                                    <div className="flex flex-col space-y-3">
                                        {/* Active Item (Highlighted) */}
                                        <div className="flex items-start gap-3 p-2 -ml-2 rounded-lg bg-white/[0.04] border border-white/5 relative z-10">
                                            <div className="w-5 h-5 mt-0.5 rounded bg-neutral-800 flex items-center justify-center border border-white/10 text-[9px] text-neutral-400 font-mono shadow-sm">
                                                JS
                                            </div>
                                            <div className="flex flex-col gap-0.5 min-w-0">
                                                <span className="text-xs text-neutral-200 truncate font-medium">
                                                    Extract Structured Data (JSON)
                                                </span>
                                                <div className="flex items-center gap-1.5 mt-0.5">
                                                    <div className="w-3 h-3 rounded-full bg-neutral-700 flex items-center justify-center overflow-hidden ring-1 ring-black">
                                                        <div className="w-full h-full bg-indigo-500 opacity-80"></div>
                                                    </div>
                                                    <span className="text-[10px] text-neutral-500 font-mono">
                                                        Node.js
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Context Menu (Simulated UI) */}
                                        <div className="absolute top-[88px] left-[50px] w-[180px] bg-[#161618] border border-white/10 rounded-lg shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] z-30 flex flex-col p-1 backdrop-blur-3xl ring-1 ring-white/10">
                                            <button className="flex items-center gap-2.5 px-3 py-1.5 text-[11px] text-white hover:bg-white/10 text-left transition-colors rounded group/item">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-500 group-hover/item:text-neutral-300">
                                                    <path d="M12 5v14M5 12h14"></path>
                                                </svg>
                                                Deploy Function
                                            </button>
                                            <button className="flex items-center gap-2.5 px-3 py-1.5 text-[11px] text-white hover:bg-indigo-600 hover:text-white group/menu text-left transition-colors bg-white/5 rounded my-0.5">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-400 group-hover/menu:text-indigo-200">
                                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                </svg>
                                                Test Endpoint
                                            </button>
                                        </div>

                                        {/* Inactive Item 1 */}
                                        <div className="flex items-start gap-3 p-2 -ml-2 opacity-30 blur-[0.5px] select-none pointer-events-none">
                                            <div className="w-5 h-5 mt-0.5 rounded bg-neutral-800 flex items-center justify-center border border-white/10 text-[9px] text-neutral-400 font-mono">
                                                PY
                                            </div>
                                            <div className="flex flex-col gap-0.5 min-w-0">
                                                <span className="text-xs text-neutral-200 truncate">
                                                    Transform Excel Output
                                                </span>
                                                <div className="flex items-center gap-1.5 mt-0.5">
                                                    <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                                                    <span className="text-[10px] text-neutral-500 font-mono">
                                                        Python
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};
