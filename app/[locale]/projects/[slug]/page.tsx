"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { useTranslations } from "next-intl";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ImageGallery } from "@/components/ImageGallery";
import { getProjectBySlug, getNextProject } from "@/data/projects";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const t = useTranslations("Project");

  // Decoded slug to handle encoded characters
  const decodedSlug = decodeURIComponent(slug);
  const project = useMemo(() => getProjectBySlug(decodedSlug), [decodedSlug]);
  const nextProject = useMemo(() => getNextProject(decodedSlug), [decodedSlug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030303]">
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold text-white mb-4">{t("projectNotFound")}</h1>
          <Link
            href="/#work"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            {t("returnHome")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#030303] pt-32 pb-20 relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Back Link */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white mb-12 transition-colors font-mono"
          >
            <span aria-hidden>←</span> {t("backToProjects")}
          </Link>

          {/* Hero Content */}
          <RevealOnScroll>
            <div className="flex flex-col gap-6 mb-16 max-w-4xl">
              <span className="text-emerald-400 font-mono text-xs uppercase tracking-wider">
                {project.category}
              </span>

              <h1 className="font-manrope text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                {project.title}
              </h1>

              <p className="text-neutral-300 text-xl lg:text-2xl max-w-3xl leading-relaxed font-light mt-4">
                {project.overview}
              </p>
            </div>
          </RevealOnScroll>

          {/* Photo Grid Section with Lightbox */}
          <RevealOnScroll>
             <ImageGallery images={project.images} title={project.title} />
          </RevealOnScroll>

          {/* Live Link Button */}
          {project.links.live && (
            <RevealOnScroll>
              <div className="mb-20 flex justify-center md:justify-start">
                 <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-neutral-200 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {t("viewLive")}
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </div>
            </RevealOnScroll>
          )}

          {/* What I Built */}
          <RevealOnScroll>
            <div className="max-w-2xl">
              <h2 className="font-manrope text-2xl font-semibold text-white mb-8">
                {t("whatIBuilt")}
              </h2>
              
              <ul className="space-y-4 mb-10">
                {project.built.slice(0, 5).map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-neutral-300">
                    <span className="text-emerald-400 mt-2 text-[10px]">●</span>
                    <span className="leading-relaxed text-lg text-neutral-300/90 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400 font-mono hover:bg-white/10 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Minimal Next Project Navigation */}
          {nextProject && (
            <RevealOnScroll>
               <div className="mt-32 pt-16 border-t border-white/5">
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-4">{t("upNext")}</p>
                <Link 
                  href={`/projects/${nextProject.slug}`}
                  className="group block"
                >
                  <h3 className="text-3xl lg:text-4xl font-manrope font-semibold text-white group-hover:text-emerald-400 transition-colors inline-flex items-center gap-4">
                    {nextProject.title}
                    <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-2xl">→</span>
                  </h3>
                  <p className="text-neutral-500 mt-2 text-sm">{nextProject.category}</p>
                </Link>
               </div>
            </RevealOnScroll>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
