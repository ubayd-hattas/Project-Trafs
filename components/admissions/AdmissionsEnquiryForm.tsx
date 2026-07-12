// NOTE: not yet rendered — awaiting backend decision
"use client";

import { useState } from "react";
import { Button } from '@/components/ui/Button';

/**
 * Placeholder admissions enquiry form. This is a Phase 1 structural/UI
 * placeholder only â€” it does not submit anywhere yet. See PLACEHOLDERS.md:
 * a real submission needs a backend endpoint or a service like Formspree /
 * a school CMS integration before this goes live.
 */
export function AdmissionsEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-xs border border-brass-500/40 bg-brass-500/10 p-6 text-navy-900"
      >
        <p className="font-semibold">Thank you â€” this is a prototype form.</p>
        <p className="prose-body mt-2 text-sm">
          In the live site, this enquiry would be routed to the admissions office.
          No data has actually been sent.
        </p>
      </div>
    );
  }

  // NOTE: not yet rendered â€” awaiting backend decision
  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="parentName" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Parent / guardian name
        </label>
        <input
          id="parentName"
          name="parentName"
          type="text"
          required
          className="w-full rounded-xs border border-navy-800/20 bg-white px-3.5 py-2.5 text-sm focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-500/30"
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="learnerName" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Learner name
        </label>
        <input
          id="learnerName"
          name="learnerName"
          type="text"
          required
          className="w-full rounded-xs border border-navy-800/20 bg-white px-3.5 py-2.5 text-sm focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-500/30"
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xs border border-navy-800/20 bg-white px-3.5 py-2.5 text-sm focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-500/30"
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="gradeApplying" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Grade applying for
        </label>
        <select
          id="gradeApplying"
          name="gradeApplying"
          required
          className="w-full rounded-xs border border-navy-800/20 bg-white px-3.5 py-2.5 text-sm focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-500/30"
        >
          <option value="">Select a grade</option>
          <option value="8">Grade 8</option>
          <option value="9">Grade 9</option>
          <option value="10">Grade 10</option>
          <option value="11">Grade 11</option>
          <option value="12">Grade 12</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xs border border-navy-800/20 bg-white px-3.5 py-2.5 text-sm focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-500/30"
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit">Send enquiry</Button>
      </div>
    </form>
  );
}

