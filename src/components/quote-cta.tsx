import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { OpenStatus } from "@/components/open-status";
import { contact, demo, hours } from "@/lib/site";

const promises = ["Independent · 20+ carriers", "Personal, commercial and trucking", "Licensed in 14 states"];

export function QuoteCta() {
  return (
    <section aria-labelledby="quote-heading" className="on-dark bg-ink-900 text-paper">
      <div className="container-page grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-24">
        <div className="flex flex-col gap-6">
          <p className="label text-orchid-200">Next step</p>
          <h2 id="quote-heading" className="h-section max-w-xl">
            Schedule a free consultation.
          </h2>
          <p className="max-w-md text-lg text-line">
            Have questions about your coverage options? Complete the form and we&apos;ll help you find the right
            protection.
          </p>
        </div>

        {/* Offset block behind the card, as in the template, in Orchid 600. */}
        <div className="relative mr-3 mb-3">
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 bg-orchid-600" />
          <div className="relative flex flex-col gap-5 bg-paper p-7 text-ink-700 sm:p-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl font-medium">Request a quote</h3>
              <p className="text-[14px] text-muted">
                No obligation. We reply during office hours: {hours.summary}.
              </p>
              <OpenStatus />
            </div>
            <Link href={demo("/contact")} className="btn btn-primary w-full">
              Start online <ArrowRight size={16} weight="bold" aria-hidden />
            </Link>
            <a href={contact.phoneHref} className="btn btn-outline w-full">
              Call {contact.phone}
            </a>
            <ul className="flex flex-col gap-2 pt-1">
              {promises.map((p) => (
                <li key={p} className="flex items-center gap-3 font-mono text-[12.5px] text-ink-700">
                  <span aria-hidden className="size-2 rotate-45 bg-orchid-600" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
