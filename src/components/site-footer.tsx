import Image from "next/image";
import Link from "next/link";
import { contact, hours, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="on-ink bg-ink-900 text-paper">
      <div className="mx-auto grid max-w-[1328px] gap-10 px-4 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr] lg:px-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-paper">
              <Image src="/orchid-mark.png" alt="" width={34} height={34} />
            </span>
            <span className="font-slab text-xl font-bold">Orchid Agency Group Inc.</span>
          </div>
          <p className="max-w-sm text-[15px] text-line">
            Independent insurance brokerage for personal, commercial, and trucking coverage.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-[15px]">
          <h2 className="text-lg font-bold">Contact</h2>
          <a href={contact.phoneHref} className="w-fit text-orchid-200 hover:text-paper">
            {contact.phone}
          </a>
          <a href={contact.emailHref} className="w-fit text-orchid-200 hover:text-paper">
            {contact.email}
          </a>
          <p className="text-line">{hours.summary}</p>
        </div>

        <div className="flex flex-col gap-3 text-[15px]">
          <h2 className="text-lg font-bold">Pages</h2>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="w-fit text-orchid-200 hover:text-paper">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="mx-auto flex max-w-[1328px] flex-col gap-3 px-4 py-6 text-[13px] text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16">
          <span>Copyright © Orchid Agency Group Inc. All rights reserved.</span>
          <span className="flex gap-5">
            <a href="https://orchidag.com/privacy" className="text-orchid-200 hover:text-paper">
              Privacy
            </a>
            <a href="https://orchidag.com/terms-of-service" className="text-orchid-200 hover:text-paper">
              Terms of service
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
