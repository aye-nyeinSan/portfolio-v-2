import Link from "next/link";
import Image from "next/image";
import { projects } from "@data/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-brand-bg px-10 py-24 max-sm:px-4 max-sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-sm:mb-8">
          <h1 className="text-5xl font-extrabold tracking-tight text-brand max-sm:text-4xl">
            Projects
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-brand-text-secondary max-sm:text-base">
            A selection of things I&apos;ve built — side projects, experiments,
            and work I&apos;m proud of.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-text-secondary/15 bg-brand-bg transition-colors hover:border-brand/60 active:border-brand/60 focus-within:border-brand/60">
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={project.title}
                  className="absolute inset-0 z-0"
                />

                <div className="relative aspect-video w-full overflow-hidden bg-brand-text-secondary/10">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-brand-text-secondary/40">
                      <span className="text-5xl font-highlight">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5 bg-brand-text transition-colors group-hover:text-brand-bg group-active:text-brand-bg group-focus-within:text-brand-bg">
                  <div className="flex items-center justify-between gap-3 text-xs text-brand-text-secondary transition-colors group-hover:text-brand-bg group-active:text-brand-bg group-focus-within:text-brand-bg">
                    <span>{project.date}</span>
                    {project.role && <span>{project.role}</span>}
                  </div>

                  <h2 className="text-xl font-semibold text-brand-text-secondary transition-colors group-hover:text-brand-bg group-active:text-brand-bg group-focus-within:text-brand-bg">
                    {project.title}
                  </h2>

                  <p className="text-sm leading-relaxed text-brand-text-secondary transition-colors group-hover:text-brand-bg group-active:text-brand-bg group-focus-within:text-brand-bg line-clamp-3">
                    {project.description}
                  </p>

                  {project.tags.length > 0 && (
                    <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-brand-text-secondary/20 px-2.5 py-0.5 text-xs text-brand-text-secondary transition-colors group-hover:border-brand-bg/40 group-active:border-brand-bg/40 group-focus-within:border-brand-bg/40 group-hover:text-brand-bg group-active:text-brand-bg group-focus-within:text-brand-bg"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  {(project.liveUrl || project.repoUrl) && (
                    <div className="relative z-10 flex items-center gap-4 pt-3 text-sm">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-brand-text-secondary transition-colors group-hover:text-brand-bg group-active:text-brand-bg group-focus-within:text-brand-bg hover:underline"
                        >
                          Live ↗
                        </Link>
                      )}
                      {project.repoUrl && (
                        <Link
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-brand-text-secondary transition-colors group-hover:text-brand-bg group-active:text-brand-bg group-focus-within:text-brand-bg hover:underline"
                        >
                          Code ↗
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
