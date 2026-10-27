"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Minus, Plus } from "@phosphor-icons/react";
import { coverage, type CoverageId } from "@/lib/site";

const ids = coverage.map((c) => c.id);
const isLine = (v: string): v is CoverageId => (ids as string[]).includes(v);

export function CoverageExplorer() {
  const [openId, setOpenId] = useState<CoverageId | null>("trucking");
  const [request, setRequest] = useState<CoverageId[]>([]);

  // Card links and the header menu point at #line-<id>; open that row when the hash changes.
  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.replace("#line-", "");
      if (isLine(id)) setOpenId(id);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const toggleRequest = (id: CoverageId) =>
    setRequest((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  const titles = coverage.filter((c) => request.includes(c.id)).map((c) => c.title);
  const quoteHref = `/contact?interest=${request.join(",")}`;

  return (
    <div className="flex flex-col">
      <ul className="border-t border-line">
        {coverage.map((line, i) => {
          const open = openId === line.id;
          const inRequest = request.includes(line.id);
          return (
            <li key={line.id} id={`line-${line.id}`} className="scroll-mt-28 border-b border-line">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`panel-${line.id}`}
                  onClick={() => setOpenId(open ? null : line.id)}
                  className="group flex w-full items-center gap-4 py-6 text-left sm:gap-6"
                >
                  <span className="label w-6 shrink-0 text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={`h-card flex-1 transition-colors duration-150 sm:text-[1.75rem] ${
                      open ? "text-orchid-600" : "text-ink-700 group-hover:text-orchid-600"
                    }`}
                  >
                    {line.title}
                  </span>
                  <span className="label hidden text-muted md:inline">{line.items.length} coverages</span>
                  {inRequest && <span className="label hidden bg-ink-900 px-2 py-1 text-paper sm:inline">In request</span>}
                  <span
                    aria-hidden
                    className={`flex size-9 shrink-0 items-center justify-center border transition-colors duration-150 ${
                      open ? "border-orchid-600 bg-orchid-600 text-paper" : "border-line bg-paper text-ink-700"
                    }`}
                  >
                    {open ? <Minus size={14} weight="bold" /> : <Plus size={14} weight="bold" />}
                  </span>
                </button>
              </h3>

              {/* Grid-rows transition: 250ms reveal so the row reads as expanding in place. */}
              <div
                id={`panel-${line.id}`}
                role="region"
                aria-label={line.title}
                inert={!open}
                className={`grid transition-[grid-template-rows] duration-[250ms] ease-sheet ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-8 pb-8 sm:pl-12 lg:grid-cols-[minmax(0,1fr)_300px]">
                    <div className="flex flex-col gap-5">
                      <p className="label text-muted">Typically included</p>
                      <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 xl:grid-cols-3">
                        {line.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[15px] leading-snug">
                            <span aria-hidden className="mt-1.5 size-2 shrink-0 bg-orchid-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-[15px] text-muted">
                        <strong className="font-semibold text-ink-700">Who it&apos;s for: </strong>
                        {line.intro}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 border border-line bg-paper p-6">
                      <p className="label text-muted">Your request</p>
                      <p className="font-serif text-2xl leading-tight">
                        {inRequest ? `${line.title} added.` : `Quote ${line.title.toLowerCase()} with us.`}
                      </p>
                      <p className="text-[14px] text-muted">We compare 20+ carriers for every line you add.</p>
                      <button
                        type="button"
                        aria-pressed={inRequest}
                        onClick={() => toggleRequest(line.id)}
                        className={`btn w-full ${inRequest ? "bg-ink-900 text-paper hover:bg-ink-700" : "btn-primary"}`}
                      >
                        {inRequest ? (
                          <>
                            In your request <Check size={16} weight="bold" aria-hidden />
                          </>
                        ) : (
                          <>
                            Add to my request <Plus size={16} weight="bold" aria-hidden />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div
        aria-live="polite"
        className="on-dark mt-6 flex flex-col gap-4 bg-ink-900 p-6 text-paper sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex flex-col gap-1">
          <p className="label text-orchid-200">
            Your request · {request.length} {request.length === 1 ? "line" : "lines"}
          </p>
          <p className="font-serif text-xl leading-snug sm:text-2xl">
            {titles.length ? titles.join(" + ") : "Open a line above and add it to start a request."}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-5">
          {request.length > 0 && (
            <button type="button" onClick={() => setRequest([])} className="label text-gray-400 hover:text-paper">
              Clear
            </button>
          )}
          {request.length > 0 ? (
            <Link href={quoteHref} className="btn btn-primary">
              Request my quote <ArrowRight size={16} weight="bold" aria-hidden />
            </Link>
          ) : (
            <button type="button" disabled className="btn">
              Request my quote
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
