"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const Footer = () => {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("josefslimani5@gmail.com");
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <section className="relative w-full py-24 px-6 lg:px-12 bg-[#030303] border-t border-white/5 overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col justify-between min-h-[60vh]">

                {/* Main Call to Action */}
                <div className="flex flex-col gap-8 mt-20">
                    <p className="font-mono text-emerald-500 text-sm tracking-widest uppercase">
                        Start a project
                    </p>
                    <h2 className="font-manrope text-[12vw] leading-[0.85] font-semibold text-white tracking-tighter mix-blend-exclusion">
                        Let&apos;s work <br />
                        <span className="text-neutral-700">together.</span>
                    </h2>
                </div>

                {/* Interactive Contact Area */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-20">
                    <div className="flex flex-col gap-6">
                        <button
                            onClick={handleCopyEmail}
                            className="group flex items-center gap-4 text-2xl lg:text-3xl text-white font-manrope font-light hover:text-emerald-400 transition-colors"
                        >
                            <span className="border-b border-white/20 pb-1 group-hover:border-emerald-500/50 transition-colors">
                                josefslimani5@gmail.com
                            </span>
                            <div className="relative">
                                <span className={`absolute left-0 top-1/2 -translate-y-1/2 text-xs font-mono bg-emerald-500 text-black px-2 py-1 rounded transition-all duration-300 ${emailCopied ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                                    Copied!
                                </span>
                                <svg
                                    className={`w-6 h-6 transition-transform duration-500 ${emailCopied ? 'scale-0' : 'scale-100'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                        </button>

                        <div className="flex gap-6 mt-4">
                            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors text-sm font-mono uppercase tracking-wide border border-white/10 rounded-full px-5 py-2 hover:bg-white/5 hover:border-white/20 transition-all"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="w-full md:w-auto flex flex-col md:items-end gap-4 text-neutral-500 text-xs font-mono uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            Operational / Available
                        </div>
                        <span>&copy; 2025 Youssef Slimani</span>
                        <span>Local time: 14:02 CET</span>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none"></div>
        </section>
    );
};
