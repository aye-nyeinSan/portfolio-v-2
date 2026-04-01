import React from "react";
import CurvedLoop from "@/components/ui/CurvedLoop";

export default function HomeLayout({
  children,
  aboutme,
  projects,
  education,
  works,
  recommendation,
}: {
  children: React.ReactNode;
  aboutme: React.ReactNode;
  projects: React.ReactNode;
  education: React.ReactNode;
  works: React. ReactNode
  recommendation: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="bg-brand-bg top-0">
        <CurvedLoop
          marqueeText="open to work ✦ Rubi ✦ Aye Nyein San ✦ "
          speed={2}
          curveAmount={400}
          direction="right"
          interactive
          className="fill-brand-text"
        />
      </div>

      {aboutme}
      {projects}
      {education}
      {works}
      {recommendation}
    </div>
  );
}
