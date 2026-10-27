import type { Metadata } from "next";
import Image from "next/image";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import { PhotoGallery } from "@/components/photo-gallery";
import { QuoteCta } from "@/components/quote-cta";
import { familyPhotos, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet the team",
  description: "Phi Dang and Lan Nguyen own and run Orchid Agency Group Inc., an independent insurance brokerage.",
};

export default function TeamPage() {
  return (
    <>
      <section className="container-page flex flex-col gap-6 pt-14 pb-12 md:pt-20">
        <p className="label text-orchid-600">Meet the team</p>
        <h1 className="h-display max-w-4xl">
          The people behind <em className="font-normal text-orchid-600 italic">the policies.</em>
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Two owners with more than two decades of combined insurance experience, both graduates of Iowa State
          University.
        </p>
      </section>

      <section aria-label="Owners" className="container-page pb-20 md:pb-28">
        <ul className="grid border-t border-line md:grid-cols-2 md:divide-x md:divide-line">
          {team.map((person, i) => (
            <li
              key={person.name}
              className={`flex flex-col gap-6 border-b border-line py-10 md:border-b-0 ${i === 0 ? "md:pr-10" : "md:pl-10"}`}
            >
              <div className="relative aspect-square max-w-md overflow-hidden bg-lavender">
                <Image
                  src={person.portrait ?? person.photo}
                  alt={person.alt}
                  fill
                  sizes="(min-width: 768px) 448px, 100vw"
                  className={`object-cover ${person.circular ? "scale-150 object-center" : "object-[50%_15%]"}`}
                />
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-4xl font-medium tracking-[-0.01em]">{person.name}</h2>
                <span className="label text-muted">Since {person.since}</span>
              </div>
              <p className="label -mt-3 text-orchid-600">{person.role}</p>
              <p className="text-[16px] text-ink-700">{person.bio}</p>
              <div className="mt-auto flex flex-col gap-2 border-t border-line pt-5 font-mono text-[13px]">
                <a href={person.phoneHref} className="inline-flex w-fit items-center gap-2 hover:text-orchid-600">
                  <Phone size={16} aria-hidden />
                  {person.phone}
                </a>
                <a href={`mailto:${person.email}`} className="inline-flex w-fit items-center gap-2 hover:text-orchid-600">
                  <EnvelopeSimple size={16} aria-hidden />
                  {person.email}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="family-heading" className="bg-lavender">
        <div className="container-page flex flex-col gap-10 py-20 md:py-28">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-24">
            <h2 id="family-heading" className="h-section text-orchid-900">
              What we protect <em className="font-normal text-orchid-600 italic">at home.</em>
            </h2>
            <p className="max-w-md text-orchid-900 lg:justify-self-end">
              A few photos from the families behind Orchid. Select one to view it larger.
            </p>
          </div>
          <PhotoGallery photos={familyPhotos} />
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
