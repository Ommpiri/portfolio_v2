export const myProjects = [
  {
    id: 1,
    title: "Okpythion (PyDude AI Tutor)",
    description:
      "Interactive full-stack Python learning platform with in-browser code execution and an autonomous Gemini AI debug agent.",
    subDescription: [
      "Engineered PyDude — an AI tutor built on Gemini function-calling with Auto-Debug Agent mode for real-time error diagnosis and patch suggestions.",
      "Integrated Pyodide WASM runtime to execute Python code entirely client-side inside the browser without remote server overhead.",
      "Built multi-level coding tracks from basic loops to advanced data structures with real-time test case evaluation.",
      "Designed a cyber-minimalist dark mode IDE interface with Monaco code editor and execution telemetry.",
    ],
    href: "https://okpythion.vercel.app",
    github: "https://github.com/Ommpiri/okpythion",
    logo: "",
    image: "/assets/projects/okpython.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "Python / WASM", path: "/assets/logos/cplusplus.svg" },
      { id: 3, name: "Gemini API", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Ambika Agency — Web & Brand Platform",
    description:
      "Modern digital presence and brand identity for a manufacturing enterprise, featuring terracotta ripple aesthetics and automated inquiry pipelines.",
    subDescription: [
      "Crafted full digital strategy, visual branding, and interactive catalog with customized terracotta aesthetics.",
      "Engineered high-performance Next.js web application with 98+ Lighthouse score and responsive layout.",
      "Integrated automated customer inquiry dispatch and interactive product specifications with CAD references.",
      "Implemented SEO-optimized metadata and lightning-fast local asset caching.",
    ],
    href: "https://ambikaagency.co.in",
    github: "https://github.com/Ommpiri/ambika-agency",
    logo: "",
    image: "/assets/projects/ambika-agency.jpg",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Vercel", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 3,
    title: "Sentinel-One — IoT Intrusion Detection",
    description:
      "Multi-domain physical intrusion detection and perimeter surveillance system using ESP32 sensor fusion, WebSockets, and real-time cloud dispatch.",
    subDescription: [
      "Developed firmware for ESP32 microcontrollers integrating PIR, ultrasonic, and vibration sensor arrays.",
      "Implemented real-time bidirectional WebSocket telemetry and MQTT broker integration (HiveMQ) for instant alert broadcast (<50ms latency).",
      "Designed an interactive web-based monitoring console with live sensor graphs, audio alarms, and incident logging.",
      "Co-authored research paper on multi-domain sensor fusion architecture submitted for IEEE publication.",
    ],
    href: "https://sentinel-one.vercel.app",
    github: "https://github.com/Ommpiri/Sentinel-One",
    logo: "",
    image: "/assets/projects/sentinel-one.png",
    tags: [
      { id: 1, name: "ESP32 / C++", path: "/assets/logos/cplusplus.svg" },
      { id: 2, name: "WebSockets", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "MQTT (HiveMQ)", path: "/assets/logos/git.svg" },
      { id: 4, name: "React Dashboard", path: "/assets/logos/react.svg" },
    ],
  },
  {
    id: 4,
    title: "4XT Esports Organization Platform",
    description:
      "Operational management and tournament strategy system for competitive BGMI team roster coordination and analytics.",
    subDescription: [
      "Led and managed 4XT competitive gaming organization across tournament execution and team coordination.",
      "Created structured scrim analytics tracking player performance, zone rotations, and kill/death metrics.",
      "Coordinated live tournament participation, strategic map positioning, and team operations.",
    ],
    href: "https://4xt-esports.vercel.app",
    github: "https://github.com/Ommpiri/4XT-Esports",
    logo: "",
    image: "/assets/projects/4xt-esports.jpg",
    tags: [
      { id: 1, name: "Team Strategy", path: "/assets/logos/github.svg" },
      { id: 2, name: "Analytics", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "Operations", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 5,
    title: "OMM_OS Personal Operating System",
    description:
      "Interactive browser-based desktop operating system portfolio with window management, terminal shell, weather, life map, and Spotify Web Player.",
    subDescription: [
      "Engineered a complete window manager supporting dragging, snapping, minimizing, maximizing, and resizing.",
      "Integrated embedded Spotify Web Player with curated stations and custom URI loading.",
      "Built an interactive cyberpunk terminal shell with custom commands and Easter eggs.",
      "Implemented live weather via Open-Meteo API and geospatial life map using Leaflet.js.",
    ],
    href: "https://ommpiri.github.io/personal-os",
    github: "https://github.com/Ommpiri/personal-os",
    logo: "",
    image: "/assets/projects/personal-os.png",
    tags: [
      { id: 1, name: "HTML5 / CSS3", path: "/assets/logos/html5.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Spotify API", path: "/assets/logos/git.svg" },
      { id: 4, name: "Leaflet Maps", path: "/assets/logos/vitejs.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/Ommpiri",
    icon: "/assets/socials/git.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aomm",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Email",
    href: "mailto:ommpiri21@gmail.com",
    icon: "/assets/socials/whatsApp.svg",
  },
];

export const experiences = [
  {
    title: "AI & Full-Stack Engineer",
    job: "PyDude / Okpythion AI Project",
    date: "2025 - Present",
    contents: [
      "Architected PyDude — an intelligent coding tutor powered by Gemini API function-calling for interactive Python education.",
      "Implemented client-side sandboxed Python code execution leveraging Pyodide WebAssembly with zero backend load.",
      "Built the Auto-Debug Agent capable of contextual traceback parsing and generating instant step-by-step fix recommendations.",
    ],
  },
  {
    title: "IoT Security & Systems Researcher",
    job: "Sentinel-One / IEEE Research",
    date: "2024 - 2025",
    contents: [
      "Engineered multi-sensor intrusion detection architecture combining ESP32 microcontrollers with real-time cloud dispatch.",
      "Integrated WebSockets and MQTT telemetry for low-latency live telemetry streams to responsive control dashboards.",
      "Co-authored research paper on multi-domain physical security fusion algorithms for IEEE publication.",
    ],
  },
  {
    title: "Brand Strategist & Frontend Lead",
    job: "Ambika Agency",
    date: "2024 - 2025",
    contents: [
      "Spearheaded digital rebranding and crafted customized terracotta aesthetic design system.",
      "Developed responsive web application with Next.js, achieving sub-second load times and interactive catalog search.",
      "Integrated customer automated contact systems, increasing direct enterprise inquiries.",
    ],
  },
  {
    title: "Esports Organization Lead",
    job: "4XT Esports Organization",
    date: "2022 - 2024",
    contents: [
      "Directed team roster operations, scrim schedule management, and tournament entry protocols for competitive BGMI squad.",
      "Analyzed match telemetry to optimize zone rotation pathways and player combat performance.",
    ],
  },
];

export const certificates = [
  {
    id: 1,
    title: "Oracle Certified Foundations Associate — Agentic AI",
    issuer: "Oracle University",
    date: "2026",
    credentialId: "ORCL-AGENTIC-AI-2026",
    category: "AI & ML",
    iconType: "ai",
    description:
      "Autonomous agent architectures, LLM reasoning patterns, tool use, schema generation, prompt caching, and enterprise multi-agent workflows.",
    skills: ["Agentic AI", "Oracle Cloud", "LLM Reasoning", "Prompt Engineering"],
    href: "https://education.oracle.com/",
  },
  {
    id: 2,
    title: "Infosys Springboard — Python Graduate",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INFY-PY-2024-GRAD",
    category: "Core Eng",
    iconType: "python",
    description:
      "Advanced Python programming, data structures, algorithm optimization, object-oriented software design, and memory efficiency.",
    skills: ["Python", "Algorithms", "Data Structures", "OOP"],
    href: "https://infyspringboard.onwingspan.com/",
  },
  {
    id: 3,
    title: "Multi-Domain IoT & Sensor Fusion Research",
    issuer: "IEEE Computer Society & LPU",
    date: "2025",
    credentialId: "IEEE-IOT-2025-PIRI",
    category: "IoT & Systems",
    iconType: "iot",
    description:
      "Real-time sensor arrays, ESP32 dual-core microcontroller firmware, low-latency WebSocket / MQTT telemetry pipelines, and hardware debugging.",
    skills: ["ESP32 / C++", "MQTT (HiveMQ)", "WebSockets", "Sensor Fusion"],
    href: "https://www.ieee.org/",
  },
  {
    id: 4,
    title: "Full-Stack Web Development & Modern React",
    issuer: "Lovely Professional University",
    date: "2025",
    credentialId: "LPU-CSE-FSWD-2025",
    category: "Full-Stack",
    iconType: "react",
    description:
      "Modern SPA engineering, React 19 component architecture, state management, REST & WebSocket integration, and Tailwind CSS design systems.",
    skills: ["React.js", "Next.js", "JavaScript ES6+", "TailwindCSS"],
    href: "https://www.lpu.in/",
  },
];
