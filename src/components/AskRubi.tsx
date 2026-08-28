"use client";

import * as React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AskRubiPanel from "@/components/AskRubiPanel";
import logo from "@public/images/resize-wax-logo.png";

/**
 * Floating circle that mirrors the navbar logo pill, parked bottom-left.
 * Hovering reveals the "Ask about Rubi" tooltip; clicking opens the chat panel.
 */
export default function AskRubi() {
  const [open, setOpen] = React.useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  const close = React.useCallback(() => setOpen(false), []);

  // Dismiss the panel when the click lands anywhere outside of it.
  React.useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-4 left-4 z-[1000] flex flex-col items-start gap-3"
    >
      <AskRubiPanel open={open} onClose={close} />

      {/* The tooltip is controlled so it stays out of the way while the panel is open. */}
      <Tooltip open={tooltipOpen && !open} onOpenChange={setTooltipOpen}>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label={open ? "Close chat" : "Ask about Rubi"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="group inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brand p-[2px] shadow-lg shadow-brand-text-secondary/30 transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text-strong"
          >
            <Image
              src={logo}
              alt=""
              width={80}
              height={80}
              className="block h-12 w-12 rounded-full object-cover transition-transform duration-500 ease-out group-hover:rotate-[360deg] md:h-14 md:w-14"
            />
          </button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={10}>
          Ask about Rubi
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
