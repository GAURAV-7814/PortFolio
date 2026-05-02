import { SectionHeader } from "./SectionHeader";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const links = [
  { icon: Mail, label: "gaurav781460@gmail.com", href: "mailto:gaurav781460@gmail.com" },
  { icon: Phone, label: "+91 78146 05521", href: "tel:+917814605521" },
  { icon: Github, label: "github.com/GAURAV-7814", href: "https://github.com/GAURAV-7814" },
  { icon: Linkedin, label: "linkedin.com/in/gaurav", href: "https://linkedin.com" },
];

export const Contact = () => (
  <section id="contact" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
    <SectionHeader
      index="04"
      label="Contact"
      title={
        <>
          Let's build something <em className="text-primary not-italic italic">together</em>.
        </>
      }
    />

    <div className="grid lg:grid-cols-12 gap-12 items-end">
      <div className="lg:col-span-7 reveal">
        <p className="text-2xl md:text-3xl font-display font-light leading-snug text-muted-foreground text-balance">
          Open to <span className="text-foreground">full-time roles</span> in software, full-stack,
          and data/AI. Available for{" "}
          <span className="text-foreground">on-site, hybrid, and remote</span> opportunities — and
          willing to relocate.
        </p>

        <a
          href="mailto:gaurav781460@gmail.com"
          className="group mt-10 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary hover:text-foreground transition-colors whitespace-nowrap"
        >
          <span>gaurav781460<span className="text-foreground">@gmail.com</span></span>
          <span className="text-xl md:text-2xl transition-transform group-hover:translate-x-2 group-hover:-translate-y-1">↗</span>
        </a>
      </div>

      <div className="lg:col-span-5 reveal space-y-3">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="flex items-center justify-between gap-4 px-5 py-4 border border-hairline hover:border-primary hover:bg-surface transition-all group"
          >
            <span className="flex items-center gap-3">
              <l.icon className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm">{l.label}</span>
            </span>
            <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
              →
            </span>
          </a>
        ))}
      </div>
    </div>

    <footer className="mt-32 pt-8 border-t border-hairline/60 flex flex-col md:flex-row justify-between gap-4 font-mono text-xs text-muted-foreground">
      <div>© 2026 Gaurav Garg — Crafted with care.</div>
      <div className="flex gap-6">
        <span>Punjab → Chennai → World</span>
        <span className="cursor-blink">v2.0</span>
      </div>
    </footer>
  </section>
);
