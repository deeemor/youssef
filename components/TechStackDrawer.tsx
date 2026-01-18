"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechItem {
    name: string;
    type: string;
    usage: string;
    usedIn: string[];
}

interface TechStackDrawerProps {
    tech: TechItem;
    children: React.ReactNode;
}

export const TechStackDrawer = ({ tech, children }: TechStackDrawerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === "Escape") setIsOpen(false);
            };
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
            return () => {
                document.removeEventListener("keydown", handleEscape);
                document.body.style.overflow = "";
            };
        }
    }, [isOpen]);

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
            >
                {children}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#0A0A0A] border-l border-white/10 backdrop-blur-xl shadow-2xl overflow-y-auto"
                        >
                            <div className="p-8">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <h3 className="text-2xl font-manrope font-semibold text-white mb-2">
                                            {tech.name}
                                        </h3>
                                        <span className="text-xs uppercase font-mono text-emerald-400 tracking-wider">
                                            {tech.type}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                                        aria-label="Close drawer"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>

                                {/* Usage */}
                                <div className="mb-8">
                                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3 block">
                                        What I use it for
                                    </span>
                                    <p className="text-neutral-300 leading-relaxed">
                                        {tech.usage}
                                    </p>
                                </div>

                                {/* Used In Projects */}
                                <div>
                                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3 block">
                                        Used in projects
                                    </span>
                                    <ul className="space-y-2">
                                        {tech.usedIn.map((project, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                                <span className="text-white text-sm">{project}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

