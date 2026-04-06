"use client";

import { useState } from "react";
import { SITE } from "@/data/site";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    // Placeholder: wire up to API route or Resend / Formspree later
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="text-center py-12">
        <p className="font-display text-display-md text-cream mb-3">Thank you.</p>
        <p className="font-body text-cream/65 text-base">
          We&apos;ll be in touch within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block font-body text-xs tracking-widest uppercase text-cream/50 mb-2">
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full bg-transparent border border-cream/20 text-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-cream/60 transition-colors placeholder:text-cream/25"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block font-body text-xs tracking-widest uppercase text-cream/50 mb-2">
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full bg-transparent border border-cream/20 text-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-cream/60 transition-colors placeholder:text-cream/25"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-body text-xs tracking-widest uppercase text-cream/50 mb-2">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-transparent border border-cream/20 text-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-cream/60 transition-colors placeholder:text-cream/25"
          placeholder={SITE.contact.email}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-body text-xs tracking-widest uppercase text-cream/50 mb-2">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full bg-transparent border border-cream/20 text-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-cream/60 transition-colors placeholder:text-cream/25"
          placeholder="212.555.0100"
        />
      </div>

      <div>
        <label htmlFor="eventType" className="block font-body text-xs tracking-widest uppercase text-cream/50 mb-2">
          Event Type *
        </label>
        <select
          id="eventType"
          name="eventType"
          required
          className="w-full bg-primary-dark border border-cream/20 text-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-cream/60 transition-colors"
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
        <label htmlFor="eventDate" className="block font-body text-xs tracking-widest uppercase text-cream/50 mb-2">
          Preferred Date
        </label>
        <input
          id="eventDate"
          name="eventDate"
          type="date"
          className="w-full bg-transparent border border-cream/20 text-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-cream/60 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="guestCount" className="block font-body text-xs tracking-widest uppercase text-cream/50 mb-2">
          Estimated Guest Count
        </label>
        <input
          id="guestCount"
          name="guestCount"
          type="number"
          min="1"
          className="w-full bg-transparent border border-cream/20 text-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-cream/60 transition-colors placeholder:text-cream/25"
          placeholder="150"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-xs tracking-widest uppercase text-cream/50 mb-2">
          Tell us about your vision
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full bg-transparent border border-cream/20 text-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-cream/60 transition-colors resize-none placeholder:text-cream/25"
          placeholder="Share any details about your ideal event..."
        />
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-outline w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "loading" ? "Sending..." : "Send Inquiry"}
      </button>

      {state === "error" && (
        <p className="font-body text-sm text-red-400 text-center">
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
