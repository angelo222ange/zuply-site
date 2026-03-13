"use client";

import dynamic from "next/dynamic";

const FeatureCarousel = dynamic(
  () => import("@/components/ui/feature-carousel"),
  { ssr: true }
);
const IntegrationsBeam = dynamic(
  () => import("@/components/ui/integrations-beam"),
  { ssr: true }
);
const PricingSection = dynamic(
  () =>
    import("@/components/ui/pricing-section").then((m) => ({
      default: m.PricingSection,
    })),
  { ssr: true }
);
const Testimonials = dynamic(
  () =>
    import("@/components/ui/testimonials").then((m) => ({
      default: m.Testimonials,
    })),
  { ssr: true }
);
const Faq = dynamic(
  () =>
    import("@/components/ui/faq").then((m) => ({
      default: m.Faq,
    })),
  { ssr: true }
);
const Footer = dynamic(
  () =>
    import("@/components/ui/footer").then((m) => ({
      default: m.Footer,
    })),
  { ssr: true }
);
const DemoPopup = dynamic(
  () =>
    import("@/components/ui/demo-popup").then((m) => ({
      default: m.DemoPopup,
    })),
  { ssr: false }
);

export function LazyComponents() {
  return (
    <>
      {/* Fonctionnalites */}
      <section id="fonctionnalites" className="py-12 sm:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Tout ce dont vous avez besoin pour votre contenu
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            De la generation d&apos;articles SEO a la publication automatique, Zuply
            centralise toute votre strategie de contenu.
          </p>
        </div>
        <FeatureCarousel />
      </section>

      {/* Integrations */}
      <section id="integrations">
        <IntegrationsBeam />
      </section>

      {/* Tarifs */}
      <section id="tarifs">
        <PricingSection />
      </section>

      {/* A propos */}
      <section id="a-propos" className="py-12 sm:py-20 px-4 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Propulse par l&apos;intelligence artificielle
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-500 leading-relaxed">
            Zuply est ne d&apos;un constat simple : creer du contenu de qualite,
            optimise pour le SEO, prend un temps considerable. Notre plateforme
            utilise les dernieres avancees en IA pour generer des articles de
            blog, des images, des videos promotionnelles et du contenu pour les
            reseaux sociaux — le tout en quelques clics. Que vous soyez
            freelance, agence ou grande entreprise, Zuply s&apos;adapte a vos besoins
            et automatise votre pipeline de contenu de A a Z.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="glass-card rounded-2xl p-6">
              <p className="text-3xl font-bold text-blue-500">10x</p>
              <p className="mt-2 text-sm text-gray-500">
                Plus rapide que la redaction manuelle
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-3xl font-bold text-blue-500">95%</p>
              <p className="mt-2 text-sm text-gray-500">
                Score SEO moyen des articles generes
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-3xl font-bold text-blue-500">500+</p>
              <p className="mt-2 text-sm text-gray-500">
                Entreprises utilisent Zuply au quotidien
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Temoignages */}
      <Testimonials />

      {/* FAQ */}
      <Faq />

      {/* Footer */}
      <Footer />

      {/* Demo Popup */}
      <DemoPopup />
    </>
  );
}
