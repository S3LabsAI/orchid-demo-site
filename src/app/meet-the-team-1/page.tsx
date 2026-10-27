import type { Metadata } from "next";
import Image from "next/image";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import { ContactBand } from "@/components/contact-band";
import { PhotoGallery } from "@/components/photo-gallery";
import { familyPhotos, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet the team",
  description: "Phi Dang and Lan Nguyen own and run Orchid Agency Group Inc., an independent insurance brokerage.",
};

export default function TeamPage() {
  return (
    <>
      <section className="mx-auto flex max-w-[1328px] flex-col gap-12 px-4 pt-12 pb-16 sm:px-8 md:pt-[72px] md:pb-24 lg:px-16">
        <div className="flex max-w-2xl flex-col gap-4">
          <h1 className="type-h1">Meet the team</h1>
          <p className="text-lg text-muted">
            Two owners with more than two decades of combined insurance experience.
          </p>
        </div>

        <ul className="grid gap-8 md:grid-cols-2">
          {team.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 rounded-sm border border-line p-6 sm:flex-row sm:p-8 md:flex-col xl:flex-row">
              <div className="relative size-40 shrink-0 overflow-hidden rounded-full bg-surface xl:size-44">
                <Image src={person.photo} alt={person.alt} fill sizes="176px" className="scale-[1.08] object-cover object-top" />
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h2 className="type-h3">{person.name}</h2>
                  <p className="text-sm font-semibold text-orchid-600">{person.role}</p>
                </div>
                <p className="text-[15px]">{person.bio}</p>
                <div className="mt-auto flex flex-col gap-1 pt-2 text-[15px]">
                  <a href={person.phoneHref} className="text-link inline-flex w-fit items-center gap-2">
                    <Phone size={18} aria-hidden />
                    {person.phone}
                  </a>
                  <a href={`mailto:${person.email}`} className="text-link inline-flex w-fit items-center gap-2">
                    <EnvelopeSimple size={18} aria-hidden />
                    {person.email}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="family-heading" className="bg-surface">
        <div className="mx-auto flex max-w-[1328px] flex-col gap-8 px-4 py-16 sm:px-8 md:py-24 lg:px-16">
          <h2 id="family-heading" className="type-h2">
            The people behind the policies.
          </h2>
          <PhotoGallery photos={familyPhotos} />
        </div>
      </section>

      <ContactBand />
    </>
  );
}
