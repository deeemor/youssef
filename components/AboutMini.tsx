"use client";
import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";

const technologies = [
    { 
        name: "React", 
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <g stroke="currentColor" strokeWidth="1.5" opacity="0.8">
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/>
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
                </g>
            </svg>
        ),
        color: "text-cyan-400", 
        bg: "bg-cyan-400/5", 
        border: "border-cyan-400/10" 
    },
    { 
        name: "Next.js", 
        icon: (
            <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                    <circle cx="90" cy="90" r="90" fill="black"/>
                </mask>
                <g mask="url(#mask0)">
                    <circle cx="90" cy="90" r="90" fill="black" stroke="currentColor" strokeWidth="4"/>
                    <path d="M149.508 157.527L69.143 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.527Z" fill="currentColor"/>
                    <rect x="115" y="54" width="12" height="72" fill="currentColor"/>
                </g>
            </svg>
        ),
        color: "text-white", 
        bg: "bg-white/5", 
        border: "border-white/10" 
    },
    { 
        name: "Node.js", 
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L3 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.5 4.5L7.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
            </svg>
        ),
        color: "text-emerald-500", 
        bg: "bg-emerald-500/5", 
        border: "border-emerald-500/10" 
    },
    { 
        name: "TypeScript", 
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 16H9.01M15 16H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 8H11V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 13.5C13 12.5 13.5 12 14.5 12H16C17 12 17.5 12.5 17.5 13.5V14.5C17.5 15.5 17 16 16 16H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        color: "text-blue-500", 
        bg: "bg-blue-500/5", 
        border: "border-blue-500/10" 
    },
    { 
        name: "Tailwind", 
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M11.5 6C11.5 6 8.5 3 5 3C2.5 3 1.5 5 2.5 7.5C3.5 10 7.5 10 8.5 13.5C9.5 17 6.5 20.5 3.5 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.5 6C21.5 6 18.5 3 15 3C12.5 3 11.5 5 12.5 7.5C13.5 10 17.5 10 18.5 13.5C19.5 17 16.5 20.5 13.5 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        color: "text-sky-400", 
        bg: "bg-sky-400/5", 
        border: "border-sky-400/10" 
    },
    { 
        name: "Framer", 
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M6 3H18V9H12L18 15H6V9H12L6 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 15L12 21L18 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        color: "text-purple-400", 
        bg: "bg-purple-400/5", 
        border: "border-purple-400/10" 
    },
    { 
        name: "PostgreSQL", 
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M15 10C15 10 16 9 17 10C18 11 15 14 15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 12C8 12 7 14 9 15C11 16 13 14 13 12V9C13 8 11 8 11 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M11 16C11 16 11 18 13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
        color: "text-blue-300", 
        bg: "bg-blue-300/5", 
        border: "border-blue-300/10" 
    },
    { 
        name: "Docker", 
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M4 14H6M8 14H10M12 14H14M16 14H18M4 11H6M8 11H10M12 11H14M8 8H10M12 8H14M12 5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M22 13C22 13 22 18 13 18C4 18 3 15 3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M22 13V15C22 15 20 16 18 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
        color: "text-blue-500", 
        bg: "bg-blue-500/5", 
        border: "border-blue-500/10" 
    },
];

export const AboutMini = () => {
    return (
        <RevealOnScroll className="w-full">
            <div className="rounded-3xl border border-white/5 bg-[#0A0A0A]/40 backdrop-blur-2xl p-8 lg:p-12 overflow-hidden relative group">
                {/* Subtle Gradient Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-500" />
                
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
                    {/* Left Column: Bio (7 cols) */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-3xl lg:text-4xl font-manrope font-semibold text-white leading-tight">
                                Crafting digital experiences with <span className="text-emerald-400">purpose</span> and <span className="text-blue-400">precision</span>.
                            </h3>
                            <p className="text-neutral-400 leading-relaxed text-lg font-light max-w-2xl">
                                I'm a full-stack developer specializing in Next.js, TypeScript, and modern web platforms. I build scalable applications with clean architecture, focusing on performance, maintainability, and user experience. 
                            </p>
                            <p className="text-neutral-400 leading-relaxed text-lg font-light max-w-2xl">
                                My work spans from complex B2B platforms to high-performance e-commerce solutions and data automation systems. I believe in code that solves real problems.
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 pt-4">
                            {["Next.js App Router", "Strapi CMS", "Automation Pipelines", "System Architecture"].map((highlight, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 font-mono hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-default"
                                >
                                    {highlight}
                                </span>
                            ))}
                        </div>

                        {/* CV Download Button */}
                         <div className="pt-4">
                            <button
                                disabled
                                className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 opacity-80 cursor-not-allowed w-fit"
                            >
                                <div className="p-2 rounded-full bg-white/10 text-white group-hover/btn:bg-white/20 transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover/btn:translate-y-0.5 transition-transform">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <span className="block text-sm font-medium text-white">Download CV</span>
                                    <span className="block text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Coming Soon</span>
                                </div>
                            </button>
                         </div>
                    </div>

                    {/* Right Column: Tech Grid (5 cols) */}
                    <div className="lg:col-span-5 space-y-8">
                         <div className="flex items-center gap-3 mb-6">
                            <div className="h-px flex-1 bg-white/10" />
                            <span className="text-neutral-500 font-mono text-xs tracking-widest uppercase">
                                Tech Stack
                            </span>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
                            {technologies.map((tech) => (
                                <div 
                                    key={tech.name}
                                    className={`group/tech relative p-4 rounded-2xl bg-[#111] border border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.02] ${tech.border} hover:border-opacity-100 transition-all duration-300 overflow-hidden`}
                                >
                                    <div className={`absolute inset-0 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-500 ${tech.bg} blur-xl`} />
                                    
                                    <span className={`text-3xl ${tech.color} relative z-10 transform group-hover/tech:scale-110 group-hover/tech:-translate-y-1 transition-all duration-300`}>
                                        {tech.icon}
                                    </span>
                                    <span className="text-xs font-medium text-neutral-500 group-hover/tech:text-white relative z-10 transition-colors">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    );
};
