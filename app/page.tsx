import Intro from "./intro/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import SectionHeader from "./components/SectionHeader";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GitStream from "./components/GitStreamOverlay";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section id="intro" className="min-h-screen flex items-center justify-center">
        <Intro />
      </section>
      
      <section id="skills" className="min-h-screen py-24">
        <SectionHeader title="Skills" />
        <Skills />
      </section>
      
      <section id="projects" className="min-h-screen py-24">
        <SectionHeader title="Projects" />
        <div className="max-w-7xl mx-auto">
          <Projects />
        </div>
      </section>
      
      <section id="open-source" className="min-h-screen py-24">
        <SectionHeader title="Open Source" />
        <div className="max-w-7xl mx-auto w-full px-4 flex justify-center">
          <GitStream />
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
