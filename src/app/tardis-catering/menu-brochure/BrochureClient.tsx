"use client";

import { useRef, useState } from "react";
import { Download, Maximize2, Minimize2, Printer } from "lucide-react";

const PDF_PATH = "/media/pdfs/catering.pdf";

export default function BrochureClient() {
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
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = PDF_PATH;
    document.body.appendChild(iframe);
    iframe.onload = () => {
      iframe.contentWindow?.print();
      setTimeout(() => document.body.removeChild(iframe), 1000);
    };
  };

  return (
    <div ref={containerRef} className="bg-primary-dark">
      <div className="flex items-center justify-end gap-2 px-6 py-3 border-b border-cream/10">
        <button
          onClick={handlePrint}
          aria-label="Print"
          title="Print"
          className="flex items-center gap-2 h-9 px-4 border border-cream/20 text-cream/55 hover:text-cream hover:border-cream/40 font-body text-xs tracking-widest uppercase transition-colors"
        >
          <Printer size={13} /> Print
        </button>
        <button
          onClick={handleFullscreen}
          aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          className="flex items-center gap-2 h-9 px-4 border border-cream/20 text-cream/55 hover:text-cream hover:border-cream/40 font-body text-xs tracking-widest uppercase transition-colors"
        >
          {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          {isFullscreen ? "Exit" : "Fullscreen"}
        </button>
        <a
          href={PDF_PATH}
          download
          className="flex items-center gap-2 h-9 px-4 border border-cream/20 text-cream/55 hover:text-cream hover:border-cream/40 font-body text-xs tracking-widest uppercase transition-colors"
        >
          <Download size={13} /> Download
        </a>
      </div>
      <div className="w-full" style={{ height: "85vh" }}>
        <iframe
          src={`${PDF_PATH}#toolbar=0&navpanes=0&scrollbar=1`}
          className="w-full h-full border-0"
          title="Tardis Catering Sample Menu Brochure"
        />
      </div>
    </div>
  );
}
