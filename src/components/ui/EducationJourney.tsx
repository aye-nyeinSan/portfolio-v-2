"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { useState } from "react";
import type { Education } from "@data/Education";

interface EducationJourneyProps {
  education: Education[];
}

function GraduationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
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

// Card width + gap constant for positioning
const CARD_W = 420;
const GAP = 32;
const STEP = CARD_W + GAP;

function JourneyCard({
  item,
  index,
  total,
  activeIndex,
}: {
  item: Education;
  index: number;
  total: number;
  activeIndex: number;
}) {
  const isLast = index === total - 1;
  const distance = Math.abs(index - activeIndex);
  const isActive = distance < 0.5;

  return (
    <motion.div
      className="relative flex flex-col items-center shrink-0"
      style={{ width: CARD_W }}
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
          className="relative z-10 w-14 h-14 rounded-full border-2 border-brand bg-brand-bg flex items-center justify-center text-brand-text shrink-0"
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
  const count = education.length;

  // Total horizontal travel: move from card 0 centered to card N-1 centered
  const totalTravel = (count - 1) * STEP;

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
        <div className="w-full overflow-hidden ">
          <motion.div
            className="flex items-start my-6"
            style={{
              x: translateX,
              gap: GAP,
              paddingLeft: `calc(50vw - ${CARD_W / 2}px)`,
            }}
          >
            {education.map((item, i) => (
              <JourneyCard
                key={i}
                item={item}
                index={i}
                total={count}
                activeIndex={activeIndex}
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
