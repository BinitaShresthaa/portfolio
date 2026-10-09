export type EducationItem = {
  badge: string; // small pill at the top of the card
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  subjects?: string[]; // optional chips shown under the description
};

export const education: EducationItem[] = [
  {
    badge: "Bachelor's Degree",
    degree: "Bachelor in Information Communication Technology Education (BICTE)",
    institution: "Aadikavi Bhanubhakta Campus",
    location: "Vyas-1, Bigyanchaur, Tanahun",
    duration: "2023 — Ongoing",
    description:
      "Currently pursuing a Bachelor's degree in Information and Communication Technology Education.",
  },
  {
    badge: "Higher Secondary",
    degree: "Higher Secondary Education (+2)",
    institution: "Satyawati Secondary School",
    location: "Vyas-2, Damauli, Tanahun",
    duration: "2021 — 2022",
    // Edit this line to describe your stream and subjects
    description: "Completed Higher Secondary Education (+2).",
  },
];