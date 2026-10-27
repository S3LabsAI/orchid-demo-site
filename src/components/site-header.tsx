"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { List, Phone, X } from "@phosphor-icons/react";
import { contact, nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  // The sheet belongs to the route it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean) => setOpenOn(next ? pathname : null);
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
    <header className="on-ink sticky top-0 z-40 bg-ink-900 text-paper shadow-1">
      <div className="mx-auto flex h-[72px] max-w-[1328px] items-center gap-8 px-4 sm:px-8 lg:px-16">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Orchid Agency Group, home">
          <span className="flex size-9 items-center justify-center rounded-full bg-paper">
            <Image src="/orchid-mark.png" alt="" width={28} height={28} priority />
          </span>
          <span className="font-slab text-lg font-bold tracking-[0.5px]">Orchid Agency Group</span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`type-nav py-2 transition-colors duration-150 hover:text-orchid-200 ${
                  active ? "text-orchid-200 underline decoration-2 underline-offset-[10px]" : "text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={contact.phoneHref}
          className="hidden h-10 items-center gap-2 rounded-sm bg-paper px-[18px] text-sm font-semibold text-ink-900 transition-colors duration-150 hover:bg-orchid-200 md:inline-flex"
        >
          <Phone size={16} weight="bold" aria-hidden />
          {contact.phone}
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="ml-auto flex size-11 items-center justify-center rounded-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} aria-hidden /> : <List size={26} aria-hidden />}
        </button>
      </div>

      {/* Mobile sheet: 250ms ease-out slide so the menu reads as attached to the header. */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[72px] bottom-0 bg-ink-900/60 transition-opacity duration-[250ms] md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        inert={!open}
      >
        <div
          className={`border-t border-ink-800 bg-ink-900 px-4 pt-2 pb-6 shadow-2 transition-transform duration-[250ms] ease-sheet ${
            open ? "translate-y-0" : "-translate-y-4"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.href === pathname ? "page" : undefined}
                className={`type-nav flex min-h-14 items-center border-b border-ink-800 ${
                  item.href === pathname ? "text-orchid-200" : "text-paper"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a href={contact.phoneHref} className="btn btn-on-ink mt-6 w-full">
            <Phone size={18} weight="bold" aria-hidden />
            Call {contact.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
