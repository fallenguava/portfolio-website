import Link from "next/link";
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-border/50 bg-card/70 p-6 shadow-sm md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-foreground"
            >
              WH<span className="text-blue-500">.</span>
            </Link>
            <p className="mt-1 text-xs text-muted-foreground">
              Fullstack Developer crafting scalable and elegant products.
            </p>
          </div>

          <p className="text-center text-xs text-muted-foreground md:text-right">
            &copy; {new Date().getFullYear()} Winanda Hartadi. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
            {socialLinks
              .filter((l) =>
                ["GitHub", "LinkedIn", "Instagram"].includes(l.name),
              )
              .map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-blue-500/50 hover:text-blue-500"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
