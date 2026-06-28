import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import CursorFollower from "@/components/ui/CursorFollower";
import AIWidget from "@/components/ui/AIWidget";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Backgrounds */}
      <div className="grid-overlay" />
      <ParticleCanvas />

      {/* Glow orbs */}
      <div className="orb w-[400px] h-[400px] top-[-100px] left-[-100px]" style={{ background: "#2563EB" }} />
      <div className="orb w-[300px] h-[300px] bottom-[-50px] right-[-50px]" style={{ background: "#4F46E5", animationDelay: "-4s" }} />
      <div className="orb w-[200px] h-[200px]" style={{ background: "#06B6D4", top: "40%", left: "40%", animationDelay: "-2s" }} />

      {/* Cursor */}
      <CursorFollower />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* AI Widget */}
      <AIWidget />
    </main>
  );
}
