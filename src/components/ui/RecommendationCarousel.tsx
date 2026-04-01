"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import type { Recommendation } from "@data/Recommendation";

interface RecommendationCarouselProps {
  recommendations: Recommendation[];
}

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 50 50" className="fill-brand shrink-0">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
  </svg>
);

function Card({ rec }: { rec: Recommendation }) {
  return (
    <div className="rounded-3xl p-10 max-sm:p-5 flex flex-col h-full border border-dashed border-brand/30 bg-brand-bg">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6 max-sm:mb-4">
        <div className="flex-1">
          <h3 className="text-2xl max-sm:text-lg font-bold text-brand-text">{rec.name}</h3>
          <p className="text-base max-sm:text-sm text-brand-text-secondary mt-1">{rec.position}</p>
        </div>
        <LinkedInIcon />
      </div>

      {/* Message */}
      <div className="text-brand-text-secondary leading-relaxed whitespace-pre-line italic flex-1 text-lg max-sm:text-sm overflow-y-auto">
        {rec.message}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-6 max-sm:pt-4">
        <div className="h-px bg-brand/20 mb-3" />
        <p className="text-sm max-sm:text-xs text-brand-text-secondary">
          {rec.time} &middot; {rec.relationship}
        </p>
      </div>
    </div>
  );
}

export default function RecommendationCarousel({ recommendations }: RecommendationCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.firstElementChild?.getBoundingClientRect().width ?? 0;
      const gap = 24; // gap-6 = 1.5rem = 24px
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, recommendations.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [recommendations.length]);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild?.getBoundingClientRect().width ?? 0;
    const gap = 24;
    container.scrollTo({ left: index * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 w-full px-10 max-sm:px-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {recommendations.map((rec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="w-[550px] max-sm:w-[85vw] min-h-[500px] max-h-[70vh] shrink-0 snap-center"
          >
            <Card rec={rec} />
          </motion.div>
        ))}
        {/* Spacer so last card can center */}
        <div className="shrink-0 w-1" />
      </div>

      {/* Dots */}
      <div className="flex gap-3 mt-10 max-sm:mt-6">
        {recommendations.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              i === activeIndex ? "bg-brand scale-110" : "bg-brand/30"
            }`}
            aria-label={`Go to recommendation ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
