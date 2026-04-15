"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist";
import React from "react";
import { Download, Maximize2, Minimize2, Printer } from "lucide-react";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

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

const Page = React.forwardRef<
  HTMLDivElement,
  { src: string; pageNumber: number; label: string }
>(function Page({ src, pageNumber, label }, ref) {
  return (
    <div ref={ref} className="relative w-full h-full bg-white">
      <Image
        src={src}
        alt={`${label} page ${pageNumber}`}
        fill
        unoptimized
        sizes="(max-width: 767px) 100vw, 50vw"
        className="object-cover"
        draggable={false}
      />
    </div>
  );
});

export interface MenuBrochureEmbedProps {
  pdfPath: string;
  downloadName: string;
  label?: string;
  /** "dark" = bg-primary with cream text (default, used on catering page)
   *  "light" = bg-cream with charcoal/primary text (used on brochure pages) */
  variant?: "dark" | "light";
}

export default function MenuBrochureEmbed({
  pdfPath,
  downloadName,
  label = "Brochure",
  variant = "dark",
}: MenuBrochureEmbedProps) {
  const t = variant === "light"
    ? {
        bg: "bg-cream",
        border: "border-primary/15",
        pageCount: "text-primary/40",
        btnBorder: "border-primary/20",
        btnText: "text-primary/55",
        btnHoverText: "hover:text-primary",
        btnHoverBorder: "hover:border-primary/50",
        navBtn: "bg-primary/10",
        navBtnHover: "hover:bg-primary/20",
        navIcon: "text-primary/70",
        navIconHover: "hover:text-primary",
        spinBorder: "border-primary/30 border-t-primary",
        loadingText: "text-primary/40",
        errorText: "text-primary/50",
        errorLinkBorder: "border-primary/30",
        errorLinkText: "text-primary/60",
        errorLinkHover: "hover:text-primary",
      }
    : {
        bg: "bg-primary",
        border: "border-cream/15",
        pageCount: "text-cream/40",
        btnBorder: "border-cream/20",
        btnText: "text-cream/55",
        btnHoverText: "hover:text-cream",
        btnHoverBorder: "hover:border-cream/50",
        navBtn: "bg-cream/10",
        navBtnHover: "hover:bg-cream/20",
        navIcon: "text-cream/70",
        navIconHover: "hover:text-cream",
        spinBorder: "border-cream/30 border-t-cream",
        loadingText: "text-cream/50",
        errorText: "text-cream/50",
        errorLinkBorder: "border-cream/30",
        errorLinkText: "text-cream/60",
        errorLinkHover: "hover:text-cream",
      };
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

  useEffect(() => {
    setLoading(true);
    setPages([]);
    setCurrentPage(0);
    setTotalPages(0);
    setAspectRatio(null);

    async function renderPDF() {
      try {
        const pdf = await pdfjsLib.getDocument(pdfPath).promise;
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
          await page.render({
            canvasContext: canvas.getContext("2d")!,
            viewport,
          }).promise;
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
  }, [pdfPath]);

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
          setDimensions({
            width: Math.round(availH / aspectRatio!),
            height: availH,
          });
        } else {
          setDimensions({ width: pw, height: ph });
        }
      } else if (w < 1024) {
        const pw = Math.round((w - 120) / 2);
        const ph = Math.round(pw * aspectRatio!);
        if (ph > availH) {
          setDimensions({
            width: Math.round(availH / aspectRatio!),
            height: availH,
          });
        } else {
          setDimensions({ width: pw, height: ph });
        }
      } else {
        const pw = Math.round(Math.min(w - 160, 1400) / 2);
        const ph = Math.round(pw * aspectRatio!);
        if (ph > availH) {
          setDimensions({
            width: Math.round(availH / aspectRatio!),
            height: availH,
          });
        } else {
          setDimensions({ width: pw, height: ph });
        }
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [aspectRatio]);

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
      <div className={`flex flex-col items-center justify-center ${t.bg} py-32 gap-4`}>
        <div className={`w-10 h-10 border-2 ${t.spinBorder} rounded-full animate-spin`} />
        <span className={`font-body text-xs tracking-widest uppercase ${t.loadingText}`}>
          Rendering {label.toLowerCase()}…
        </span>
      </div>
    );
  }

  if (pages.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center ${t.bg} py-24 gap-5`}>
        <p className={`font-body text-sm ${t.errorText}`}>
          Could not load the {label.toLowerCase()}.
        </p>
        <a
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 h-9 px-5 border ${t.errorLinkBorder} ${t.errorLinkText} ${t.errorLinkHover} font-body text-xs tracking-widest uppercase transition-colors`}
        >
          Open PDF directly
        </a>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${t.bg} overflow-hidden select-none`}>
      {/* ── Toolbar ── */}
      <div className={`flex items-center justify-between px-6 py-3 border-b ${t.border}`}>
        <span className={`font-body text-xs tracking-widest uppercase ${t.pageCount}`}>
          {displayPage} / {totalPages}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.open(pdfPath, "_blank")}
            title="Print"
            className={`flex items-center gap-2 h-9 px-4 border ${t.btnBorder} ${t.btnText} ${t.btnHoverText} ${t.btnHoverBorder} font-body text-xs tracking-widest uppercase transition-colors`}
          >
            <Printer size={13} /> Print
          </button>
          <button
            onClick={handleFullscreen}
            title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            className={`flex items-center gap-2 h-9 px-4 border ${t.btnBorder} ${t.btnText} ${t.btnHoverText} ${t.btnHoverBorder} font-body text-xs tracking-widest uppercase transition-colors`}
          >
            {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            {isFullscreen ? "Exit" : "Fullscreen"}
          </button>
          <a
            href={pdfPath}
            download={downloadName}
            className={`flex items-center gap-2 h-9 px-4 border ${t.btnBorder} ${t.btnText} ${t.btnHoverText} ${t.btnHoverBorder} font-body text-xs tracking-widest uppercase transition-colors`}
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
            className={`hidden md:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 ${t.navBtn} backdrop-blur-sm rounded-full items-center justify-center ${t.navIcon} ${t.navIconHover} ${t.navBtnHover} transition-all`}
            aria-label="Previous page"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
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
              <Page key={i} src={src} pageNumber={i + 1} label={label} />
            ))}
          </HTMLFlipBook>

          {/* Next — desktop */}
          <button
            onClick={goNext}
            className={`hidden md:flex absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 ${t.navBtn} backdrop-blur-sm rounded-full items-center justify-center ${t.navIcon} ${t.navIconHover} ${t.navBtnHover} transition-all`}
            aria-label="Next page"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile nav + page counter */}
        <div className="flex items-center justify-center gap-6 pt-6">
          <button
            onClick={goPrev}
            className={`md:hidden w-10 h-10 ${t.navBtn} rounded-full flex items-center justify-center ${t.navIcon} ${t.navIconHover} transition-all`}
            aria-label="Previous page"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span className={`font-body text-xs tracking-widest uppercase ${t.pageCount}`}>
            {displayPage} / {totalPages}
          </span>
          <button
            onClick={goNext}
            className={`md:hidden w-10 h-10 ${t.navBtn} rounded-full flex items-center justify-center ${t.navIcon} ${t.navIconHover} transition-all`}
            aria-label="Next page"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
