"use client";

import { usePathname } from "next/navigation";
import PillNav from "@/components/ui/PillNavBar";
import ThemeToggle from "@/components/ui/ThemeToggle";
import logo from "@public/images/resize-wax-logo.png";

const navItems = [
  { label: "Blog", href: "/blogs" },
  { label: "Projects", href: "/projects" },
  { label: "Certificates", href: "/certificate" }
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-[1em] left-0 w-full sm:left-1/2 sm:-translate-x-1/2 z-[1000] sm:w-auto">
        <PillNav
          logo={logo.src}
          logoAlt="Rubi Aye Nyein San"
          items={navItems}
          activeHref={pathname}
          className="custom-nav ima"
          ease="power2.easeOut"
          baseColor="#C69FD5"
          pillColor="var(--brand-yellow)"
          hoveredPillTextColor="var(--brand-yellow)"
          pillTextColor="#C69FD5"
          initialLoadAnimation={true}
        />
      </div>
      <div className="fixed top-[1em] right-4 z-[1000]">
        <ThemeToggle />
      </div>
    </>
  );
}
