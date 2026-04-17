import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
  centered = false,
  light = false,
  className,
}: Props) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {label && (
        <p
          className={cn(
            "section-label mb-3",
            light ? "text-cream/60" : "text-primary",
          )}
        >
          {label}
        </p>
      )}
      <h1
        className={cn(
          "font-display text-[clamp(1.75rem,6vw,3.5rem)] leading-tight text-balance break-words uppercase",
          light ? "text-cream" : "text-primary-dark",
        )}
      >
        {title}
      </h1>
      {description && (
        <p
          className={cn(
            "font-body text-sm md:text-base leading-relaxed mt-4 ",
            centered && "mx-auto",
            light ? "text-cream/70" : "text-charcoal/65",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
