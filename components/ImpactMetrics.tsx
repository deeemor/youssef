"use client";
import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";

interface MetricItem {
    label: string;
    value: string;
    hint?: string;
}

interface ImpactMetricsProps {
    items: MetricItem[];
}

export const ImpactMetrics = ({ items }: ImpactMetricsProps) => {
    return (
        <RevealOnScroll className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 lg:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl lg:text-4xl font-manrope font-semibold text-white group-hover:text-emerald-400 transition-colors">
                                {item.value}
                            </span>
                            <span className="text-sm font-mono text-neutral-400 uppercase tracking-wider">
                                {item.label}
                            </span>
                            {item.hint && (
                                <span className="text-xs text-neutral-500 mt-2 leading-relaxed">
                                    {item.hint}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </RevealOnScroll>
    );
};

