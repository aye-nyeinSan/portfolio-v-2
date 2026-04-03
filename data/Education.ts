export interface Education {
  title: string;
  institution: string;
  date: string;
  description: string;
  link: string;
  tag: "university" | "achievement";
  icon: "graduation" | "award" | "code" | "star";
}

export const education: Education[] = [
  {
    title: "Bachelor of Software Engineering",
    institution:
      "College of Arts, Media and Technology · Chiang Mai University · Thailand",
    date: "June 2022 – June 2026 (Expected)",
    description:
      "Pursuing B.CSc with a focus on programming, web development, and software engineering. Current CGPA: 3.78.",
    link: "https://www.cmu.ac.th/",
    tag: "university",
    icon: "graduation",
  },
  {
    title: "Winner — Digital Economy in Myanmar Research Essay",
    institution: "Tech for Good Institute (Chiang Mai University)",
    date: "2023",
    description:
      "Awarded 1st Prize for research excellence in exploring the digital economy landscape. Recognized for analyzing technology's role in social impact and innovation within the Southeast Asian STEM initiative.",
    link: "https://techforgoodinstitute.org/",
    tag: "achievement",
    icon: "star",
  },
  {
    title: "Teaching Assistant",
    institution:
      "College of Arts, Media and Technology · Chiang Mai University",
    date: "2023 – 2024",
    description:
      "Assisted professors (international program) in teaching DevOps course, focusing on Docker and AWS and Object-Oriented Java programming course. Mentored junior students on projects.",
    link: "https://www.cmu.ac.th/",
    tag: "achievement",
    icon: "award",
  },
  {
    title: "Higher Secondary Education",
    institution: "University of Computer Studies · Yangon, Myanmar",
    date: "2018 – 2020",
    description:
      "Completed 12th in Information Technology with Major (Computer Science). Built the foundation for my journey into software engineering.",
    link: "https://www.ucsy.edu.mm/",
    tag: "university",
    icon: "graduation",
  },
];

