import Image from "next/image";

type Person = { photo: string; portrait?: string | null; alt: string; circular: boolean };

/**
 * Square headshot frame. Phi's source is a circular crop with a drop shadow on white,
 * so it is framed from just above the head to mid-chest, and clipped inside the circle
 * to drop the shadow ring, leaving the full head on a plain white ground.
 */
export function Headshot({
  person,
  sizes,
  decorative = false,
  className = "",
}: {
  person: Person;
  sizes: string;
  decorative?: boolean;
  className?: string;
}) {
  const alt = decorative ? "" : person.alt;

  if (person.circular) {
    return (
      <div className={`relative aspect-square overflow-hidden bg-paper ${className}`}>
        <div className="absolute top-[-4%] left-[-25%] h-[150%] w-[150%] [clip-path:circle(45.5%_at_50%_49.5%)]">
          <Image src={person.photo} alt={alt} fill sizes={sizes} className="object-cover" />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative aspect-square overflow-hidden bg-lavender ${className}`}>
      <Image src={person.portrait ?? person.photo} alt={alt} fill sizes={sizes} className="object-cover object-[50%_15%]" />
    </div>
  );
}
