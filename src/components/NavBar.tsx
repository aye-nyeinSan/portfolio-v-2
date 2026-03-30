"use client";

import { usePathname } from "next/navigation";
import PillNav from "@/components/ui/PillNavBar";
import ThemeToggle from "@/components/ui/ThemeToggle";
import logo from "@public/images/resize-wax-logo.png";

const navItems = [
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Certificates", href: "/certificate" }
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-[1em] left-130 -translate-x-1/2 z-[1000] w-auto">
      <PillNav
        logo={logo.src}
        logoAlt="Rubi Aye Nyein San"
        items={navItems}
        activeHref={pathname}
        className="custom-nav ima"
        ease="power2.easeOut"
        baseColor="#C69FD5"
        pillColor="#FCFDC8"
        hoveredPillTextColor="#FCFDC8"
        pillTextColor="#C69FD5"
        initialLoadAnimation={true}
      />
      <div className="fixed top-[1em] left-220 -translate-x-1/2 z-[1000] w-auto">
        <ThemeToggle />
      </div>
    </div>
  );
}
