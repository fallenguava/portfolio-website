"use client";

import dynamic from "next/dynamic";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type JourneyContextValue = {
  reducedMotion: boolean;
};

const JourneyContext = createContext<JourneyContextValue>({
  reducedMotion: false,
});

const ImmersiveScene = dynamic(
  () =>
    import("@/components/immersive/scene-canvas").then((m) => m.SceneCanvas),
  { ssr: false },
);

function detectReducedMotion() {
  if (typeof window === "undefined") {
    return false;
  }

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const lowConcurrency = (navigator.hardwareConcurrency ?? 8) <= 6;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const lowMemory = (navigator as Navigator & { deviceMemory?: number })
    .deviceMemory
    ? (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 6
    : false;

  return prefersReduced || lowConcurrency || coarsePointer || lowMemory;
}

export function useJourney() {
  return useContext(JourneyContext);
}

interface ImmersiveShellProps {
  children: ReactNode;
}

function detectDarkTheme() {
  if (typeof document === "undefined") {
    return false;
  }

  return document.documentElement.classList.contains("dark");
}

export function ImmersiveShell({ children }: ImmersiveShellProps) {
  const [reducedMotion] = useState(() => detectReducedMotion());
  const [isDarkTheme, setIsDarkTheme] = useState(() => detectDarkTheme());

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDarkTheme(root.classList.contains("dark"));
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    let rafId: number | null = null;

    const emitProgress = () => {
      const maxScroll = Math.max(root.scrollHeight - window.innerHeight, 1);
      const nextProgress = Math.min(window.scrollY / maxScroll, 1);

      root.style.setProperty("--journey-progress", nextProgress.toFixed(4));
      window.dispatchEvent(
        new CustomEvent("journey:progress", { detail: nextProgress }),
      );
      rafId = null;
    };

    const scheduleProgress = () => {
      if (rafId !== null) {
        return;
      }
      rafId = window.requestAnimationFrame(emitProgress);
    };

    emitProgress();

    window.addEventListener("scroll", scheduleProgress, { passive: true });
    window.addEventListener("resize", scheduleProgress);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", scheduleProgress);
      window.removeEventListener("resize", scheduleProgress);
    };
  }, []);

  const value = useMemo(() => ({ reducedMotion }), [reducedMotion]);

  return (
    <JourneyContext.Provider value={value}>
      <div className="relative">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          {reducedMotion || !isDarkTheme ? (
            <div className="journey-fallback h-full w-full" />
          ) : (
            <ImmersiveScene />
          )}
          <div className="journey-grid absolute inset-0" />
          <div className="journey-grain absolute inset-0" />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    </JourneyContext.Provider>
  );
}
