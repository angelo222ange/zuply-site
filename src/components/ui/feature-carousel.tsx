'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'motion/react';
import {
  FileText,
  Image,
  Globe,
  GitBranch,
  Video,
  Share2,
  Search,
  Rocket,
  Mail,
  LayoutDashboard,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  label: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    label: "Generation d'Articles",
    description: "Creez des articles de blog optimises SEO en quelques clics grace a l'IA.",
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200',
    icon: FileText,
  },
  {
    label: "Pipeline d'Images",
    description: 'Images generees par IA et photos de stock selectionnees automatiquement.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200',
    icon: Image,
  },
  {
    label: 'Multi-Sites',
    description: 'Gerez plusieurs sites depuis un tableau de bord unique.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200',
    icon: Globe,
  },
  {
    label: 'Publication Git',
    description: 'Publication automatique via Git vers vos sites Next.js.',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=1200',
    icon: GitBranch,
  },
  {
    label: 'Videos Promotionnelles',
    description: '5 templates de videos generees avec Remotion.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200',
    icon: Video,
  },
  {
    label: 'Reseaux Sociaux',
    description: 'Contenu adapte pour chaque plateforme sociale.',
    image: '/stock-reseaux-sociaux.webp',
    icon: Share2,
  },
  {
    label: 'SEO Avance',
    description: 'Optimisation automatique des mots-cles, H2, meta descriptions.',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1200',
    icon: Search,
  },
  {
    label: 'Deploiement Auto',
    description: 'Deploiement automatique sur VPS en un clic.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200',
    icon: Rocket,
  },
  {
    label: 'Notifications Email',
    description: 'Restez informe a chaque etape de votre pipeline.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1200',
    icon: Mail,
  },
  {
    label: 'Tableau de Bord',
    description: "Vue d'ensemble complete de tous vos contenus.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
    icon: LayoutDashboard,
  },
];

const CHIP_HEIGHT = 56;
const CHIP_GAP = 8;
const AUTOPLAY_INTERVAL = 3000;

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % features.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goNext]);

  // Compute the vertical offset so the active chip is centered
  const totalChipHeight = CHIP_HEIGHT + CHIP_GAP;
  const scrollY = useSpring(0, { stiffness: 200, damping: 30 });

  useEffect(() => {
    // Center the active chip in the visible area
    const containerHeight = containerRef.current?.clientHeight ?? 400;
    const centerOffset = containerHeight / 2 - CHIP_HEIGHT / 2;
    const targetY = -activeIndex * totalChipHeight + centerOffset;
    scrollY.set(targetY);
  }, [activeIndex, scrollY, totalChipHeight]);

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    if (diff === 0) {
      return { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1, zIndex: 10 };
    }
    if (Math.abs(diff) === 1 || Math.abs(diff) === features.length - 1) {
      const sign =
        diff === 1 || diff === -(features.length - 1) ? 1 : -1;
      return {
        x: sign * 60,
        y: sign * 20,
        scale: 0.9,
        rotate: sign * 3,
        opacity: 0.6,
        zIndex: 5,
      };
    }
    if (Math.abs(diff) === 2 || Math.abs(diff) === features.length - 2) {
      const sign =
        diff === 2 || diff === -(features.length - 2) ? 1 : -1;
      return {
        x: sign * 100,
        y: sign * 40,
        scale: 0.8,
        rotate: sign * 5,
        opacity: 0.3,
        zIndex: 2,
      };
    }
    return { x: 0, y: 0, scale: 0.7, rotate: 0, opacity: 0, zIndex: 0 };
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8" style={{ fontFamily: 'Quicksand, sans-serif' }}>
      <div
        className="rounded-2xl sm:rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[480px] sm:min-h-[600px] lg:aspect-video border border-gray-200 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Panneau gauche */}
        <div className="relative w-full lg:w-[40%] bg-blue-500 overflow-hidden flex flex-col max-h-[280px] sm:max-h-[320px] lg:max-h-none">
          {/* En-tete */}
          <div className="px-6 pt-8 pb-4 relative z-10">
            <h2 className="text-white text-2xl font-bold tracking-tight">
              Fonctionnalites
            </h2>
            <p className="text-blue-100 text-sm mt-1">
              Tout ce dont vous avez besoin pour votre contenu SEO
            </p>
          </div>

          {/* Liste des fonctionnalites */}
          <div
            ref={containerRef}
            className="relative flex-1 overflow-hidden"
          >
            {/* Gradient haut */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-blue-500 to-transparent z-10 pointer-events-none" />
            {/* Gradient bas */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-500 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="absolute left-0 right-0 px-4"
              style={{ y: scrollY }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 rounded-xl transition-colors duration-300 text-left',
                      isActive
                        ? 'bg-white text-blue-600 shadow-lg'
                        : 'bg-transparent text-white hover:bg-white/10'
                    )}
                    style={{
                      height: CHIP_HEIGHT,
                      marginBottom: CHIP_GAP,
                    }}
                  >
                    <Icon
                      className={cn(
                        'w-5 h-5 flex-shrink-0',
                        isActive ? 'text-blue-500' : 'text-white'
                      )}
                    />
                    <span className="text-sm font-semibold truncate">
                      {feature.label}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Indicateur de progression */}
          <div className="px-6 pb-6 pt-2 relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-blue-100 text-xs font-medium">
                {String(activeIndex + 1).padStart(2, '0')} / {String(features.length).padStart(2, '0')}
              </span>
              <div className="flex-1 h-1 bg-blue-400/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  animate={{ width: `${((activeIndex + 1) / features.length) * 100}%` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Panneau droit */}
        <div className="relative w-full lg:w-[60%] bg-gray-50 flex items-center justify-center p-4 sm:p-8 lg:p-12 min-h-[240px] sm:min-h-[350px]">
          <div className="relative w-full h-full flex items-center justify-center">
            {features.map((feature, index) => {
              const style = getCardStyle(index);
              return (
                <motion.div
                  key={index}
                  className="absolute w-[80%] sm:w-[85%] max-w-[480px] aspect-[4/3] rounded-xl sm:rounded-[2rem] border-2 sm:border-4 border-white overflow-hidden shadow-xl"
                  animate={{
                    x: style.x,
                    y: style.y,
                    scale: style.scale,
                    rotate: style.rotate,
                    opacity: style.opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 26,
                  }}
                  style={{ zIndex: style.zIndex }}
                >
                  {/* Image */}
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Overlay avec label */}
                  <AnimatePresence>
                    {index === activeIndex && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 pt-16"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {(() => {
                            const Icon = feature.icon;
                            return <Icon className="w-4 h-4 text-white" />;
                          })()}
                          <span className="text-white text-sm font-bold">
                            {feature.label}
                          </span>
                        </div>
                        <p className="text-white/80 text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
