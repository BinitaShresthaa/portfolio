import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

const socials = [
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Mail, href: siteConfig.social.email, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-line bg-surface-alt">
      <div className="container-content py-5">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-surface-line text-ink-soft hover:border-primary-300 hover:text-primary-600 transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-muted">
            © {siteConfig.name} {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}