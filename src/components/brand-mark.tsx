import Image from "next/image";

export function BrandMark({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <span className="flex items-center gap-2.5">
      <Image src="/orchid-mark.png" alt="" width={30} height={30} className={dark ? "rounded-full bg-paper p-0.5" : ""} />
      <span className={`font-serif text-[23px] leading-none font-medium tracking-[-0.01em] ${dark ? "text-paper" : "text-ink-700"}`}>
        Orchid
      </span>
      <span
        className={`border-l pl-2.5 font-mono text-[9.5px] leading-[1.25] font-medium tracking-[0.16em] uppercase ${
          dark ? "border-ink-800 text-orchid-200" : "border-line text-muted"
        }`}
      >
        Agency
        <br />
        Group Inc.
      </span>
    </span>
  );
}
