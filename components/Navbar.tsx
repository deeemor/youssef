"use client";
import React, { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const t = useTranslations('Navigation');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <AnimatePresence>
            <motion.nav
                initial={{ y: 0, opacity: 1 }}
                animate={{
                    y: isVisible ? 0 : -100,
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed z-50 top-0 inset-x-0 p-8 flex justify-between items-start pointer-events-none"
            >
                {/* Left: Identity Module */}
                <div className="pointer-events-auto group flex items-center gap-4 pl-2 pr-6 py-2 rounded-full bg-[#0A0A0A]/80 border border-white/10 backdrop-blur-xl shadow-[0_4px_24px_-1px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500 ease-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white relative z-10"
                        >
                            <path d="M12 19V5"></path>
                            <path d="M5 12l7-7 7 7"></path>
                        </svg>
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="leading-none text-sm font-semibold text-white tracking-tight font-manrope">
                            Youssef
                        </span>
                        <span className="leading-none text-[10px] font-mono text-emerald-500 uppercase tracking-widest">
                            Dev
                        </span>
                    </div>
                </div>

                {/* Center: Dynamic Navigation Island */}
                <div className="hidden md:flex pointer-events-auto absolute left-1/2 -translate-x-1/2 top-8 items-center p-1.5 rounded-full bg-[#0A0A0A]/60 border border-white/10 backdrop-blur-2xl shadow-2xl ring-1 ring-white/5 transition-all duration-300 hover:bg-[#0A0A0A]/80 hover:scale-[1.01]">
                    <Link
                        href="/"
                        className="transition-all active:scale-95 text-sm font-medium text-white bg-white/10 border-white/5 border rounded-full px-6 py-2.5 relative shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                    >
                        {t('home')}
                    </Link>
                    <Link
                        href="#experience"
                        className="hover:text-white transition-colors group/link text-sm font-medium text-neutral-400 rounded-full px-6 py-2.5 relative"
                    >
                        {t('experience')}
                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
                    </Link>
                    <Link
                        href="#about"
                        className="hover:text-white transition-colors group/link text-sm font-medium text-neutral-400 rounded-full px-6 py-2.5 relative"
                    >
                        {t('about')}
                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
                    </Link>
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 rounded-full text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group/link"
                    >
                        {t('contact')}
                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
                    </Link>
                </div>

                {/* Right: Action Module */}
                <div className="pointer-events-auto flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="hidden sm:flex items-center gap-1 bg-[#0A0A0A]/80 border border-white/10 rounded-full p-1 backdrop-blur-xl shadow-lg">
                        <button
                            onClick={() => switchLocale('en')}
                            className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                                locale === 'en'
                                ? 'bg-white text-black shadow-sm'
                                : 'text-neutral-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => switchLocale('de')}
                            className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                                locale === 'de'
                                ? 'bg-white text-black shadow-sm'
                                : 'text-neutral-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            DE
                        </button>
                    </div>

                    {/* Menu Toggle */}
                    <button className="group relative w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] border border-transparent hover:border-white/50 overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="flex flex-col gap-[6px] items-end group-hover:items-center transition-all duration-300 w-5">
                            <span className="w-full h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-full group-hover:rotate-45 group-hover:translate-y-[8px]"></span>
                            <span className="w-3/4 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-0 group-hover:opacity-0"></span>
                            <span className="w-1/2 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-full group-hover:-rotate-45 group-hover:-translate-y-[8px]"></span>
                        </div>
                    </button>
                </div>
            </motion.nav>
        </AnimatePresence>
    );
};
