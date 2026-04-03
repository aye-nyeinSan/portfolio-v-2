"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import type { WorkExperience } from "@data/WorkExperience";

interface WorkTimelineProps {
  experiences: WorkExperience[];
}

function BriefcaseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function TimelineItem({
  experience,
  index,
  isLast,
}: {
  experience: WorkExperience;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Animate the vertical line fill as it scrolls into view
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.5, 1]);
  const cardY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_auto_1fr] gap-6 max-sm:grid-cols-[auto_1fr] max-sm:gap-4">
      {/* Left side content (or empty) */}
      <div className={`flex ${isLeft ? "justify-end" : ""} max-sm:hidden`}>
        {isLeft ? (
          <motion.div style={{ opacity: cardOpacity, y: cardY }} className="w-full max-w-md">
            <Card experience={experience} />
          </motion.div>
        ) : (
          <motion.div style={{ opacity: cardOpacity }} className="flex items-center justify-end w-full max-w-md pt-6">
            <span className="text-sm font-medium text-brand-text-secondary">{experience.date}</span>
          </motion.div>
        )}
      </div>

      {/* Center timeline */}
      <div className="relative flex flex-col items-center">
        {/* Node */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="relative z-10 w-12 h-12 rounded-full border-2 border-brand bg-brand-bg dark:bg-[#252525] flex items-center justify-center text-brand-text shrink-0"
        >
          <BriefcaseIcon />
        </motion.div>

        {/* Vertical line */}
        {!isLast && (
          <div className="relative w-[2px] flex-1 min-h-[40px] bg-brand/15">
            <motion.div
              className="absolute top-0 left-0 w-full bg-brand/50"
              style={{ height: lineHeight }}
            />
          </div>
        )}
      </div>

      {/* Right side content (or empty) */}
      <div className={`flex ${!isLeft ? "justify-start" : ""} max-sm:justify-start`}>
        {/* Mobile: always show card on right */}
        <div className="hidden max-sm:block w-full">
          <motion.div style={{ opacity: cardOpacity, y: cardY }}>
            <Card experience={experience} />
          </motion.div>
        </div>

        {/* Desktop */}
        <div className="max-sm:hidden w-full max-w-md">
          {!isLeft ? (
            <motion.div style={{ opacity: cardOpacity, y: cardY }}>
              <Card experience={experience} />
            </motion.div>
          ) : (
            <motion.div style={{ opacity: cardOpacity }} className="flex items-center w-full pt-6">
              <span className="text-sm font-medium text-brand-text-secondary">{experience.date}</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function Card({ experience }: { experience: WorkExperience }) {
  return (
    <div className="rounded-3xl p-8 max-sm:p-5 border border-dashed border-brand/30 bg-brand-text-secondary dark:bg-amber-100 transition-colors w-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-xl max-sm:text-lg font-bold text-brand-bg dark:text-brand-text-secondary leading-tight">
          {experience.title}
        </h3>
        <a
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-bg dark:text-brand-text-secondary hover:text-brand transition-colors shrink-0 mt-1"
        >
          <LinkIcon />
        </a>
      </div>

      {/* Company */}
      <a
        href={experience.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold text-brand-bg dark:text-brand-text hover:underline underline-offset-4"
      >
        {experience.company}
      </a>
      <p className="text-sm text-brand-bg/80 dark:text-brand-text-secondary mt-1">
        {experience.companyInfo}
      </p>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-brand-bg/70 dark:text-brand-text-secondary">
        <span className="flex items-center gap-1">
          <MapPinIcon />
          {experience.location}
        </span>
        <span className="max-sm:hidden">{experience.date}</span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-5">
        {experience.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-3 py-1 rounded-full border border-brand/30 text-brand-bg dark:text-brand-text-secondary bg-brand-bg/20 dark:bg-brand/10"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Photos */}
      {experience.photos?.some((p) => p.trim() !== "") && (
        <div className="flex gap-3 mt-5 overflow-x-auto">
          {experience.photos!
            .filter((p) => p.trim() !== "")
            .map((photo, i) => (
              <div
                key={i}
                className="relative w-full aspect-video rounded-2xl overflow-hidden shrink-0"
              >
                <Image
                  src={`/${photo.replace(/^public\//, "")}`}
                  alt={`${experience.company} photo ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default function WorkTimeline({ experiences }: WorkTimelineProps) {
  return (
    <section
      id="works"
      className="relative bg-brand-bg py-20 max-sm:py-12 px-10 max-sm:px-4"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-sm:mb-10"
      >
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-brand-text mb-3">
          Work Experience
        </h2>
        <p className="text-brand-text-secondary text-lg max-sm:text-base">
          Where I&apos;ve been building things
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <TimelineItem
            key={i}
            experience={exp}
            index={i}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
