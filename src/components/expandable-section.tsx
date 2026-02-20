"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExpandableSectionProps {
  children: React.ReactNode;
  collapsedHeight?: number;
  label?: string;
}

export function ExpandableSection({
  children,
  collapsedHeight = 400,
  label = "section",
}: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <motion.div
        animate={{ height: expanded ? "auto" : collapsedHeight }}
        initial={{ height: collapsedHeight }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>

      {/* Blurry gradient overlay when collapsed */}
      <AnimatePresence>
        {!expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
            style={{
              background:
                "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 20%, hsl(var(--background) / 0.7) 50%, transparent 100%)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              maskImage:
                "linear-gradient(to top, black 0%, black 60%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, black 0%, black 60%, transparent 100%)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <div
        className={`relative z-10 flex justify-center ${expanded ? "mt-4" : "-mt-6"}`}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="gap-2 border-blue-500/50 bg-background/90 text-blue-500 shadow-md backdrop-blur-sm hover:bg-blue-500 hover:text-white"
        >
          {expanded ? (
            <>
              Show Less
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Show More {label}
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
