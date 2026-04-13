"use client";

import dynamic from "next/dynamic";

const MenuBrochureEmbed = dynamic(() => import("./MenuBrochureEmbed"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center bg-primary-dark py-32 gap-4">
      <div className="w-10 h-10 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
      <span className="font-body text-xs tracking-widest uppercase text-cream/40">
        Rendering menu…
      </span>
    </div>
  ),
});

export default function MenuBrochureClient() {
  return <MenuBrochureEmbed />;
}
