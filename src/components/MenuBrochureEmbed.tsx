"use client";

import { useRef, useState } from "react";
import { Download, Maximize2, Minimize2, Printer, ExternalLink } from "lucide-react";

const PDF_PATH = "/media/pdfs/catering.pdf";

export default function MenuBrochureEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handlePrint = () => {
    window.open(PDF_PATH, "_blank");
  };

  return (
    <div ref={containerRef} className="bg-primary-dark">
      {/* Toolbar */}
      <div className="flex items-center justify-end gap-2 px-6 py-3 border-b border-cream/10">
        <button
          onClick={handlePrint}
          aria-label="Print"
          title="Open in new tab to print"
          className="flex items-center gap-2 h-9 px-4 border border-cream/20 text-cream/55 hover:text-cream hover:border-cream/40 font-body text-xs tracking-widest uppercase transition-colors"
        >
          <Printer size={13} />
          Print
        </button>
        <button
          onClick={handleFullscreen}
          aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          className="flex items-center gap-2 h-9 px-4 border border-cream/20 text-cream/55 hover:text-cream hover:border-cream/40 font-body text-xs tracking-widest uppercase transition-colors"
        >
          {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          {isFullscreen ? "Exit" : "Fullscreen"}
        </button>
        <a
          href={PDF_PATH}
          download="Tardis-Catering-Menu.pdf"
          className="flex items-center gap-2 h-9 px-4 border border-cream/20 text-cream/55 hover:text-cream hover:border-cream/40 font-body text-xs tracking-widest uppercase transition-colors"
        >
          <Download size={13} />
          Download
        </a>
      </div>

      {/* PDF embed via <object> — works natively in all modern browsers */}
      <div className="w-full" style={{ height: "85vh" }}>
        <object
          data={PDF_PATH}
          type="application/pdf"
          className="w-full h-full"
          aria-label="Tardis Catering Sample Menu Brochure"
        >
          {/* Fallback for browsers without a PDF plugin */}
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <p className="font-body text-sm text-cream/50 text-center max-w-xs leading-relaxed">
              Your browser doesn&apos;t support inline PDF viewing.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-9 px-5 border border-cream/30 text-cream/70 hover:text-cream hover:border-cream/60 font-body text-xs tracking-widest uppercase transition-colors"
              >
                <ExternalLink size={13} />
                Open PDF
              </a>
              <a
                href={PDF_PATH}
                download="Tardis-Catering-Menu.pdf"
                className="flex items-center gap-2 h-9 px-5 border border-cream/30 text-cream/70 hover:text-cream hover:border-cream/60 font-body text-xs tracking-widest uppercase transition-colors"
              >
                <Download size={13} />
                Download
              </a>
            </div>
          </div>
        </object>
      </div>
    </div>
  );
}
