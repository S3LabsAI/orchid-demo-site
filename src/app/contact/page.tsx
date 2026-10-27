import type { Metadata } from "next";
import { Suspense } from "react";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import { ContactForm, ContactFormFromQuery } from "@/components/contact-form";
import { OpenStatus } from "@/components/open-status";
import { contact, hours, states } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insurance brokerage contact",
  description: "Schedule a free consultation with Orchid Agency Group Inc. Call (515) 809-9099 or send us a message.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-[1328px] gap-12 px-4 pt-12 pb-16 sm:px-8 md:pt-[72px] md:pb-24 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 lg:px-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="type-h1">Contact us</h1>
          <p className="max-w-xl text-lg text-muted">
            Have questions about your coverage options? Complete the form and we&apos;ll help you find the right
            protection.
          </p>
        </div>
        <Suspense fallback={<ContactForm />}>
          <ContactFormFromQuery />
        </Suspense>
      </div>

      <aside aria-label="Contact details" className="flex flex-col gap-8 self-start rounded-sm bg-lavender p-6 sm:p-8 lg:sticky lg:top-24">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-orchid-900">Reach us directly</h2>
          <a href={contact.phoneHref} className="inline-flex w-fit items-center gap-3 font-slab text-3xl font-semibold text-orchid-900 hover:text-orchid-600">
            <Phone size={26} aria-hidden />
            {contact.phone}
          </a>
          <a href={contact.emailHref} className="text-link inline-flex w-fit items-center gap-2">
            <EnvelopeSimple size={18} aria-hidden />
            {contact.email}
          </a>
        </div>

        <div className="flex flex-col gap-3 border-t border-orchid-200 pt-6">
          <h2 className="text-lg font-bold text-orchid-900">Hours</h2>
          <OpenStatus />
          <dl className="text-sm">
            <div className="flex justify-between gap-4 border-b border-orchid-200 py-2">
              <dt className="font-semibold">Monday to Friday</dt>
              <dd>9 AM to 5 PM Central</dd>
            </div>
            <div className="flex justify-between gap-4 py-2">
              <dt className="font-semibold">Weekends</dt>
              <dd className="text-right">Closed, by mobile and email</dd>
            </div>
          </dl>
          <p className="sr-only">{hours.weekends}</p>
        </div>

        <div className="flex flex-col gap-3 border-t border-orchid-200 pt-6">
          <h2 className="text-lg font-bold text-orchid-900">States we serve</h2>
          <ul className="flex flex-wrap gap-2">
            {states.map((s) => (
              <li key={s} className="chip bg-paper text-orchid-900">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
