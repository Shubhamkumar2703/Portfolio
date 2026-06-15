interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>
    </div>
  );
}