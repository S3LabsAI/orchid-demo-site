import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  House,
  MagnifyingGlass,
  Scales,
  Truck,
} from "@phosphor-icons/react/dist/ssr";
import { CarrierWall } from "@/components/carrier-wall";
import { CoverageExplorer } from "@/components/coverage-explorer";
import { QuoteCta } from "@/components/quote-cta";
import { contact, coverage, heroPhotos, states, stats, team, whyPoints, type CoverageId } from "@/lib/site";

const coverageIcon: Record<CoverageId, typeof Truck> = {
  commercial: Briefcase,
  personal: House,
  trucking: Truck,
};

const whyIcon = { scales: Scales, magnifier: MagnifyingGlass, truck: Truck };

export default function HomePage() {
  return (
    <>
      <Hero />
      <Why />
      <People />
      <Mission />
      <CoverageGrid />
      <Explore />
      <Partners />
      <QuoteCta />
    </>
  );
}

function Hero() {
  const [phi, lan] = team;
  return (
    <section className="container-page grid items-center gap-14 pt-12 pb-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16 lg:pt-16 lg:pb-28">
      <div className="relative flex flex-col gap-7 lg:pl-12">
        <span aria-hidden className="absolute top-1 bottom-0 left-0 hidden w-px bg-orchid-600 lg:block" />
        <span
          aria-hidden
          className="label absolute bottom-24 -left-3 hidden origin-bottom-left -rotate-90 text-[10px] whitespace-nowrap text-muted lg:block"
        >
          Based in Iowa
        </span>

        <p className="label text-orchid-600">Independent insurance brokerage</p>
        <h1 className="h-display">
          Built on trust, clarity, <em className="font-normal text-orchid-600 italic">and results.</em>
        </h1>
        <p className="max-w-[500px] text-lg text-muted">
          We shop your coverage across 20+ top-rated carriers for competitive pricing and the right protection for
          your specific risks.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Get a quote <ArrowRight size={16} weight="bold" aria-hidden />
          </Link>
          <a href={contact.phoneHref} className="btn btn-outline">
            Call {contact.phone}
          </a>
        </div>

        <div className="flex items-center gap-4 border-t border-line pt-6">
          <div className="flex -space-x-3">
            {[phi, lan].map((p) => (
              <span key={p.name} className="relative size-11 overflow-hidden rounded-full border-2 border-paper bg-lavender">
                <Image src={p.photo} alt="" fill sizes="44px" className={`object-cover ${p.circular ? "scale-150 object-center" : "object-top"}`} />
              </span>
            ))}
          </div>
          <p className="text-[14px] leading-snug text-muted">
            <strong className="font-semibold text-ink-700">Owned and run by Phi Dang and Lan Nguyen,</strong>
            <br className="hidden sm:block" /> serving clients in 14 states.
          </p>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[500px] lg:mr-0">
        <div className="relative ml-10 aspect-[4/5] overflow-hidden bg-lavender sm:ml-16">
          <Image
            src={heroPhotos.main}
            alt={heroPhotos.mainAlt}
            fill
            priority
            sizes="(min-width: 1024px) 440px, 90vw"
            className="object-cover object-[50%_40%]"
          />
        </div>
        <div className="on-dark absolute top-8 -right-2 w-56 bg-ink-900 p-5 text-paper shadow-2 sm:-right-6 sm:w-64">
          <p className="label text-[10.5px] text-orchid-200">Our specialty · Trucking</p>
          <p className="mt-2 text-[14px] leading-snug">
            Owner-operators, fleets, and transportation businesses, covered from <strong>cargo to trailer interchange</strong>.
          </p>
        </div>
        <div className="absolute bottom-8 left-0 w-36 bg-paper p-2 shadow-2 sm:w-48">
          <div className="relative aspect-square overflow-hidden">
            <Image src={heroPhotos.detail} alt={heroPhotos.detailAlt} fill sizes="192px" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" aria-labelledby="why-heading" className="on-dark scroll-mt-20 bg-orchid-900 text-paper">
      <div className="container-page flex flex-col gap-14 py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-24">
          <div className="flex flex-col gap-4">
            <p className="label text-orchid-200">Why Orchid</p>
            <h2 id="why-heading" className="h-section">
              Brokering power that works <em className="font-normal text-orchid-200 italic">for you.</em>
            </h2>
          </div>
          <p className="max-w-md text-lg text-lavender lg:justify-self-end">
            Unexpected events can disrupt everything you&apos;ve worked for. We analyze your risks, identify coverage
            gaps, and deliver protection that holds up.
          </p>
        </div>

        <ul className="grid border-t border-paper/15 md:grid-cols-3 md:divide-x md:divide-paper/15">
          {whyPoints.map((point, i) => {
            const Icon = whyIcon[point.icon];
            return (
              <li
                key={point.title}
                className={`flex flex-col gap-4 border-b border-paper/15 py-8 md:border-b-0 md:py-10 ${
                  i === 0 ? "md:pr-8" : i === 1 ? "md:px-8" : "md:pl-8"
                }`}
              >
                <span className="flex size-11 items-center justify-center border border-orchid-400 text-orchid-200">
                  <Icon size={20} aria-hidden />
                </span>
                <h3 className="font-serif text-[22px] leading-tight font-medium">{point.title}</h3>
                <p className="text-[15px] text-orchid-200">{point.body}</p>
              </li>
            );
          })}
        </ul>

        <dl className="grid grid-cols-2 gap-y-8 border-t border-paper/15 pt-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-2">
              <dt className="label text-orchid-200">{s.label}</dt>
              <dd className="font-serif text-5xl leading-none">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function People() {
  const [phi, lan] = team;
  return (
    <section aria-labelledby="people-heading" className="container-page grid items-center gap-14 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
      <div className="flex flex-col gap-6">
        <p className="label text-orchid-600">The people here</p>
        <h2 id="people-heading" className="h-section">
          Owned and run by <em className="font-normal text-orchid-600 italic">two Iowa State grads.</em>
        </h2>
        <p className="max-w-xl text-muted">
          Phi Dang and Lan Nguyen started in insurance in 2014 and 2015, building sales, service, and policy
          experience at Nationwide, Northwestern Mutual, and Gallagher before opening Orchid.
        </p>
        <div className="border-l-2 border-orchid-600 pl-6">
          <p className="font-serif text-2xl leading-snug">
            Attentive support and a smooth experience for every client.
          </p>
          <p className="label mt-3 text-muted">How we work</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {["Iowa State University", "Personal and commercial", "Trucking specialty"].map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <Link href="/meet-the-team-1" className="link-underline inline-flex w-fit items-center gap-2">
          Meet the team <ArrowRight size={16} weight="bold" aria-hidden />
        </Link>
      </div>

      <div className="grid grid-cols-[1.25fr_1fr] items-end gap-4">
        <figure className="flex flex-col gap-2">
          <div className="relative aspect-[3/4] overflow-hidden bg-lavender">
            <Image src={lan.portrait ?? lan.photo} alt={lan.alt} fill sizes="(min-width: 1024px) 300px, 55vw" className="object-cover object-top" />
          </div>
          <figcaption className="label text-muted">{lan.name} · Account manager</figcaption>
        </figure>
        <div className="flex flex-col gap-4">
          <figure className="flex flex-col gap-2">
            <div className="relative aspect-square overflow-hidden bg-paper">
              <Image src={phi.photo} alt={phi.alt} fill sizes="(min-width: 1024px) 240px, 40vw" className="scale-150 object-cover object-center" />
            </div>
            <figcaption className="label text-muted">{phi.name} · Sales producer</figcaption>
          </figure>
          <div className="bg-lavender p-5">
            <p className="font-serif text-5xl leading-none text-orchid-900">20+</p>
            <p className="label mt-2 text-orchid-900">Years combined experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section aria-label="Mission and approach" className="bg-lavender">
      <div className="container-page flex flex-col py-16 md:py-20">
        <div className="grid gap-4 pb-12 md:grid-cols-[180px_minmax(0,1fr)]">
          <p className="label pt-3 text-orchid-800">Mission</p>
          <p className="h-statement text-orchid-900">
            We specialize in personal and commercial insurance, delivering coverage designed to protect your
            business, your livelihood, and your family.
          </p>
        </div>
        <div className="grid gap-4 border-t border-orchid-200 pt-12 md:grid-cols-[minmax(0,1fr)_180px]">
          <p className="h-statement text-orchid-900 md:order-first md:text-right">
            Unexpected events can disrupt everything you&apos;ve worked for.{" "}
            <em className="text-orchid-600 italic">We keep you secure today</em> and prepared for tomorrow.
          </p>
          <p className="label order-first pt-3 text-orchid-800 md:order-last">Approach</p>
        </div>
      </div>
    </section>
  );
}

function CoverageGrid() {
  return (
    <section id="coverage" aria-labelledby="coverage-heading" className="container-page flex flex-col gap-12 py-20 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <p className="label text-orchid-600">What we place</p>
          <h2 id="coverage-heading" className="h-section max-w-2xl">
            Coverage built around <em className="font-normal text-orchid-600 italic">your needs.</em>
          </h2>
        </div>
        <a href="#explore" className="link-underline inline-flex w-fit shrink-0 items-center gap-2 text-[15px]">
          Compare what&apos;s included <ArrowRight size={16} weight="bold" aria-hidden />
        </a>
      </div>

      <ul className="grid gap-6 md:grid-cols-3">
        {coverage.map((line, i) => {
          const Icon = coverageIcon[line.id];
          const featured = line.id === "trucking";
          return (
            <li key={line.id} className="group flex flex-col border border-line bg-paper transition-colors duration-150 hover:border-orchid-400">
              <div
                className={`relative flex aspect-[16/10] items-center justify-center ${
                  featured ? "bg-orchid-900 text-orchid-200" : "bg-lavender text-orchid-600"
                }`}
              >
                <Icon size={76} weight="thin" aria-hidden />
                {featured && (
                  <span className="label absolute top-4 left-4 bg-paper px-2 py-1 text-[10.5px] text-orchid-900">
                    Our specialty
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="h-card">{line.title}</h3>
                  <span className="label text-muted">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-[15px] text-muted">{line.short}</p>
                <a href={`#line-${line.id}`} className="link-mono mt-auto pt-2">
                  View coverage <ArrowRight size={13} weight="bold" aria-hidden />
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Explore() {
  return (
    <section id="explore" aria-labelledby="explore-heading" className="scroll-mt-20 bg-surface">
      <div className="container-page flex flex-col gap-12 py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-24">
          <div className="flex flex-col gap-4">
            <p className="label text-orchid-600">Explore coverage</p>
            <h2 id="explore-heading" className="h-section">
              Open a line. See <em className="font-normal text-orchid-600 italic">what&apos;s included.</em>
            </h2>
          </div>
          <p className="max-w-md text-muted lg:justify-self-end">
            Add lines to a request as you read. Nothing is binding, and we only reach out once you send it.
          </p>
        </div>
        <CoverageExplorer />
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" aria-labelledby="partners-heading" className="container-page flex scroll-mt-20 flex-col gap-12 py-20 md:py-28">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-24">
        <div className="flex flex-col gap-4">
          <p className="label text-orchid-600">Our partners</p>
          <h2 id="partners-heading" className="h-section">
            The carriers we shop <em className="font-normal text-orchid-600 italic">for you.</em>
          </h2>
        </div>
        <p className="max-w-md text-muted lg:justify-self-end">
          One conversation with us replaces a round of calls to every carrier below. We compare, you choose.
        </p>
      </div>
      <CarrierWall />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <p className="label shrink-0 text-muted">Licensed in</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[13px] text-ink-700">
          {states.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
