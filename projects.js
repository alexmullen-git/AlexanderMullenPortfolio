/**
 * ADD/EDIT PROJECT TILES HERE
 * Add a new project by appending to the PROJECTS array.
 * Then create project-{slug}.html for its detail page.
 *
 * Fields:
 *   slug   — URL-friendly ID, used for project-{slug}.html
 *   title  — Project name
 *   subtitle — Short description for the tile
 *   date   — Flexible: "Jan 2026", "Summer 2025", "2024–2026", etc.
 *   image  — Path to tile image (e.g. images/my-project.jpg) or full URL
 */

const PROJECTS = [
  { slug: "tool-experiment", title: "Tool Experiment", subtitle: "Rapid prototyping and iteration", date: "Summer 2025", image: "https://picsum.photos/seed/tool/400/240" },
  { slug: "example-project", title: "Project Alpha", subtitle: "A technical product built with modern tooling", date: "2025", image: "Images/final1.jpg" },
  { slug: "platform-beta", title: "Platform Beta", subtitle: "Scalable infrastructure and developer experience", date: "2024–2025", image: "https://picsum.photos/seed/beta/400/240" },
  { slug: "vex-robotics", title: "Vex Robotics", subtitle: "Designing, building, and iterating a robot for competitive tasks", date: "2023-2025", image: "Images/VexRobot1.jpg" },
];
