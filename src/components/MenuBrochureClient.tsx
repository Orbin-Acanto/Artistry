"use client";

import dynamic from "next/dynamic";
import type { MenuBrochureEmbedProps } from "./MenuBrochureEmbed";

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

type Props = Partial<MenuBrochureEmbedProps>;

export default function MenuBrochureClient({
  pdfPath = "/media/pdfs/catering.pdf",
  downloadName = "Tardis-Catering-Menu.pdf",
  label = "Menu",
  variant = "dark",
}: Props = {}) {
  return <MenuBrochureEmbed pdfPath={pdfPath} downloadName={downloadName} label={label} variant={variant} />;
}
