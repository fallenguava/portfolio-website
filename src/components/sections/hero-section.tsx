import Image from "next/image";
import { Download, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { personalInfo } from "@/lib/data";
import type { Project } from "@/lib/data";

interface HeroSectionProps {
  projects: Project[];
}

export function HeroSection({ projects }: HeroSectionProps) {
  const featuredStats = [
    {
      label: "Projects",
      value: `${projects.length}+`,
    },
    {
      label: "Experience",
      value: "1+ year",
    },
    {
      label: "Infra Builds",
      value: `${projects.filter((p) => p.category === "Infrastructure").length}`,
    },
  ];

  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-blue-500/5 via-transparent to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-120 w-120 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1 text-center lg:text-left">
            <ScrollReveal delay={0.1}>
              <div className="mb-5 inline-flex items-center rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-300">
                Open to full-time opportunities
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
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
              <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                {personalInfo.bio}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600"
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

            <ScrollReveal delay={0.5}>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 sm:gap-4 lg:mx-0">
                {featuredStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border/60 bg-card/75 px-3 py-3 text-left shadow-sm backdrop-blur-sm"
                  >
                    <p className="text-lg font-bold text-foreground sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="text-xs font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

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
  );
}
