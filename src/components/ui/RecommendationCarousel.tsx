"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import type { Recommendation } from "@data/Recommendation";
import { LinkedInIcon } from "@/components/ui/IconSvg";

interface RecommendationCarouselProps {
  recommendations: Recommendation[];
}

function Card({ rec }: { rec: Recommendation }) {
  return (
    <div className="rounded-3xl p-10 max-sm:p-5 flex flex-col h-full border border-dashed border-brand bg-brand-bg">
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
