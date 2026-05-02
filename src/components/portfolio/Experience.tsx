import { SectionHeader } from "./SectionHeader";

const roles = [
  {
    period: "Feb 2026 — Now",
    company: "JMAN Digital Services",
    role: "Software Engineer",
    location: "Chennai, India",
    bullets: [
      "Full-stack Event Management System with React.js + Node.js and integrated REST APIs",
      "Scalable ELT pipeline on Microsoft Fabric & Databricks (Bronze–Silver–Gold)",
      "Power BI dashboards for revenue, delivery, and promotional analytics",
      "XGBoost churn prediction model achieving AUC 0.99",
      "RAG-based AI Admission Assistant with LangChain, FastAPI & vector search",
    ],
  },
  {
    period: "Dec 2024 — Feb 2025",
    company: "Natural Coders",
    role: "Frontend Developer Intern",
    location: "Remote",
    bullets: [
      "Built responsive e-commerce app with HTML, CSS, JS, Bootstrap (40% faster fetch)",
      "Improved frontend usability by 25% via UX optimization",
      "Delivered features in a 45-day Agile sprint cadence",
    ],
  },
  {
    period: "Jun 2024 — Jul 2024",
    company: "Metacrafters",
    role: "Blockchain Developer Trainee",
    location: "Remote",
    bullets: [
      "Designed & deployed 3+ Solidity dApps with improved transaction security",
      "Worked with MetaMask, Remix, and Web3 tooling for testing & deployment",
    ],
  },
];

const education = [
  { y: "2022 — 2026", t: "B.E. Computer Science", s: "Chandigarh University · CGPA 8.11" },
  { y: "2021 — 2022", t: "Class XII PCM + CS", s: "Dr. R.P. S.D. Sr. Sec. School · 88.4%" },
  { y: "2019 — 2020", t: "Class X", s: "S.V.M. Vidya Mandir · A+" },
];

export const Experience = () => (
  <section id="experience" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
    <SectionHeader
      index="03"
      label="Experience"
      title={
        <>
          Where I've <em className="text-primary not-italic italic">worked</em> &amp; what I've{" "}
          <em className="italic">learned</em>.
        </>
      }
    />

    <div className="grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 space-y-0 border-t border-hairline/60">
        {roles.map((r) => (
          <div key={r.company} className="reveal py-10 border-b border-hairline/60 group">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {r.period}
                <div className="mt-1 text-muted-foreground/70 normal-case tracking-normal">
                  {r.location}
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display text-2xl md:text-3xl font-normal">
                  {r.role}{" "}
                  <span className="text-muted-foreground">— {r.company}</span>
                </h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="text-primary mt-1.5 w-1 h-1 bg-primary rounded-full shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <aside className="lg:col-span-4 space-y-12">
        <div className="reveal">
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Education
          </h4>
          <div className="space-y-5">
            {education.map((e) => (
              <div key={e.t} className="border-l-2 border-primary/40 pl-4">
                <div className="font-mono text-[11px] text-muted-foreground">{e.y}</div>
                <div className="font-display text-lg">{e.t}</div>
                <div className="text-sm text-muted-foreground">{e.s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal bg-surface border border-hairline p-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Honors
          </h4>
          <ul className="space-y-3 text-sm">
            <li>🏆 NPTEL Cloud Computing — Top 2% (All India)</li>
            <li>🎖️ DLL SWAYAM Excellence Award 2024</li>
            <li>⚓ NCC Navy Wing — Leadership & Discipline</li>
            <li>🤝 SAP Hackathon — Organizer Team</li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
);
