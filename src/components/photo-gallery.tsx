"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";

type Photo = { src: string; alt: string };

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const step = (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length));

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {photos.map((p, i) => (
          <li key={p.src} className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block aspect-square w-full overflow-hidden bg-surface"
              aria-label={`Open ${p.alt}`}
            >
              <Image
                src={p.src}
                alt=""
                fill
                sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                className="object-cover transition-transform duration-150 group-hover:scale-[1.02]"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => e.target === e.currentTarget && setIndex(null)}
        aria-label="Photo viewer"
        className="m-auto max-h-[90dvh] w-[min(960px,92vw)] rounded-md bg-ink-900 p-0 text-paper shadow-2 backdrop:bg-ink-900/80"
      >
        {index !== null && (
          <div className="on-ink flex flex-col">
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <p className="text-sm text-line">
                Photo {index + 1} of {photos.length}
              </p>
              <button
                type="button"
                onClick={() => setIndex(null)}
                className="flex size-11 items-center justify-center rounded-sm hover:bg-ink-800"
                aria-label="Close photo viewer"
              >
                <X size={22} aria-hidden />
              </button>
            </div>
            <div className="relative aspect-[3/2] w-full bg-ink-800">
              <Image src={photos[index].src} alt={photos[index].alt} fill sizes="960px" className="object-contain" />
            </div>
            <div className="flex justify-between px-4 py-3">
              <button type="button" onClick={() => step(-1)} className="btn h-11 px-3 text-paper hover:bg-ink-800">
                <CaretLeft size={18} aria-hidden /> Previous
              </button>
              <button type="button" onClick={() => step(1)} className="btn h-11 px-3 text-paper hover:bg-ink-800">
                Next <CaretRight size={18} aria-hidden />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
