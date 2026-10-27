"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { carriers } from "@/lib/site";

const tabs = [
  { key: "insurance", label: "Insurance partners" },
  { key: "trucking", label: "Trucking partners" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export function CarrierWall() {
  const uid = useId();
  const [active, setActive] = useState<TabKey>("insurance");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys move between tabs, per the WAI-ARIA tabs pattern.
  function onKeyDown(e: KeyboardEvent, index: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (index + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    setActive(tabs[next].key);
    tabRefs.current[next]?.focus();
  }

  return (
    <section aria-labelledby={`${uid}-heading`} className="border-y border-line">
      <div className="mx-auto flex max-w-[1328px] flex-col gap-8 px-4 py-12 sm:px-8 lg:flex-row lg:items-start lg:gap-16 lg:px-16">
        <div className="flex shrink-0 flex-col gap-4 lg:w-64">
          <h2 id={`${uid}-heading`} className="text-lg leading-snug font-bold">
            The carriers we shop for you
          </h2>
          <div role="tablist" aria-label="Carrier groups" className="flex flex-col gap-1 rounded-sm bg-surface p-1 sm:flex-row lg:flex-col">
            {tabs.map((tab, i) => {
              const selected = active === tab.key;
              return (
                <button
                  key={tab.key}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${uid}-tab-${tab.key}`}
                  aria-selected={selected}
                  aria-controls={`${uid}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(tab.key)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`flex min-h-11 flex-1 items-center justify-between rounded-sm px-4 text-left text-sm font-semibold transition-colors duration-150 ${
                    selected ? "bg-paper text-orchid-800 shadow-1" : "text-muted hover:text-ink-700"
                  }`}
                >
                  {tab.label}
                  <span className="ml-3 text-[13px] font-semibold text-muted">{carriers[tab.key].length}</span>
                </button>
              );
            })}
          </div>
        </div>

        <ul
          id={`${uid}-panel`}
          role="tabpanel"
          aria-labelledby={`${uid}-tab-${active}`}
          className="grid flex-1 grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-5"
        >
          {carriers[active].map((c) => (
            <li key={`${active}-${c.name}`} className="flex h-20 items-center justify-center px-2">
              <Image
                src={c.src}
                alt={c.name}
                width={240}
                height={80}
                className="h-auto max-h-12 w-auto max-w-full object-contain opacity-80 grayscale transition duration-150 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
