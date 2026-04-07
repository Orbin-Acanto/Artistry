"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SITE } from "@/data/site";

type FormState = "idle" | "loading" | "success" | "error";

const ease = [0.76, 0, 0.24, 1] as const;

const inputClass =
  "w-full bg-transparent border-b border-charcoal/20 text-charcoal font-body text-sm py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-charcoal/40";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });
  const [state, setState] = useState<FormState>("idle");
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  }

  return (
    <section id="contact" ref={ref} className="bg-cream py-18 overflow-hidden">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-4">
          <motion.h2
            className="font-display text-display-lg text-primary uppercase leading-none tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, delay: 0.05, ease }}
          >
            Enquire
          </motion.h2>

          <motion.p
            className="font-body text-sm text-charcoal/55 mt-5 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Please fill out the contact form, email{" "}
            <a
              href={SITE.contact.emailHref}
              className="hover:text-charcoal transition-colors"
            >
              {SITE.contact.email}
            </a>{" "}
            or call{" "}
            <a
              href={SITE.contact.phoneHref}
              className="hover:text-charcoal transition-colors"
            >
              {SITE.contact.phone}
            </a>{" "}
            to schedule a visit.
          </motion.p>

          <motion.div
            className="h-px bg-charcoal/12 mt-12 origin-center"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
          />
        </div>

        {/* ── Form ── */}
        {state === "success" ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="font-display text-display-md text-primary uppercase mb-3">
              Thank You.
            </p>
            <p className="font-body text-charcoal/50 text-sm">
              We&apos;ll be in touch within 24–48 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
              <div>
                <input
                  name="fullName"
                  type="text"
                  required
                  placeholder="Your Full Name"
                  className={inputClass}
                />
              </div>
              <div>
                <select
                  name="eventType"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-transparent border-b border-charcoal/20 font-body text-sm py-3 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  style={{
                    color: eventType ? "rgb(42,42,42)" : "rgba(42,42,42,0.4)",
                  }}
                >
                  <option value="" disabled>
                    Event Type
                  </option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="social">Social Celebration</option>
                  <option value="celebrate-life">Celebrate Life</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
              <div>
                <input
                  name="company"
                  type="text"
                  placeholder="Company"
                  className={inputClass}
                />
              </div>
              <div>
                <input
                  name="guestCount"
                  type="number"
                  min="1"
                  placeholder="Number of Guests"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone*"
                  className={inputClass}
                />
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email*"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
              <div>
                <input
                  name="eventDate"
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Event Start Date (MM/DD/YYYY)"
                  className={inputClass}
                />
              </div>
              <div>
                <input
                  name="message"
                  type="text"
                  placeholder="Message"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-14">
              <div>
                <input
                  name="referral"
                  type="text"
                  placeholder="How did you hear about us?"
                  className={inputClass}
                />
              </div>
              <div>
                <input
                  name="additionalDates"
                  type="text"
                  placeholder="Additional Dates (MM/DD/YYYY)"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Submit row */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={state === "loading"}
                className="btn-primary min-w-[160px] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {state === "loading" ? "Sending…" : "Submit"}
              </button>
            </div>

            {state === "error" && (
              <p className="font-body text-xs text-red-500 mt-4 text-right">
                Something went wrong — email us at{" "}
                <a href={SITE.contact.emailHref} className="underline">
                  {SITE.contact.email}
                </a>
                .
              </p>
            )}
          </motion.form>
        )}
      </div>
    </section>
  );
}
