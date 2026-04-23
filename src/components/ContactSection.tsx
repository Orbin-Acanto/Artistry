"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SITE } from "@/data/site";
import { usePathname, useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

const ease = [0.76, 0, 0.24, 1] as const;

const inputClass =
  "w-full bg-transparent border-b border-charcoal/20 text-charcoal font-body text-sm py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-charcoal/40";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });
  const pathname = usePathname();
  const router = useRouter();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const formStartTimeRef = useRef<number | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [attachments, setAttachments] = useState<File[]>([]);

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    eventStartDate: "",
    eventStartHour: "01",
    eventStartMinute: "00",
    eventStartPeriod: "AM",
    eventType: "",
    numberOfGuests: "",
    howDidYouHear: "",
    message: "",
    additionalDates: "",
    website: "", // honeypot
  });

  useEffect(() => {
    formStartTimeRef.current = Date.now();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const incoming = Array.from(files);
    const valid: File[] = [];
    let hasOversized = false;

    incoming.forEach((file) => {
      if (file.size <= MAX_FILE_SIZE) {
        valid.push(file);
      } else {
        hasOversized = true;
      }
    });

    if (hasOversized) {
      setSubmitStatus({ type: "error", message: "Each attachment must be 20MB or smaller." });
      if (fileInputRef.current) fileInputRef.current.value = "";
      setAttachments([]);
      return;
    }

    if (valid.length > 0) {
      setAttachments((prev) => [...prev, ...valid]);
    }
  };

  const removeFile = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!formData.fullName || !formData.email) {
      setSubmitStatus({ type: "error", message: "Please fill in all required fields (Name and Email)." });
      setIsSubmitting(false);
      return;
    }

    if (!recaptchaToken) {
      setSubmitStatus({ type: "error", message: "Please complete the reCAPTCHA verification." });
      setIsSubmitting(false);
      return;
    }

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      data.set("page", pathname || "/");
      data.set("recaptchaToken", recaptchaToken);
      if (formStartTimeRef.current) {
        data.set("formStartedAt", String(formStartTimeRef.current));
      }

      attachments.forEach((file) => {
        data.append("attachments", file);
      });

      const response = await fetch("/api/contact-form", { method: "POST", body: data });
      const result = await response.json();

      if (result.success && result.data) {
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
        router.push("/thank-you");
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to submit. Please try again or contact us directly.",
        });
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to submit. Please try again or contact us directly.",
      });
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="bg-cream py-10 md:py-section overflow-hidden">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <motion.h2
            className="font-display text-[clamp(1.75rem,6vw,3.5rem)] leading-tight text-balance break-words uppercase text-primary-dark"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, delay: 0.05, ease }}
          >
            Enquire
          </motion.h2>

          <motion.p
            className="font-body text-sm md:text-base leading-relaxed mt-4 max-w-lg mx-auto text-charcoal/65"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Please fill out the contact form, email{" "}
            <a href={SITE.contact.emailHref} className="hover:text-charcoal transition-colors">
              {SITE.contact.email}
            </a>{" "}
            or call{" "}
            <a href={SITE.contact.phoneHref} className="hover:text-charcoal transition-colors">
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

        {/* Status message */}
        {submitStatus && (
          <div
            role="alert"
            className={`mb-6 rounded px-4 py-3 text-sm font-body ${
              submitStatus.type === "success"
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-700"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
        >
          {/* Honeypot — hidden from real users, catches bots */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
            style={{ display: "none" }}
          />

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
            <input
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Full Name *"
              className={inputClass}
            />
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-charcoal/20 font-body text-sm py-3 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
              style={{ color: formData.eventType ? "rgb(42,42,42)" : "rgba(42,42,42,0.4)" }}
            >
              <option value="" disabled>Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="social">Social Celebration</option>
              <option value="celebrate-life">Celebrate Life</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
            <input
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className={inputClass}
            />
            <input
              name="numberOfGuests"
              type="number"
              min="1"
              value={formData.numberOfGuests}
              onChange={handleChange}
              placeholder="Number of Guests"
              className={inputClass}
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              className={inputClass}
            />
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
            <input
              name="eventStartDate"
              type="text"
              value={formData.eventStartDate}
              onChange={handleChange}
              placeholder="Event Start Date (MM/DD/YYYY)"
              className={inputClass}
            />
            <input
              name="message"
              type="text"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className={inputClass}
            />
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
            <input
              name="howDidYouHear"
              type="text"
              value={formData.howDidYouHear}
              onChange={handleChange}
              placeholder="How did you hear about us?"
              className={inputClass}
            />
            <input
              name="additionalDates"
              type="text"
              value={formData.additionalDates}
              onChange={handleChange}
              placeholder="Additional Dates (MM/DD/YYYY)"
              className={inputClass}
            />
          </div>

          {/* Event time row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
            <div className="flex gap-3">
              <select
                name="eventStartHour"
                value={formData.eventStartHour}
                onChange={handleChange}
                className="flex-1 bg-transparent border-b border-charcoal/20 font-body text-sm py-3 focus:outline-none focus:border-primary transition-colors text-charcoal"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                  <option key={h} value={h.toString().padStart(2, "0")}>
                    {h.toString().padStart(2, "0")}
                  </option>
                ))}
              </select>
              <select
                name="eventStartMinute"
                value={formData.eventStartMinute}
                onChange={handleChange}
                className="flex-1 bg-transparent border-b border-charcoal/20 font-body text-sm py-3 focus:outline-none focus:border-primary transition-colors text-charcoal"
              >
                {["00", "15", "30", "45"].map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <select
                name="eventStartPeriod"
                value={formData.eventStartPeriod}
                onChange={handleChange}
                className="flex-1 bg-transparent border-b border-charcoal/20 font-body text-sm py-3 focus:outline-none focus:border-primary transition-colors text-charcoal"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>

            {/* File upload */}
            <div>
              <input
                type="file"
                ref={fileInputRef}
                multiple
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                className="w-full font-body text-sm text-charcoal/60 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded file:text-xs file:font-body file:tracking-widest file:uppercase file:bg-primary file:text-cream hover:file:bg-primary-dark file:transition-colors cursor-pointer"
              />
              {attachments.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {attachments.map((file, i) => (
                    <li key={i} className="flex items-center justify-between bg-charcoal/5 rounded px-3 py-2">
                      <span className="font-body text-xs text-charcoal/70">
                        {file.name} ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        aria-label="Remove file"
                        className="text-red-500 hover:text-red-700 ml-3"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-center mb-10">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={(token) => setRecaptchaToken(token)}
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || !recaptchaToken}
              className="btn-primary min-w-[160px] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending…" : "Submit"}
            </button>
          </div>

          {submitStatus?.type === "error" && (
            <p className="font-body text-xs text-red-500 mt-4 text-right">
              {submitStatus.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
