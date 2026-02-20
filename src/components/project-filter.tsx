"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ProjectFilterCategory } from "@/lib/data";
import { projectCategories } from "@/lib/data";

interface ProjectFilterProps {
  active: ProjectFilterCategory;
  onChange: (category: ProjectFilterCategory) => void;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {projectCategories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          suppressHydrationWarning
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200",
            active === category
              ? "border-blue-500 bg-blue-500 text-white shadow-md shadow-blue-500/20"
              : "border-border bg-card text-muted-foreground hover:border-blue-500/50 hover:text-foreground",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
