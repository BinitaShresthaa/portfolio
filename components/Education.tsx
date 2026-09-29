import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-content">
        <SectionHeading title="Education" />

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-surface-line p-6 sm:p-7 hover:border-primary-200 transition-colors">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-600 mb-4">
                  <GraduationCap size={19} />
                </span>
                <h3 className="font-display font-semibold text-ink leading-snug">
                  {item.degree}
                </h3>
                <p className="text-sm text-slate-muted mt-2">
                  {item.institution}
                </p>
                <p className="text-sm text-slate-muted">{item.location}</p>
                <p className="text-xs font-medium text-primary-600 mt-3">
                  {item.duration}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
