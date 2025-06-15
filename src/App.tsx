// src/App.tsx
import React from "react";
import { MainSection } from "./components/MainSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { SkillsSection } from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import { ContactSection } from "./components/ContactSection";

const App = () => {
  return (
    <div className="screen">
      <div className="div">
        <MainSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default App;