"use client";

import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
};

export function ProjectCard({ slug, title, subtitle, date }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-surface/60 p-6 transition-all duration-300 hover:border-accentSoft/30 hover:bg-surfaceSoft hover:shadow-card-hover md:p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {date}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold text-white transition-colors group-hover:text-accentMuted md:text-2xl">
          {title}
        </h3>
        <p className="mt-1 text-sm text-slate-400 line-clamp-2">{subtitle}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accentSoft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View project
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
