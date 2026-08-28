import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Project } from "@data/Projects";
import VideoPreview from "@/components/VideoPreview";

interface ProjectDetailsProps {
  project: Project;
  content: string;
}

export default function ProjectDetails({
  project,
  content,
}: ProjectDetailsProps) {
  return (
    <div className="min-h-screen bg-brand-bg px-10 py-30 max-sm:px-4 max-sm:py-18">
      <div className="mx-auto max-w-3xl">
        {(project.repoUrl || project.liveUrl) && (
          <div className="mb-6 flex flex-wrap gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand px-4 py-2 text-sm font-medium text-brand-text-strong transition-colors hover:bg-brand hover:text-brand-bg"
              >
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-bg transition-colors hover:opacity-90"
              >
                Live
              </a>
            )}
          </div>
        )}

        {content ? (
          <div
            className="
              max-w-none text-brand-text-strong
              [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-4
              [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3
              [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2
              [&_p]:my-3 [&_p]:leading-relaxed
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-3
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-3
              [&_li]:my-1
              [&_a]:text-brand-text-strong [&_a]:underline [&_a]:underline-offset-4
              [&_code]:rounded [&_code]:bg-brand-text-secondary/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm
              [&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-brand-text-secondary/10 [&_pre]:p-4
              [&_pre_code]:bg-transparent [&_pre_code]:p-0
              [&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-brand [&_blockquote]:pl-4 [&_blockquote]:italic
              [&_hr]:my-6 [&_hr]:border-brand-text-secondary/20
              [&_img]:my-4 [&_img]:rounded-lg
              [&_table]:my-4 [&_table]:w-full [&_table]:border-collapse
              [&_th]:border [&_th]:border-brand-text-secondary/30 [&_th]:p-2 [&_th]:text-left
              [&_td]:border [&_td]:border-brand-text-secondary/30 [&_td]:p-2
            "
          >
            <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
          </div>
        ) : (
          <p className="text-brand-text-secondary">
            No README available for this project.
          </p>
        )}

        {((project.videoUrl && project.videoUrl.length > 0) ||
          (project.images && project.images.length > 0)) && (
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-semibold text-brand-text-strong">
              Preview
            </h2>

            {project.videoUrl && project.videoUrl.length > 0 && (
              <div className="mb-8 flex flex-wrap items-start justify-center gap-8">
                {project.videoUrl.map((src) => (
                  <VideoPreview key={src} src={src} />
                ))}
              </div>
            )}

            {project.images && project.images.length > 0 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.images.map((src) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={`${project.title} screenshot`}
                    className=" w-full rounded-lg border border-brand-text-secondary/20 object-cover"
                  />
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
