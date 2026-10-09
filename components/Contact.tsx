"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteConfig, WHATSAPP_NUMBER } from "@/data/site";

type Field = "name" | "phone" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const contactInfo = [
  { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s|-/g, "")}` },
  { icon: MapPin, label: siteConfig.location, href: undefined },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: siteConfig.social.github },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
];

const inputClass =
  "w-full rounded-xl border border-surface-line px-4 py-3.5 text-sm text-ink placeholder:text-slate-muted focus:border-primary-400 outline-none transition-colors";
const labelClass =
  "flex items-center gap-2 text-sm font-semibold text-ink mb-2.5";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: Field, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  function validate(): boolean {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";

    const digits = values.phone.replace(/\D/g, "");
    if (!values.phone.trim()) {
      next.phone = "Please enter your phone number.";
    } else if (digits.length < 7 || digits.length > 15) {
      next.phone = "Please enter a valid phone number.";
    }

    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      next.message = "Please enter a message.";
    } else if (values.message.trim().length < 10) {
      next.message = "Your message must be at least 10 characters long.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const text =
      `Hi, I'm ${values.name.trim()}.\n` +
      `Phone: ${values.phone.trim()}\n` +
      `Email: ${values.email.trim()}\n\n` +
      `${values.message.trim()}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setValues({ name: "", phone: "", email: "", message: "" });
    setSubmitted(true);
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
            {submitted ? (
              <div className="rounded-2xl border border-primary-100 bg-primary-50 p-8 flex flex-col items-start gap-3">
                <CheckCircle2 className="text-primary-600" size={28} />
                <p className="font-display font-semibold text-ink">
                  WhatsApp opened
                </p>
                <p className="text-sm text-slate-muted leading-relaxed">
                  Your message is ready in WhatsApp. Just press send there and
                  I'll get back to you as soon as I can.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="rounded-2xl border border-surface-line p-6 sm:p-8"
              >
                <h3 className="font-display text-xl font-semibold text-ink">
                  Send Me a Message
                </h3>
                <p className="mt-2 text-sm text-slate-muted">
                  Fill out the form below and I&apos;ll get back to you via
                  WhatsApp as soon as possible.
                </p>
                <hr className="my-6 border-surface-line" />

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      <User size={15} className="text-primary-600" />
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputClass}
                      placeholder="Your full name"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      <Phone size={15} className="text-primary-600" />
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass}
                      placeholder="+977 9800000000"
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      <Mail size={15} className="text-primary-600" />
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass}
                      placeholder="john.doe@example.com"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      <MessageSquare size={15} className="text-primary-600" />
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={values.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me about your project, timeline, budget, or any specific requirements..."
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-4 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
                >
                  <MessageCircle size={17} />
                  Send via WhatsApp
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}