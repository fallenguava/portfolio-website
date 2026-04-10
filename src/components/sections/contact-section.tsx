import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { socialLinks } from "@/lib/data";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  Mail: <Mail className="h-5 w-5" />,
  MessageCircle: <MessageCircle className="h-5 w-5" />,
  Linkedin: <Linkedin className="h-5 w-5" />,
  Github: <Github className="h-5 w-5" />,
  Instagram: <Instagram className="h-5 w-5" />,
};

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:p-10">
          <ScrollReveal>
            <SectionHeading
              className="mb-16 text-center"
              eyebrow="Get in Touch"
              title="Contact Me"
              description="Have a question or want to work together? Feel free to reach out!"
            />
          </ScrollReveal>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    Let&apos;s build something great together
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    I&apos;m always open to discussing new projects, creative
                    ideas, or opportunities to be part of your vision. Whether
                    you have a question or just want to say hi, my inbox is
                    always open.
                  </p>
                </div>

                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-lg border border-border/50 bg-card p-4 transition-all duration-200 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                        {iconMap[link.icon]}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {link.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {link.label}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm sm:p-8">
                <h3 className="mb-6 text-lg font-semibold text-foreground">
                  Send me a message
                </h3>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
