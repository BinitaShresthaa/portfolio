// ─────────────────────────────────────────────────────────────
// TODO for each project: swap in your real GitHub repo link, a
// live demo link if you have one, an accurate tech stack, and a
// screenshot in /public/images (see the README for dimensions).
// ─────────────────────────────────────────────────────────────

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  category: "Web-Based" | "Desktop-Based";
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "college-admission-management-system",
    title: "College Admission Management System",
    description:
      "A system to manage student admission records — registration, application tracking and status updates — replacing a manual, paper-based admission process.",
    tech: ["Html", "CSS", "Javascript", "MySQL"], // TODO: confirm actual stack
    category: "Web-Based",
    githubUrl: "https://github.com/your-username/college-admission-system",
    liveUrl: undefined, // TODO: add if deployed
  },
  {
    slug: "tackled-task",
    title: "Tackled Task",
    description:
      "A task management app for creating, prioritizing and tracking daily tasks, with notifications and status updates for pending and completed work.",
    tech: ["Java Swing", "MySQL"], // TODO: confirm actual stack
    category: "Desktop-Based",
    githubUrl: "https://github.com/your-username/tackled-task",
    liveUrl: undefined,
  },
  {
    slug: "student-information-system",
    title: "Student Information System",
    description:
      "A centralized platform for managing student academic records and alumni information for college data management.",
    tech: ["React", "Next.js", "Tailwind CSS"], // TODO: confirm actual stack
    category: "Web-Based",
    githubUrl: "https://github.com/BinitaShresthaa/abc-project",
    liveUrl: undefined,
  },
];
