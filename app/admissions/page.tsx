import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  Landmark,
  GraduationCap,
  Users2,
  HandHeart,
  Banknote,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { DocumentListItem } from '@/components/shared/DocumentListItem';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { admissionsFaq } from '@/data/faq';

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Everything a prospective parent or learner needs to apply to Trafalgar High School — the application process, requirements, fees, key dates and answers to common questions, all on one page.",
};

const WCED_PORTAL_URL = "https://wcedonline.westerncape.gov.za/admissions-202122";
const ADMISSION_POLICY_URL = "https://trafalgarhighschool.co.za/admission-policy/";
const ADMISSION_PROCEDURE_URL = "https://trafalgarhighschool.co.za/admission-procedure/";

const whyTrafalgar = [
  {
    icon: Landmark,
    title: "113+ Years of History",
    body: "Founded in 1912, Trafalgar is one of South Africa's oldest and most historically significant schools.",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    body: "A consistent record of strong matric results and a culture that pushes every learner to achieve.",
  },
  {
    icon: Users2,
    title: "Leadership Opportunities",
    body: "From the RCL to Head Boy and Head Girl, learners are given real platforms to lead.",
  },
  {
    icon: HandHeart,
    title: "Strong Community",
    body: "A tight-knit school family, backed by an active and proudly engaged alumni network.",
  },
];

const applicationSteps = [
  {
    title: "Review the Admission Policy & Procedure",
    body: "Start by reading our Admission Policy and Admission Procedure so you know exactly what's required before you apply.",
  },
  {
    title: "Apply online via the WCED Admissions Portal",
    body: "All new applications are submitted online through the Western Cape Education Department. Applications are not available at the school.",
  },
  {
    title: "Gather your supporting documents",
    body: "Collect every document listed under Required Documents below, as outlined in the Admission Procedure.",
  },
  {
    title: "Submit your form and documents at Reception",
    body: "Bring your completed Application Form together with all required documentation to the School Reception.",
  },
  {
    title: "Await your outcome",
    body: "Placeholder — confirm the real timeline for admissions decisions with the school office.",
  },
];

const requiredDocuments = [
  "Completed Application Form (via the WCED Admissions Portal)",
  "Certified copy of the learner's birth certificate",
  "Certified copy of the parent/guardian's ID",
  "Learner's latest school report",
  "Proof of residence",
];

const feeRows = [
  { item: "Annual school fee (2026)", amount: "R 7 200" },
  { item: "Increase over 2025", amount: "5%" },
  { item: "First child", amount: "R 7 200" },
  { item: "Second child and every child thereafter", amount: "R 7 000" },
  { item: "Early settlement discount (paid in full by 28 Feb 2026)", amount: "R 1 000 off" },
];

const importantDates = [
  { label: "Fee exemption applications open", date: "7 January 2026" },
  { label: "Fee exemption applications close", date: "28 February 2026" },
  { label: "Early settlement discount deadline", date: "28 February 2026" },
  { label: "Half of school fees due", date: "14 June 2026" },
  { label: "Outstanding fees due in full", date: "31 October 2026" },
  { label: "WCED application window", date: "Placeholder — see the WCED Admissions Portal for current dates" },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Admissions"
        title="Joining the Trafalgar Family"
        description="Everything a prospective parent or learner needs — how to apply, requirements, fees, key dates and answers to common questions, all in one place."
        image="/placeholders/students.svg"
      />
      <Breadcrumbs trail={[{ label: "Admissions" }]} />

      {/* 2. Admissions Overview */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="Overview" title="Welcome to Trafalgar Admissions" />
        <div className="prose-body mt-6 max-w-3xl space-y-4">
          <p>
            Trafalgar High School welcomes applications from prospective learners each year. All new
            applications are managed centrally through the Western Cape Education Department&rsquo;s online
            admissions portal — <strong>applications are not available at the school itself.</strong>
          </p>
          <p>
            Before applying, please read our Admission Policy and Admission Procedure carefully, and make
            sure every document listed in the Admission Procedure accompanies your Application Form when
            it is submitted to the School Reception.
          </p>
        </div>
      </section>

      {/* 3. Why Choose Trafalgar? */}
      <section className="bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Why Trafalgar" title="Why Choose Trafalgar?" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyTrafalgar.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
                <Icon className="h-7 w-7 text-brass-600" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg text-navy-800">{title}</h3>
                <p className="mt-2 text-sm text-ink-light">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Application Process */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="Process" title="How to Apply" description="Five steps from first read to a submitted application." />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {applicationSteps.map((step, i) => (
            <li key={step.title} className="rounded-xs border border-navy-800/10 bg-parchment-100 p-5 shadow-card">
              <span className="font-display text-2xl text-brass-500">{i + 1}</span>
              <h3 className="mt-2 font-display text-base text-navy-800">{step.title}</h3>
              <p className="mt-1.5 text-sm text-ink-light">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={WCED_PORTAL_URL} variant="primary">
            Apply via WCED Portal
          </Button>
          <Button href={ADMISSION_POLICY_URL} variant="ghost">
            Read Admission Policy
          </Button>
          <Button href={ADMISSION_PROCEDURE_URL} variant="ghost">
            Read Admission Procedure
          </Button>
        </div>
      </section>

      {/* 5. Admission Requirements */}
      <section className="bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Requirements" title="Admission Requirements" />
            <p className="prose-body mt-6">
              Full, authoritative entry requirements are set out in our Admission Policy — please treat
              that document as the source of truth. In summary, applications are assessed against the
              criteria published there, alongside the supporting documents listed below.
            </p>
            <p className="mt-4 text-xs text-ink-muted">
              Placeholder — replace with a plain-language summary of the specific entry/catchment criteria
              once confirmed with the admissions office, cross-checked against the Admission Policy.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Catchment" title="Feeder area & catchment policy" />
            <p className="prose-body mt-6">
              Placeholder — replace with the real catchment/feeder-school policy, aligned with the Western
              Cape Education Department&rsquo;s current admissions circular.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Required Documents */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="Checklist" title="Required Documents" description="As outlined in the Admission Procedure — have these ready before you submit." />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-3xl">
          {requiredDocuments.map((doc) => (
            <li
              key={doc}
              className="flex items-start gap-3 rounded-xs border border-navy-800/10 bg-parchment-100 px-4 py-3.5 shadow-card"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brass-600" aria-hidden="true" />
              <span className="text-sm text-ink-light">{doc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 7. School Fees */}
      <section className="bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="2026 Fees" title="School Fees" />
          <div className="mt-8 overflow-hidden rounded-xs border border-navy-800/10 shadow-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy-800 text-parchment-200">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Item</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-800/10 bg-parchment-100">
                {feeRows.map((row) => (
                  <tr key={row.item}>
                    <td className="px-5 py-3.5">{row.item}</td>
                    <td className="px-5 py-3.5 text-ink-muted">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose-body mt-10 max-w-3xl space-y-4">
            <h3 className="font-display text-xl text-navy-800">Payment methods</h3>
            <p>
              Trafalgar is a school fee-paying school. Fees may be paid by monthly debit order, EFT, or
              in person using the school&rsquo;s card facility — using these facilities instead of cash
              helps reduce the security risk of cash on school premises.
            </p>
            <p>
              Fees may also be paid in ten monthly instalments via debit order from a personal bank
              account: half of the school fees must be paid by <strong>14 June 2026</strong>, with the
              outstanding balance due by <strong>31 October 2026</strong>. Non-payment of fees may be
              recorded with a credit bureau.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Fee Exemption Information */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Financial Assistance" title="Fee Exemption Information" />
            <div className="prose-body mt-6 space-y-4">
              <p>
                Parents who need assistance with school fees can apply for a fee exemption. Exemption
                applications are open from <strong>7 January</strong> to <strong>28 February 2026</strong>.
              </p>
              <p>
                Exemption criteria are set out in accordance with the South African Schools Act
                (SASA), No. 84 of 1996.
              </p>
              <p>
                Applications must be made on the prescribed exemption application documents, available
                from the Bursar, <strong>Mrs Sonday</strong>, at the Finance Office.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card h-fit">
            <ShieldCheck className="h-6 w-6 shrink-0 text-brass-600" aria-hidden="true" />
            <p className="text-sm text-ink-light">
              If you&rsquo;re unsure whether you qualify, contact the Finance Office directly — exemption
              eligibility is assessed on a case-by-case basis under SASA 84 of 1996.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Banking Details */}
      <section className="bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Payments" title="Banking Details" />
          <div className="mt-8 max-w-xl overflow-hidden rounded-xs border border-navy-800/10 bg-parchment-100 shadow-card">
            <dl className="divide-y divide-navy-800/10">
              {[
                ["Bank", "Standard Bank"],
                ["Account Number", "070622191"],
                ["Branch Code", "020909"],
                ["Account Name", "Trafalgar High School"],
                ["Reference", "Name and Surname of Learner"],
              ].map(([term, value]) => (
                <div key={term} className="flex items-center justify-between gap-4 px-5 py-3.5">
                  <dt className="flex items-center gap-2.5 font-semibold text-navy-800">
                    <Banknote className="h-4 w-4 shrink-0 text-brass-600" aria-hidden="true" />
                    {term}
                  </dt>
                  <dd className="text-right text-ink-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 max-w-xl text-sm font-semibold text-navy-800">
            Please always use the learner&rsquo;s name and surname as the payment reference — this is
            very important for your payment to be allocated correctly.
          </p>
        </div>
      </section>

      {/* 10. Important Dates */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="Calendar" title="Important Dates" />
        <ul className="mt-8 max-w-2xl divide-y divide-navy-800/10 rounded-xs border border-navy-800/10 bg-parchment-100 shadow-card">
          {importantDates.map((d) => (
            <li key={d.label} className="flex items-center gap-4 px-5 py-4">
              <CalendarDays className="h-5 w-5 shrink-0 text-brass-600" aria-hidden="true" />
              <span className="flex-1 font-semibold text-navy-800">{d.label}</span>
              <span className="text-ink-muted text-sm">{d.date}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 11. Frequently Asked Questions */}
      <section className="bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-8">
            <Accordion items={admissionsFaq} />
          </div>
        </div>
      </section>

      {/* 12. Downloads */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="Downloads" title="Downloads" description="Policies, procedures and forms referenced on this page." />
        <div className="mt-8 grid gap-4 max-w-2xl">
          <DocumentListItem
            title="Admission Policy"
            meta="Trafalgar High School"
            href={ADMISSION_POLICY_URL}
            external
          />
          <DocumentListItem
            title="Admission Procedure"
            meta="Trafalgar High School"
            href={ADMISSION_PROCEDURE_URL}
            external
          />
          <DocumentListItem
            title="Fee Exemption Application Form"
            meta="Placeholder — obtain from the Bursar, Mrs Sonday, at the Finance Office"
            href="#"
          />
          <DocumentListItem
            title="Debit Order Form"
            meta="Placeholder — link the real, current debit order form PDF"
            href="#"
          />
        </div>
      </section>

      {/* 13. Contact Admissions */}
      <section className="bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Contact Admissions" />
            <ul className="prose-body mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brass-600" aria-hidden="true" />
                35 Kuiper Street, Zonnebloem, Cape Town
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brass-600" aria-hidden="true" />
                021 465 2969
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brass-600" aria-hidden="true" />
                Monday–Friday, 8:00–15:00
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brass-600" aria-hidden="true" />
                Placeholder — official admissions email address
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-brass-600" aria-hidden="true" />
                Fee exemption queries: the Bursar, Mrs Sonday, Finance Office
              </li>
            </ul>
          </div>
          <div className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card h-fit">
            <h3 className="flex items-center gap-2 font-display text-lg text-navy-800">
              <ExternalLink className="h-5 w-5 text-brass-600" aria-hidden="true" />
              Applying for a place?
            </h3>
            <p className="mt-2 text-sm text-ink-light">
              New applications go through the WCED, not the school directly. Use the portal below, or
              contact WCED at{" "}
              <a href="mailto:admissions@westerncape.gov.za" className="font-semibold text-brass-600 hover:underline">
                admissions@westerncape.gov.za
              </a>.
            </p>
            <Link
              href={WCED_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-600"
            >
              WCED Admissions Portal <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 14. Call To Action */}
      <CTASection
        title="Ready to Join Trafalgar?"
        description="Our Admissions Office is here to help — call 021 465 2969, or apply online today via the WCED Admissions Portal."
        primary={{ label: "Apply Today", href: WCED_PORTAL_URL }}
        secondary={{ label: "Contact Admissions", href: "/contact" }}
      />
    </>
  );
}
