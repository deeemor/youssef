"use client";
import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { AboutMini } from "./AboutMini";
import { useTranslations } from "next-intl";

export const AboutSection = () => {
    const t = useTranslations("About");
    
    return (
        <section id="about" className="relative w-full py-32 bg-[#030303]">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                <RevealOnScroll>
                    <div className="mb-20">
                         <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-emerald-500/50" />
                            <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase">
                                {t("sectionTitle")}
                            </span>
                         </div>
                        <h2 className="font-manrope text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                            Engineering
                            <span className="text-neutral-600 block lg:inline lg:ml-4">Precision</span>
                        </h2>
                    </div>
                </RevealOnScroll>
                
                <AboutMini />
            </div>
        </section>
    );
};
