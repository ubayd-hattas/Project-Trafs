// Placeholder staff content — see PLACEHOLDERS.md.
// Junior teaching staff are intentionally excluded from this prototype; see
// note on the Staff Directory page about a consent-based opt-in approach.

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  department?: string;
  image: string;
};

export const leadership: StaffMember[] = [
  { id: "lead-1", name: "Principal name placeholder", role: "Principal", image: "/placeholders/principal.svg" },
  { id: "lead-2", name: "Deputy Principal name placeholder", role: "Deputy Principal (Academics)", image: "/placeholders/principal.svg" },
  { id: "lead-3", name: "Deputy Principal name placeholder", role: "Deputy Principal (Admin)", image: "/placeholders/principal.svg" },
];

export const heads: StaffMember[] = [
  { id: "hod-1", name: "HOD name placeholder", role: "Head of Department", department: "Languages", image: "/placeholders/principal.svg" },
  { id: "hod-2", name: "HOD name placeholder", role: "Head of Department", department: "Mathematics", image: "/placeholders/principal.svg" },
  { id: "hod-3", name: "HOD name placeholder", role: "Head of Department", department: "Sciences", image: "/placeholders/principal.svg" },
  { id: "hod-4", name: "HOD name placeholder", role: "Head of Department", department: "Humanities", image: "/placeholders/principal.svg" },
];

export type SgbMember = {
  id: string;
  name: string;
  role: string;
};

export const sgbMembers: SgbMember[] = [
  { id: "sgb-1", name: "Name placeholder", role: "Chairperson" },
  { id: "sgb-2", name: "Name placeholder", role: "Vice-Chairperson" },
  { id: "sgb-3", name: "Name placeholder", role: "Treasurer" },
  { id: "sgb-4", name: "Name placeholder", role: "Secretary" },
  { id: "sgb-5", name: "Name placeholder", role: "Parent Representative" },
  { id: "sgb-6", name: "Name placeholder", role: "Educator Representative" },
];
