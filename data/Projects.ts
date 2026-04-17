export interface Project {
  title: string;
  description: string;
  date: string;
  role?: string;
  thumbnail?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  slug: string;
}

export const projects: Project[] = [
  {
    slug: "portfolio-v2",
    title: "Portfolio v2",
    description:
      "My personal portfolio built with Next.js App Router, featuring a 3D lanyard, scroll reveals, and API-driven resume fetching.",
    date: "2026",
    role: "Solo",
    thumbnail:
      "https://drive.google.com/thumbnail?id=1xrYUBCkCHOEe4H4k3lroSMQBFOJ-aMmL&sz=w1200",
    tags: ["Next.js", "TypeScript", "Tailwind", "TanStack Query"],
    liveUrl: "https://rubiayenyeinsan.vercel.app/home",
    repoUrl: "https://github.com/aye-nyeinSan/portfolio-v-2",
  },
  {
    slug: "project-two",
    title: "Project Title",
    description:
      "A short one-to-two sentence pitch describing what the project does and why it's interesting.",
    date: "2025",
    role: "Fullstack",
    thumbnail: "",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    slug: "project-three",
    title: "Project Title",
    description:
      "Describe the problem and your approach. Replace this placeholder with real project copy.",
    date: "2025",
    role: "Frontend",
    thumbnail: "",
    tags: ["Next.js", "Tailwind"],
    liveUrl: "",
    repoUrl: "",
  },
];
