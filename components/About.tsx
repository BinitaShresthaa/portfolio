import { GraduationCap, MapPin, Sparkles, Target } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/site";

const facts = [
  {
    icon: GraduationCap,
    label: "Currently studying",
    value: "BICTE, Aadikavi Bhanubhakta Campus",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: siteConfig.location,
  },
  {
    icon: Target,
    label: "Focused on",
    value: "React, Next.js & Tailwind CSS",
  },
  {
    icon: Sparkles,
    label: "Also bring",
    value: "Office & accounting software experience",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-content">
        <SectionHeading
          title="About Me"
          description="A bit about my background, and what I'm working toward."
        />

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="space-y-5 text-slate-muted leading-relaxed">
              <p>
                I&apos;m a  Bachelor in Information Communication Technology
                Education (BICTE) student at Aadikavi Bhanubhakta Campus,
                building a career as a frontend developer. I enjoy turning
                designs and ideas into clean, responsive interfaces using
                React, Next.js and Tailwind CSS.
              </p>
              <p>
                Before focusing on development, I worked as an Office
                Assistant, where I handled documentation, record-keeping and
                day-to-day customer service experience that taught me to
                work carefully, stay organized and follow through on details,
                habits I carry into every project I build.
              </p>
              <p>
                I&apos;m especially interested in frontend and full-stack web
                development, and I&apos;m continuing to build my skills
                through coursework, workshops and hands-on projects like the
                ones below.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-surface-line bg-surface-alt p-6 sm:p-8">
              <ul className="space-y-6">
                {facts.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary-600 border border-surface-line">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-muted">
                        {label}
                      </p>
                      <p className="text-[15px] font-medium text-ink mt-0.5">
                        {value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
