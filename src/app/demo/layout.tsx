import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    absolute: "Orchid Agency Group Inc. | Insurance brokerage",
    template: "%s | Orchid Agency Group Inc.",
  },
  description:
    "Independent insurance brokerage for personal, commercial, and trucking coverage. We shop 20+ top-rated carriers across 14 states.",
};

export default function DemoLayout({ children }: LayoutProps<"/demo">) {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 bg-paper px-4 py-3 font-semibold text-orchid-800 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
