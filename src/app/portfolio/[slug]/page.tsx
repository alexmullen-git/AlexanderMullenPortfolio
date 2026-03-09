import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { BackButton } from "@/components/BackButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <div className="mb-10">
        <BackButton />
      </div>

      <header className="mb-12">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {project.date}
        </span>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-slate-400">{project.subtitle}</p>
      </header>

      {/*
        CUSTOMIZE THIS PROJECT PAGE HERE:
        Replace the placeholder sections below with your own content.
        Each project can have a unique layout—this shell stays consistent
        while you add overview, gallery, details, technical notes, etc.
      */}
      <div className="space-y-12">
        <section>
          <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-400">
            Overview
          </h2>
          <p className="text-slate-300 leading-relaxed">
            [Add project overview and context here. Replace this placeholder with your own content.]
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-400">
            Details
          </h2>
          <p className="text-slate-300 leading-relaxed">
            [Add technical details, timeline, outcomes, or other sections as needed.]
          </p>
        </section>
      </div>
    </article>
  );
}
