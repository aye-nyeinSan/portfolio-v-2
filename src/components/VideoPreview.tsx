"use client";
import { useState } from "react";

export default function VideoPreview({ src }: { src: string }) {
  const [isVertical, setIsVertical] = useState<boolean | null>(null);

  if (isVertical) {
    return (
      <div className="relative w-[260px] shrink-0 rounded-[2.5rem] bg-neutral-900 p-2 shadow-xl ring-1 ring-black/20">
        <span
          aria-hidden
          className="absolute left-1/2 top-2.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-neutral-900"
        />
        <div className="relative aspect-9/20 overflow-hidden rounded-[2rem] bg-black">
          <video
            src={src}
            controls
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <video
      src={src}
      controls
      playsInline
      preload="metadata"
      onLoadedMetadata={(e) => {
        const v = e.currentTarget;
        setIsVertical(v.videoHeight > v.videoWidth);
      }}
      className="w-full max-w-2xl rounded-lg border border-brand-text-secondary/20"
    />
  );
}
