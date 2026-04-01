export interface Recommendation {
  name: string;
  position: string;
  message: string;
  time: string;
  relationship: string;
  platform: string;
  icon: string;
}

export const recommendations: Recommendation[] = [
  {
    name: "Pinwara Jomsak",
    position: "HR & Finance Supervisor | Driving People, Processes & International Accounting",
    message: "I had the pleasure of working with Rubi during her 8-month internship at Ling. I was involved in onboarding her and guiding her through our company's operational processes during her time with us.\n\nRubi showed a strong sense of ownership in her work from the start. She's naturally curious, asks thoughtful questions, and always tries to understand the bigger picture. She also has a data-driven mindset and approaches tasks in a thoughtful and structured way.\n\nOn top of that, Rubi is respectful, easy to work with, and gets along really well with the team. She's someone who brings a positive attitude to the workplace and always willing to learn.\n\nIt was great to see her grow during her internship, and I'm excited to see what she does next in her career :)",
    time: "March 12, 2026",
    relationship: "Pinwara worked with Rubi Aye but on different teams",
    platform: "LinkedIn",
    icon: "Linkedin",
  },
  {
    name: "Simon Bacher",
    position: "Co-Founder at Ling. On a mission to connect people from different cultures.",
    message: "I had the chance to work with Rubi Aye Nyein San during her internship at Ling.\n\nRubi approached her work with a lot of curiosity and a clear willingness to solve problems. She took on tasks across different parts of our stack, from frontend fixes to DevOps improvements, and was always eager to understand how things worked and how they could be improved.\n\nFor example, she helped optimize parts of our CI/CD pipeline, contributing to a noticeable reduction in build times. But more importantly, she consistently showed initiative by exploring solutions and bringing ideas to the team.\n\nThat kind of initiative is always valuable in a fast-moving product team. I appreciate the contributions she made during her time with us and wish her the very best for the next steps in her engineering journey.",
    time: "March 9, 2026",
    relationship: "Simon worked with Rubi Aye but on different teams",
    platform: "LinkedIn",
    icon: "Linkedin",
  },
];
