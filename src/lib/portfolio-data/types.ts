export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  caseStudy?: ProjectCaseStudy;
  category: ProjectCategory;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProjectCaseStudyHighlight {
  label: string;
  value: string;
  emphasis?: "high" | "medium";
  icon?: string;
}

export interface ProjectCaseStudyLayer {
  title: string;
  icon?: string;
  items: string[];
}

export interface ProjectCaseStudyImplementation {
  title: string;
  icon?: string;
  points: string[];
  result: string;
}

export interface ProjectCaseStudy {
  overview: string[];
  problem: string[];
  solution: string[];
  architecture: {
    title: string;
    layers: ProjectCaseStudyLayer[];
  };
  keyImplementations: ProjectCaseStudyImplementation[];
  achievements: string[];
  demonstrates: string[];
  highlights: ProjectCaseStudyHighlight[];
}

export type ProjectCategory =
  | "Web Dev"
  | "UI/UX"
  | "Research"
  | "Business"
  | "Infrastructure";

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techStack: string[];
  link?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}
