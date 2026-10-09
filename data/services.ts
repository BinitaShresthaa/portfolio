// TODO: adjust these to services you'd actually feel confident
// taking on — this list is trimmed to match your current skills.

export type Service = {
  title: string;
  description: string;
  icon: "layout" | "smartphone" | "layers" | "fileText";
};

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Building interactive, well structured interfaces with React, Next.js and Tailwind CSS.",
    icon: "layout",
  },
  {
    title: "Responsive Web Design",
    description:
      "Interfaces that adapt cleanly across mobile, tablet and desktop screens.",
    icon: "smartphone",
  },
  {
    title: "UI Development",
    description:
      "Turning designs and requirements into reusable, accessible components.",
    icon: "layers",
  },
  {
    title: "Documentation & Digital Support",
    description:
      "Organized record-keeping and admin support, backed by experience with office and accounting software.",
    icon: "fileText",
  },
];
