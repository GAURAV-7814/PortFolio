interface Props {
  index: string;
  label: string;
  title: React.ReactNode;
}

export const SectionHeader = ({ index, label, title }: Props) => (
  <div className="reveal mb-16 max-w-4xl">
    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
      <span className="text-primary">{index}</span>
      <span className="w-12 h-px bg-hairline" />
      {label}
    </div>
    <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95] tracking-tight text-balance">
      {title}
    </h2>
  </div>
);
