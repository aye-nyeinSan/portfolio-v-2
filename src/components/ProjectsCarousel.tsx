import Link from "next/link";
import type { Project } from "@data/Projects";

interface ProjectsCarouselProps {
  data: Project[];
}

export function ProjectsCarousel({ data }: ProjectsCarouselProps) {
  return (
    <div className="w-full max-w-3xl mt-10">
      <ul className="flex flex-col divide-y divide-brand-text-secondary/20 rounded-xl border border-brand-text-secondary/20 bg-brand-bg">
        {data.slice(0, 3).map((project) => (
          <li key={project.slug}>
            <article className="group relative flex flex-col gap-2 px-5 py-4 transition-colors cursor-pointer hover:bg-brand-text-secondary/5">
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-0"
              />
              <header className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span
                  className="text-lg font-semibold text-brand group-hover:underline underline-offset-4"
                >
                  {project.title}
                </span>
                {project.role && (
                  <span className="rounded-full border border-brand-text-secondary/30 px-2 py-0.5 text-sm text-brand-text-secondary">
                    {project.role}
                  </span>
                )}
              </header>

              {project.description && (
                <p className="text-base leading-relaxed text-brand-text-secondary line-clamp-3">
                  {project.description}
                </p>
              )}

              <footer className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-brand-text-secondary">
                {project.tags.length > 0 && (
                  <ul className="flex flex-wrap items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-brand-text-secondary/30 bg-brand-text-secondary/5 px-2 py-0.5 text-sm text-brand-text-secondary"
                      >
                        <span
                          className="h-2 w-2 rounded-full bg-brand"
                          aria-hidden
                        />
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="ml-auto flex items-center gap-3">
                  {project.repoUrl && (
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand hover:underline"
                    >
                      Code ↗
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand hover:underline"
                    >
                      Live ↗
                    </Link>
                  )}
                </div>
              </footer>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-center">
        <Link
          href="/projects"
          className="text-base text-brand-text-secondary hover:text-brand hover:underline underline-offset-4"
        >
          View all projects →
        </Link>
      </div>
    </div>
  );
}
