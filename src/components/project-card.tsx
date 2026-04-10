"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Github,
  Server,
  ServerCog,
  Workflow,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";
import { caseStudyIconMap, categoryVisuals } from "@/lib/project-card-config";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const [showTechnicalDepth, setShowTechnicalDepth] = useState(false);
  const visual = categoryVisuals[project.category];
  const CategoryIcon = visual.icon;
  const caseStudy = project.caseStudy;

  return (
    <>
      <Card
        className={cn(
          "group cursor-pointer overflow-hidden border-border/50 bg-card transition-all duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2",
          visual.hoverBorderClass,
          visual.hoverShadowClass,
        )}
        role="button"
        tabIndex={0}
        aria-label={`Open ${project.title} details`}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <div
          className={cn(
            "border-b border-border/60 px-5 py-4",
            visual.headerClass,
          )}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 bg-background/80">
                <CategoryIcon
                  className={cn("h-4 w-4", visual.accentTextClass)}
                />
              </span>
              <Badge
                variant="outline"
                className={cn("font-medium", visual.badgeClass)}
              >
                {project.category}
              </Badge>
            </div>
            <span
              className={cn(
                "text-xs font-medium text-muted-foreground transition-colors",
                visual.accentTextClass,
              )}
            >
              View details
            </span>
          </div>
        </div>

        <CardHeader className="pb-3">
          <CardTitle
            className={cn(
              "line-clamp-1 text-lg transition-colors",
              visual.accentTextClass,
            )}
          >
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-sm">
            {project.shortDescription}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="mb-3 text-xs text-muted-foreground">
            {project.techStack.length} technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-normal"
              >
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 3 && (
              <Badge variant="secondary" className="text-xs font-normal">
                +{project.techStack.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Dialog (Modal) */}
      <Dialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) {
            setShowTechnicalDepth(false);
          }
        }}
      >
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl">{project.title}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {project.category}
            </DialogDescription>
          </DialogHeader>

          <div
            className={cn(
              "grid gap-3 rounded-lg border p-4 text-sm sm:grid-cols-2",
              visual.panelClass,
            )}
          >
            <div>
              <p className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">
                Category
              </p>
              <div className="flex items-center gap-2">
                <CategoryIcon
                  className={cn("h-4 w-4", visual.accentTextClass)}
                />
                <p className="font-medium text-foreground">
                  {project.category}
                </p>
              </div>
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">
                Tech Stack Size
              </p>
              <p className="font-medium text-foreground">
                {project.techStack.length} technologies
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {caseStudy ? (
              <div className="space-y-4">
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {caseStudy.highlights.map((highlight) => {
                    const HighlightIcon =
                      highlight.icon && caseStudyIconMap[highlight.icon]
                        ? caseStudyIconMap[highlight.icon]
                        : ServerCog;

                    return (
                      <div
                        key={highlight.label}
                        className={cn(
                          "rounded-lg border p-3",
                          highlight.emphasis === "high"
                            ? visual.panelClass
                            : "border-border/60 bg-muted/30",
                        )}
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <HighlightIcon
                            className={cn("h-4 w-4", visual.accentTextClass)}
                          />
                          <p className="text-xs text-muted-foreground">
                            {highlight.label}
                          </p>
                        </div>
                        <p className="text-sm font-semibold text-foreground">
                          {highlight.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-lg border border-border/60 bg-card/70 p-4">
                    <h4 className="mb-2 text-sm font-semibold text-foreground">
                      Overview
                    </h4>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {caseStudy.overview.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg border border-border/60 bg-card/70 p-4">
                    <h4 className="mb-2 text-sm font-semibold text-foreground">
                      Problem
                    </h4>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {caseStudy.problem.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg border border-border/60 bg-card/70 p-4">
                    <h4 className="mb-2 text-sm font-semibold text-foreground">
                      Solution
                    </h4>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {caseStudy.solution.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTechnicalDepth((prev) => !prev)}
                  className="w-full"
                >
                  {showTechnicalDepth ? (
                    <>
                      <ChevronUp className="mr-2 h-4 w-4" />
                      Hide technical depth
                    </>
                  ) : (
                    <>
                      <ChevronDown className="mr-2 h-4 w-4" />
                      View technical depth
                    </>
                  )}
                </Button>

                {showTechnicalDepth && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-foreground">
                        {caseStudy.architecture.title}
                      </h4>
                      <div className="grid gap-3 md:grid-cols-2">
                        {caseStudy.architecture.layers.map((layer) => {
                          const LayerIcon =
                            layer.icon && caseStudyIconMap[layer.icon]
                              ? caseStudyIconMap[layer.icon]
                              : Server;

                          return (
                            <div
                              key={layer.title}
                              className="rounded-lg border border-border/60 bg-muted/25 p-4"
                            >
                              <div className="mb-2 flex items-center gap-2">
                                <LayerIcon
                                  className={cn(
                                    "h-4 w-4",
                                    visual.accentTextClass,
                                  )}
                                />
                                <p className="text-sm font-semibold text-foreground">
                                  {layer.title}
                                </p>
                              </div>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                {layer.items.map((item) => (
                                  <li key={item}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-foreground">
                        Key Implementations
                      </h4>
                      <div className="grid gap-3 md:grid-cols-2">
                        {caseStudy.keyImplementations.map((implementation) => {
                          const ImplementationIcon =
                            implementation.icon &&
                            caseStudyIconMap[implementation.icon]
                              ? caseStudyIconMap[implementation.icon]
                              : Workflow;

                          return (
                            <div
                              key={implementation.title}
                              className="rounded-lg border border-border/60 bg-card/70 p-4"
                            >
                              <div className="mb-2 flex items-center gap-2">
                                <ImplementationIcon
                                  className={cn(
                                    "h-4 w-4",
                                    visual.accentTextClass,
                                  )}
                                />
                                <p className="text-sm font-semibold text-foreground">
                                  {implementation.title}
                                </p>
                              </div>
                              <ul className="mb-3 space-y-1 text-sm text-muted-foreground">
                                {implementation.points.map((point) => (
                                  <li key={point}>• {point}</li>
                                ))}
                              </ul>
                              <p className="text-sm font-medium text-foreground">
                                Result: {implementation.result}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-lg border border-border/60 bg-card/70 p-4">
                        <h4 className="mb-2 text-sm font-semibold text-foreground">
                          Achievements
                        </h4>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          {caseStudy.achievements.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg border border-border/60 bg-card/70 p-4">
                        <h4 className="mb-2 text-sm font-semibold text-foreground">
                          What This Demonstrates
                        </h4>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          {caseStudy.demonstrates.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">
                {project.longDescription}
              </p>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-2">
              {project.liveUrl && (
                <Button asChild size="sm">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
