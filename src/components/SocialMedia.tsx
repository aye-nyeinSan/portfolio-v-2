import Link from "next/link";
import { socials, iconPaths } from "@data/SocialMedias";


export default function SocialMedia() {
  return (
    <ul className="flex gap-4 ml-8 max-sm:ml-0">
      {socials.map(({ icon, href, label }) => {
        const path = iconPaths[icon];
        return (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              aria-label={label}
              className="text-brand-text hover:text-brand transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox={path.viewBox}
                fill="currentColor"
              >
                <path d={path.d} />
              </svg>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
