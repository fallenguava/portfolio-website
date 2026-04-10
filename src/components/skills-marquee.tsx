"use client";

import { skills } from "@/lib/data";
import { skillIcons } from "@/lib/skill-icons";

export function SkillsMarquee() {
  const doubledSkills = [...skills, ...skills];

  return (
    <div
      className="relative overflow-hidden py-3"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      {/* Scrolling row */}
      <div className="flex animate-marquee gap-8">
        {doubledSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-border/50 bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-blue-500/50 hover:text-blue-500"
          >
            <span className="text-muted-foreground">
              {skillIcons[skill.icon] || (
                <div className="h-6 w-6 rounded bg-muted" />
              )}
            </span>
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
