import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    github:"https://github.com/sk-Asfar-ali/EventManagement/tree/deploy",
    title: "Event Management System",
    tag: "Full Stack · DevOps",
    desc: "Production-ready event platform with React, NestJS, Docker containerization, Terraform IaC, and Azure deployment via CI/CD pipelines.",
    stack: ["React", "NestJS", "Docker", "Terraform", "Azure"],
    accent: "primary",
  },
  {
    n: "02",
    github:"https://github.com/GAURAV-7814",
    title: "Retail ELT Data Pipeline",
    tag: "Data Engineering",
    desc: "Bronze–Silver–Gold lakehouse architecture on Microsoft Fabric & Databricks. Multi-source ingestion, schema enforcement, and KPI generation with PySpark.",
    stack: ["Microsoft Fabric", "Databricks", "PySpark", "SQL"],
    accent: "accent",
  },
  {
    n: "03",
    github:"https://github.com/GAURAV-7814/AI_assesment/tree/main/College-Admission-Assistant",
    title: "AI College Admission Assistant",
    tag: "RAG · Agentic AI",
    desc: "Retrieval-augmented assistant with LangChain, ChromaDB vector search, and local Ollama LLMs. FastAPI backend serving real-time intelligent responses.",
    stack: ["LangChain", "FastAPI", "ChromaDB", "Ollama"],
    accent: "primary",
  },
  {
    n: "04",
    github:"https://github.com/Slegendz/churn-prediction-project",
    title: "Pre-Renewal Churn Prediction",
    tag: "Machine Learning",
    desc: "XGBoost classifier achieving AUC 0.99 on imbalanced data using SMOTE. End-to-end EDA, feature engineering, and actionable churn driver analysis.",
    stack: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
    accent: "accent",
  },
  {
    n: "05",
    github:"https://github.com/GAURAV-7814/Power-BI",
    title: "Power BI Retail Dashboards",
    tag: "Business Intelligence",
    desc: "Interactive dashboards for revenue trends, delivery performance, and promotional impact. DAX measures, drill-downs, and centralized KPI reporting.",
    stack: ["Power BI", "DAX", "SQL"],
    accent: "primary",
  },
  {
    n: "06",
    github:"https://github.com/GAURAV-7814/POLY_PROOF_ADVANCED_MODULE_1_PROJECT",
    title: "Web3 Decentralized Apps",
    tag: "Blockchain",
    desc: "4+ Solidity smart contracts deployed via Hardhat & Remix. Wallet integration with MetaMask and secure on-chain transaction handling.",
    stack: ["Solidity", "Web3.js", "Hardhat", "MetaMask"],
    accent: "accent",
  },
];

export const Work = () => (
  <section id="work" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
    <SectionHeader
      index="02"
      label="Selected Work"
      title={
        <>
          Recent <em className="text-primary not-italic">projects</em> across stack, data, and AI.
        </>
      }
    />

    <div className="space-y-0 border-t border-hairline/60">
      {projects.map((p) => (
        <a
          key={p.n}
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="reveal group block border-b border-hairline/60 py-10 transition-colors hover:bg-surface/60"
        >
          <div className="grid grid-cols-12 gap-6 items-start px-2">
            <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground pt-2">
              {p.n}
            </div>
            <div className="col-span-10 md:col-span-5">
              <h3 className="font-display text-3xl md:text-5xl font-light leading-tight tracking-tight group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <div className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {p.tag}
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 text-muted-foreground leading-relaxed">
              {p.desc}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono px-2 py-1 border border-hairline/80 text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-1 flex md:justify-end pt-2">
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);
