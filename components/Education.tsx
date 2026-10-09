import { Award, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-content">
        <SectionHeading
          title="Education"
          description="Academic journey and continuous learning"
        />

        <div className="space-y-6">
          {education.map((item, i) => {
            const Icon = i === 0 ? GraduationCap : Award;

            return (
              <Reveal key={item.degree} delay={i * 0.08}>
                <article className="relative overflow-hidden rounded-2xl border border-surface-line bg-white p-6 transition-colors hover:border-primary-200 sm:p-8">
                  {/* top accent line */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary-600 to-primary-300"
                  />
                  {/* soft corner glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-100 opacity-70 blur-2xl"
                  />

                  <div className="relative">
                    {/* badge */}
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-700">
                      <Icon size={14} />
                      {item.badge}
                    </span>

                    {/* title */}
                    <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
                      {item.degree}
                    </h3>

                    {/* institution | duration */}
                    <p className="mt-2 text-sm font-semibold text-primary-600 sm:text-base">
                      {item.institution} | {item.duration}
                    </p>
                    <p className="mt-1 text-sm text-slate-muted">
                      {item.location}
                    </p>

                    {/* description */}
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                      {item.description}
                    </p>

                    {/* subject chips */}
                    {item.subjects && item.subjects.length > 0 && (
                      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {item.subjects.map((subject) => (
                          <li
                            key={subject}
                            className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3.5 text-sm text-ink-soft"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1.5 h-0 w-0 shrink-0 border-y-[4px] border-l-[7px] border-y-transparent border-l-primary-600"
                            />
                            {subject}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}