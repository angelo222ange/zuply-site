"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Fonctionnalites", href: "#fonctionnalites", active: false },
  { label: "Tarifs", href: "#tarifs", active: false },
  { label: "Integrations", href: "#integrations", active: false },
  { label: "A propos", href: "#a-propos", active: false },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3">
        {/* Glass pill navbar */}
        <div className="glass-card rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/zuply-logo.webp"
                alt="Zuply"
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                zuply
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.zuply.fr/login"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              Connexion
            </a>
            <a
              href="https://app.zuply.fr/register"
              className="inline-flex items-center rounded-xl bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600"
            >
              Inscription
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2 glass-card rounded-2xl",
            mobileOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-gray-200/60 my-2" />
            <a
              href="https://app.zuply.fr/login"
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              Connexion
            </a>
            <a
              href="https://app.zuply.fr/register"
              className="mt-1 inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600"
              onClick={() => setMobileOpen(false)}
            >
              Inscription
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
