"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Facebook, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

const socials = [
  {
    icon: Github,
    href: "https://github.com/BinitaShresthaa",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/binita-shrestha-350854344/",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/binita.shrestha.761759",
    label: "Facebook",
  },
  {
    icon: Mail,
    href: siteConfig.social.email,
    label: "Email",
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: shouldReduceMotion
      ? undefined
      : { opacity: 0, y: 20 },

    animate: shouldReduceMotion
      ? undefined
      : { opacity: 1, y: 0 },

    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-primary-100 opacity-70 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 rounded-full bg-primary-50 blur-3xl"
      />

      <div className="container-content grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* =========================
            LEFT SIDE
        ========================== */}
        <div>
          <motion.p
            {...fadeUp(0)}
            className="mb-4 text-sm font-medium tracking-wide text-primary-600"
          >
            Hi, I&apos;m 
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Binita Shrestha
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-muted sm:text-lg"
          >
            I build clean, responsive web interfaces with React, Next.js and
            Tailwind CSS — and bring the same discipline for records and
            detail I picked up managing office and accounting systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...fadeUp(0.24)}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3.5 text-sm font-medium text-white shadow-soft transition-colors hover:bg-primary-700"
            >
              View My Projects
              <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-surface-line bg-white px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-primary-300 hover:text-primary-700"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            {...fadeUp(0.32)}
            className="mt-9 flex items-center gap-4"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={
                  label !== "Email"
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface-line text-ink-soft transition-colors hover:border-primary-300 hover:text-primary-600"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* =========================
            RIGHT SIDE - PHOTO
        ========================== */}
        <motion.div
          initial={
            shouldReduceMotion
              ? undefined
              : { opacity: 0, scale: 0.94 }
          }
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, scale: 1 }
          }
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          {/* Main circular area */}
          <div className="relative aspect-square w-full">
            {/* Soft green circle */}
            <div className="absolute inset-0 rounded-full bg-emerald-50" />

            {/* Circle border */}
            <div className="absolute inset-0 rounded-full border border-emerald-100" />

            {/* =========================
                PROFILE PHOTO
            ========================== */}
            <div className="absolute inset-8 overflow-hidden rounded-full border-8 border-white bg-white shadow-xl sm:inset-10">
              <img
                src="/profile.png"
                alt="Binita Shrestha"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Top right decoration */}
            <div className="absolute right-0 top-12 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-100 bg-white text-2xl text-primary-600 shadow-sm">
              ✦
            </div>

            {/* Bottom left decoration */}
            <div className="absolute bottom-12 left-0 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-100 bg-white text-2xl text-primary-600 shadow-sm">
              +
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}