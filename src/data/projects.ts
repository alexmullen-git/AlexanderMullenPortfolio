/**
 * Project data for the portfolio.
 *
 * ADD/EDIT PROJECTS HERE:
 * - Add new projects by appending to the PROJECTS array
 * - Each project needs: slug, title, subtitle, date
 * - slug is used for URLs (e.g. /portfolio/my-project)
 * - Add optional fields (image, accentColor, tags) for future customization
 */

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  date: string; // Flexible: "Jan 2026", "Summer 2025", "2024–2026", etc.
  image?: string;
  accentColor?: string;
  tags?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "example-project",
    title: "Project Alpha",
    subtitle: "A technical product built with modern tooling",
    date: "2025",
  },
  {
    slug: "platform-beta",
    title: "Platform Beta",
    subtitle: "Scalable infrastructure and developer experience",
    date: "2024–2025",
  },
  {
    slug: "tool-experiment",
    title: "Tool Experiment",
    subtitle: "Rapid prototyping and iteration",
    date: "Summer 2025",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
