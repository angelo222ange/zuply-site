"use client";

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { motion, useAnimation } from "motion/react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  fromRef: React.RefObject<HTMLDivElement | null>;
  toRef: React.RefObject<HTMLDivElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
}

// ---------------------------------------------------------------------------
// AnimatedBeam
// ---------------------------------------------------------------------------

function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  pathColor = "rgb(229,231,235)",
  pathWidth = 2,
  gradientStartColor = "#3b82f6",
  gradientStopColor = "#93c5fd",
  delay = 0,
  duration = 2,
}: AnimatedBeamProps) {
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const reactId = useId();
  const gradientId = `beam-gradient-${reactId.replace(/:/g, "")}`;

  const updatePath = useCallback(() => {
    if (!containerRef.current || !fromRef.current || !toRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const fromRect = fromRef.current.getBoundingClientRect();
    const toRect = toRef.current.getBoundingClientRect();

    setSvgDimensions({
      width: containerRect.width,
      height: containerRect.height,
    });

    const fromX =
      fromRect.left - containerRect.left + fromRect.width / 2;
    const fromY =
      fromRect.top - containerRect.top + fromRect.height / 2;
    const toX =
      toRect.left - containerRect.left + toRect.width / 2;
    const toY =
      toRect.top - containerRect.top + toRect.height / 2;

    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2 + curvature;

    setPathD(`M ${fromX},${fromY} Q ${midX},${midY} ${toX},${toY}`);
  }, [containerRef, fromRef, toRef, curvature]);

  useEffect(() => {
    updatePath();

    const observer = new ResizeObserver(() => {
      updatePath();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [containerRef, updatePath]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute left-0 top-0"
      style={{ overflow: "visible" }}
    >
      <path d={pathD} stroke={pathColor} strokeWidth={pathWidth} />
      <path
        d={pathD}
        stroke={`url(#${gradientId})`}
        strokeWidth={pathWidth}
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: reverse ? "100%" : "0%",
            y1: "0%",
            x2: reverse ? "110%" : "-10%",
            y2: "0%",
          }}
          animate={{
            x1: reverse ? "-10%" : "110%",
            y1: "0%",
            x2: reverse ? "0%" : "100%",
            y2: "0%",
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="0.325" stopColor={gradientStopColor} />
          <stop offset="1" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Circle
// ---------------------------------------------------------------------------

const Circle = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className = "" }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white p-2 sm:p-3 shadow-md ${className}`}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

// ---------------------------------------------------------------------------
// Inline SVG Icons
// ---------------------------------------------------------------------------

function WordPressIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.39 14.77L7.06 8.12h1.63l2.35 6.6 2.35-6.6h1.63l-3.55 8.65h-.86zm7.33-6.65l-2.2 6.65h-.86l-1.06-3.21 1.55-4.72h1.63l.94 1.28z"
        fill="#21759b"
      />
    </svg>
  );
}

function NextJsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.77 14.358L9.5 7.5h1.6l5.87 7.14V7.5h1.3v8.858h-.003a.5.5 0 01-.1.15l-.397-.15zm-7.27.142V7.5h1.3v7.71L7.5 16.5z"
        fill="#000000"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#000000"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function ZuplyIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/zuply-logo.webp"
      alt="Zuply - hub central d'integrations pour la publication de contenu"
      width={32}
      height={32}
      className="h-8 w-8 rounded object-contain"
      decoding="async"
    />
  );
}

function TwitterXIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#000000"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
        fill="#FF0000"
      />
      <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#0077b5"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// IntegrationsBeam
// ---------------------------------------------------------------------------

export default function IntegrationsBeam() {
  const containerRef = useRef<HTMLDivElement>(null);

  const wordpressRef = useRef<HTMLDivElement>(null);
  const nextjsRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);
  const zuplyRef = useRef<HTMLDivElement>(null);
  const twitterRef = useRef<HTMLDivElement>(null);
  const youtubeRef = useRef<HTMLDivElement>(null);
  const linkedinRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 px-4">
      <div className="text-center mb-12">
        <h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          style={{ fontFamily: "Quicksand, sans-serif" }}
        >
          Connectez vos outils preferes
        </h2>
        <p
          className="text-lg text-gray-500 max-w-2xl mx-auto"
          style={{ fontFamily: "Quicksand, sans-serif" }}
        >
          Zuply s&apos;integre avec les plateformes que vous utilisez deja pour
          publier et distribuer votre contenu.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative flex h-[350px] sm:h-[420px] md:h-[500px] w-full max-w-3xl mx-auto items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 sm:p-8 md:p-10"
        style={{
          backdropFilter: "blur(12px)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(241,245,249,0.8) 100%)",
          boxShadow:
            "0 4px 30px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        {/* Grid layout: 3 rows x 3 columns */}
        <div className="flex h-full w-full flex-col items-stretch justify-between">
          {/* Row 1 */}
          <div className="flex items-center justify-between px-2 sm:px-6 md:px-10">
            <Circle ref={wordpressRef}>
              <WordPressIcon />
            </Circle>
            <Circle ref={nextjsRef}>
              <NextJsIcon />
            </Circle>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-between px-2 sm:px-6 md:px-10">
            <Circle ref={githubRef}>
              <GitHubIcon />
            </Circle>
            <Circle ref={zuplyRef} className="!size-12 sm:!size-16 !p-2 sm:!p-4 !border-blue-300 !shadow-lg !shadow-blue-100">
              <ZuplyIcon />
            </Circle>
            <Circle ref={twitterRef}>
              <TwitterXIcon />
            </Circle>
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-between px-2 sm:px-6 md:px-10">
            <Circle ref={youtubeRef}>
              <YouTubeIcon />
            </Circle>
            <Circle ref={linkedinRef}>
              <LinkedInIcon />
            </Circle>
          </div>
        </div>

        {/* Beams: left icons TO center */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={wordpressRef}
          toRef={zuplyRef}
          curvature={-50}
          duration={3}
          delay={0}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={githubRef}
          toRef={zuplyRef}
          duration={3}
          delay={0.4}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={youtubeRef}
          toRef={zuplyRef}
          curvature={50}
          duration={3}
          delay={0.8}
        />

        {/* Beams: center TO right icons (reverse) */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={zuplyRef}
          toRef={nextjsRef}
          curvature={-50}
          reverse
          duration={3}
          delay={0.2}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={zuplyRef}
          toRef={twitterRef}
          reverse
          duration={3}
          delay={0.6}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={zuplyRef}
          toRef={linkedinRef}
          curvature={50}
          reverse
          duration={3}
          delay={1.0}
        />
      </div>
    </section>
  );
}
