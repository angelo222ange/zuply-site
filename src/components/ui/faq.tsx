"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Comment fonctionne la generation d'articles par IA ?",
    answer:
      "Zuply utilise les modeles d'IA les plus avances pour generer des articles de blog optimises SEO. Vous definissez vos mots-cles, votre thematique et votre ton, et notre plateforme genere un article complet avec titres, sous-titres, meta descriptions et images — le tout en quelques minutes.",
  },
  {
    question: "Les articles generes sont-ils uniques et de bonne qualite ?",
    answer:
      "Oui, chaque article est genere de maniere unique et passe par un pipeline d'optimisation SEO. Les contenus respectent les bonnes pratiques de redaction web avec des H2 optimises, des mots-cles bien places et une structure claire. Nos clients obtiennent en moyenne un score SEO de 95%.",
  },
  {
    question: "Puis-je gerer plusieurs sites depuis Zuply ?",
    answer:
      "Absolument. Zuply est concu pour la gestion multi-sites. Depuis un tableau de bord unique, vous pouvez creer et gerer autant de sites que votre plan le permet. Chaque site a sa propre configuration, ses mots-cles et son calendrier de publication.",
  },
  {
    question: "Comment fonctionne la publication automatique ?",
    answer:
      "Zuply publie automatiquement vos articles via Git vers vos sites Next.js. Une fois l'article genere et valide, il est commite dans votre depot Git et deploye sur votre VPS en un clic. Aucune intervention manuelle necessaire.",
  },
  {
    question: "Quels types de videos peut-on generer ?",
    answer:
      "Zuply propose 5 templates de videos promotionnelles : educatif, storytelling, statistiques, promotion produit et citation. Chaque video est generee avec Remotion en 3 formats (carre, vertical, paysage) et peut etre personnalisee avec votre contenu.",
  },
  {
    question: "Existe-t-il un essai gratuit ?",
    answer:
      "Oui, vous pouvez tester Zuply gratuitement sans carte bancaire. L'essai vous permet de generer vos premiers articles et de decouvrir toutes les fonctionnalites de la plateforme avant de vous engager.",
  },
  {
    question: "Puis-je annuler mon abonnement a tout moment ?",
    answer:
      "Oui, tous nos abonnements sont sans engagement. Vous pouvez annuler a tout moment depuis votre tableau de bord. Votre acces reste actif jusqu'a la fin de la periode de facturation en cours.",
  },
  {
    question: "Zuply est-il adapte aux artisans et TPE ?",
    answer:
      "Zuply a ete specialement concu pour les artisans, TPE et PME qui souhaitent developper leur presence en ligne sans avoir besoin de competences techniques. Notre plan Starter a 29 EUR/mois est ideal pour demarrer avec un site et 20 articles par mois.",
  },
];

function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-medium text-gray-900 pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-500 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gray-50">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Questions frequentes
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500">
            Tout ce que vous devez savoir sur Zuply.
          </p>
        </div>
        <div className="glass-card rounded-2xl px-4 sm:px-6 md:px-10">
          {faqItems.map((item, i) => (
            <FaqAccordion key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
