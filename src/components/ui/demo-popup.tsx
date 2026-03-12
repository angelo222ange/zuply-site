"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, ArrowRight } from "lucide-react";

const DISMISS_KEY = "zuply-demo-popup-dismissed";
const DISMISS_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

export function DemoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10);
      if (Date.now() - dismissedAt < DISMISS_DURATION_MS) {
        return;
      }
    }

    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  function handleDismiss() {
    setVisible(false);
    localStorage.setItem(DISMISS_KEY, Date.now().toString());
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-4 sm:bottom-4 z-50 sm:max-w-[340px]"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-2xl backdrop-blur-2xl">
            {/* Gradient accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />

            {/* Close button */}
            <button
              type="button"
              onClick={handleDismiss}
              className="absolute top-3.5 right-3 z-10 rounded-full p-1.5 text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-600"
              aria-label="Fermer"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            <div className="p-5">
              {/* Icon + Badge */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 shadow-sm">
                  <Sparkles className="h-5 w-5 text-blue-500" />
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  Essai gratuit
                </span>
              </div>

              {/* Content */}
              <h3 className="mb-1.5 text-base font-bold text-gray-900">
                Decouvrez Zuply en action
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-500">
                Generez votre premier article SEO en moins de 2 minutes. Aucune
                carte bancaire requise.
              </p>

              {/* Stats row */}
              <div className="mb-4 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-xs text-gray-500">500+ entreprises</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-blue-400" />
                  <span className="text-xs text-gray-500">Score SEO 95%</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#get-started"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600 hover:shadow-blue-500/30"
                onClick={handleDismiss}
              >
                Essayer gratuitement
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
