"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import type { Education } from "@data/Education";
import { GraduationIcon, AwardIcon, StarIcon } from "@/components/ui/IconSvg";

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

interface EducationJourneyProps {
  education: Education[];
}

function getIcon(icon: Education["icon"]) {
  switch (icon) {
    case "graduation":
      return <GraduationIcon />;
    case "award":
      return <AwardIcon />;
    case "star":
      return <StarIcon />;
    default:
      return <GraduationIcon />;
  }
}

// Card width + gap constants for positioning
const CARD_W_DESKTOP = 420;
const CARD_W_MOBILE = 280;
const GAP_DESKTOP = 32;
const GAP_MOBILE = 20;

function JourneyCard({
  item,
  index,
  total,
  activeIndex,
  cardWidth,
}: {
  item: Education;
  index: number;
  total: number;
  activeIndex: number;
  cardWidth: number;
}) {
  const isLast = index === total - 1;
  const distance = Math.abs(index - activeIndex);
  const isActive = distance < 0.5;

  return (
    <motion.div
      className="relative flex flex-col items-center shrink-0"
      style={{ width: cardWidth }}
      animate={{
        scale: isActive ? 1 : 0.88,
        opacity: isActive ? 1 : 0.4,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Timeline connector */}
      <div className="flex items-center w-full mb-8">
        {/* Left line */}
        <div
          className={`h-[2px] flex-1 ${
            index === 0 ? "bg-transparent" : "bg-brand/30"
          }`}
        />

        {/* Node */}
        <motion.div
          animate={{
            scale: isActive ? 1.15 : 1,
            borderColor: isActive
              ? "var(--color-brand)"
              : "var(--color-brand, rgba(198,159,213,0.3))",
          }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-14 h-14 max-sm:w-10 max-sm:h-10 rounded-full border-2 border-brand bg-brand-bg flex items-center justify-center text-brand-text shrink-0 max-sm:[&_svg]:w-4 max-sm:[&_svg]:h-4"
        >
          {getIcon(item.icon)}
        </motion.div>

        {/* Right line */}
        <div
          className={`h-[2px] flex-1 ${
            isLast ? "bg-transparent" : "bg-brand/30"
          }`}
        />
      </div>

      {/* Date badge */}
      <span className="text-sm font-medium text-brand-text-secondary mb-4 px-3 py-1 rounded-full border border-brand">
        {item.date}
      </span>

      {/* Card */}
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-3xl p-8 max-sm:p-5 border border-dashed border-brand/30 bg-brand-text-secondary  dark:bg-amber-100 hover:border-brand/60 transition-colors cursor-pointer w-full"
      >
        <h3 className="text-xl max-sm:text-lg font-bold text-brand-bg mb-2 group-hover:underline underline-offset-4 dark:text-brand-text-secondary">
          {item.title}
        </h3>
        <p className="text-l text-brand-bg mb-4 leading-relaxed dark:text-brand-text">
          {item.institution}
        </p>
        <p className="text-base max-sm:text-sm text-brand-bg leading-relaxed dark:text-brand-text-secondary">
          {item.description}
        </p>
      </a>
    </motion.div>
  );
}

export default function EducationJourney({ education }: EducationJourneyProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const count = education.length;

  const cardW = isMobile ? CARD_W_MOBILE : CARD_W_DESKTOP;
  const gap = isMobile ? GAP_MOBILE : GAP_DESKTOP;
  const step = cardW + gap;

  // Total horizontal travel: move from card 0 centered to card N-1 centered
  const totalTravel = (count - 1) * step;

  // Section height: enough vertical scroll to drive through all cards
  // Each card gets ~100vh of scroll
  const sectionHeight = `${count * 100}vh`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to horizontal translateX
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -totalTravel]);

  // Track active index for highlight animation
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.round(v * (count - 1));
    setActiveIndex(Math.min(Math.max(idx, 0), count - 1));
  });

  // Progress bar
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative bg-brand-bg"
      style={{ height: sectionHeight }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 px-10 max-sm:px-4"
        >
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-brand-text mb-3">
            Education
          </h2>
          <p className="text-brand-text-secondary text-lg max-sm:text-base">
            My learning journey so far
          </p>
        </motion.div>

        {/* Horizontal track — first card starts centered via left padding */}
        <div className="w-full overflow-hidden  ">
          <motion.div
            className="flex items-start my-6"
            style={{
              x: translateX,
              gap: gap,
              paddingLeft: `calc(50vw - ${cardW / 2}px)`,
            }}
          >
            {education.map((item, i) => (
              <JourneyCard
                key={i}
                item={item}
                index={i}
                total={count}
                activeIndex={activeIndex}
                cardWidth={cardW}
              />
            ))}
          </motion.div>
        </div>
        {/* Progress bar */}
        <div className="w-48 h-1 rounded-full bg-brand/10 mt-8 overflow-hidden">
          <motion.div
            className="h-full bg-brand rounded-full"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Scroll hint */}
         <p
          className="absolute bottom-8 text-sm text-brand-text-secondary"

        >
          Scroll to explore
         </p>
      </div>
    </section>
  );
}
