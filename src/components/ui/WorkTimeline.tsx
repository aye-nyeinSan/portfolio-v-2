"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import type { WorkExperience } from "@data/WorkExperience";
import { BriefcaseIcon, MapPinIcon, LinkIcon } from "@/components/ui/IconSvg";

interface WorkTimelineProps {
  experiences: WorkExperience[];
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

  const cardOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.5, 1]);
  const cardY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-[auto_1fr] gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
      {/* Left side content (or empty) — desktop only */}
      <div className={`hidden sm:flex ${isLeft ? "justify-end" : ""}`}>
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
      <div className="relative flex flex-col items-center col-start-1 sm:col-start-2 row-start-1">
        {/* Node at the start of the line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="relative z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 border-brand bg-brand-bg dark:bg-[#252525] flex items-center justify-center text-brand-text shrink-0 [&_svg]:w-4 [&_svg]:h-4 sm:[&_svg]:w-5 sm:[&_svg]:h-5"
        >
          <BriefcaseIcon />
        </motion.div>

        {/* Vertical line — stretches full height of the row */}
        <div className="w-[2px] flex-1 min-h-[80px] bg-brand" />

        {/* Extend line below the card with padding */}
        {!isLast && <div className="w-[2px] h-8 bg-brand" />}
      </div>

      {/* Right side content */}
      <div className={`flex justify-start col-start-2 sm:col-start-auto row-start-1 sm:row-start-auto ${!isLeft ? "sm:justify-start" : ""}`}>
        {/* Mobile: date badge + card */}
        <div className="block sm:hidden w-full">
          <motion.div style={{ opacity: cardOpacity, y: cardY }}>
            <span className="inline-block text-sm font-medium text-brand-text-secondary mb-2 px-3 py-1 rounded-full border border-brand">
              {experience.date}
            </span>
            <Card experience={experience} />
          </motion.div>
        </div>

        {/* Desktop */}
        <div className="hidden sm:block w-full max-w-md">
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
    <div className="rounded-3xl max-sm:rounded-2xl p-8 max-sm:p-4 border border-dashed border-brand/30 bg-brand-text-secondary dark:bg-amber-100 transition-colors w-full">
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
      <div className="flex items-center gap-3 mt-1">
        {experience.companyLogo && (
          <Image
            src={experience.companyLogo}
            alt={`${experience.company} logo`}
            width={36}
            height={36}
            className="rounded-full shrink-0 object-cover"
          />
        )}
        <a
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-brand-bg dark:text-brand-text hover:underline underline-offset-4"
        >
          {experience.company}
        </a>
      </div>
      <p className="text-sm text-brand-bg/80 dark:text-brand-text-secondary mt-1">
        {experience.companyInfo}
      </p>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-brand-bg/70 dark:text-brand-text-secondary">
        <span className="flex items-center gap-1">
          <MapPinIcon />
          {experience.location}
        </span>
        <span>{experience.date}</span>
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
                className="relative w-full aspect-video rounded-2xl max-sm:rounded-xl overflow-hidden shrink-0"
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
          Work Experience.
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
