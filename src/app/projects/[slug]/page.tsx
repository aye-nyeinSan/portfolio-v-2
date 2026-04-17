import { notFound } from "next/navigation";
import { projects } from "@data/Projects";
import ProjectDetails from "@/components/ProjectDetails";


export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  let content = "";
  if (project.repoUrl) {
    const res = await fetch(`https://raw.githubusercontent.com/aye-nyeinSan/${slug}/main/README.md`, {
      next: { revalidate: 3600 }, //1 hour in server side
    });
      if (res.ok) content = await res.text();
      else content = "No details content to show!"
  }

  return <ProjectDetails project={project} content={content} />;
}
