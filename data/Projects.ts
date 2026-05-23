export interface Project {
  title: string;
  description: string;
  date: string;
  role?: string;
  thumbnail?: string;
  images?: string[];
  videoUrl?: string[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  slug: string;
}

export const projects: Project[] = [
  {
    slug: "portfolio-v-2",
    title: "Portfolio v2",
    description:
      "My personal portfolio built with Next.js App Router, featuring a 3D lanyard, scroll reveals, and API-driven resume fetching.",
    date: "2026",
    role: "Solo",
    thumbnail:
      "https://drive.google.com/thumbnail?id=1xrYUBCkCHOEe4H4k3lroSMQBFOJ-aMmL&sz=w1200",
    images: [],
    videoUrl: [
      "https://github.com/user-attachments/assets/9ce1da72-d0d2-4e17-b2c9-8dc939789ee2",
      "https://github.com/user-attachments/assets/a90d3792-f9eb-45a0-a1f9-30f697f3d5bc",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind", "TanStack Query"],
    liveUrl: "https://rubiayenyeinsan.vercel.app/home",
    repoUrl: "https://github.com/aye-nyeinSan/portfolio-v-2",
  },
  {
    slug: "resume_api",
    title: "Resume Visitor API",
    description:
      'FastAPI backend for my personal resume site (rubiayenyeinsan.vercel.app). Tracks unique visitors and "love" votes, backed by Firestore and deployed to Cloud Run via Cloud Build.',
    date: "2026",
    role: "Backend",
    thumbnail:
      "https://github.com/user-attachments/assets/c6b74b4f-9568-4708-b6cc-f77f7ec4ce1b",
    images: [
      "https://github.com/user-attachments/assets/c6b74b4f-9568-4708-b6cc-f77f7ec4ce1b",
    ],
    tags: [
      "FastAPI",
      "FireStore",
      "Cloud Run",
      "Artifact Registry",
      "Cloud Build",
      "GCP",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/aye-nyeinSan/resume_api",
  },
  {
    slug: "myansen_frontend",
    title: "Myanmar Language Sentiment Analysis with Feedback Loop Project",
    description:
      "Demo Describe the problem and your approach. Replace this placeholder with real project copy.",
    date: "2025 Demo ",
    role: "Frontend",
    thumbnail: "",
    tags: ["Next.js", "Tailwind"],
    liveUrl: "",
    repoUrl: "https://github.com/myanmar-nlp/myansen_frontend",
  },
];
