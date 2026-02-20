import Link from "next/link";
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-foreground"
            >
              WH<span className="text-blue-500">.</span>
            </Link>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Winanda Hartadi. All rights
            reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
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
                  className="text-muted-foreground transition-colors hover:text-blue-500"
                  aria-label={link.name}
                >
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
