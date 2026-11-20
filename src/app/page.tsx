import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { BrandMark } from "@/components/brand-mark";
import { demo } from "@/lib/site";

const REPO = "https://github.com/S3LabsAI/orchid-demo-site";

const demoPages = [
  { href: demo(), label: "Home", note: "Hero, coverage, explorer, partners" },
  { href: demo("/meet-the-team-1"), label: "Meet the team", note: "Owner profiles and photos" },
  { href: demo("/contact"), label: "Contact", note: "Quote request form" },
];

const boards = ["Overview", "Color", "Typography", "Spacing, radius, elevation", "Components", "Applied homepage sample"];

const interactions = [
  {
    title: "Coverage explorer",
    body: "Open a line of coverage, add it to a request, then carry the request into the contact form.",
    href: demo("#explore"),
  },
  {
    title: "Contact form",
    body: "Validation, a sending state, and a confirmation. It is simulated, so nothing is sent.",
    href: demo("/contact?interest=trucking"),
  },
  {
    title: "Carrier partners",
    body: "Tabs switch between the 13 insurance partners and 13 trucking partners from the live site.",
    href: demo("#partners"),
  },
  {
    title: "Office hours status",
    body: "Shows open or closed in Central time, with the next opening when the office is closed.",
    href: demo("/contact"),
  },
  {
    title: "Photo viewer",
    body: "Family photos open full size, with previous and next buttons and arrow keys.",
    href: demo("/meet-the-team-1"),
  },
  {
    title: "Coverage menu",
    body: "Header dropdown and phone menu jump straight to a line of coverage.",
    href: demo("#coverage"),
  },
];

const palette = [
  { name: "Orchid 900", hex: "#4A3568", className: "bg-orchid-900 border border-orchid-200/50" },
  { name: "Orchid 600", hex: "#7655A2", className: "bg-orchid-600" },
  { name: "Orchid 200", hex: "#CBB7E5", className: "bg-orchid-200" },
  { name: "Lavender", hex: "#EDE7F6", className: "bg-lavender" },
  { name: "Ink 900", hex: "#161616", className: "bg-ink-900" },
  { name: "Surface", hex: "#F7F7F7", className: "bg-surface border border-line" },
];

const goLive = [
  "Connect the contact form to a real inbox or CRM (it is simulated today).",
  "Replace the generic SMS consent line with Orchid's own disclaimer.",
  "Copy team photos and carrier logos off the GoDaddy CDN before the old site is retired.",
  "Point Privacy and Terms at pages on the new site.",
  "Swap in a rectangular headshot of Phi to match Lan's.",
];

export default function OverviewPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="container-page flex h-20 items-center gap-6">
          <BrandMark />
          <span className="label ml-2 hidden border-l border-line pl-4 text-muted md:inline">Website redesign project</span>
          <nav aria-label="Project" className="ml-auto flex items-center gap-6 text-[15px] font-medium">
            <Link href={demo()} className="hidden hover:text-orchid-600 sm:inline">
              Demo site
            </Link>
            <a href="/design-system" className="hidden hover:text-orchid-600 sm:inline">
              Design system
            </a>
            <a href={REPO} className="btn btn-outline h-10 px-4 text-[14px]">
              <GithubLogo size={18} aria-hidden /> Repository
            </a>
          </nav>
        </div>
      </header>

      <main id="main" className="flex-1">
        <section className="container-page flex flex-col gap-7 pt-16 pb-14 md:pt-24 md:pb-20">
          <p className="label text-orchid-600">Project overview · Orchid Agency Group Inc.</p>
          <h1 className="h-display max-w-4xl">
            A new orchidag.com, <em className="font-normal text-orchid-600 italic">ready to review.</em>
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Two deliverables for the redesign: an interactive demo of the new site, built on the live site&apos;s
            real content, and the design system that sets its colors, type, and components.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={demo()} className="btn btn-primary">
              Open the demo site <ArrowRight size={16} weight="bold" aria-hidden />
            </Link>
            <a href="/design-system" className="btn btn-outline">
              View the design system
            </a>
          </div>
        </section>

        <section aria-label="Deliverables" className="container-page grid gap-6 pb-20 md:pb-28 lg:grid-cols-2">
          <Deliverable
            number="01"
            title="Demo site"
            href={demo()}
            cta="Open the demo"
            image="/overview/demo-home.jpg"
            imageAlt="Homepage of the Orchid demo site: headline, quote buttons, and family photo"
            body="Three pages in the layout of the Fernbrook insurance template, using the Orchid palette and everything on the current site: coverage lines, carriers, states, team, hours, and phone numbers."
          >
            <ul className="flex flex-col border-t border-line">
              {demoPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="group flex items-center justify-between gap-4 border-b border-line py-3">
                    <span>
                      <span className="block font-serif text-lg group-hover:text-orchid-600">{p.label}</span>
                      <span className="block text-[13px] text-muted">{p.note}</span>
                    </span>
                    <span className="label shrink-0 text-muted group-hover:text-orchid-600">{p.href}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Deliverable>

          <Deliverable
            number="02"
            title="Design system"
            href="/design-system"
            cta="View the design system"
            image="/overview/design-system.jpg"
            imageAlt="Overview board of the Orchid design system: logo, personality notes, and color swatches"
            body="Six boards derived from the live orchidag.com: the brand's purples, a type scale, spacing and radius rules, and the components the site needs, each checked against WCAG contrast."
          >
            <ol className="grid grid-cols-2 gap-x-6 border-t border-line pt-3">
              {boards.map((b, i) => (
                <li key={b} className="flex gap-3 border-b border-line py-2.5 text-[15px]">
                  <span className="label pt-1 text-muted">{String(i + 1).padStart(2, "0")}</span>
                  {b}
                </li>
              ))}
            </ol>
          </Deliverable>
        </section>

        <section aria-labelledby="interactions-heading" className="bg-surface">
          <div className="container-page flex flex-col gap-12 py-20 md:py-28">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-24">
              <div className="flex flex-col gap-4">
                <p className="label text-orchid-600">Try it</p>
                <h2 id="interactions-heading" className="h-section">
                  Everything in the demo <em className="font-normal text-orchid-600 italic">works.</em>
                </h2>
              </div>
              <p className="max-w-md text-muted lg:justify-self-end">
                Each link opens the demo at the right spot. It works the same on a phone, with a full-screen menu.
              </p>
            </div>
            <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {interactions.map((item) => (
                <li key={item.title} className="bg-paper">
                  <Link href={item.href} className="group flex h-full flex-col gap-3 p-7">
                    <h3 className="h-card group-hover:text-orchid-600">{item.title}</h3>
                    <p className="text-[15px] text-muted">{item.body}</p>
                    <span className="link-mono mt-auto pt-2">
                      Open in demo <ArrowRight size={13} weight="bold" aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="system-heading" className="on-dark bg-orchid-900 text-paper">
          <div className="container-page grid gap-14 py-20 md:py-28 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col gap-6">
              <p className="label text-orchid-200">Design decisions</p>
              <h2 id="system-heading" className="h-section">
                One brand hue, <em className="font-normal text-orchid-200 italic">used with restraint.</em>
              </h2>
              <p className="max-w-md text-lavender">
                The orchid purple comes from the logo. The demo follows the Fernbrook template&apos;s structure and
                editorial type, with Fernbrook&apos;s green and rust swapped for Orchid&apos;s colors.
              </p>
              <dl className="mt-2 grid gap-4 border-t border-paper/15 pt-6 sm:grid-cols-3">
                {[
                  ["Headlines", "Newsreader"],
                  ["Body", "Karla"],
                  ["Labels", "IBM Plex Mono"],
                ].map(([role, font]) => (
                  <div key={role} className="flex flex-col-reverse gap-1">
                    <dt className="label text-orchid-200">{role}</dt>
                    <dd className="font-serif text-2xl">{font}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {palette.map((c) => (
                <li key={c.hex} className="flex flex-col gap-2">
                  <span aria-hidden className={`aspect-[4/3] ${c.className}`} />
                  <span className="text-[15px]">{c.name}</span>
                  <span className="label -mt-1 text-orchid-200">{c.hex}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="golive-heading" className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-24">
          <div className="flex flex-col gap-4">
            <p className="label text-orchid-600">Before launch</p>
            <h2 id="golive-heading" className="h-section">
              What the demo <em className="font-normal text-orchid-600 italic">still needs.</em>
            </h2>
            <p className="max-w-md text-muted">
              The demo is ready to review. These items need Orchid&apos;s input or accounts before it can replace the
              live site.
            </p>
          </div>
          <ol className="flex flex-col border-t border-line">
            {goLive.map((item, i) => (
              <li key={item} className="flex gap-5 border-b border-line py-5">
                <span className="label pt-1 text-orchid-600">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[16px]">{item}</span>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="on-dark bg-ink-700 text-line">
        <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <BrandMark tone="dark" />
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            <Link href={demo()} className="text-paper hover:text-orchid-200">
              Demo site
            </Link>
            <a href="/design-system" className="text-paper hover:text-orchid-200">
              Design system
            </a>
            <a href={REPO} className="inline-flex items-center gap-1 text-paper hover:text-orchid-200">
              Repository <ArrowUpRight size={14} aria-hidden />
            </a>
          </div>
        </div>
        <div className="border-t border-ink-800">
          <p className="container-page label py-5 text-[10.5px] text-gray-400">
            Next.js 16 · Tailwind CSS 4 · Deployed on Vercel
          </p>
        </div>
      </footer>
    </>
  );
}

function Deliverable({
  number,
  title,
  href,
  cta,
  image,
  imageAlt,
  body,
  children,
}: {
  number: string;
  title: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
  body: string;
  children: React.ReactNode;
}) {
  const external = href === "/design-system";
  const Anchor = external ? "a" : Link;
  return (
    <article className="flex flex-col border border-line">
      <Anchor href={href} className="group relative block aspect-[16/10] overflow-hidden border-b border-line bg-surface">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover object-top transition-transform duration-150 group-hover:scale-[1.015]"
        />
      </Anchor>
      <div className="flex flex-1 flex-col gap-5 p-7 sm:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-4xl font-medium tracking-[-0.01em]">{title}</h2>
          <span className="label text-muted">{number}</span>
        </div>
        <p className="text-muted">{body}</p>
        {children}
        <Anchor href={href} className="btn btn-primary mt-auto w-full sm:w-fit">
          {cta} <ArrowRight size={16} weight="bold" aria-hidden />
        </Anchor>
      </div>
    </article>
  );
}
