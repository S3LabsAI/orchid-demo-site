"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Check, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { contact, coverage } from "@/lib/site";

const interestOptions = [
  ...coverage.map((c) => ({ id: c.id, label: c.title })),
  { id: "workers-comp", label: "Workers' compensation" },
  { id: "not-sure", label: "Not sure yet" },
];

type Errors = Partial<Record<"email" | "sms" | "form", string>>;
type Tone = "light" | "ink";

/** Reads ?interest= so coverage cards can preselect a line. Wrap in <Suspense>. */
export function ContactFormFromQuery(props: { variant?: "full" | "compact"; tone?: Tone }) {
  const params = useSearchParams();
  const interest = params.get("interest");
  return <ContactForm {...props} initialInterests={interest ? [interest] : []} />;
}

export function ContactForm({
  variant = "full",
  tone = "light",
  initialInterests = [],
}: {
  variant?: "full" | "compact";
  tone?: Tone;
  initialInterests?: string[];
}) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [interests, setInterests] = useState<string[]>(initialInterests);
  const [sentName, setSentName] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const smsRef = useRef<HTMLInputElement>(null);

  const ink = tone === "ink";
  const label = `text-sm font-semibold ${ink ? "text-paper" : "text-ink-700"}`;
  const help = `text-[13px] leading-snug ${ink ? "text-line" : "text-muted"}`;
  const errorText = `text-[13px] font-semibold ${ink ? "text-[#FFB4AB]" : "text-error"}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const next: Errors = {};
    if (!email) next.email = "Enter your email so we can reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = "Enter a full email address, like name@company.com.";
    if (!data.get("sms")) next.sms = "Choose whether we can text you about this request.";
    setErrors(next);
    if (next.email) return emailRef.current?.focus();
    if (next.sms) return smsRef.current?.focus();

    setStatus("sending");
    // Demo only: no backend is wired up, so simulate a short round trip.
    await new Promise((r) => setTimeout(r, 900));
    if (!navigator.onLine) {
      setErrors({ form: `We could not send that. Check your connection, or call us at ${contact.phone}.` });
      setStatus("idle");
      return;
    }
    setSentName(String(data.get("name") ?? "").trim().split(" ")[0]);
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className={`flex flex-col gap-4 rounded-sm p-8 ${ink ? "bg-ink-800 text-paper" : "bg-lavender text-ink-700"}`}
      >
        <CheckCircle size={36} weight="fill" className={ink ? "text-orchid-200" : "text-orchid-600"} aria-hidden />
        <h3 className="type-h3">{sentName ? `Thanks, ${sentName}.` : "Thanks for reaching out."}</h3>
        <p className={ink ? "text-line" : "text-ink-700"}>
          We will be in touch during office hours, Monday to Friday, 9 AM to 5 PM Central. Need us sooner? Call{" "}
          <a href={contact.phoneHref} className={ink ? "font-semibold text-orchid-200 underline" : "text-link"}>
            {contact.phone}
          </a>
          .
        </p>
        <p className={help}>Demo site: this form is not connected, so no message was sent.</p>
        <button
          type="button"
          className={`btn w-fit ${ink ? "btn-on-ink" : "btn-secondary"}`}
          onClick={() => {
            setStatus("idle");
            setInterests([]);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5" aria-describedby={errors.form ? id("form-error") : undefined}>
      {errors.form && (
        <p id={id("form-error")} role="alert" className={`flex items-start gap-2 rounded-sm p-3 ${ink ? "bg-ink-800" : "bg-[#FCEDEC]"} ${errorText}`}>
          <WarningCircle size={18} weight="bold" className="mt-px shrink-0" aria-hidden />
          {errors.form}
        </p>
      )}

      <div className={`grid gap-5 ${variant === "full" ? "sm:grid-cols-2" : ""}`}>
        <div className={`flex flex-col gap-1.5 ${variant === "full" ? "sm:col-span-2" : ""}`}>
          <label htmlFor={id("name")} className={label}>
            Name
          </label>
          <input id={id("name")} name="name" type="text" autoComplete="name" placeholder="First and last name" className="field" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={id("email")} className={label}>
            Email <span className={ink ? "text-orchid-200" : "text-orchid-600"}>*</span>
            <span className="sr-only"> required</span>
          </label>
          <input
            ref={emailRef}
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? id("email-error") : undefined}
            className="field"
          />
          {errors.email && (
            <p id={id("email-error")} className={errorText}>
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={id("phone")} className={label}>
            Phone
          </label>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" placeholder="(555) 555-5555" className="field" />
        </div>
      </div>

      {variant === "full" && (
        <>
          <fieldset className="flex flex-col gap-2.5">
            <legend className={`${label} mb-2.5`}>I&apos;m interested in</legend>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((opt) => {
                const checked = interests.includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    className={`relative inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors duration-150 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-orchid-600 ${
                      checked
                        ? "border-orchid-600 bg-orchid-600 text-paper"
                        : "border-line bg-paper text-ink-700 hover:border-orchid-600 hover:bg-lavender"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="interests"
                      value={opt.id}
                      checked={checked}
                      onChange={() =>
                        setInterests((cur) => (checked ? cur.filter((x) => x !== opt.id) : [...cur, opt.id]))
                      }
                      className="sr-only"
                    />
                    {checked && <Check size={14} weight="bold" aria-hidden />}
                    {opt.label}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={id("notes")} className={label}>
              Additional notes
            </label>
            <textarea
              id={id("notes")}
              name="notes"
              rows={4}
              placeholder="What would you like to protect? Current carrier, renewal date, fleet size, anything that helps."
              className="field"
            />
          </div>
        </>
      )}

      <fieldset
        className="flex flex-col gap-2"
        aria-describedby={errors.sms ? id("sms-error") : undefined}
      >
        <legend className={`${label} mb-2`}>Can we text you about this request?</legend>
        {[
          { value: "yes", text: "Yes, text me about this request" },
          { value: "no", text: "No, email or call me instead" },
        ].map((opt, i) => (
          <label key={opt.value} className={`flex min-h-11 cursor-pointer items-center gap-3 text-[15px] ${ink ? "text-paper" : "text-ink-700"}`}>
            <input
              ref={i === 0 ? smsRef : undefined}
              type="radio"
              name="sms"
              value={opt.value}
              className="size-5 shrink-0 accent-orchid-600"
            />
            {opt.text}
          </label>
        ))}
        {errors.sms && (
          <p id={id("sms-error")} className={errorText}>
            {errors.sms}
          </p>
        )}
        <p className={help}>Message and data rates may apply. Reply STOP to opt out at any time.</p>
      </fieldset>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`btn w-full sm:w-fit ${ink ? "btn-on-ink" : "btn-primary"}`}
      >
        {status === "sending" ? "Sending" : "Schedule a free consultation"}
      </button>
    </form>
  );
}
