import Hero from "@/components/Hero";
import { personInfo } from "@data/Hero";

export default function HomePage() {
  return (
    <>
        {/* Hero Section */}
      <Hero personInfo={personInfo} />
      
    </>
  );
}
