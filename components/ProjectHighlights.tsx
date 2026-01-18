"use client";
import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";

interface HighlightItem {
    title: string;
    description: string;
}

interface ProjectHighlightsProps {
    title?: string;
    items: HighlightItem[];
}

export const ProjectHighlights = ({ title, items }: ProjectHighlightsProps) => {
    return (
        <RevealOnScroll className="w-full">
            {title && (
                <h3 className="font-manrope text-2xl lg:text-3xl font-semibold text-white mb-8 tracking-tight">
                    {title}
                </h3>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 lg:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <h4 className="text-lg font-semibold text-white mb-3 font-manrope">
                            {item.title}
                        </h4>
                        <p className="text-neutral-300 leading-relaxed text-sm lg:text-base">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </RevealOnScroll>
    );
};

