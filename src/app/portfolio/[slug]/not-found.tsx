import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display text-2xl font-bold text-white">
        Project not found
      </h1>
      <p className="mt-2 text-slate-400">This project doesn&apos;t exist or has been removed.</p>
      <Link
        href="/portfolio"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accentSoft transition-colors hover:text-accentMuted"
      >
        ← Back to Portfolio
      </Link>
    </div>
  );
}
