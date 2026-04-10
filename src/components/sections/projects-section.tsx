import { ExpandableSection } from "@/components/expandable-section";
import { ProjectCard } from "@/components/project-card";
import { ProjectFilter } from "@/components/project-filter";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Project, ProjectFilterCategory } from "@/lib/data";

interface ProjectsSectionProps {
  activeFilter: ProjectFilterCategory;
  onFilterChange: (category: ProjectFilterCategory) => void;
  projects: Project[];
}

export function ProjectsSection({
  activeFilter,
  onFilterChange,
  projects,
}: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border/40 bg-muted/20 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/60 bg-card/65 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:p-10">
          <ScrollReveal>
            <SectionHeading
              className="mb-12 text-center"
              eyebrow="My Work"
              title="Projects"
              description="A collection of projects spanning web development, UI/UX design, research, and entrepreneurship."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-10">
              <ProjectFilter active={activeFilter} onChange={onFilterChange} />
            </div>
          </ScrollReveal>

          <ExpandableSection collapsedHeight={600} label="Projects">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.05}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>

            {projects.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-muted-foreground">
                  No projects found in this category.
                </p>
              </div>
            )}
          </ExpandableSection>
        </div>
      </div>
    </section>
  );
}
