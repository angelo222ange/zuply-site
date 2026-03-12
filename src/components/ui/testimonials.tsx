"use client";

import React from "react";
import { motion } from "motion/react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Zuply a completement transforme notre strategie de contenu. On genere nos articles SEO en quelques minutes au lieu de plusieurs jours.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sophie Martin",
    role: "Directrice Marketing",
  },
  {
    text: "Le pipeline d'images est bluffant. Plus besoin de chercher des visuels pendant des heures, tout est genere automatiquement.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Thomas Durand",
    role: "Responsable SEO",
  },
  {
    text: "On gere 12 sites d'artisans depuis un seul tableau de bord. Le gain de temps est enorme pour notre agence.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Camille Leroy",
    role: "Fondatrice d'agence web",
  },
  {
    text: "La publication automatique via Git nous a fait gagner un temps fou. Plus de copier-coller, tout est deploye en un clic.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Julien Moreau",
    role: "Developpeur freelance",
  },
  {
    text: "Les videos promotionnelles generees par Zuply sont d'une qualite professionnelle. Nos clients sont impressionnes.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Marie Dubois",
    role: "Chef de projet digital",
  },
  {
    text: "Depuis qu'on utilise Zuply, le trafic organique de nos clients artisans a augmente de 300% en 3 mois.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Antoine Bernard",
    role: "Consultant SEO",
  },
  {
    text: "L'interface est intuitive et le support est reactif. On a pu deployer nos premiers sites en moins d'une semaine.",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    name: "Laura Petit",
    role: "Responsable communication",
  },
  {
    text: "Le rapport qualite-prix est imbattable. Un seul outil remplace notre redacteur, notre graphiste et notre webmaster.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Nicolas Garnier",
    role: "Gerant PME",
  },
  {
    text: "Les articles generes sont d'une qualite remarquable. Nos clients ne font meme pas la difference avec du contenu redige a la main.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Emilie Rousseau",
    role: "Redactrice en chef",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function TestimonialsColumn({
  testimonials,
  className,
  duration = 10,
}: {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((t, i) => (
              <div
                className="glass-card p-5 sm:p-8 rounded-2xl max-w-xs w-full"
                key={i}
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 mt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    width={40}
                    height={40}
                    src={t.image}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900 leading-5">
                      {t.name}
                    </span>
                    <span className="text-xs text-gray-500 leading-5">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto"
        >
          <div className="border border-gray-200 py-1 px-4 rounded-lg text-sm text-gray-500">
            Temoignages
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mt-5 text-center">
            Ce que nos clients disent
          </h2>
          <p className="text-center mt-4 text-gray-500">
            Decouvrez comment Zuply aide des centaines d'entreprises a automatiser leur contenu.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[500px] sm:max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
