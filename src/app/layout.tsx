import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zuply.fr"),
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  title: "Zuply - Plateforme de contenu SEO propulsee par l'IA",
  description:
    "Generez des articles de blog SEO, du contenu pour les reseaux sociaux et des videos promotionnelles automatiquement. Zuply aide les entreprises a automatiser leur strategie de contenu.",
  keywords: [
    "generation contenu SEO",
    "redacteur IA",
    "marketing de contenu automatise",
    "automatisation reseaux sociaux",
    "creation video IA",
    "plateforme de contenu",
    "outil SEO",
    "automatisation blog",
    "strategie contenu IA",
    "Zuply",
  ],
  openGraph: {
    title: "Zuply - Plateforme de contenu SEO propulsee par l'IA",
    description:
      "Generez des articles de blog SEO, du contenu pour les reseaux sociaux et des videos promotionnelles automatiquement.",
    type: "website",
    locale: "fr_FR",
    siteName: "Zuply",
    url: "https://zuply.fr",
    images: [
      {
        url: "/zuply-logo.webp",
        width: 512,
        height: 512,
        alt: "Zuply - plateforme de contenu SEO propulsee par IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuply - Plateforme de contenu SEO propulsee par l'IA",
    description:
      "Generez des articles de blog SEO, du contenu pour les reseaux sociaux et des videos promotionnelles automatiquement.",
    images: ["/zuply-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://randomuser.me" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Zuply",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              inLanguage: "fr",
              description:
                "Plateforme propulsee par l'IA qui genere des articles de blog optimises SEO, du contenu pour les reseaux sociaux et des videos promotionnelles pour les entreprises.",
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "29",
                highPrice: "149",
                priceCurrency: "EUR",
              },
              featureList: [
                "Generation d'articles par IA",
                "Optimisation SEO",
                "Gestion multi-sites",
                "Contenu reseaux sociaux",
                "Creation de videos",
                "Publication via Git",
                "Deploiement automatise",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
