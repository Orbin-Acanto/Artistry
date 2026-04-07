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
            light ? "text-cream/60" : "text-primary"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-[56px] text-balance uppercase",
          light ? "text-cream" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "font-body text-base leading-relaxed mt-4 max-w-2xl",
            centered && "mx-auto",
            light ? "text-cream/65" : "text-charcoal/65"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
