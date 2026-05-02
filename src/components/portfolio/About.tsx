import { SectionHeader } from "./SectionHeader";

const skills = {
  Languages: ["C", "C++", "Java", "Python", "JavaScript", "SQL", "Solidity"],
  Frontend: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind"],
  Backend: ["Node.js", "Express", "NestJS", "FastAPI", "REST APIs"],
  "Data & AI": ["Databricks", "Microsoft Fabric", "Power BI", "Pandas", "XGBoost", "LangChain", "ChromaDB"],
  Cloud: ["AWS", "Azure", "Docker", "Terraform", "CI/CD", "Git"],
};

export const About = () => (
  <section id="about" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
    <SectionHeader
      index="01"
      label="About"
      title={
        <>
          A computer science undergrad turning <em className="text-primary not-italic">data</em> and{" "}
          <em className="italic">code</em> into shipped product.
        </>
      }
    />

    <div className="grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 reveal space-y-6 text-muted-foreground leading-relaxed text-lg">
        <p>
          I'm a final-year Computer Science student at{" "}
          <span className="text-foreground">Chandigarh University</span> (CGPA 8.11), currently
          working as a Software Engineer at JMAN Digital Services in Chennai.
        </p>
        <p>
          My work spans the full stack — from React UIs and Node APIs, to Bronze/Silver/Gold data
          pipelines on Microsoft Fabric, to retrieval-augmented AI assistants built with LangChain
          and local LLMs.
        </p>
        <p>
          I care about systems that are <span className="text-foreground">measured</span>,{" "}
          <span className="text-foreground">scalable</span>, and{" "}
          <span className="text-foreground">actually used</span>.
        </p>
        <div className="pt-6 grid grid-cols-3 gap-4 font-mono text-xs">
          <div>
            <div className="text-3xl font-display text-primary">10+</div>
            <div className="text-muted-foreground mt-1 uppercase tracking-wider">Projects</div>
          </div>
          <div>
            <div className="text-3xl font-display text-primary">0.99</div>
            <div className="text-muted-foreground mt-1 uppercase tracking-wider">Model AUC</div>
          </div>
          <div>
            <div className="text-3xl font-display text-primary">3+</div>
            <div className="text-muted-foreground mt-1 uppercase tracking-wider">Years coding</div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 reveal space-y-6">
        {Object.entries(skills).map(([cat, items]) => (
          <div
            key={cat}
            className="grid grid-cols-12 gap-4 py-5 border-b border-hairline/60 group"
          >
            <div className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
              {cat}
            </div>
            <div className="col-span-12 md:col-span-9 flex flex-wrap gap-x-4 gap-y-2">
              {items.map((s) => (
                <span key={s} className="text-foreground/90">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
