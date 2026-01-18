"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useTranslations, useMessages } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import RotatingText from "./RotatingText";

export const Hero = () => {
    const t = useTranslations('Hero');
    const messages = useMessages() as any;
    const rotatingTexts = messages.Hero.rotating as string[];
    
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax Effects
    const yText = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityText = useTransform(scrollY, [0, 500], [1, 0]);
    const yVisual = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section className="min-h-screen flex flex-col lg:px-12 overflow-hidden w-full pt-32 pr-6 pb-20 pl-6 relative justify-center bg-[#050505]">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

             {/* Background Gradient */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-transparent pointer-events-none z-0"></div>
             
             {/* Background Grid */}
            <div
                className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    maskImage: "radial-gradient(circle at 50% 50%, black, transparent 80%)",
                }}
            ></div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Typography */}
                <motion.div
                    style={{ y: yText, opacity: opacityText }}
                    className="lg:col-span-7 flex flex-col perspective-midrange gap-x-6 gap-y-6"
                >
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></span>
                        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                            {t('available')}
                        </span>
                    </motion.div>

                    {/* Creative Title Sequence */}
                    <h1 className="font-manrope text-[12vw] lg:text-[7.5rem] font-normal leading-[0.85] tracking-tighter text-white relative z-10">
                        {/* Line 1 */}
                        <div className="overflow-hidden perspective-normal text-white/90">
                            <motion.div
                                initial={{ y: "100%", rotateX: 75, opacity: 0 }}
                                animate={{ y: "0%", rotateX: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
                                className="origin-bottom"
                            >
                                {t('line1')}
                            </motion.div>
                        </div>

                        {/* Line 2 - Rotating Text */}
                        <div className="overflow-hidden pl-12 lg:pl-32 perspective-normal h-[1.1em] flex items-center">
                            <RotatingText
                                texts={rotatingTexts}
                                mainClassName="text-white lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-neutral-300 lg:to-white block"
                                staggerFrom="last"
                                initial={{ y: "100%", rotateX: 75, opacity: 0 }}
                                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                                exit={{ y: "-120%", opacity: 0 }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={3000}
                                style={{
                                    WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)",
                                }}
                                className="hidden lg:block"
                            />
                            {/* Mobile version (solid text for readability) */}
                             <RotatingText
                                texts={rotatingTexts}
                                mainClassName="text-white lg:hidden block"
                                staggerFrom="last"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={3000}
                            />
                        </div>
                    </h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-8 max-w-xl text-neutral-300 font-light text-lg leading-relaxed relative z-10"
                    >
                        {t('description')}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="mt-8 flex flex-wrap gap-4 relative z-10"
                    >
                        <a
                            href="#work"
                            className="group relative px-8 py-4 rounded-full bg-white text-black text-sm font-semibold tracking-tight overflow-hidden hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#030303] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {t('viewProjects')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#030303] transition-all"
                        >
                            {t('contactMe')}
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right: Parallax Profile Image */}
                <motion.div
                    style={{ y: yVisual }}
                    className="lg:col-span-5 min-h-[500px] flex w-full h-full relative items-center justify-center lg:justify-end"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Image Container with Parallax Scale */}
                        <div className="absolute inset-0 bg-neutral-900">
                             <Image
                                src="/images/profile-hero.jpg"
                                alt="Profile"
                                fill
                                priority
                                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                                quality={100}
                            />
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Floating Badge */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="absolute bottom-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 shadow-lg"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                            <span className="text-xs font-medium text-white">{t('openToWork')}</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
