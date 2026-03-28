import Hero from "@/components/Hero";
import PillNav from "@/components/ui/PillNavBar";
import logo from "@public/images/resize-wax-logo.png";
import { personInfo } from "@data/data";



export default function HomePage() {
  return (
    <>
      <div className="fixed top-[1em] left-130 -translate-x-1/2 z-[1000] w-auto">
        <PillNav
          logo={logo.src}
          logoAlt="Rubi Aye Nyein San"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav ima"
          ease="power2.easeOut"
          baseColor="#C69FD5"
          pillColor="#FCFDC8"
          hoveredPillTextColor="#FCFDC8"
          pillTextColor="#C69FD5"
          initialLoadAnimation={true}
        />
      </div>

      <Hero personInfo={personInfo} />
    
     
    
    </>
  );
}
