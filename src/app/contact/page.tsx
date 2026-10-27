import type { Metadata } from "next";
import { Suspense } from "react";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import { ContactForm, ContactFormFromQuery } from "@/components/contact-form";
import { OpenStatus } from "@/components/open-status";
import { contact, states } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insurance brokerage contact",
  description: "Schedule a free consultation with Orchid Agency Group Inc. Call (515) 809-9099 or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <section className="container-page flex flex-col gap-6 pt-14 pb-12 md:pt-20">
        <p className="label text-orchid-600">Request a quote</p>
        <h1 className="h-display max-w-4xl">
          Drop us <em className="font-normal text-orchid-600 italic">a line.</em>
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Have questions about your coverage options? Complete the form and we&apos;ll help you find the right
          protection.
        </p>
      </section>

      <section
        aria-label="Contact form and details"
        className="container-page grid gap-14 pt-4 pb-20 md:pb-28 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-20"
      >
        <Suspense fallback={<ContactForm />}>
          <ContactFormFromQuery />
        </Suspense>

        <aside aria-label="Contact details" className="relative mr-3 mb-3 self-start lg:sticky lg:top-28">
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 bg-orchid-600" />
          <div className="relative flex flex-col gap-7 border border-line bg-paper p-7 sm:p-8">
            <div className="flex flex-col gap-3">
              <p className="label text-muted">Reach us directly</p>
              <a
                href={contact.phoneHref}
                className="inline-flex w-fit items-center gap-3 font-serif text-3xl font-medium hover:text-orchid-600"
              >
                <Phone size={24} aria-hidden />
                {contact.phone}
              </a>
              <a href={contact.emailHref} className="link-underline inline-flex w-fit items-center gap-2 text-[15px]">
                <EnvelopeSimple size={16} aria-hidden />
                {contact.email}
              </a>
            </div>

            <div className="flex flex-col gap-3 border-t border-line pt-6">
              <p className="label text-muted">Hours</p>
              <OpenStatus />
              <dl className="font-mono text-[13px]">
                <div className="flex justify-between gap-4 border-b border-line py-2">
                  <dt>Mon to Fri</dt>
                  <dd>9:00 to 17:00 Central</dd>
                </div>
                <div className="flex justify-between gap-4 py-2">
                  <dt>Weekends</dt>
                  <dd className="text-right">Closed, by mobile and email</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col gap-3 border-t border-line pt-6">
              <p className="label text-muted">Licensed in 14 states</p>
              <ul className="flex flex-wrap gap-1.5">
                {states.map((s) => (
                  <li key={s} className="tag h-7 px-2">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
