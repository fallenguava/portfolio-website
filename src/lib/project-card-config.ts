import {
  Activity,
  BriefcaseBusiness,
  Boxes,
  Database,
  DollarSign,
  FlaskConical,
  Gauge,
  GitBranch,
  Lock,
  Palette,
  Radar,
  Server,
  ServerCog,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Project } from "@/lib/data";

export type CategoryVisual = {
  icon: LucideIcon;
  headerClass: string;
  accentTextClass: string;
  badgeClass: string;
  hoverBorderClass: string;
  hoverShadowClass: string;
  panelClass: string;
};

export const categoryVisuals: Record<Project["category"], CategoryVisual> = {
  "Web Dev": {
    icon: Server,
    headerClass: "bg-linear-to-r from-sky-500/15 via-sky-500/5 to-transparent",
    accentTextClass: "text-sky-600 dark:text-sky-400",
    badgeClass:
      "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300",
    hoverBorderClass: "hover:border-sky-500/50",
    hoverShadowClass: "hover:shadow-sky-500/10",
    panelClass: "border-sky-500/20 bg-sky-500/5",
  },
  "UI/UX": {
    icon: Palette,
    headerClass:
      "bg-linear-to-r from-rose-500/15 via-rose-500/5 to-transparent",
    accentTextClass: "text-rose-600 dark:text-rose-400",
    badgeClass:
      "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300",
    hoverBorderClass: "hover:border-rose-500/50",
    hoverShadowClass: "hover:shadow-rose-500/10",
    panelClass: "border-rose-500/20 bg-rose-500/5",
  },
  Research: {
    icon: FlaskConical,
    headerClass:
      "bg-linear-to-r from-emerald-500/15 via-emerald-500/5 to-transparent",
    accentTextClass: "text-emerald-600 dark:text-emerald-400",
    badgeClass:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    hoverBorderClass: "hover:border-emerald-500/50",
    hoverShadowClass: "hover:shadow-emerald-500/10",
    panelClass: "border-emerald-500/20 bg-emerald-500/5",
  },
  Business: {
    icon: BriefcaseBusiness,
    headerClass:
      "bg-linear-to-r from-amber-500/20 via-amber-500/5 to-transparent",
    accentTextClass: "text-amber-600 dark:text-amber-400",
    badgeClass:
      "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
    hoverBorderClass: "hover:border-amber-500/50",
    hoverShadowClass: "hover:shadow-amber-500/10",
    panelClass: "border-amber-500/20 bg-amber-500/5",
  },
  Infrastructure: {
    icon: Server,
    headerClass:
      "bg-linear-to-r from-indigo-500/15 via-indigo-500/5 to-transparent",
    accentTextClass: "text-indigo-600 dark:text-indigo-400",
    badgeClass:
      "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
    hoverBorderClass: "hover:border-indigo-500/50",
    hoverShadowClass: "hover:shadow-indigo-500/10",
    panelClass: "border-indigo-500/20 bg-indigo-500/5",
  },
};

export const caseStudyIconMap: Record<string, LucideIcon> = {
  Activity,
  Boxes,
  Database,
  DollarSign,
  Gauge,
  GitBranch,
  Lock,
  Radar,
  ServerCog,
  ShieldCheck,
  Workflow,
  Wrench,
};
