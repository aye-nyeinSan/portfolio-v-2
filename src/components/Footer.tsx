import Link from "next/link";
import { Separator } from "./ui/separator";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <>
      <Separator className="dark:bg-brand-text/30" />
      <div className="flex flex-col items-center text-gray-600 justify-center min-30h-screen bg-[var(--bg-primary)] px-10 max-sm:flex-col max-sm:px-4 max-sm:gap-4 max-sm:py-10">
        <div className="mt-3">
          @2026. Built with <span className="font-semibold">NextJS </span>,{" "}
          <span className="font-semibold"> shadcn/ui </span>and{" "}
          <span className="font-semibold"> TailwindCSS </span>
          with help of <span className="font-bold">ClaudeCode</span>.
        </div>
        <div>
          Developed by{" "}
          <span className="text-purple-400">Aye Nyein San 'Rubi'</span>. Source
          code available on &nbsp;
          <Link
            href={"https://github.com/aye-nyeinSan/portfolio-v-2"}
            className="text-purple-400 cursor-pointer font-medium "
          >
            Github
          </Link>
        </div>
        <div className="m-2">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}