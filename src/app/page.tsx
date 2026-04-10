"use client";

import { useMemo, useState } from "react";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { projects } from "@/lib/data";
import type { ProjectFilterCategory } from "@/lib/data";

export default function HomePage() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilterCategory>("All");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <>
      <HeroSection projects={projects} />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        projects={filteredProjects}
      />
      <ContactSection />
    </>
  );
}
