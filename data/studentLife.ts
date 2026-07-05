// Placeholder student life content — see PLACEHOLDERS.md.

export type SportCode = {
  id: string;
  name: string;
  season: "Summer" | "Winter" | "All Year";
  description: string;
};

export const sportCodes: SportCode[] = [
  { id: "sport-1", name: "Rugby", season: "Winter", description: "Placeholder — replace with real team levels (1st XV, 2nd XV, u16, u15) and coach names." },
  { id: "sport-2", name: "Netball", season: "Winter", description: "Placeholder — replace with real team levels and coach names." },
  { id: "sport-3", name: "Cricket", season: "Summer", description: "Placeholder — replace with real team levels and coach names." },
  { id: "sport-4", name: "Athletics", season: "Summer", description: "Placeholder — replace with real fixture and trials information." },
  { id: "sport-5", name: "Soccer", season: "Winter", description: "Placeholder — replace with real team levels and coach names." },
  { id: "sport-6", name: "Hockey", season: "Winter", description: "Placeholder — replace with real team levels and coach names." },
];

export type CultureGroup = {
  id: string;
  name: string;
  description: string;
};

export const cultureGroups: CultureGroup[] = [
  { id: "culture-1", name: "Choir", description: "Placeholder — replace with real rehearsal times, recent performances and achievements." },
  { id: "culture-2", name: "Drama Society", description: "Placeholder — replace with real production history and how to join." },
  { id: "culture-3", name: "Debating Team", description: "Placeholder — replace with real competition record and meeting times." },
  { id: "culture-4", name: "Music (Instrumental)", description: "Placeholder — replace with real ensembles offered and tuition information." },
];

export type Club = {
  id: string;
  name: string;
  description: string;
};

export const clubs: Club[] = [
  { id: "club-1", name: "Interact Club", description: "Placeholder — replace with real community-service activities and meeting schedule." },
  { id: "club-2", name: "Chess Club", description: "Placeholder — replace with real meeting times and inter-school fixtures." },
  { id: "club-3", name: "Environmental Club (Eco-Schools)", description: "Placeholder — replace with real projects and current initiatives." },
  { id: "club-4", name: "Coding & Robotics Club", description: "Placeholder — replace with real programme details." },
];

export type StudentLeader = {
  id: string;
  name: string;
  role: string;
};

export const studentLeadership: StudentLeader[] = [
  { id: "leader-1", name: "Name placeholder", role: "Head Boy" },
  { id: "leader-2", name: "Name placeholder", role: "Head Girl" },
  { id: "leader-3", name: "Name placeholder", role: "Deputy Head Boy" },
  { id: "leader-4", name: "Name placeholder", role: "Deputy Head Girl" },
];

export const codeOfConductPoints = [
  "Placeholder — replace with the real, current Code of Conduct summary points once supplied by the school.",
  "Placeholder — attendance, punctuality and uniform expectations.",
  "Placeholder — respect, discipline and anti-bullying commitments.",
  "Placeholder — process for raising concerns or appeals.",
];
