import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpandableSection } from "@/components/expandable-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Separator } from "@/components/ui/separator";
import { education, experiences } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:p-10">
          <ScrollReveal>
            <SectionHeading
              className="mb-16 text-center"
              eyebrow="Get to know me"
              title="About Me"
              description="A passionate Computer Science student with hands-on experience building production-grade systems in Agile environments."
            />
          </ScrollReveal>

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
              <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block" />

              {experiences.map((exp, index) => (
                <ScrollReveal key={exp.id} delay={index * 0.15}>
                  <div className="relative mb-8 md:pl-12">
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
      </div>
    </section>
  );
}
