"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "success" | "error";

const contactInfo = [
  { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s|-/g, "")}` },
  { icon: MapPin, label: siteConfig.location, href: undefined },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: siteConfig.social.github },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
];

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    company_url: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  function validate(): boolean {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending" || !validate()) return;

    setStatus("sending");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setServerError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setValues({ name: "", email: "", message: "", company_url: "" });
      setStatus("success");
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-content">
        <SectionHeading
          title="Get In Touch"
          description="Have an opportunity or a question? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">
          <Reveal>
            <div className="space-y-8">
              <ul className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, href }) => (
                  <li key={label} className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                      <Icon size={17} />
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-ink-soft hover:text-primary-600 transition-colors"
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="text-sm text-ink-soft">{label}</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface-line text-ink-soft hover:border-primary-300 hover:text-primary-600 transition-colors"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {status === "success" ? (
              <div className="rounded-2xl border border-primary-100 bg-primary-50 p-8 flex flex-col items-start gap-3">
                <CheckCircle2 className="text-primary-600" size={28} />
                <p className="font-display font-semibold text-ink">
                  Message sent
                </p>
                <p className="text-sm text-slate-muted leading-relaxed">
                  Thanks for reaching out. I'll get back to you as soon as I can.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="relative rounded-2xl border border-surface-line p-6 sm:p-8 space-y-5"
              >
                {/* Hidden spam trap: real users never see or fill this */}
                <div
                  className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="company_url">Company URL</label>
                  <input
                    id="company_url"
                    name="company_url"
                    type="text"
                    tabIndex={-1}
                    autoComplete="new-password"
                    value={values.company_url}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, company_url: e.target.value }))
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, name: e.target.value }))
                    }
                    className="w-full rounded-lg border border-surface-line px-4 py-2.5 text-sm text-ink placeholder:text-slate-muted focus:border-primary-400 outline-none transition-colors"
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, email: e.target.value }))
                    }
                    className="w-full rounded-lg border border-surface-line px-4 py-2.5 text-sm text-ink placeholder:text-slate-muted focus:border-primary-400 outline-none transition-colors"
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={values.message}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, message: e.target.value }))
                    }
                    className="w-full resize-none rounded-lg border border-surface-line px-4 py-2.5 text-sm text-ink placeholder:text-slate-muted focus:border-primary-400 outline-none transition-colors"
                    placeholder="Tell me a bit about the opportunity or question..."
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700 transition-colors w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}