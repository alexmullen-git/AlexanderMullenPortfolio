"use client";

import Link from "next/link";

export function BackButton() {
  return (
    <Link
      href="/portfolio"
      className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
    >
      <span className="rounded-full border border-slate-600/60 bg-surface/80 p-1.5 transition-all group-hover:border-accentSoft/50 group-hover:bg-surfaceSoft">
        <svg
          className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </span>
      Back to Portfolio
    </Link>
  );
}
