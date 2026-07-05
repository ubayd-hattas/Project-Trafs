// Placeholder document content — see PLACEHOLDERS.md.
// No real PDF files are bundled with this prototype; download buttons are
// non-functional placeholders pointing at "#".

export type SchoolDocument = {
  id: string;
  title: string;
  category: string;
  meta: string;
};

export const newsletters: SchoolDocument[] = [
  { id: "news-t1-2026", title: "Term 1 Newsletter", category: "2026", meta: "PDF · Placeholder file size" },
  { id: "news-t4-2025", title: "Term 4 Newsletter", category: "2025", meta: "PDF · Placeholder file size" },
  { id: "news-t3-2025", title: "Term 3 Newsletter", category: "2025", meta: "PDF · Placeholder file size" },
  { id: "news-t2-2025", title: "Term 2 Newsletter", category: "2025", meta: "PDF · Placeholder file size" },
];

export const policies: SchoolDocument[] = [
  { id: "pol-popia", title: "POPIA / Privacy Policy", category: "Governance", meta: "PDF · Placeholder file size" },
  { id: "pol-admissions", title: "Admissions Policy", category: "Admissions", meta: "PDF · Placeholder file size" },
  { id: "pol-code-of-conduct", title: "Code of Conduct", category: "Student Life", meta: "PDF · Placeholder file size" },
  { id: "pol-fees", title: "Fee & Financial Assistance Policy", category: "Admissions", meta: "PDF · Placeholder file size" },
  { id: "pol-sgb-constitution", title: "SGB Constitution", category: "Governance", meta: "PDF · Placeholder file size" },
];
