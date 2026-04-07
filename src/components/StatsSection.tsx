"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const venueStats = [
  { value: 40, suffix: "+", label: "Acres of Estate Grounds" },
  { value: 500, suffix: "+", label: "Guests Accommodated" },
  { value: 4, suffix: "", label: "Distinct Event Spaces" },
  { value: 100, suffix: "+", label: "Events Each Year" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      // Ease out expo
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function Stat({
  value,
  suffix,
  label,
  index,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
  active: boolean;
}) {
  const count = useCountUp(value, 1.8, active);

  return (
    <motion.div
      className="text-center relative"
      initial={{ opacity: 0, y: 32 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* Divider line between items (hidden on first) */}
      {index > 0 && (
        <motion.div
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-cream/15"
          initial={{ scaleY: 0 }}
          animate={active ? { scaleY: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.3 }}
        />
      )}

      <p className="font-display text-6xl md:text-7xl text-cream tabular-nums leading-none tracking-tight">
        {count}
        <span className="text-cream/50">{suffix}</span>
      </p>
      <p className="font-body text-[11px] tracking-[0.25em] uppercase text-cream/45 mt-3">
        {label}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="bg-primary py-12 px-6 overflow-hidden">
      {/* Top rule that draws in */}
      <div className="max-w-8xl mx-auto">
        <motion.div
          className="h-px bg-cream/15 mb-16"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {venueStats.map((stat, i) => (
            <Stat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={i}
              active={isInView}
            />
          ))}
        </div>

        {/* Bottom rule */}
        <motion.div
          className="h-px bg-cream/15 mt-16"
          initial={{ scaleX: 0, originX: 1 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        />
      </div>
    </section>
  );
}
