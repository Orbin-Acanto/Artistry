"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist";
import React from "react";
import { Download, Maximize2, Minimize2, Printer } from "lucide-react";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PDF_PATH = "/media/pdfs/catering.pdf";

type FlipBookApi = {
  flipNext: () => void;
  flipPrev: () => void;
};

type FlipBookRef = {
  pageFlip: () => FlipBookApi | undefined;
};

type FlipEvent = {
  data: number | string;
};

function isFlipEvent(value: unknown): value is FlipEvent {
  if (typeof value !== "object" || value === null || !("data" in value)) {
    return false;
  }

  const { data } = value as { data: unknown };
  return typeof data === "number" || typeof data === "string";
}

const Page = React.forwardRef<HTMLDivElement, { src: string; pageNumber: number }>(
  function Page({ src, pageNumber }, ref) {
    return (
      <div ref={ref} className="relative w-full h-full bg-white">
        <Image
          src={src}
          alt={`Menu page ${pageNumber}`}
          fill
          unoptimized
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
        />
      </div>
    );
  }
);

export default function MenuBrochureEmbed() {
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 500, height: 667 });
  const [isMobile, setIsMobile] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const bookRef = useRef<FlipBookRef | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Render PDF pages to images
  useEffect(() => {
    async function renderPDF() {
      try {
        const pdf = await pdfjsLib.getDocument(PDF_PATH).promise;
        setTotalPages(pdf.numPages);

        const firstPage = await pdf.getPage(1);
        const firstViewport = firstPage.getViewport({ scale: 1 });
        setAspectRatio(firstViewport.height / firstViewport.width);

        const rendered: string[] = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 2.5 });
          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: canvas.getContext("2d")!, viewport }).promise;
          rendered.push(canvas.toDataURL("image/png"));
        }

        setPages(rendered);
        setLoading(false);
      } catch (err) {
        console.error("PDF render error:", err);
        setLoading(false);
      }
    }
    renderPDF();
  }, []);

  // Responsive dimensions
  useEffect(() => {
    if (aspectRatio === null) return;
    function updateSize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const availH = h - 96 - 56;
      const mobile = w < 768;
      setIsMobile(mobile);

      if (mobile) {
        const pw = w - 32;
        const ph = Math.round(pw * aspectRatio!);
        if (ph > availH) {
          setDimensions({ width: Math.round(availH / aspectRatio!), height: availH });
        } else {
          setDimensions({ width: pw, height: ph });
        }
      } else if (w < 1024) {
        const pw = Math.round((w - 120) / 2);
        const ph = Math.round(pw * aspectRatio!);
        if (ph > availH) {
          setDimensions({ width: Math.round(availH / aspectRatio!), height: availH });
        } else {
          setDimensions({ width: pw, height: ph });
        }
      } else {
        const pw = Math.round(Math.min(w - 160, 1400) / 2);
        const ph = Math.round(pw * aspectRatio!);
        if (ph > availH) {
          setDimensions({ width: Math.round(availH / aspectRatio!), height: availH });
        } else {
          setDimensions({ width: pw, height: ph });
        }
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [aspectRatio]);

  // Fullscreen sync
  useEffect(() => {
    const fn = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", fn);
    return () => document.removeEventListener("fullscreenchange", fn);
  }, []);

  const handleFullscreen = () =>
    document.fullscreenElement
      ? document.exitFullscreen()
      : containerRef.current?.requestFullscreen();

  const onFlip = useCallback((event: unknown) => {
    if (isFlipEvent(event) && typeof event.data === "number") {
      setCurrentPage(event.data);
    }
  }, []);

  const goNext = () => bookRef.current?.pageFlip()?.flipNext();
  const goPrev = () => bookRef.current?.pageFlip()?.flipPrev();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const displayPage = isMobile
    ? currentPage + 1
    : currentPage === 0
    ? 1
    : Math.min(currentPage + 1, totalPages);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center bg-primary py-32 gap-4">
        <div className="w-10 h-10 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
        <span className="font-body text-xs tracking-widest uppercase text-cream/50">
          Rendering menu…
        </span>
      </div>
    );
  }

  if (pages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center bg-primary py-24 gap-5">
        <p className="font-body text-sm text-cream/50">Could not load the menu brochure.</p>
        <a
          href={PDF_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 h-9 px-5 border border-cream/30 text-cream/60 hover:text-cream font-body text-xs tracking-widest uppercase transition-colors"
        >
          Open PDF directly
        </a>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative bg-primary overflow-hidden select-none">
      {/* ── Toolbar ── */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-cream/15">
        <span className="font-body text-xs tracking-widest uppercase text-cream/40">
          {displayPage} / {totalPages}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.open(PDF_PATH, "_blank")}
            title="Print"
            className="flex items-center gap-2 h-9 px-4 border border-cream/20 text-cream/55 hover:text-cream hover:border-cream/50 font-body text-xs tracking-widest uppercase transition-colors"
          >
            <Printer size={13} /> Print
          </button>
          <button
            onClick={handleFullscreen}
            title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            className="flex items-center gap-2 h-9 px-4 border border-cream/20 text-cream/55 hover:text-cream hover:border-cream/50 font-body text-xs tracking-widest uppercase transition-colors"
          >
            {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            {isFullscreen ? "Exit" : "Fullscreen"}
          </button>
          <a
            href={PDF_PATH}
            download="Tardis-Catering-Menu.pdf"
            className="flex items-center gap-2 h-9 px-4 border border-cream/20 text-cream/55 hover:text-cream hover:border-cream/50 font-body text-xs tracking-widest uppercase transition-colors"
          >
            <Download size={13} /> Download
          </a>
        </div>
      </div>

      {/* ── Flipbook stage ── */}
      <div className="flex flex-col items-center justify-center py-10 select-none">
        <div className="relative flex items-center justify-center w-full">
          {/* Prev — desktop */}
          <button
            onClick={goPrev}
            className="hidden md:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-cream/10 backdrop-blur-sm rounded-full items-center justify-center text-cream/70 hover:text-cream hover:bg-cream/20 transition-all"
            aria-label="Previous page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <HTMLFlipBook
            ref={bookRef}
            width={dimensions.width}
            height={dimensions.height}
            size="fixed"
            minWidth={dimensions.width}
            maxWidth={dimensions.width}
            minHeight={dimensions.height}
            maxHeight={dimensions.height}
            showCover={true}
            maxShadowOpacity={0.5}
            mobileScrollSupport={false}
            onFlip={onFlip}
            className=""
            style={{}}
            startPage={0}
            drawShadow={true}
            flippingTime={800}
            usePortrait={isMobile}
            startZIndex={0}
            autoSize={false}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            {pages.map((src, i) => (
              <Page key={i} src={src} pageNumber={i + 1} />
            ))}
          </HTMLFlipBook>

          {/* Next — desktop */}
          <button
            onClick={goNext}
            className="hidden md:flex absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-cream/10 backdrop-blur-sm rounded-full items-center justify-center text-cream/70 hover:text-cream hover:bg-cream/20 transition-all"
            aria-label="Next page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile nav + page counter */}
        <div className="flex items-center justify-center gap-6 pt-6">
          <button
            onClick={goPrev}
            className="md:hidden w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center text-cream/70 hover:text-cream transition-all"
            aria-label="Previous page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="font-body text-xs tracking-widest uppercase text-cream/40">
            {displayPage} / {totalPages}
          </span>
          <button
            onClick={goNext}
            className="md:hidden w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center text-cream/70 hover:text-cream transition-all"
            aria-label="Next page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
