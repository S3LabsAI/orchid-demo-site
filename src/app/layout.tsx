import type { Metadata } from "next";
import { IBM_Plex_Mono, Karla, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Orchid Agency Group | Website redesign project",
    template: "%s | Orchid Agency Group",
  },
  description:
    "Project overview for the Orchid Agency Group website redesign: the interactive demo site and the Orchid design system.",
  icons: { icon: "/orchid-mark.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${karla.variable} ${plexMono.variable} antialiased`}>
      <body className="flex min-h-[100dvh] flex-col">{children}</body>
    </html>
  );
}
