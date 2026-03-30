import Image from "next/image";
import Wax from "@public/images/transparant-wax.png"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SocialMedia from "@/components/SocialMedia";
export default function AboutMePage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-brand-bg px-10 max-sm:px-4 max-sm:py-10">
        <div className="flex items-center gap-12 max-w-5xl max-sm:flex-col max-sm:gap-8">
          <Image
            src={Wax}
            alt="Rubi Aye Nyein San"
            width={500}
            height={500}
            className="rounded-2xl shrink-0"
          />

          <div className="text-lg leading-relaxed text-brand-text-secondary space-y-4">
            <h1 className="scroll-m-20 text-center text-4xl pr-2 font-extrabold tracking-tight text-brand-text mb-8">
              About Me
            </h1>
            {/* My bio */}
            <p>
              I'm <span>Aye Nyein San</span>, a Software Engineer based in
              Thailand. I started with frontends, but kept finding myself more
              curious about what was happening behind the scenes — the servers,
              the pipelines, the infrastructure holding it all together.
            </p>
            <p>
              Now I gravitate toward backend engineering, cloud architecture,
              and MLOps. There's something satisfying about a clean CI/CD
              pipeline or a model that actually serves reliably in production —
              the kind of work that's invisible when it's done right.
            </p>
            <p>
              I'm always poking at new tools in the cloud-native and ML
              engineering space. Good infrastructure is quiet, and I like
              building things that stay quiet.
            </p>
          </div>
        </div>
        <div>TimeZone: Indonesia (GMT+7)</div>
        <div>
          <Button> Download Resume </Button>
        </div>
      </div>
    );
}