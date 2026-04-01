import { recommendations } from "@data/Recommendation";
import RecommendationCarousel from "@/components/ui/RecommendationCarousel";

export default function RecommendationSlot() {
  return (
    <section
      id="recommendation"
      className="relative flex flex-col items-center justify-center min-h-screen bg-brand-bg py-20 max-sm:py-10 overflow-hidden"
    >
      {/* Heading with accent dot */}
      <h2 className="text-center text-5xl max-sm:text-3xl font-extrabold tracking-tight text-brand-text mb-16 px-10 max-sm:px-4">
        Recommendations<span className="text-brand">.</span>
      </h2>
      <RecommendationCarousel recommendations={recommendations} />
    </section>
  );
}
