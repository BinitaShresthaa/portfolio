import { Briefcase, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { timeline } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-surface-alt">
      <div className="container-content">
        <SectionHeading
          title="Experience"
          description="Work experience alongside recent trainings and workshops."
        />

        <ol className="relative border-l border-surface-line ml-3 sm:ml-4">
          {timeline.map((item, i) => {
            const Icon = item.type === "work" ? Briefcase : GraduationCap;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <li className="relative pl-8 sm:pl-10 pb-12 last:pb-0">
                  <span className="absolute -left-[17px] sm:-left-[21px] top-0 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white border-2 border-primary-200 text-primary-600">
                    <Icon size={15} />
                  </span>

                  <div className="rounded-2xl border border-surface-line bg-white p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h3 className="font-display font-semibold text-ink">
                        {item.title}
                      </h3>
                      <span className="text-xs font-medium text-primary-600 bg-primary-50 rounded-full px-3 py-1">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-sm text-slate-muted mb-3">
                      {item.organization} · {item.location}
                    </p>
                    <ul className="space-y-1.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="text-sm text-ink-soft leading-relaxed flex gap-2"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-300" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
