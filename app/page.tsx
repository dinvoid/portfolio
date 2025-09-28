
import Contact from "@/components/nondev/Contact";
import ExperienceSection from "@/components/nondev/ExperienceSection";
import HeroSection from "@/components/nondev/HeroSection";
import ProjectSection from "@/components/nondev/ProjectSection";
import SkillsAndToolsSection from "@/components/nondev/SkillsAndToolsSection";
export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <HeroSection />   
      <ExperienceSection/>
      <ProjectSection/>
      <SkillsAndToolsSection/>
      <Contact/>
    </main>
  );
}
