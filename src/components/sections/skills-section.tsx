import { ScrollReveal } from "@/components/scroll-reveal";
import { SkillsMarquee } from "@/components/skills-marquee";

export function SkillsSection() {
  return (
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
  );
}
