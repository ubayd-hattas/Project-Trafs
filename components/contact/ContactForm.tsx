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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Full name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          className="w-full rounded-xs border border-navy-800/20 bg-white px-3.5 py-2.5 text-sm focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-500/30"
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="contactEmail" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Email address
        </label>
        <input
          id="contactEmail"
          name="contactEmail"
          type="email"
          required
          className="w-full rounded-xs border border-navy-800/20 bg-white px-3.5 py-2.5 text-sm focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-500/30"
        />
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
          required
          className="w-full rounded-xs border border-navy-800/20 bg-white px-3.5 py-2.5 text-sm focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-500/30"
        >
          <option value="">Select a reason</option>
          <option value="admissions">Admissions enquiry</option>
          <option value="general">General enquiry</option>
          <option value="alumni">Alumni</option>
          <option value="media">Media / research</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contactMessage" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Message
        </label>
        <textarea
          id="contactMessage"
          name="contactMessage"
          rows={5}
          required
          className="w-full rounded-xs border border-navy-800/20 bg-white px-3.5 py-2.5 text-sm focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-500/30"
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}
