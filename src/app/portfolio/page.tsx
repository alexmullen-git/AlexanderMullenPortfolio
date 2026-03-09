import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <section className="mb-20 md:mb-28">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Selected work
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-400">
            Projects and experiments at the intersection of product and engineering.
          </p>
        </section>
      </Reveal>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard
              slug={project.slug}
              title={project.title}
              subtitle={project.subtitle}
              date={project.date}
            />
          </Reveal>
        ))}
      </section>
    </div>
  );
}
