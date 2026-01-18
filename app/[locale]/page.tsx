import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

import { Work } from "@/components/Work";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Work />
        <ExperienceSection />
        <ContactForm />
      </main>
    </>
  );
}
