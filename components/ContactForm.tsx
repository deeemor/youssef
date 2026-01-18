"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "./RevealOnScroll";
import { useTranslations } from "next-intl";

export const ContactForm = () => {
    const t = useTranslations("Contact");
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        
        // Simulate network request
        setTimeout(() => {
            setFormState("success");
            setFormData({ name: "", email: "", projectType: "", message: "" });
        }, 2000);
    };

    return (
        <section id="contact" className="py-32 bg-[#030303] relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0A0A0A]/50 to-transparent pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 relative z-10">

                {/* Left Column: Context */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                    <RevealOnScroll>
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-12 bg-emerald-500/50" />
                                <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase">
                                    {t("sectionTitle")}
                                </span>
                            </div>
                            <h2 className="font-manrope text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                                {t("titleLine1")} <br />
                                <span className="text-neutral-500">{t("titleLine2")}</span>
                            </h2>
                            <p className="text-neutral-400 font-light text-lg max-w-md leading-relaxed">
                                {t("description")}
                            </p>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll className="hidden lg:block mt-24">
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-2xl relative overflow-hidden group">
                             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="flex items-center gap-6 mb-6 relative z-10">
                                <div className="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-2xl shadow-inner text-emerald-500">
                                    📬
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-lg">{t("directEmail")}</h4>
                                    <a 
                                        href="mailto:josefslimani5@gmail.com" 
                                        className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
                                        aria-label={`Send email to josefslimani5@gmail.com`}
                                    >
                                        josefslimani5@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 mb-8 relative z-10">
                                <div className="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-2xl shadow-inner text-yellow-500">
                                    ⚡
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-lg">{t("responseTime")}</h4>
                                    <p className="text-neutral-500 text-sm">{t("responseTimeDesc")}</p>
                                </div>
                            </div>
                            <a
                                href="mailto:josefslimani5@gmail.com?subject=Project Inquiry"
                                className="relative z-10 w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 group/btn"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover/btn:-translate-y-0.5 transition-transform">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                {t("writeEmail")}
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Right Column: Form */}
                <div className="lg:col-span-7">
                    <RevealOnScroll>
                        <form onSubmit={handleSubmit} className="relative bg-[#0A0A0A]/40 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border border-white/5 shadow-2xl overflow-hidden group/form">
                             {/* Form Glow */}
                             <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none group-hover/form:bg-emerald-500/10 transition-colors duration-500" />
                            
                            {/* Success Overlay */}
                            <AnimatePresence>
                                {formState === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 z-20 bg-[#050505]/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 rounded-3xl"
                                        role="dialog"
                                        aria-labelledby="success-title"
                                        aria-describedby="success-description"
                                    >
                                        <motion.div
                                            initial={{ scale: 0.8, rotate: -10 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center text-4xl mb-6 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                                            aria-hidden="true"
                                        >
                                            ✓
                                        </motion.div>
                                        <h3 id="success-title" className="text-3xl font-manrope font-semibold text-white mb-2">
                                            {t("successTitle")}
                                        </h3>
                                        <p id="success-description" className="text-neutral-300 mb-2">
                                            {t("successDesc")}
                                        </p>
                                        <p className="text-neutral-500 text-sm mb-8">
                                            {t("responseTimeDesc")}
                                        </p>
                                        <button
                                            onClick={() => setFormState("idle")}
                                            className="px-6 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#050505]"
                                        >
                                            {t("sendAnother")}
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="space-y-8 relative z-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2 group">
                                        <label 
                                            htmlFor="name"
                                            className="text-xs font-mono text-neutral-500 uppercase tracking-wider group-focus-within:text-emerald-500 transition-colors"
                                        >
                                            {t("nameLabel")}
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            aria-required="true"
                                            aria-describedby="name-hint"
                                            className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors font-manrope text-lg placeholder:text-neutral-700"
                                            placeholder={t("namePlaceholder")}
                                        />
                                        <span id="name-hint" className="sr-only">Enter your full name</span>
                                    </div>
                                    <div className="space-y-2 group">
                                        <label 
                                            htmlFor="email"
                                            className="text-xs font-mono text-neutral-500 uppercase tracking-wider group-focus-within:text-emerald-500 transition-colors"
                                        >
                                            {t("emailLabel")}
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            aria-required="true"
                                            aria-describedby="email-hint"
                                            className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors font-manrope text-lg placeholder:text-neutral-700"
                                            placeholder={t("emailPlaceholder")}
                                        />
                                        <span id="email-hint" className="sr-only">Enter a valid email address</span>
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label 
                                        htmlFor="projectType"
                                        className="text-xs font-mono text-neutral-500 uppercase tracking-wider group-focus-within:text-emerald-500 transition-colors"
                                    >
                                        {t("projectTypeLabel")}
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors font-manrope text-lg [&>option]:bg-neutral-900"
                                    >
                                        <option value="" disabled>{t("projectTypePlaceholder")}</option>
                                        <option value="web">{t("projectTypeWeb")}</option>
                                        <option value="design">{t("projectTypeDesign")}</option>
                                        <option value="consulting">{t("projectTypeConsulting")}</option>
                                        <option value="other">{t("projectTypeOther")}</option>
                                    </select>
                                </div>

                                <div className="space-y-2 group">
                                    <label 
                                        htmlFor="message"
                                        className="text-xs font-mono text-neutral-500 uppercase tracking-wider group-focus-within:text-emerald-500 transition-colors"
                                    >
                                        {t("messageLabel")}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                        aria-describedby="message-hint"
                                        rows={4}
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors font-manrope text-lg placeholder:text-neutral-700 resize-none"
                                        placeholder={t("messagePlaceholder")}
                                    />
                                    <span id="message-hint" className="sr-only">Describe your project or inquiry</span>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formState === "submitting"}
                                    aria-label={formState === "submitting" ? t("submitting") : t("submitButton")}
                                    className="w-full mt-8 group relative flex items-center justify-center gap-3 bg-white text-black py-4 px-8 rounded-xl font-semibold overflow-hidden transition-transform active:scale-[0.98] disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#050505]"
                                >
                                    <span className={`relative z-10 flex items-center gap-2 ${formState === "submitting" ? "opacity-0" : "opacity-100"}`}>
                                        {t("submitButton")}
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </span>

                                    {/* Loading State */}
                                    {formState === "submitting" && (
                                        <div className="absolute inset-0 flex items-center justify-center z-20">
                                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                                        </div>
                                    )}

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
                                </button>
                            </div>
                        </form>
                    </RevealOnScroll>
                </div>

            </div>
        </section>
    );
};
