import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { projects } from "@data/Projects";
export default function ProjectsSlot() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen bg-brand-bg px-10 max-sm:px-4 max-sm:py-10"
    >
      <h2 className="scroll-m-20 text-center text-5xl max-sm:text-3xl font-extrabold tracking-tight text-brand-text mb-8">
        Recent Projects.
      </h2>
      {/* <p className="text-brand-text-secondary text-lg">Coming soon...</p> */}

      <ProjectsCarousel data={projects} />
    </section>
  );
}
