import { FileText, Layers, Layout, Smartphone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services } from "@/data/services";

const icons = {
  layout: Layout,
  smartphone: Smartphone,
  layers: Layers,
  fileText: FileText,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-surface-alt">
      <div className="container-content">
        <SectionHeading
          title="What I Can Help With"
          description="A few areas I can contribute to on a project or team."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-white border border-surface-line p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-600 mb-4">
                    <Icon size={19} />
                  </span>
                  <h3 className="font-display font-semibold text-ink mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
