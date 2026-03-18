import Hero from "@/app/_components/Hero"
import { PersonInfo } from "@type/person";


const personInfo: PersonInfo = {
  name: "Aye Nyein San",
  title: "Software Engineer",
  about: "With Passion And Experience",
};

export default function HomePage() {
    return (
        <Hero personInfo={personInfo}/>
    )

}