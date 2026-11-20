import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { contact, coverage, demo } from "@/lib/site";

const columns = [
  {
    title: "Insurance",
    links: coverage.map((c) => ({ href: demo(`#line-${c.id}`), label: c.title })),
  },
  {
    title: "Agency",
    links: [
      { href: demo("#why"), label: "Why Orchid" },
      { href: demo("/meet-the-team-1"), label: "Meet the team" },
      { href: demo("#partners"), label: "Carrier partners" },
      { href: demo("/contact"), label: "Request a quote" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: contact.phoneHref, label: contact.phone },
      { href: contact.emailHref, label: contact.email },
      { href: "https://orchidag.com/privacy", label: "Privacy policy" },
      { href: "https://orchidag.com/terms-of-service", label: "Terms of service" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="on-dark bg-ink-700 text-line">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <BrandMark tone="dark" />
          <p className="max-w-xs text-[15px]">
            Independent insurance brokerage for personal, commercial, and trucking coverage.
          </p>
          <p className="label text-orchid-200">
            Mon to Fri 9:00 to 17:00 Central
            <br />
            Weekends by mobile and email
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
            <h2 className="label mb-1 text-gray-400">{col.title}</h2>
            {col.links.map((link) =>
              // Hash links stay plain anchors so the coverage explorer hears `hashchange`.
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link key={link.label} href={link.href} className="w-fit text-[15px] text-paper hover:text-orchid-200">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className="w-fit text-[15px] text-paper hover:text-orchid-200">
                  {link.label}
                </a>
              ),
            )}
          </nav>
        ))}
      </div>

      <div className="border-t border-ink-800">
        <p className="container-page label py-6 text-[10.5px] text-gray-400">
          © Orchid Agency Group Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
