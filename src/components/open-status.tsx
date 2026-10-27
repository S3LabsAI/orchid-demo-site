"use client";

import { useEffect, useState } from "react";
import { hours } from "@/lib/site";

type Status = { open: boolean; label: string };

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function currentStatus(now: Date): Status {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: hours.timeZone,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));
  const weekday = day >= 1 && day <= 5;
  const open = weekday && minutes >= hours.openHour * 60 && minutes < hours.closeHour * 60;

  if (open) return { open, label: "Open now, until 5 PM Central" };
  if (weekday && minutes < hours.openHour * 60) return { open, label: "Closed now, opens today at 9 AM Central" };
  const next = day === 5 || day === 6 ? 1 : (day + 1) % 7;
  return { open, label: `Closed now, opens ${DAYS[next]} at 9 AM Central` };
}

/** Live office status in Central time. Renders after mount so the prerendered shell stays static. */
export function OpenStatus({ tone = "light" }: { tone?: "light" | "ink" }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(currentStatus(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const text = tone === "ink" ? "text-paper" : "text-ink-700";

  return (
    <p className={`flex min-h-6 items-center gap-2 text-sm font-semibold ${text}`} aria-live="polite">
      {status ? (
        <>
          <span
            aria-hidden
            className={`size-2.5 rounded-full ${status.open ? "bg-success" : tone === "ink" ? "bg-gray-400" : "bg-muted"}`}
          />
          {status.label}
        </>
      ) : (
        <span className={tone === "ink" ? "text-gray-400" : "text-muted"}>Checking office hours</span>
      )}
    </p>
  );
}
