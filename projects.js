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
  { slug: "zen-garden", title: "Automatic Zen Garden", subtitle: "Custom drawing machine in the form of a 'zen garden'", date: "2025", image: "Images/ZenGarden/drawline.gif" },
  { slug: "ESP32", title: "ESP32 Simple Integrations", subtitle: "Inputs, custom capacitive sensors, networking, and more", date: "2025", image: "Images/ESP32/handFinal.gif" },
  { slug: "pepper-integrations", title: "Pepper Integrations", subtitle: "Human understanding and AI integrations using Aldebaran's 'Pepper'", date: "2025", image: "Images/Pepper/pepper1.jpg" },
  { slug: "vex-robotics", title: "Vex Robotics", subtitle: "Designing, building, and iterating a robot for competitive tasks", date: "2023-2025", image: "Images/Vex/VexRobot1.jpg" },
  { slug: "a", title: "Example A", subtitle: "Template for future projects", date: "2026", image: "https://picsum.photos/seed/tool/400/240" },
  { slug: "b", title: "Example B", subtitle: "Template for future projects", date: "2026", image: "Images/final1.jpg" },
  { slug: "c", title: "Example C", subtitle: "Template for future projects", date: "2026", image: "https://picsum.photos/seed/beta/400/240" },
];
