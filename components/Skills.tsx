import {
  Briefcase,
  Code2,
  Database,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups, softSkills } from "@/data/skills";

const icons = {
  code: Code2,
  server: Server,
  database: Database,
  wrench: Wrench,
  sparkles: Sparkles,
  briefcase: Briefcase,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface-alt">
      <div className="container-content">
        <SectionHeading
          title="Skills"
          description="Tools and technologies I work with, grouped by area."
        />

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.title} delay={i * 0.05}>
                <div className="border-l-2 border-primary-200 pl-5">
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <Icon size={17} className="text-primary-600" />
                    <h3 className="font-display font-semibold text-ink">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white border border-surface-line px-3.5 py-1.5 text-[13px] font-medium text-ink-soft"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="rounded-2xl bg-white border border-surface-line p-6 sm:p-8">
            <h3 className="font-display font-semibold text-ink mb-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary-50 text-primary-700 px-4 py-1.5 text-[13px] font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
