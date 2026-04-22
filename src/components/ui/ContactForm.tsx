"use client";

import { useState } from "react";
import { SITE } from "@/data/site";

type FormState = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-transparent border-b border-charcoal/25 text-charcoal font-body text-sm py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-charcoal/30";

const labelClass =
  "block font-body text-[10px] tracking-[0.2em] uppercase text-charcoal/45 mb-1";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="py-16">
        <p className="font-display text-4xl text-charcoal mb-3">Thank you.</p>
        <p className="font-body text-charcoal/60 text-base">
          We&apos;ll be in touch within 24 to 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
        <div>
          <label htmlFor="firstName" className={labelClass}>First Name *</label>
          <input id="firstName" name="firstName" type="text" required className={inputClass} placeholder="Jane" />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last Name *</label>
          <input id="lastName" name="lastName" type="text" required className={inputClass} placeholder="Smith" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder={SITE.contact.email} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="212.555.0100" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
        <div>
          <label htmlFor="eventType" className={labelClass}>Event Type *</label>
          <select
            id="eventType"
            name="eventType"
            required
            className="w-full bg-transparent border-b border-charcoal/25 text-charcoal font-body text-sm py-3 focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Select an event type</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate Event</option>
            <option value="social">Social Event</option>
            <option value="celebrate-life">Celebrate Life</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="eventDate" className={labelClass}>Preferred Date</label>
          <input id="eventDate" name="eventDate" type="date" className="w-full bg-transparent border-b border-charcoal/25 text-charcoal font-body text-sm py-3 focus:outline-none focus:border-primary transition-colors" />
        </div>
      </div>

      <div>
        <label htmlFor="guestCount" className={labelClass}>Estimated Guest Count</label>
        <input id="guestCount" name="guestCount" type="number" min="1" className={inputClass} placeholder="150" />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Tell us about your vision</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full bg-transparent border-b border-charcoal/25 text-charcoal font-body text-sm py-3 focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-charcoal/30"
          placeholder="Share any details about your ideal event..."
        />
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-primary text-cream font-body text-xs tracking-[0.2em] uppercase py-4 hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {state === "loading" ? "Sending..." : "Send Inquiry"}
      </button>

      {state === "error" && (
        <p className="font-body text-sm text-red-600 text-center">
          Something went wrong. Please try again or email us at{" "}
          <a href={SITE.contact.emailHref} className="underline">
            {SITE.contact.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
