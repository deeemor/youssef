"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { RevealOnScroll } from "./RevealOnScroll";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { workProjects } from "@/data/projects";

export const Work = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <RevealOnScroll
            id="work"
            className="reveal-group relative w-full py-32 bg-[#030303] overflow-hidden"
        >
             {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-transparent pointer-events-none"></div>
            
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative mb-20 z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end">
                    <div>
                         <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-blue-500/50" />
                            <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">
                                Selected Works
                            </span>
                        </div>
                        <h2 className="font-manrope text-5xl lg:text-7xl font-medium text-white tracking-tight">
                            Digital
                            <span className="text-neutral-600 block lg:inline lg:ml-4">Experience</span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div 
                ref={scrollContainerRef}
                className="flex gap-8 overflow-x-auto px-6 lg:px-12 pb-12 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {workProjects.map((project) => (
                    <motion.div 
                        key={project.id} 
                        className="min-w-[90vw] md:min-w-[1000px] snap-center"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link href={`/projects/${project.slug}`} className="block h-full">
                            <ProjectCard project={project} />
                        </Link>
                    </motion.div>
                ))}
                
                {/* Spacer for right padding */}
                <div className="min-w-[1px] w-[1px]"></div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-6 mt-8">
                <button
                    onClick={scrollLeft}
                    className="group w-14 h-14 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-105 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    aria-label="Scroll left"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </button>
                <button
                    onClick={scrollRight}
                    className="group w-14 h-14 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-105 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    aria-label="Scroll right"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </RevealOnScroll>
    );
};
