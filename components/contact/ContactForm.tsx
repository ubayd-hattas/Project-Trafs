"use client";

import { useState } from "react";
import { Button } from '@/components/ui/Button';

/**
 * Placeholder general contact form. This is a Phase 1 structural/UI
 * placeholder only — it does not submit anywhere yet. See PLACEHOLDERS.md:
 * a real submission needs a backend endpoint or a service like Formspree /
 * a school CMS integration before this goes live.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    if (!formData.get("fullName")) newErrors.fullName = "Full name is required.";
    if (!formData.get("contactEmail")) newErrors.contactEmail = "Email address is required.";
    if (!formData.get("reason")) newErrors.reason = "Please select a reason.";
    if (!formData.get("contactMessage")) newErrors.contactMessage = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-xs border border-brass-500/40 bg-brass-500/10 p-6 text-navy-900">
        <p className="font-semibold">Thank you — this is a prototype form.</p>
        <p className="prose-body mt-2 text-sm">
          In the live site, this message would be routed to the school office. No data has actually been sent.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Full name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          aria-required="true"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className={`w-full rounded-xs border bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 ${
            errors.fullName
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
              : "border-navy-800/20 focus:border-brass-500 focus:ring-brass-500/30"
          }`}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-xs text-red-500" aria-live="polite">
            {errors.fullName}
          </p>
        )}
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="contactEmail" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Email address
        </label>
        <input
          id="contactEmail"
          name="contactEmail"
          type="email"
          aria-required="true"
          aria-invalid={!!errors.contactEmail}
          aria-describedby={errors.contactEmail ? "contactEmail-error" : undefined}
          className={`w-full rounded-xs border bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 ${
            errors.contactEmail
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
              : "border-navy-800/20 focus:border-brass-500 focus:ring-brass-500/30"
          }`}
        />
        {errors.contactEmail && (
          <p id="contactEmail-error" className="mt-1 text-xs text-red-500" aria-live="polite">
            {errors.contactEmail}
          </p>
        )}
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="contactPhone" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Phone number (optional)
        </label>
        <input
          id="contactPhone"
          name="contactPhone"
          type="tel"
          className="w-full rounded-xs border border-navy-800/20 bg-white px-3.5 py-2.5 text-sm focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-500/30"
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="reason" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Reason for contact
        </label>
        <select
          id="reason"
          name="reason"
          aria-required="true"
          aria-invalid={!!errors.reason}
          aria-describedby={errors.reason ? "reason-error" : undefined}
          className={`w-full rounded-xs border bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 ${
            errors.reason
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
              : "border-navy-800/20 focus:border-brass-500 focus:ring-brass-500/30"
          }`}
        >
          <option value="">Select a reason</option>
          <option value="admissions">Admissions enquiry</option>
          <option value="general">General enquiry</option>
          <option value="alumni">Alumni</option>
          <option value="media">Media / research</option>
          <option value="other">Other</option>
        </select>
        {errors.reason && (
          <p id="reason-error" className="mt-1 text-xs text-red-500" aria-live="polite">
            {errors.reason}
          </p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contactMessage" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Message
        </label>
        <textarea
          id="contactMessage"
          name="contactMessage"
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.contactMessage}
          aria-describedby={errors.contactMessage ? "contactMessage-error" : undefined}
          className={`w-full rounded-xs border bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 ${
            errors.contactMessage
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
              : "border-navy-800/20 focus:border-brass-500 focus:ring-brass-500/30"
          }`}
        />
        {errors.contactMessage && (
          <p id="contactMessage-error" className="mt-1 text-xs text-red-500" aria-live="polite">
            {errors.contactMessage}
          </p>
        )}
      </div>
      <div className="sm:col-span-2">
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}
