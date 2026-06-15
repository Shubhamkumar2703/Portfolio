
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ProjectsSection from "@/components/sections/projects-section";
import ContactSection from "@/components/sections/contact-section";
import BackgroundGrid from "@/components/animations/background-grid";
import CursorGlow from "@/components/animations/cursor-glow";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CursorGlow />
      <BackgroundGrid />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
