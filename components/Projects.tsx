"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, LayoutGrid } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-content">
        <SectionHeading
          title="Projects"
          description="A selection of academic and personal projects I've built."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.06}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full flex flex-col rounded-2xl border border-surface-line bg-white overflow-hidden hover:shadow-soft transition-shadow"
              >
                <div className="relative h-36 shrink-0 bg-gradient-to-br from-primary-500 to-primary-800 flex items-center justify-center">
                  <LayoutGrid className="text-white/70" size={30} />
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <span className="text-xs font-medium text-primary-600 mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-ink mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-muted leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-surface-alt px-2.5 py-1 text-[11.5px] font-medium text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-primary-600 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-primary-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}