import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, House, Truck } from "@phosphor-icons/react/dist/ssr";
import { CarrierWall } from "@/components/carrier-wall";
import { ContactBand } from "@/components/contact-band";
import { coverage, process, states, team, type CoverageId } from "@/lib/site";

const coverageIcon: Record<CoverageId, typeof Truck> = {
  commercial: Briefcase,
  personal: House,
  trucking: Truck,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CarrierWall />
      <Coverage />
      <Process />
      <TeamTeaser />
      <ContactBand />
    </>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-[1328px] items-center gap-12 px-4 pt-12 pb-16 sm:px-8 md:pt-[72px] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:px-16">
      <div className="flex flex-col gap-5">
        <p className="type-eyebrow text-orchid-600">Independent insurance brokerage</p>
        <h1 className="type-display max-w-[660px]">Insurance brokerage built on trust, clarity, and results.</h1>
        <p className="max-w-[540px] text-lg text-muted">
          We shop your coverage across 20+ top-rated carriers for the right protection at a competitive price.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Schedule a free consultation
          </Link>
          <a href="#coverage" className="btn btn-secondary">
            See what we cover
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-5 rounded-sm bg-lavender p-6 sm:p-8">
        <h2 className="text-sm font-bold text-orchid-900">Licensed in 14 states</h2>
        <ul className="flex flex-wrap gap-2" aria-label="States we serve">
          {states.map((s) => (
            <li key={s} className="chip bg-paper text-orchid-900">
              {s}
            </li>
          ))}
        </ul>
        <dl className="grid grid-cols-3 gap-4 border-t border-orchid-200 pt-5">
          {[
            ["20+", "carriers quoted"],
            ["14", "states licensed"],
            ["9 to 5", "Central, Mon to Fri"],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col-reverse gap-1">
              <dt className="text-[13px] leading-snug text-orchid-900">{label}</dt>
              <dd className="font-slab text-[clamp(1.75rem,1.4rem+1vw,2.25rem)] leading-none font-semibold text-orchid-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section id="coverage" aria-labelledby="coverage-heading" className="bg-surface">
      <div className="mx-auto flex max-w-[1328px] flex-col gap-10 px-4 py-16 sm:px-8 md:py-24 lg:px-16">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2 id="coverage-heading" className="type-h2">
            Coverage built around your needs.
          </h2>
          <p className="max-w-xl text-muted">
            We specialize in personal and commercial insurance, delivering coverage designed to protect your
            business, your livelihood, and your family.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coverage.map((line) => {
            const Icon = coverageIcon[line.id];
            const featured = line.id === "trucking";
            return (
              <li
                key={line.id}
                className={`flex flex-col gap-4 rounded-sm p-7 ${
                  featured ? "bg-lavender md:col-span-2 lg:col-span-1" : "border border-line bg-paper"
                }`}
              >
                <Icon size={30} className="text-orchid-600" aria-hidden />
                <div className="flex flex-col gap-2">
                  <h3 className="type-h3">
                    {line.title}
                    {featured && <span className="sr-only"> (our specialty)</span>}
                  </h3>
                  {featured && (
                    <p className="chip w-fit bg-paper text-orchid-900" aria-hidden>
                      Our specialty
                    </p>
                  )}
                  <p className="text-[15px]">{line.intro}</p>
                </div>
                <ul className="flex flex-col border-t border-line text-[15px]">
                  {line.items.map((item) => (
                    <li key={item} className={`border-b py-2 ${featured ? "border-orchid-200" : "border-line"}`}>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?interest=${line.id}`}
                  className="text-link mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm"
                >
                  Ask about {line.title.toLowerCase()}
                  <ArrowRight size={16} weight="bold" aria-hidden />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section aria-labelledby="process-heading">
      <div className="mx-auto flex max-w-[1328px] flex-col gap-12 px-4 py-16 sm:px-8 md:py-24 lg:px-16">
        <div className="flex max-w-2xl flex-col gap-3">
          <p className="type-eyebrow text-orchid-600">Brokering power that works for you</p>
          <h2 id="process-heading" className="type-h2">
            No more chasing quotes.
          </h2>
          <p className="text-lg text-muted">
            Unexpected events can disrupt everything you&apos;ve worked for. Here is how we keep you secure today
            and prepared for tomorrow.
          </p>
        </div>

        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {process.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3 border-t-[3px] border-orchid-600 pt-6">
              <span className="font-slab text-5xl leading-none font-semibold text-orchid-600" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg leading-snug font-bold">{step.title}</h3>
              <p className="text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TeamTeaser() {
  return (
    <section aria-labelledby="team-heading" className="bg-lavender">
      <div className="mx-auto grid max-w-[1328px] items-center gap-10 px-4 py-16 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:px-16">
        <div className="flex flex-col gap-4">
          <h2 id="team-heading" className="type-h2 text-orchid-900">
            The people behind the policies.
          </h2>
          <p className="text-ink-700">
            Orchid is owned and run by Phi Dang and Lan Nguyen, both Iowa State graduates with more than a decade
            in insurance.
          </p>
          <Link href="/meet-the-team-1" className="text-link mt-2 inline-flex w-fit items-center gap-1.5">
            Meet the team
            <ArrowRight size={16} weight="bold" aria-hidden />
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:gap-6">
          {team.map((person) => (
            <li key={person.name} className="flex flex-col items-center gap-4 text-center">
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-full bg-paper">
                <Image
                  src={person.photo}
                  alt={person.alt}
                  fill
                  sizes="(min-width: 1024px) 280px, 45vw"
                  className="scale-[1.08] object-cover object-top"
                />
              </div>
              <div>
                <p className="font-slab text-xl font-semibold text-orchid-900">{person.name}</p>
                <p className="text-sm text-orchid-900">{person.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
