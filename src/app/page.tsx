"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Download,
  MessageCircle,
  User,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SkillsMarquee } from "@/components/skills-marquee";
import { ExpandableSection } from "@/components/expandable-section";
import { ProjectCard } from "@/components/project-card";
import { ProjectFilter } from "@/components/project-filter";
import { ContactForm } from "@/components/contact-form";
import {
  personalInfo,
  projects,
  education,
  experiences,
  socialLinks,
} from "@/lib/data";
import type { ProjectFilterCategory } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Mail: <Mail className="h-5 w-5" />,
  MessageCircle: <MessageCircle className="h-5 w-5" />,
  Linkedin: <Linkedin className="h-5 w-5" />,
  Github: <Github className="h-5 w-5" />,
  Instagram: <Instagram className="h-5 w-5" />,
};

export default function HomePage() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilterCategory>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section id="home" className="relative scroll-mt-20 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-blue-500/5 via-transparent to-transparent" />

        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <ScrollReveal delay={0.1}>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {personalInfo.greeting}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="mb-6 text-xl font-medium text-blue-500 sm:text-2xl">
                  {personalInfo.tagline}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                  {personalInfo.bio}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-500 text-white hover:bg-blue-600"
                  >
                    <a href={personalInfo.cvUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
                  >
                    <a href="#contact">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact Me
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="text-muted-foreground hover:text-blue-500"
                  >
                    <a href="#about">
                      <User className="mr-2 h-4 w-4" />
                      About Me
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Portrait */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative h-56 w-56 shrink-0 overflow-hidden rounded-full border-4 border-blue-500/20 shadow-xl shadow-blue-500/10 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                <Image
                  src="/images/portrait.jpg"
                  alt="Winanda Hartadi"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Skills Marquee ===== */}
      <section className="border-y border-border/40 bg-muted/30 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Technologies I Work With
            </p>
          </ScrollReveal>
          <SkillsMarquee />
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                Get to know me
              </p>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
                About Me
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                A passionate Computer Science student with hands-on experience
                building production-grade systems in Agile environments.
              </p>
            </div>
          </ScrollReveal>

          {/* Education */}
          <div className="mb-16">
            <ScrollReveal>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Education
                </h3>
              </div>
            </ScrollReveal>

            {education.map((edu, index) => (
              <ScrollReveal key={edu.id} delay={index * 0.1} className="py-2">
                <Card className="border-border/50 bg-card">
                  <CardHeader>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <p className="text-sm font-medium text-blue-500">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <Separator className="mb-16" />

          {/* Experience (Expandable) */}
          <ScrollReveal>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                <Briefcase className="h-5 w-5 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </div>
          </ScrollReveal>

          <ExpandableSection collapsedHeight={500} label="Experiences">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block" />

              {experiences.map((exp, index) => (
                <ScrollReveal key={exp.id} delay={index * 0.15}>
                  <div className="relative mb-8 md:pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-2.5 top-6 hidden h-3 w-3 rounded-full border-2 border-blue-500 bg-background md:block" />

                    <Card className="border-border/50 bg-card">
                      <CardHeader>
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <CardTitle className="text-lg">
                              {exp.role}
                            </CardTitle>
                            <p className="text-sm font-medium text-blue-500">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex flex-col items-start gap-1 sm:items-end">
                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                              <Calendar className="h-3.5 w-3.5" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.techStack.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ExpandableSection>
        </div>
      </section>

      {/* ===== Projects Section ===== */}
      <section
        id="projects"
        className="scroll-mt-20 border-t border-border/40 bg-muted/20 py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                My Work
              </p>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
                Projects
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                A collection of projects spanning web development, UI/UX design,
                research, and entrepreneurship.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-10">
              <ProjectFilter active={activeFilter} onChange={setActiveFilter} />
            </div>
          </ScrollReveal>

          <ExpandableSection collapsedHeight={600} label="Projects">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.05}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-muted-foreground">
                  No projects found in this category.
                </p>
              </div>
            )}
          </ExpandableSection>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                Get in Touch
              </p>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
                Contact Me
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Have a question or want to work together? Feel free to reach
                out!
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Info & Social */}
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    Let&apos;s build something great together
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    I&apos;m always open to discussing new projects, creative
                    ideas, or opportunities to be part of your vision. Whether
                    you have a question or just want to say hi, my inbox is
                    always open.
                  </p>
                </div>

                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-lg border border-border/50 bg-card p-4 transition-all duration-200 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                        {iconMap[link.icon]}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {link.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {link.label}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right Side - Contact Form */}
            <ScrollReveal direction="right">
              <div className="rounded-xl border border-border/50 bg-card p-6 shadow-sm sm:p-8">
                <h3 className="mb-6 text-lg font-semibold text-foreground">
                  Send me a message
                </h3>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
