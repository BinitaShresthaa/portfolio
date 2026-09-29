// ─────────────────────────────────────────────────────────────
// Group your skills honestly — only list what you're comfortable
// being asked about in an interview. The "Frontend" and "Office &
// Records" groups below are pulled directly from your resume.
// The rest follow the categories from your brief — prune anything
// you haven't actually worked with yet.
// ─────────────────────────────────────────────────────────────

export type SkillGroup = {
  title: string;
  icon: "code" | "server" | "database" | "wrench" | "sparkles" | "briefcase";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    skills: ["Node.js", "REST APIs"], // TODO: add NestJS / Django only if you've used them
  },
  {
    title: "Database",
    icon: "database",
    skills: ["MySQL", "SQLite"], // TODO: add PostgreSQL if applicable
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Office & Records",
    icon: "briefcase",
    skills: [
      "Microsoft Word / Excel / PowerPoint",
      "Tally 9.0",
      "FinAcct 3.0.5",
      "Finpro 10",
    ],
  },
  {
    title: "Other",
    icon: "sparkles",
    skills: ["Documentation & Record Keeping", "SEO Basics"], // TODO: add Digital Marketing / Cybersecurity if applicable
  },
];

export const softSkills: string[] = [
  "Team Work",
  "Communication",
  "Customer Service",
  "Time Management",
  "Documentation & Record Keeping",
];
