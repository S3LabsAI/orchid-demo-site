import type { Metadata } from "next";
import { Josefin_Sans, Josefin_Slab } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const josefinSlab = Josefin_Slab({
  variable: "--font-josefin-slab",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Orchid Agency Group Inc. | Insurance brokerage",
    template: "%s | Orchid Agency Group Inc.",
  },
  description:
    "Independent insurance brokerage for personal, commercial, and trucking coverage. We shop 20+ top-rated carriers across 14 states.",
  icons: { icon: "/orchid-mark.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${josefinSlab.variable} antialiased`}>
      <body className="flex min-h-[100dvh] flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-sm bg-paper px-4 py-3 font-semibold text-orchid-800 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
