import React from "react";

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
      {aboutme}
      {projects}
      {education}
      {works}
      {recommendation}
    </div>
  );
}
