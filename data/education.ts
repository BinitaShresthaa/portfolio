export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  note?: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor in Information Communication Technology Education (BICTE)",
    institution: "Aadikavi Bhanubhakta Campus",
    location: "Vyas-1, Bigyanchaur, Tanahun",
    duration: "2023 — Ongoing",
  },
  {
    degree: "Higher Secondary Education (+2)",
    institution: "Satyawati Secondary School",
    location: "Vyas-2, Damauli, Tanahun",
    duration: "2021 — 2022",
  },
];
