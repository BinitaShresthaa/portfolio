"use client";

import { useEffect, useRef, useState } from "react";
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

/* =========================================
   Typing animation: "Hi, I'm" -> "Binita Shrestha"
========================================= */
function TypedIntro({
  greeting,
  name,
  onComplete,
}: {
  greeting: string;
  name: string;
  onComplete?: () => void;
}) {
  // Speeds in milliseconds (higher = slower)
  const START_DELAY = 300;
  const GREETING_SPEED = 60;
  const NAME_SPEED = 90;
  const PAUSE_BETWEEN = 200;

  const total = greeting.length + name.length;
  const [count, setCount] = useState(0);

  // keep the latest callback without restarting the animation
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Skip the animation for people who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(total);
      onCompleteRef.current?.();
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    let current = 0;

    const tick = () => {
      current += 1;
      setCount(current);

      if (current >= total) {
        onCompleteRef.current?.();
        return;
      }

      // greeting speed -> short pause -> name speed
      let delay = current < greeting.length ? GREETING_SPEED : NAME_SPEED;
      if (current === greeting.length) delay = PAUSE_BETWEEN;
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, START_DELAY);
    return () => clearTimeout(timer);
  }, [greeting, total]);

  const typedGreeting = greeting.slice(0, count);
  const typedName = name.slice(0, Math.max(0, count - greeting.length));

  return (
    <h1>
      {/* Real text for screen readers and search engines */}
      <span className="sr-only">
        {greeting} {name}
      </span>

      {/* Greeting line */}
      <span
        aria-hidden="true"
        className="relative mb-4 block text-sm font-medium tracking-wide text-primary-600"
      >
        {/* invisible copy reserves the space so the layout never jumps */}
        <span className="invisible">{greeting}</span>
        <span className="absolute inset-0">
          {typedGreeting}
        </span>
      </span>

      {/* Name line */}
      <span
        aria-hidden="true"
        className="relative block text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
      >
        <span className="invisible">{name}</span>
        <span className="absolute inset-0">
          {typedName}
        </span>
      </span>
    </h1>
  );
}

/* =========================================
   Hero section
========================================= */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // becomes true when "Hi, I'm Binita Shrestha" has finished typing
  const [introDone, setIntroDone] = useState(false);

  // paragraph, buttons and icons wait for the typing, then appear one by one
  const reveal = (delay: number) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 20 },
    animate:
      shouldReduceMotion || introDone
        ? { opacity: 1, y: 0 }
        : { opacity: 0, y: 20 },
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
          {/* 1. "Hi, I'm" then "Binita Shrestha", typed letter by letter */}
          <TypedIntro
            greeting="Hi, I'm"
            name="Binita Shrestha"
            onComplete={() => setIntroDone(true)}
          />

          {/* 2. Paragraph */}
          <motion.p
            {...reveal(0)}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-muted sm:text-lg"
          >
            I build clean, responsive web interfaces with React, Next.js and
            Tailwind CSS and bring the same discipline for records and
            detail I picked up managing office and accounting systems.
          </motion.p>

          {/* 3. Buttons */}
          <motion.div
            {...reveal(0.15)}
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

          {/* 4. Social icons, one after another */}
          <div className="mt-9 flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                {...reveal(0.3 + i * 0.1)}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface-line text-ink-soft transition-colors hover:border-primary-300 hover:text-primary-600"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* =========================
            RIGHT SIDE - PHOTO
        ========================== */}
        <motion.div
          initial={
            shouldReduceMotion ? undefined : { opacity: 0, scale: 0.94 }
          }
          animate={
            shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
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