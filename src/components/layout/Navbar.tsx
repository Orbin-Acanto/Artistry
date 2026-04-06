"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation, NavItem } from "@/data/navigation";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg "
          : "bg-white shadow-sm",
      )}
    >
      <nav className="max-w-9xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center group"
          aria-label={SITE.fullName}
        >
          <Image
            src="/media/images/logo/artistry-logo.svg"
            alt={SITE.fullName}
            width={280}
            height={76}
            className="h-16 md:h-24 w-auto group-hover:opacity-80 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-2">
          {navigation.map((item) => (
            <NavItemComponent key={item.href} item={item} pathname={pathname} />
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary p-2 hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="bg-white/98 backdrop-blur-md px-6 pb-8 pt-4 space-y-1 overflow-y-auto max-h-[85vh] border-t border-primary/10">
          {navigation.map((item) => (
            <MobileNavItem key={item.href} item={item} pathname={pathname} />
          ))}
        </div>
      </div>
    </header>
  );
}

function NavItemComponent({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const isActive = pathname.startsWith(item.href) && item.href !== "/";
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (item.children) setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  if (item.children) {
    return (
      <li
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={cn(
            "relative flex items-center px-4 py-2 font-display text-base xl:text-sm uppercase tracking-[0.22em] transition-colors duration-200",
            "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-primary",
            "after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
            "hover:after:scale-x-100",
            isActive
              ? "text-primary after:scale-x-100"
              : "text-primary hover:text-primary-dark",
          )}
        >
          {item.label}
        </button>
        {open && (
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white backdrop-blur-md border border-primary/10 shadow-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-5 py-3 font-body text-sm uppercase tracking-[0.18em] text-primary/75 hover:text-primary-dark hover:bg-primary/5 transition-all duration-150"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href}
        className={cn(
          "relative flex items-center px-4 py-2 font-display text-base xl:text-sm uppercase tracking-[0.22em] transition-colors duration-200",
          "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-primary",
          "after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
          "hover:after:scale-x-100",
          isActive
            ? "text-primary after:scale-x-100"
            : "text-primary hover:text-primary-dark",
        )}
      >
        {item.label}
      </Link>
    </li>
  );
}

function MobileNavItem({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const isActive = pathname.startsWith(item.href) && item.href !== "/";

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "w-full flex items-center justify-between py-3 font-display text-base uppercase tracking-[0.22em] border-b border-primary/10",
            isActive ? "text-primary" : "text-primary/75",
          )}
        >
          {item.label}
          <span
            className={cn(
              "text-primary/40 transition-transform duration-200 text-xs",
              open && "rotate-180",
            )}
          >
            ▾
          </span>
        </button>
        {open && (
          <div className="pl-4 space-y-1 pt-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block py-2.5 font-body text-sm uppercase tracking-[0.18em] text-primary/60 hover:text-primary transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "block py-3 font-display text-base uppercase tracking-[0.22em] border-b border-primary/10",
        isActive ? "text-primary" : "text-primary/75 hover:text-primary",
      )}
    >
      {item.label}
    </Link>
  );
}
