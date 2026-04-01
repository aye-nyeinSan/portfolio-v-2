"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Recommendation } from "@data/Recommendation";

interface RecommendationCarouselProps {
  recommendations: Recommendation[];
}

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 50 50" className="fill-brand">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
  </svg>
);

function Card({ rec, peek = false }: { rec: Recommendation; peek?: boolean }) {
  return (
    <div
      className={`rounded-3xl p-10 flex flex-col h-full transition-opacity duration-300 border border-dashed border-brand/30 bg-brand-bg ${
        peek ? "opacity-40" : "opacity-100"
      }`}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-brand-text">{rec.name}</h3>
          <p className="text-base text-brand-text-secondary mt-1">{rec.position}</p>
        </div>
        <LinkedInIcon />
      </div>

      {/* Message */}
      <div className="text-brand-text-secondary leading-relaxed whitespace-pre-line italic flex-1 text-lg">
        {rec.message}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-6">
        <div className="h-px bg-brand/20 mb-3" />
        <p className="text-sm text-brand-text-secondary">
          {rec.time} &middot; {rec.relationship}
        </p>
      </div>
    </div>
  );
}

export default function RecommendationCarousel({ recommendations }: RecommendationCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = recommendations.length;

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + total) % total);
    },
    [total]
  );


  const nextIndex = (current + 1) % total;

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Cards container */}
      <div className="flex gap-6 justify-center items-stretch w-full px-10 max-sm:px-4">
        {/* Main card */}
        <div className="relative w-[700px] max-sm:w-[90vw] h-[650px] max-sm:h-[70vh] shrink-0">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 200 : -200, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction >= 0 ? -200 : 200, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Card rec={recommendations[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Peek card (hidden on mobile) */}
        <div className="relative w-[700px] h-[650px] shrink-0 hidden lg:block">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={nextIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Card rec={recommendations[nextIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-3 mt-10">
        {recommendations.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              i === current ? "bg-brand scale-110" : "bg-brand/30"
            }`}
            aria-label={`Go to recommendation ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
