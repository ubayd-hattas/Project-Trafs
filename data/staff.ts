// Names and roles confirmed by the project owner in the redesign brief.
export type StaffMember = {
  id: string;
  name: string;
  role: string;
  department?: string;
  image: string;
};
export const leadership: StaffMember[] = [
  {
    id: "principal",
    name: "Salwa Southgate",
    role: "Principal",
    image: "/images/salwa-southgate.webp",
  },
  {
    id: "vice-principal",
    name: "Anwar Samsodien",
    role: "Vice Principal",
    image: "/images/anwar-samsodien.webp",
  },
];
// Unconfirmed directories are intentionally unpublished.
export const heads: StaffMember[] = [];
export type SgbMember = { id: string; name: string; role: string };
export const sgbMembers: SgbMember[] = [];
