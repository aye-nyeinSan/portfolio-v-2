export interface WorkExperience {
  title: string;
  date: string;
  company: string;
  companyInfo: string;
  location: string;
  link?: string;
  skills: string[];
  photos?: string[];
}

export const experiences: WorkExperience[] = [
  {
    title: "Junior QA analyst ( Software Engineering - Focused)",
    date: "August 2025 - March 2026 ",
    company: "Ling - Language App",
    companyInfo:
      "Ling is a gamified language-learning app with over 5 Million users  globally and 50,000+ Monthly Active Users",
    location: "Thailand",
    link: "https://ling-app.com/",
    skills: [
      "GCP Cloud Run",
      "GitLab CI",
      "GCP Cloud Monitoring & Alerting",
      "Firebase",
      "Bugsnag",
      "Amplitude",
      "Azure Speech SDK",
      "React Native",
      "Redux Toolkit",
      "Next.js",
      "Jest",
      "Make.com",
    ],
    photos: ["public/images/7ED74824-3010-428F-B06D-24806CF31491.jpeg"],
  },
  {
    title: "Software Engineer",
    date: "Jul 2024 - March 2025",
    company: "Greek Squad Studio",
    companyInfo: "Digital Services Startup (Team of 6)",
    location: "Thailand",
    link: "https://www.linkedin.com/company/geek-squad-studio",
    skills: ["React.js", "Next.js", "AWS Amplify", "MySQL", "Jest"],
    photos: [""],
  },
];
