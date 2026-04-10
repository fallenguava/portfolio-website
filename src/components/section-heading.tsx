interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-muted-foreground">{description}</p>
    </div>
  );
}
