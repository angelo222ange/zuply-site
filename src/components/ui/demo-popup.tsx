"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";

const DISMISS_KEY = "zuply-demo-popup-dismissed";
const DISMISS_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

const floatingImages = [
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&q=70&auto=format&fit=crop",
    alt: "Dashboard analytics",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&q=70&auto=format&fit=crop",
    alt: "Graphiques performance",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=150&q=70&auto=format&fit=crop",
    alt: "Code developpeur",
  },
];

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
          className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-4 sm:bottom-4 z-50 sm:max-w-[360px]"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-2xl backdrop-blur-2xl">
            {/* Image mosaic header with animations */}
            <div className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/50">
              {floatingImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -6, 0],
                  }}
                  transition={{
                    opacity: { delay: 0.2 + i * 0.15, duration: 0.4 },
                    scale: { delay: 0.2 + i * 0.15, duration: 0.4 },
                    y: {
                      delay: 0.6 + i * 0.15,
                      duration: 2.5 + i * 0.3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute rounded-xl shadow-lg ring-1 ring-white/80 overflow-hidden"
                  style={{
                    width: i === 0 ? 140 : i === 1 ? 110 : 100,
                    height: i === 0 ? 90 : i === 1 ? 75 : 70,
                    left: i === 0 ? "8%" : i === 1 ? "42%" : "68%",
                    top: i === 0 ? "18%" : i === 1 ? "30%" : "10%",
                    rotate: i === 0 ? "-3deg" : i === 1 ? "2deg" : "-2deg",
                    zIndex: i === 0 ? 3 : i === 1 ? 2 : 1,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={150}
                    height={100}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              ))}

              {/* Zuply logo badge floating */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
                className="absolute bottom-2 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg ring-1 ring-gray-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/zuply-logo.webp"
                  alt="Logo Zuply - essai gratuit de la plateforme"
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>

              {/* Gradient fade bottom */}
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/70 to-transparent" />
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={handleDismiss}
              className="absolute top-2.5 right-2.5 z-10 rounded-full bg-white/80 p-1.5 text-gray-400 shadow-sm backdrop-blur transition-all hover:bg-white hover:text-gray-600"
              aria-label="Fermer"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            <div className="px-5 pb-5 pt-3">
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
              >
                Essai gratuit
              </motion.span>

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
                href="https://app.zuply.fr/register"
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
