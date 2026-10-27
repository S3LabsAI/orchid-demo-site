"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CaretDown, List, X } from "@phosphor-icons/react";
import { BrandMark } from "@/components/brand-mark";
import { contact, coverage, nav } from "@/lib/site";

const facts = ["Independent brokerage", "20+ carriers compared", "Licensed in 14 states"];

export function SiteHeader() {
  const pathname = usePathname();
  // The sheet belongs to the route it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Escape closes the sheet and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenOn(null);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="on-dark bg-ink-900 text-orchid-200">
        <ul className="container-page label hidden h-8 items-center justify-center gap-5 text-[10.5px] sm:flex">
          {facts.map((fact, i) => (
            <li key={fact} className="flex items-center gap-5">
              {i > 0 && (
                <span aria-hidden className="text-gray-400">
                  /
                </span>
              )}
              {fact}
            </li>
          ))}
        </ul>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="container-page flex h-20 items-center gap-6">
          <Link href="/" aria-label="Orchid Agency Group, home" className="shrink-0">
            <BrandMark />
          </Link>

          <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 lg:flex">
            <CoverageMenu />
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.href === pathname ? "page" : undefined}
                className={`text-[15px] font-medium transition-colors duration-150 hover:text-orchid-600 ${
                  item.href === pathname ? "text-orchid-600" : "text-ink-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={contact.phoneHref}
            className="hidden border-b border-line pb-0.5 font-mono text-[13px] tracking-wide text-ink-700 transition-colors duration-150 hover:border-orchid-600 hover:text-orchid-600 xl:inline"
          >
            {contact.phone}
          </a>
          <Link href="/contact" className="btn btn-primary hidden h-11 sm:inline-flex lg:ml-0">
            Get a quote <ArrowRight size={16} weight="bold" aria-hidden />
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className="ml-auto flex size-11 items-center justify-center sm:ml-0 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenOn(open ? null : pathname)}
          >
            {open ? <X size={26} aria-hidden /> : <List size={26} aria-hidden />}
          </button>
        </div>

        {/* Mobile sheet: 250ms ease-out slide so the menu reads as attached to the header. */}
        <div
          id="mobile-menu"
          className={`fixed inset-x-0 top-20 bottom-0 bg-ink-900/50 transition-opacity duration-[250ms] lg:hidden ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpenOn(null)}
          inert={!open}
        >
          <div
            className={`bg-paper px-4 pt-2 pb-6 shadow-2 transition-transform duration-[250ms] ease-sheet sm:px-8 ${
              open ? "translate-y-0" : "-translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="label pt-4 pb-2 text-muted">Coverage</p>
            <nav aria-label="Mobile" className="flex flex-col">
              {coverage.map((line) => (
                <Link
                  key={line.id}
                  href={`/#line-${line.id}`}
                  onClick={() => setOpenOn(null)}
                  className="flex min-h-12 items-center border-b border-line font-serif text-xl"
                >
                  {line.title}
                </Link>
              ))}
              <p className="label pt-6 pb-2 text-muted">Agency</p>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenOn(null)}
                  aria-current={item.href === pathname ? "page" : undefined}
                  className="flex min-h-12 items-center border-b border-line font-serif text-xl"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link href="/contact" className="btn btn-primary">
                Get a quote <ArrowRight size={16} weight="bold" aria-hidden />
              </Link>
              <a href={contact.phoneHref} className="btn btn-outline">
                Call {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function CoverageMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape so the menu behaves like a native disclosure.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="coverage-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-[15px] font-medium text-ink-700 transition-colors duration-150 hover:text-orchid-600"
      >
        Coverage
        <CaretDown size={12} weight="bold" aria-hidden className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div id="coverage-menu" className="absolute top-full left-1/2 mt-5 w-80 -translate-x-1/2 border border-line bg-paper p-2 shadow-2">
          {coverage.map((line, i) => (
            <Link
              key={line.id}
              href={`/#line-${line.id}`}
              onClick={() => setOpen(false)}
              className="flex gap-3 p-3 transition-colors duration-150 hover:bg-lavender"
            >
              <span className="label pt-1 text-muted">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="block font-serif text-lg leading-tight">{line.title}</span>
                <span className="block text-[13px] leading-snug text-muted">{line.short}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
