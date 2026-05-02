import portrait from "@/assets/portrait.jpg";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-12 grain"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="w-8 h-px bg-primary" />
            Available for opportunities — 2026
          </div>
          <h1 className="font-display font-light text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight text-balance">
            Building <em className="text-primary not-italic font-normal">scalable</em>
            <br />
            systems &amp;<br />
            <span className="italic font-normal">intelligent</span> products.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground">Gaurav Garg</span> — a software engineer working
            across full-stack development, data engineering, and applied AI. Currently at JMAN
            Digital Services, shipping production systems with React, Databricks, and LangChain.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-all"
            >
              View selected work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="/Gaurav_Garg_CV.pdf"
              download
              className="group inline-flex items-center gap-3 px-6 py-3 border border-hairline hover:border-foreground transition-colors"
            >
              Download CV
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
            <a
              href="/Gaurav_Garg_Resume.pdf"
              download
              className="group inline-flex items-center gap-3 px-6 py-3 border border-hairline hover:border-foreground transition-colors"
            >
              Download Resume
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={portrait}
              alt="Gaurav Garg portrait illustration"
              width={1024}
              height={1280}
              className="w-full h-full object-cover grayscale-[20%] contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-background border border-hairline px-4 py-3 font-mono text-xs space-y-1">
            <div className="text-muted-foreground">// currently</div>
            <div>Software Engineer @ JMAN</div>
          </div>
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-3 font-mono text-xs">
            CGPA 8.11 · NPTEL Top 2%
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Scroll ↓
      </div>
    </section>
  );
};
