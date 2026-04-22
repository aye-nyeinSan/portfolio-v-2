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
    slug: "CosmesticStore_StateManagement",
    title: "Cosmetic Store",
    description:
      "This repo is testing popular react state management libs which are zustand, redux tool kit.",
    date: "2026",
    role: "Frontend",
    thumbnail:
      "https://drive.google.com/thumbnail?id=1YWtqcDGwWdEx85WVCkQosdORqNFHUSgL&sz=w1200",
    tags: ["Next.js", "Tailwind", "Zustand", "Redux Toolkit", "React Query"],
    videoUrl: [
      "https://github.com/user-attachments/assets/08b22a88-d69c-4cbb-b6e2-9abbb703f9f6",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/aye-nyeinSan/CosmesticStore_StateManagement",
  },
  {
    slug: "redux-state-management-demo",
    title: "Kanboard Board State Management Demo",
    role: "Frontend",
    description:
      "Notion like Kanban board using dnd (drag & drop lib) and Redux tool kit",
    tags: ["Next.js", "Tailwind", "Redux Toolkit", "dnd"],
    date: "2026",
    thumbnail:
      "https://github.com/user-attachments/assets/7f1e8d31-caa6-4a1e-aa91-e5569cbd1f74",
    videoUrl: [
      "https://github.com/user-attachments/assets/7f1e8d31-caa6-4a1e-aa91-e5569cbd1f74",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/aye-nyeinSan/redux-state-management-demo",
  },
  {
    slug: "project-1-Olympic-Report-malatang-friends",
    title: "Paris Olympic Report 2024",
    description:
      "A simple Olympic report application built with Vue, Pinia and TypeScript.",
    date: "2024",
    role: "Frontend",
    thumbnail:
      "https://github.com/user-attachments/assets/2bae1209-5b72-41f4-88a3-c10624b7faba",
    tags: ["VueJs", "Pinia", "Tailwind", "Typescript"],
    videoUrl: [],
    images: [
      "https://github.com/user-attachments/assets/2bae1209-5b72-41f4-88a3-c10624b7faba",
    ],
    liveUrl:
      "https://project-1-olympic-report-malatang-friends-jyio.vercel.app/",
    repoUrl:
      "https://github.com/aye-nyeinSan/project-1-Olympic-Report-malatang-friends",
  },
  {
    slug: "fastapi_backend_repo",
    title: "Mayanmar Language Sentiment Loop Backend",
    description:
      "This peoject is backend project of Mayanmar Language Sentiment Loop which is a web application that provides sentiment analysis for Myanmar language text. The backend is built using FastAPI and serves as the API layer for the application, handling requests and processing data to provide sentiment analysis results.  The backend is designed to be efficient and scalable, allowing for quick processing of text data and seamless integration with the frontend. It utilizes machine learning models to analyze the sentiment of Myanmar language text and returns the results in a structured format for the frontend to display to users.",
    date: "2025",
    role: "backend",
    thumbnail:
      "https://github.com/user-attachments/assets/2b61f7d6-0123-491a-9c99-ff1b2b6f9570",
    tags: [
      "Weight and Biases",
      "FastAPI",
      "Github Actions",
      "Docker",
      "Python",
    ],
    videoUrl: [],
    images: [
      "https://github.com/user-attachments/assets/2b61f7d6-0123-491a-9c99-ff1b2b6f9570",
      "https://github.com/user-attachments/assets/ead55c02-57bb-46ea-bfc6-7b550864427f",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/myanmar-nlp/fastapi_backend_repo",
  },
  {
    slug: "myansen_frontend",
    title: "Mayanmar Language Sentiment Loop Frontend",
    description:
      "This is the frontend repository for the Mayanmar Language Sentiment Loop application, built with React, ShadCN and TypeScript.",
    date: "2025",
    role: "Frontend",
    thumbnail:
      "https://github.com/user-attachments/assets/2b61f7d6-0123-491a-9c99-ff1b2b6f9570",
    tags: ["React", "TypeScript", "Tailwind"],
    videoUrl: [],
    images: [
      "https://github.com/user-attachments/assets/4064b180-ba28-4cc8-8f87-4077d8cc1ace",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/myanmar-nlp/myansen_frontend",
  },
];
