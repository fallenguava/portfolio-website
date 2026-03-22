"use client";

import { cn } from "@/lib/utils";
import type { ProjectFilterCategory } from "@/lib/data";
import { projectCategories } from "@/lib/data";

interface ProjectFilterProps {
  active: ProjectFilterCategory;
  onChange: (category: ProjectFilterCategory) => void;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-border/60 bg-card/70 p-2 shadow-sm backdrop-blur-sm">
      {projectCategories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          suppressHydrationWarning
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200",
            active === category
              ? "border-blue-500/60 bg-blue-500 text-white shadow-md shadow-blue-500/25"
              : "border-border/70 bg-background/80 text-muted-foreground hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-foreground",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
