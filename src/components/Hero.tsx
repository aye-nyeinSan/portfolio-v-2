'use client'
import { PersonInfo } from "@/types/person";
import dynamic from "next/dynamic"

const Lanyard = dynamic(() => import("@/components/ui/Lanyard"), {
  ssr: false, //make 3D model render when user opens browser
  loading(loadingProps) {
    if (loadingProps.isLoading) {
        <div className="w-full h-full"> We are still loading.... </div>
    }
      return 
  },
})


interface HeroProps {
  personInfo: PersonInfo;
}

export default function Hero({ personInfo }: HeroProps) {
  return (
    <div className="relative flex items-center justify-between min-h-screen bg-[var(--bg-primary)] px-10 max-sm:flex-col max-sm:px-4 max-sm:gap-4 max-sm:py-10">
      <div className="min-w-0">
        <p className="text-8xl font-highlight max-sm:text-6xl font-semibold text-[#C69FD5]">
          {personInfo.name.toUpperCase()}
        </p>
        <p className="text-6xl max-sm:text-4xl max-sm:mt-2 font-medium text-[#C69FD5] hover:text-primary-100">
          {personInfo.title}
        </p>
      </div>

      {/* Desktop: full overlay | Mobile: contained box so the rest of the page scrolls */}
      <div className="absolute inset-0 z-100 pointer-events-none [&>*]:pointer-events-auto 
      max-sm:relative max-sm:inset-auto max-sm:w-70 max-sm:h-[60vh] max-sm:touch-none">
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          fov={15}
          transparent
        />
      </div>

      <div className="min-w-0 text-right max-sm:text-left">
        <p className="text-4xl max-sm:text-2xl font-thin text-[#C69FD5] hover:text-primary-100">
          {personInfo.about}
        </p>
      </div>
    </div>
  );
}
