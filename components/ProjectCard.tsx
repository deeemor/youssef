"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ProjectProps {
    id: string;
    slug?: string;
    title: string;
    category: string;
    year: string;
    image: string;
}

export const ProjectCard = ({ project }: { project: ProjectProps }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const contentTranslateZ = useTransform(mouseY, [-0.5, 0.5], ["50px", "50px"]); // Subtle z-depth

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXParam = e.clientX - rect.left;
        const mouseYParam = e.clientY - rect.top;

        const xPct = mouseXParam / width - 0.5;
        const yPct = mouseYParam / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial="initial"
            whileHover="hover"
            className="relative w-full aspect-[16/9] perspective-midrange group cursor-pointer"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full relative rounded-2xl bg-[#1a1a1a] border border-white/10 group-hover:border-white/20 transition-colors duration-500"
            >
                {/* Image Layer - Back */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transform-style-preserve-3d"
                    style={{ transform: "translateZ(0px)" }}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Cinematic Gradient Overlay - Bottom Heavy */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                </div>

                {/* Content Layer - Floating */}
                <motion.div
                    style={{ transform: "translateZ(30px)" }}
                    className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10 pointer-events-none"
                >
                    <div className="flex justify-between items-start">
                        <span className="font-mono text-xs text-white/90 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                            {project.year}
                        </span>
                         <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="scale-75 group-hover:scale-100 transition-transform">
                                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-blue-400 font-mono text-xs uppercase tracking-wider mb-3 block drop-shadow-md">
                            {project.category}
                        </span>
                        <h3 className="text-3xl lg:text-5xl font-manrope font-medium text-white leading-[0.9] tracking-tight drop-shadow-lg">
                            {project.title}
                        </h3>
                    </div>
                </motion.div>

                {/* Glare Effect */}
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                    style={{
                        background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.4) 50%, transparent 54%)",
                        transform: "translateZ(1px)",
                    }}
                ></div>

                 {/* Border Overlay for extra definition */}
                 <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none z-50"></div>
            </motion.div>
        </motion.div>
    );
};
