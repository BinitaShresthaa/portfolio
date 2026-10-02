export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  category: "Web-Based" | "Desktop-Based";
  githubUrl: string;
  liveUrl?: string;
  image?: string; // file inside /public, e.g. "/college.png"
};

export const projects: Project[] = [
  {
    slug: "college-admission-management-system",
    title: "College Admission Management System",
    description:
      "A system to manage student admission records — registration, application tracking and status updates — replacing a manual, paper-based admission process.",
    tech: ["Html", "CSS", "Javascript", "MySQL"],
    category: "Web-Based",
    githubUrl: "https://github.com/BinitaShresthaa/college-admission",
    liveUrl: undefined,
    image: "/college.png", // exists in /public
  },
  {
    slug: "tackled-task",
    title: "Tackled Task",
    description:
      "A task management app for creating, prioritizing and tracking daily tasks, with notifications and status updates for pending and completed work.",
    tech: ["Java Swing", "MySQL"],
    category: "Desktop-Based",
    githubUrl: "https://github.com/BinitaShresthaa/Tackled-Task",
    liveUrl: undefined,
    // no image yet -> gradient placeholder is shown
  },
  {
    slug: "student-information-system",
    title: "Student Information System",
    description:
      "A centralized platform for managing student academic records and alumni information for college data management.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    category: "Web-Based",
    githubUrl: "https://github.com/BinitaShresthaa/abc-project",
    liveUrl: undefined,
    image: "/sis.png",
  },
];