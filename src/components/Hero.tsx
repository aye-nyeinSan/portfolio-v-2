import profileImg from "@public/images/profileStand.png";
import Image from "next/image";
import { PersonInfo } from "@/types/person";
import DecryptedText from "@/components/ui/DecryptedText";
import Lanyard from "@/components/ui/Lanyard";

interface HeroProps {
  personInfo: PersonInfo;
}

export default function Hero({ personInfo }: HeroProps) {
  return (
    <div className="block justify-center min-h-screen bg-[var(--bg-primary)]">
     
        <Lanyard position={[0, 2, 20]} gravity={[0, -40, 0]} fov={20} transparent />
    

      <div className="flex-1 min-w-0 ml-10 mt-44 max-sm:ml-2 max-sm:mt-10">
        <p className="text-8xl font-highlight max-sm:text-6xl font-semibold ">
          <DecryptedText
            text={personInfo.name.toUpperCase()}
            animateOn="inViewHover"
            revealDirection="start"
            sequential={false}
            useOriginalCharsOnly={false}
            speed={120}
          />
        </p>
        <p className="text-6xl  max-sm:text-4xl max-sm:mt-2 font-medium  hover:text-primary-100">
          <DecryptedText
            text={personInfo.title}
            animateOn="inViewHover"
            revealDirection="start"
            sequential={false}
            useOriginalCharsOnly={false}
            speed={150}
          />
        </p>
        <p className="text-4xl mt-2 max-sm:text-2xl max-sm:mt-2 font-thin  hover:text-primary-100">
          <DecryptedText
            text={personInfo.about}
            animateOn="inViewHover"
            revealDirection="start"
            sequential={false}
            useOriginalCharsOnly={false}
            speed={190}
          />
        </p>
      </div>
    </div>
  );
}
