"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  className?: string;
}

const defaultSocialLinks: SocialLink[] = [
  { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/zuply", label: "Twitter" },
  { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/company/zuply", label: "LinkedIn" },
  { icon: <Github className="h-5 w-5" />, href: "https://github.com/zuply", label: "GitHub" },
  { icon: <Mail className="h-5 w-5" />, href: "mailto:contact@zuply.fr", label: "Email" },
];

const defaultNavLinks: FooterLink[] = [
  { label: "Fonctionnalites", href: "#features" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Integrations", href: "#integrations" },
  { label: "Politique de confidentialite", href: "/legal/privacy-policy" },
  { label: "Conditions", href: "/legal/terms" },
  { label: "Cookies", href: "/legal/cookies" },
];

export function Footer({
  brandName = "Zuply",
  brandDescription = "Plateforme de generation de contenu propulsee par l'IA pour le SEO, les reseaux sociaux et le marketing video.",
  socialLinks = defaultSocialLinks,
  navLinks = defaultNavLinks,
  className,
}: FooterProps) {
  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-10 sm:py-16">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">{brandName}</h2>
              <p className="max-w-sm text-gray-500 leading-relaxed">
                {brandDescription}
              </p>

              {/* Social links */}
              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-gray-400 transition-colors hover:text-gray-900"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Large background text */}
          <div className="relative mt-16">
            <div
              className="select-none text-center font-extrabold tracking-tighter pointer-events-none"
              style={{
                fontSize: "clamp(3rem, 12vw, 10rem)",
                background: "linear-gradient(to bottom, #e5e7eb, transparent)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              aria-hidden="true"
            >
              ZUPLY
            </div>

            {/* Centered logo box */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <div className="flex items-center justify-center rounded-3xl border-2 border-gray-200 bg-white/60 backdrop-blur p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl overflow-hidden shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/zuply-logo.webp"
                    alt="Logo Zuply - generation de contenu automatisee"
                    width={56}
                    height={56}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-400">
              &copy;2026 {brandName}. Tous droits reserves.
            </p>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
      </footer>
    </section>
  );
}
