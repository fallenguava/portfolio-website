"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useJourney } from "@/components/immersive/immersive-shell";
import { cn } from "@/lib/utils";

interface ImmersiveSectionProps {
  id?: string;
  index: number;
  total: number;
  className?: string;
  children: ReactNode;
}

export function ImmersiveSection({
  id,
  index,
  total,
  className,
  children,
}: ImmersiveSectionProps) {
  const { reducedMotion } = useJourney();

  return (
    <motion.section
      id={id}
      data-journey-index={index}
      data-journey-total={total}
      className={cn("journey-section relative", className)}
      initial={reducedMotion ? undefined : { opacity: 0, y: 28 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
