'use client'
import { PersonInfo } from "@/types/person";
import dynamic from "next/dynamic"
import SocialMedia from "./SocialMedia";

const Lanyard = dynamic(() => import("@/components/ui/Lanyard"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
})


interface HeroProps {
  personInfo: PersonInfo;
}

export default function Hero({ personInfo }: HeroProps) {
  return (
    <div className="relative flex items-center justify-between min-h-screen bg-brand-bg px-10 max-sm:flex-col max-sm:px-4 max-sm:gap-4 max-sm:py-10 max-sm:pt-20">
      <div className="min-w-0">
        <p className="text-8xl font-highlight max-sm:text-6xl font-semibold text-brand">
          {personInfo.name.toUpperCase()}
        </p>
        <p className="text-6xl max-sm:text-4xl max-sm:mt-2 font-medium text-brand">
          {personInfo.title}
        </p>
        <div className="m-3">
          {" "}
          <SocialMedia />
        </div>
      </div>

      {/* Desktop: full overlay | Mobile: contained box so the rest of the page scrolls */}
      <div
        className="absolute inset-0 z-100 pointer-events-none [&>*]:pointer-events-auto
      max-sm:relative max-sm:inset-auto max-sm:w-70 max-sm:h-[60vh] max-sm:touch-none"
      >
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          fov={15}
          transparent
        />
      </div>

      <div className="min-w-0 text-right max-sm:text-left">
        <p className="text-4xl max-sm:text-2xl font-thin text-brand">
          {personInfo.about}
        </p>
      </div>
    </div>
  );
}
