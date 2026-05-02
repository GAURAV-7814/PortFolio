const items = [
  "Full Stack",
  "Data Engineering",
  "Machine Learning",
  "RAG & Agentic AI",
  "Power BI",
  "React.js",
  "Databricks",
  "Microsoft Fabric",
  "LangChain",
  "Solidity",
];

export const Marquee = () => (
  <div className="border-y border-hairline/60 py-6 overflow-hidden bg-surface">
    <div className="flex marquee-track gap-12 whitespace-nowrap font-display text-3xl md:text-5xl">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center gap-12">
          <span className={i % 3 === 0 ? "text-primary italic" : "text-foreground"}>{item}</span>
          <span className="text-muted-foreground">✦</span>
        </span>
      ))}
    </div>
  </div>
);
