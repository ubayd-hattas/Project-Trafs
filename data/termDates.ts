// Source: "Calendar" block on the trafalgarhighschool.co.za homepage,
// read 31 October 2026. Update this list when the school publishes new dates;
// past dates are greyed out automatically and the list hides once all have passed.
export type TermDate = {
  date: string; // YYYY-MM-DD
  label: string;
  note?: string;
};

export const termDatesTitle = "Term 4, 2026";

export const termDates: TermDate[] = [
  { date: "2026-10-06", label: "Term 4 starts" },
  { date: "2026-10-13", label: "Matric exams begin" },
  { date: "2026-12-10", label: "Last day of the school year" },
];
