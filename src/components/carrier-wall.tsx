"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { carriers } from "@/lib/site";

const tabs = [
  { key: "insurance", label: "Insurance partners", blurb: "Home, auto, business, and specialty carriers." },
  { key: "trucking", label: "Trucking partners", blurb: "Carriers and programs built for the road." },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export function CarrierWall() {
  const [active, setActive] = useState<TabKey>("insurance");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys move between tabs, per the WAI-ARIA tabs pattern.
  function onKeyDown(e: KeyboardEvent, index: number) {
    if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(e.key)) return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
    const next = (index + dir + tabs.length) % tabs.length;
    setActive(tabs[next].key);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="grid border border-line lg:grid-cols-[360px_minmax(0,1fr)]">
      <div className="flex flex-col gap-8 bg-lavender p-7 sm:p-9">
        <div>
          <p className="font-serif text-7xl leading-none font-medium text-orchid-900">20+</p>
          <p className="label mt-3 text-orchid-900">Top-rated carriers compared</p>
        </div>
        <div role="tablist" aria-label="Carrier groups" aria-orientation="vertical" className="flex flex-col border-t border-orchid-200">
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
                id={`carrier-tab-${tab.key}`}
                aria-selected={selected}
                aria-controls="carrier-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.key)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="group flex items-start justify-between gap-4 border-b border-orchid-200 py-4 text-left"
              >
                <span>
                  <span
                    className={`block font-serif text-xl transition-colors duration-150 ${
                      selected ? "text-orchid-600" : "text-ink-700 group-hover:text-orchid-600"
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span className="block text-[13px] text-orchid-900">{tab.blurb}</span>
                </span>
                <span className={`label pt-1 ${selected ? "text-orchid-600" : "text-orchid-900"}`}>
                  {String(carriers[tab.key].length).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <ul
        id="carrier-panel"
        role="tabpanel"
        aria-labelledby={`carrier-tab-${active}`}
        className="grid grid-cols-2 content-center gap-x-4 px-4 py-6 sm:grid-cols-3 sm:px-8 xl:grid-cols-4"
      >
        {carriers[active].map((c) => (
          <li key={`${active}-${c.name}`} className="flex h-24 items-center justify-center px-3">
            <Image
              src={c.src}
              alt={c.name}
              width={240}
              height={80}
              className="h-auto max-h-11 w-auto max-w-full object-contain opacity-75 grayscale transition duration-150 hover:opacity-100 hover:grayscale-0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
