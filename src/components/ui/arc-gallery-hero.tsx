"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ArcGalleryHeroProps = {
  images?: string[];
  startAngle?: number;
  endAngle?: number;
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  className?: string;
};

const defaultImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400", // dashboard analytics
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400", // ecran data
  "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400", // redaction contenu
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",   // equipe marketing
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400", // artisan au travail
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400", // equipe tech laptops
  "/stock-reseaux-sociaux.webp",                                        // reseaux sociaux
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400", // developpeur code
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",   // reunion business
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400",   // bureau startup
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",   // graphiques performance
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400", // workspace creatif
];

function getResponsiveValues(
  width: number,
  props: ArcGalleryHeroProps
): { radius: number; cardSize: number } {
  if (width >= 1024) {
    return {
      radius: props.radiusLg ?? 420,
      cardSize: props.cardSizeLg ?? 120,
    };
  }
  if (width >= 768) {
    return {
      radius: props.radiusMd ?? 320,
      cardSize: props.cardSizeMd ?? 96,
    };
  }
  if (width >= 480) {
    return {
      radius: props.radiusSm ?? 200,
      cardSize: props.cardSizeSm ?? 72,
    };
  }
  return {
    radius: 140,
    cardSize: 52,
  };
}

export function ArcGalleryHero(props: ArcGalleryHeroProps) {
  const {
    images = defaultImages,
    startAngle = -80,
    endAngle = 80,
    className,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1024, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { radius, cardSize } = getResponsiveValues(dimensions.width, props);
  const count = images.length;
  const angleStep = count > 1 ? (endAngle - startAngle) / (count - 1) : 0;

  // Arc center is at the bottom-center of the arc area
  const arcCenterX = dimensions.width / 2;
  const arcHeight = radius + cardSize / 2 + 40;
  const arcCenterY = arcHeight;

  return (
    <section
      ref={containerRef}
      className={cn("relative w-full overflow-hidden bg-white", className)}
    >
      <style>{`
        @keyframes arc-fade-in-up {
          from {
            opacity: 0;
            transform: translateY(32px) scale(0.92);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes arc-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .arc-fade-in-up {
          animation: arc-fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .arc-fade-in {
          animation: arc-fade-in 0.6s ease both;
        }
      `}</style>

      {/* Arc Gallery */}
      <div
        className="relative mx-auto"
        style={{
          height: arcHeight + 20,
          maxWidth: "100%",
        }}
      >
        {mounted &&
          images.map((src, i) => {
            const angleDeg = startAngle + angleStep * i;
            const angleRad = (angleDeg * Math.PI) / 180;
            // Position on arc: angle 0 = top, negative = left, positive = right
            const x = arcCenterX + radius * Math.sin(angleRad) - cardSize / 2;
            const y = arcCenterY - radius * Math.cos(angleRad) - cardSize / 2;
            const rotation = angleDeg * 0.4;

            return (
              <div
                key={i}
                className="arc-fade-in-up absolute"
                style={{
                  left: x,
                  top: y,
                  width: cardSize,
                  height: cardSize,
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <img
                  src={src}
                  alt={`Exemple de contenu ${i + 1}`}
                  className="h-full w-full rounded-2xl object-cover shadow-lg ring-1 ring-gray-200 transition-transform duration-300 hover:scale-105"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                  }}
                  loading="lazy"
                />
              </div>
            );
          })}
      </div>

      {/* Hero Text */}
      <div
        className="arc-fade-in relative mx-auto max-w-3xl px-4 pb-20 pt-8 text-center sm:px-6 lg:px-8"
        style={{ animationDelay: "800ms" }}
      >
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Automatisez votre strategie de contenu avec l'IA
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-500">
          Generez des articles de blog optimises SEO, du contenu pour les reseaux
          sociaux et des videos promotionnelles — depuis une seule plateforme.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://app.zuply.fr/register"
            className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-blue-600"
          >
            Essayer gratuitement
          </a>
          <a
            href="#fonctionnalites"
            className="inline-flex items-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
          >
            Decouvrir les fonctionnalites
          </a>
        </div>
      </div>
    </section>
  );
}
