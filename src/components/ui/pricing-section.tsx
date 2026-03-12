"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import NumberFlow from "@number-flow/react";
import {
  Briefcase,
  Database,
  Server,
  FileText,
  Video,
  Globe,
  CheckCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  yearlyTotal: number;
  savingsPercent: number;
  description: string;
  features: { icon: React.ElementType; text: string }[];
  includes: { label: string; items: string[] };
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 23,
    yearlyTotal: 279,
    savingsPercent: 17,
    description: "Ideal pour les freelances et petites entreprises",
    features: [
      { icon: FileText, text: "Jusqu'a 20 articles par mois" },
      { icon: Globe, text: "1 site gere" },
      { icon: Database, text: "Images IA incluses" },
      { icon: Server, text: "Publication Git automatique" },
      { icon: Briefcase, text: "Support email" },
    ],
    includes: {
      label: "Le plan Starter inclut :",
      items: [
        "Generation SEO optimisee",
        "Images HD automatiques",
        "Tableau de bord",
      ],
    },
  },
  {
    name: "Pro",
    monthlyPrice: 79,
    yearlyPrice: 62,
    yearlyTotal: 749,
    savingsPercent: 21,
    description: "Pour les agences et entreprises en croissance",
    popular: true,
    features: [
      { icon: FileText, text: "Jusqu'a 100 articles par mois" },
      { icon: Globe, text: "5 sites geres" },
      { icon: Video, text: "Videos promotionnelles (5 templates)" },
      { icon: Database, text: "Contenu reseaux sociaux" },
      { icon: Server, text: "Deploiement VPS automatique" },
      { icon: Briefcase, text: "Support prioritaire" },
    ],
    includes: {
      label: "Tout du Starter, plus :",
      items: [
        "Multi-sites",
        "Videos Remotion",
        "Deploiement automatique",
      ],
    },
  },
  {
    name: "Business",
    monthlyPrice: 149,
    yearlyPrice: 117,
    yearlyTotal: 1399,
    savingsPercent: 22,
    description: "Pour les grandes equipes et agences multi-clients",
    features: [
      { icon: FileText, text: "Articles illimites" },
      { icon: Globe, text: "Sites illimites" },
      { icon: Server, text: "API personnalisee" },
      { icon: Video, text: "Videos illimitees" },
      { icon: Briefcase, text: "Gestionnaire de compte dedie" },
      { icon: Database, text: "SLA garanti" },
    ],
    includes: {
      label: "Tout du Pro, plus :",
      items: [
        "Acces API",
        "Support dedie",
        "SLA 99.9%",
      ],
    },
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative bg-gray-50 px-4 pt-16 sm:pt-20 pb-16 sm:pb-20"
    >
      {/* Radial gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(59,130,246,0.12) 0%, transparent 70%)",
          opacity: 0.4,
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <TimelineContent
          as="div"
          animationNum={0}
          timelineRef={useRef(null)}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Des formules adaptees a votre{" "}
            <span className="inline-block border-2 border-dashed border-blue-300 bg-blue-50 px-3 py-1 rounded-xl">
              croissance
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Rejoint par des centaines d&apos;entreprises. Decouvrez la formule qui
            vous convient.
          </p>
        </TimelineContent>

        {/* Toggle */}
        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={useRef(null)}
          className="flex items-center justify-center gap-3 mb-14"
        >
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              !isYearly ? "text-gray-900" : "text-gray-400"
            )}
          >
            Mensuel
          </span>
          <button
            type="button"
            onClick={() => setIsYearly(!isYearly)}
            className="relative h-8 w-14 rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
            aria-label="Basculer entre mensuel et annuel"
          >
            <motion.div
              className="absolute top-1 h-6 w-6 rounded-full bg-blue-500 shadow-md"
              layoutId="pricing-toggle"
              animate={{ left: isYearly ? 30 : 2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              isYearly ? "text-gray-900" : "text-gray-400"
            )}
          >
            Annuel
          </span>
          <AnimatePresence>
            {isYearly && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                className="ml-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-600"
              >
                Economisez jusqu&apos;a 22%
              </motion.span>
            )}
          </AnimatePresence>
        </TimelineContent>

        {/* Cards grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 items-start max-w-sm md:max-w-none mx-auto">
          {plans.map((plan, index) => (
            <TimelineContent
              key={plan.name}
              as="div"
              animationNum={index + 2}
              timelineRef={useRef(null)}
            >
              <Card
                className={cn(
                  "relative flex flex-col overflow-hidden transition-shadow hover:shadow-lg",
                  plan.popular
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "bg-white"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 rounded-bl-xl bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                    POPULAIRE
                  </div>
                )}

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <p className="text-sm text-gray-500 mt-1">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      <NumberFlow
                        value={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        format={{ style: "currency", currency: "EUR", maximumFractionDigits: 0 }}
                        transformTiming={{ duration: 400, easing: "ease-out" }}
                      />
                    </span>
                    <span className="text-gray-500 text-sm">/mois</span>
                  </div>
                  {isYearly && (
                    <p className="text-xs text-gray-400 -mt-4">
                      {plan.yearlyTotal} EUR/an — Economisez {plan.savingsPercent}%
                    </p>
                  )}

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature) => {
                      const Icon = feature.icon;
                      return (
                        <li
                          key={feature.text}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <Icon className="h-4 w-4 shrink-0 text-blue-500" />
                          {feature.text}
                        </li>
                      );
                    })}
                  </ul>

                  {/* Includes */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      {plan.includes.label}
                    </p>
                    <ul className="space-y-2">
                      {plan.includes.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100">
                            <CheckCheck className="h-3 w-3 text-blue-600" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter>
                  <a
                    href="https://app.zuply.fr/register"
                    className={cn(
                      "w-full rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all",
                      plan.popular
                        ? "bg-gradient-to-t from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                        : "bg-gradient-to-t from-gray-900 to-gray-600 text-white hover:from-gray-800 hover:to-gray-500"
                    )}
                  >
                    Commencer maintenant
                  </a>
                </CardFooter>
              </Card>
            </TimelineContent>
          ))}
        </div>
      </div>
    </section>
  );
}
