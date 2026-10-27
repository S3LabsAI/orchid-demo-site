import { Phone } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/contact-form";
import { OpenStatus } from "@/components/open-status";
import { contact, hours } from "@/lib/site";

export function ContactBand({ heading = "Schedule a free consultation" }: { heading?: string }) {
  return (
    <section aria-labelledby="contact-band-heading" className="on-ink bg-ink-900 text-paper">
      <div className="mx-auto grid max-w-[1328px] gap-12 px-4 py-16 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-20 lg:px-16">
        <div className="flex flex-col gap-5">
          <h2 id="contact-band-heading" className="type-h2 max-w-xl">
            {heading}
          </h2>
          <p className="max-w-xl text-lg text-line">
            Have questions about your coverage options? Complete the form and we&apos;ll help you find the right
            protection.
          </p>

          <div className="mt-4 flex max-w-md flex-col gap-3 border-t border-ink-800 pt-6">
            <OpenStatus tone="ink" />
            <p className="text-[15px] text-line">
              {hours.summary}. {hours.weekends}
            </p>
            <a
              href={contact.phoneHref}
              className="mt-2 inline-flex w-fit items-center gap-3 font-slab text-3xl font-semibold text-orchid-200 transition-colors duration-150 hover:text-paper"
            >
              <Phone size={28} aria-hidden />
              {contact.phone}
            </a>
          </div>
        </div>

        <ContactForm variant="compact" tone="ink" />
      </div>
    </section>
  );
}
