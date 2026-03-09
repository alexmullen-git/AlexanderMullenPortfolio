"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Me" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/portfolio"
          className="font-display text-lg font-semibold tracking-tight text-white transition-colors hover:text-accentMuted"
        >
          Portfolio
        </Link>
        <div className="flex items-center gap-8">
          {navItems.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== "/portfolio" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-accentSoft" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
