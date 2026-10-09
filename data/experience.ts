// ─────────────────────────────────────────────────────────────
// TODO: "responsibilities" for the Office Assistant role is a
// reasonable placeholder built from the soft skills on your
// resume — rewrite it with your real day-to-day duties.
// ─────────────────────────────────────────────────────────────

export type TimelineItem = {
  type: "work" | "training";
  title: string;
  organization: string;
  location: string;
  duration: string;
  points: string[];
};

export const timeline: TimelineItem[] = [
  {
    type: "work",
    title: "Office Assistant",
    organization: "GRS Link Internet Service Pvt. Ltd.",
    location: "Vyas-2, Damauli, Tanahun",
    duration: "2023 — 2024",
    points: [
      "Handled front-desk customer service and day to day client queries", // TODO: verify/replace
      "Maintained documentation and record keeping for office operations",
      "Supported administrative tasks requiring accuracy and time management",
    ],
  },
  {
    type: "training",
    title: "Sandbox Session - Build & Deploy Modern Web Apps with Next.js",
    organization: "Aadikavi Bhanubhakta Campus (ABIT Club)",
    location: "Vyas-1, Bigyanchaur, Tanahun",
    duration: "July 2026",
    points: [
      "Hands on session on building and deploying modern web applications with Next.js",
    ],
  },
  {
    type: "training",
    title: "ICT Spring BootCamp - Digital Growth, Personal Branding & Marketing Execution",
    organization: "Aadikavi Bhanubhakta Campus (ABIT Club & TechAxis)",
    location: "Vyas-1, Bigyanchaur, Tanahun",
    duration: "April 2026",
    points: [
      "Workshop covering digital growth strategy, personal branding and marketing execution",
    ],
  },
];
