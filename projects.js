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
 *   video  — (optional) short muted looping clip shown on the tile; `image` is its poster frame
 */

const PROJECTS = [
  { slug: "arm", title: "Robotic Arm", subtitle: "Built a robotic arm from scratch to pick and place objects", date: "2026", image: "Images/Arm/arm1.tile.jpg", video: "Images/Arm/arm1.tile.mp4" },
  { slug: "prod", title: "Prod", subtitle: "Personal desktop productivity app with custom urgency engine", date: "2026", image: "Images/Prod/DashboardView.png" },
  { slug: "CS85-Projects", title: "CS85 Projects", subtitle: "Software for astronomy, paleography, music and art", date: "Fall 2026", image: "Images/CS85/tile.jpg", video: "Images/CS85/tile.mp4" },
  { slug: "propulsion", title: "Pedal Propulsion System", subtitle: "Developed a pedal-powered differential thrust propulsion system for a catamaran", date: "2026", image: "Images/Propulsion/propulsion1.tile.jpg", video: "Images/Propulsion/propulsion1.tile.mp4" },
  { slug: "tentacle", title: "Controllable Tentacle", subtitle: "Fully-articulate tentacle robot built and programmed from scratch", date: "2026", image: "Images/Tentacle/grab.tile.jpg", video: "Images/Tentacle/grab.tile.mp4" },
  { slug: "fan", title: "Optimized Fan Propeller", subtitle: "Designed and optimized replacement fan propeller", date: "2026", image: "Images/Fan/final.web.jpg" },
  { slug: "catamaran", title: "Catamaran", subtitle: "Worked with a team to produce a catamaran from scratch", date: "2026", image: "Images/Catamaran/boat1.web.jpg" },
  /*{ slug: "websites", title: "Websites", subtitle: "Full-stack and static website development", date: "2021-Present", image: "Images/Websites/hero.jpg" },*/
  { slug: "jade", title: "Jade", subtitle: "ClosedAI Solutions' on-device processing LLM app", date: "2025", image: "Images/Jade/Jade.png"},
  { slug: "water-filling-table", title: "Water-Filling Table", subtitle: "Table built to detect cups and refill them with water", date: "2025", image: "Images/Water-FillingTable/final1.web.jpg" },
  { slug: "zen-garden", title: "Automatic Zen Garden", subtitle: "Custom drawing machine in the form of a 'zen garden'", date: "2025", image: "Images/ZenGarden/drawline.tile.jpg", video: "Images/ZenGarden/drawline.tile.mp4" },
  { slug: "marble", title: "Marble Track System", subtitle: "Developed a mounting and track system for customizable marble runs", date: "2026", image: "Images/Marble/track1.web.jpg" },
  { slug: "traffic-light", title: "Traffic Light", subtitle: "Modified standard lamp post to operate traffic lights", date: "2026", image: "Images/TrafficLight/final.web.jpg" },
  { slug: "ESP32", title: "ESP32 Integrations", subtitle: "Inputs, custom capacitive sensors, networking, and more", date: "2025", image: "Images/ESP32/handFinal.tile.jpg", video: "Images/ESP32/handFinal.tile.mp4" },
  { slug: "pepper-integrations", title: "Pepper Integrations", subtitle: "Human understanding and AI integrations using Aldebaran's 'Pepper'", date: "2025", image: "Images/Pepper/pepper1.jpg" },
  { slug: "vex-robotics", title: "Vex Robotics", subtitle: "Designing, building, and iterating a robot for competitive tasks", date: "2023-2025", image: "Images/Vex/VexRobot1.web.jpg" },
  /*{ slug: "a", title: "Example A", subtitle: "Template for future projects", date: "2026", image: "https://picsum.photos/seed/tool/400/240" },
  { slug: "b", title: "Example B", subtitle: "Template for future projects", date: "2026", image: "Images/final1.jpg" },
  { slug: "c", title: "Example C", subtitle: "Template for future projects", date: "2026", image: "https://picsum.photos/seed/beta/400/240" },*/
];