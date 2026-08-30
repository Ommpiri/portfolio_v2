export const myProjects = [
  {
    id: 1,
    title: "Okpython (PyDude AI)",
    description:
      "Interactive Python programming learning platform and autonomous debugging tutor built with Next.js, WebAssembly, and Gemini AI function-calling.",
    subDescription: [
      "Engineered an autonomous AI Debug Agent using Gemini API function calling to analyze syntax/runtime tracebacks and suggest localized patch diffs.",
      "Integrated Pyodide WASM runtime to execute Python code entirely client-side inside the browser without remote server overhead.",
      "Built multi-level coding tracks from basic loops to data structures with real-time Judge0 test case evaluation.",
      "Designed a cyber-minimalist dark mode IDE interface with Monaco code editor and execution graphs.",
    ],
    href: "https://okpython.vercel.app",
    github: "https://github.com/Ommpiri/okpython",
    logo: "",
    image: "/assets/projects/okpython.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "Python / WASM", path: "/assets/logos/cplusplus.svg" },
      { id: 3, name: "Gemini AI", path: "/assets/logos/microsoft.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Ambika Agency — Web & Brand Platform",
    description:
      "Digital presence and custom brand identity for an Indian brick manufacturing agency, featuring a signature terracotta ripple motif and automated inquiries.",
    subDescription: [
      "Crafted full digital strategy, visual branding, and interactive catalog with customized terracotta aesthetics.",
      "Engineered high-performance Next.js web application with 98+ Lighthouse score and responsive layout.",
      "Integrated automated customer inquiry dispatch and interactive product specifications with CAD references.",
      "Implemented SEO-optimized metadata and lightning-fast local asset caching.",
    ],
    href: "https://ambikaagency.co.in",
    github: "https://github.com/Ommpiri/ambika-agency",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Next.js", path: "/assets/logos/vitejs.svg" },
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
      "Implemented real-time bidirectional WebSocket telemetry and MQTT broker integration for instant alert broadcast (<50ms latency).",
      "Designed an interactive web-based monitoring console with live sensor graphs, audio alarms, and incident logging.",
      "Co-authored research paper on multi-domain sensor fusion architecture submitted for IEEE conference publication.",
    ],
    href: "https://sentinel-one.vercel.app",
    github: "https://github.com/Ommpiri/Sentinel-One",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "ESP32 / C++", path: "/assets/logos/cplusplus.svg" },
      { id: 2, name: "WebSockets", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "MQTT", path: "/assets/logos/git.svg" },
      { id: 4, name: "React Dashboard", path: "/assets/logos/react.svg" },
    ],
  },
  {
    id: 4,
    title: "4XT Esports Management Platform",
    description:
      "Operational management and tournament strategy system for competitive BGMI team roster coordination and analytics.",
    subDescription: [
      "Led and managed 4XT competitive gaming organization across tournament execution and team coordination.",
      "Created structured scrim analytics tracking player performance, zone rotations, and kill/death metrics.",
      "Coordinated live tournament participation, strategic map positioning, and sponsor deliverables.",
    ],
    href: "https://4xt-esports.vercel.app",
    github: "https://github.com/Ommpiri/4XT-Esports",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      { id: 1, name: "Analytics", path: "/assets/logos/vitejs.svg" },
      { id: 2, name: "Team Strategy", path: "/assets/logos/microsoft.svg" },
      { id: 3, name: "Operations", path: "/assets/logos/git.svg" },
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
    href: "https://www.linkedin.com/in/ommpiri",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Email",
    href: "mailto:ommpiri@gmail.com",
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
    date: "2024",
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
    title: "Generative AI & Agentic Systems Specialization",
    issuer: "Google Cloud & DeepLearning.AI",
    date: "2025",
    credentialId: "GC-GENAI-8921X",
    category: "AI & ML",
    iconType: "ai",
    description:
      "Mastery in autonomous agent design, Gemini 1.5/2.0 function calling, structured schema outputs, multi-agent orchestration, and prompt caching.",
    skills: ["Gemini AI API", "Function Calling", "Multi-Agent AI", "LangChain"],
    href: "https://www.cloudskillsboost.google/",
  },
  {
    id: 2,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    date: "2024",
    credentialId: "META-FED-44109B",
    category: "Full-Stack",
    iconType: "react",
    description:
      "Advanced single-page application development, React component architecture, state management with hooks/context, and performance optimization.",
    skills: ["React.js", "JavaScript ES6+", "TailwindCSS", "Web Performance"],
    href: "https://coursera.org/verify/meta",
  },
  {
    id: 3,
    title: "Embedded Systems & IoT Hardware Architecture",
    issuer: "IEEE Computer Society & LPU",
    date: "2024",
    credentialId: "IEEE-IOT-77301M",
    category: "IoT & Systems",
    iconType: "iot",
    description:
      "Real-time sensor arrays, ESP32 dual-core microcontroller firmware, low-latency WebSocket / MQTT telemetry pipelines, and hardware debugging.",
    skills: ["ESP32 / C++", "MQTT", "WebSockets", "Sensor Fusion"],
    href: "https://www.ieee.org/",
  },
  {
    id: 4,
    title: "Python (Advanced) & Algorithms Certification",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-PY-ADV-90218",
    category: "Core Eng",
    iconType: "python",
    description:
      "Complex algorithm optimization, object-oriented design patterns, memory profiling, asynchronous I/O concurrency, and Pyodide WebAssembly runtime.",
    skills: ["Python", "Algorithms", "Data Structures", "WASM"],
    href: "https://www.hackerrank.com/certificates",
  },
  {
    id: 5,
    title: "Relational Database Design & PostgreSQL Mastery",
    issuer: "Stanford Online / OpenEdu",
    date: "2024",
    credentialId: "PSQL-DB-55102D",
    category: "Full-Stack",
    iconType: "database",
    description:
      "Relational schema normalization, indexing strategies, ACID transaction consistency, query execution plan analysis, and database security.",
    skills: ["PostgreSQL", "SQL Optimization", "Data Modeling", "Authentication"],
    href: "https://www.postgresql.org/",
  },
  {
    id: 6,
    title: "Network Telemetry & Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "2023",
    credentialId: "CSCO-NET-23910A",
    category: "IoT & Systems",
    iconType: "security",
    description:
      "Socket communications, TCP/IP transport layers, packet analysis, cryptographic encryption protocols, and telemetry stream protection.",
    skills: ["Network Security", "TCP/IP", "Telemetry", "Protocol Security"],
    href: "https://www.netacad.com/",
  },
];

export const reviews = [
  {
    name: "Dr. A. Sharma",
    username: "@lpu_faculty",
    body: "Omm demonstrates exceptional depth across both embedded IoT systems and modern AI architectures. A stellar engineer.",
    img: "https://robohash.org/omm1",
  },
  {
    name: "Sentinel-One Reviewer",
    username: "@ieee_peer",
    body: "The WebSocket & ESP32 sensor fusion architecture achieved remarkable response times under 50ms during live physical testing.",
    img: "https://robohash.org/omm2",
  },
  {
    name: "Ambika Agency",
    username: "@ambika_director",
    body: "The terracotta-themed digital platform delivered beyond our expectations. Fast, beautiful, and highly intuitive.",
    img: "https://robohash.org/omm3",
  },
  {
    name: "4XT Teammate",
    username: "@4xt_roster",
    body: "Incredible leadership and tactical execution. Led the team with clarity and discipline in high-pressure tournaments.",
    img: "https://robohash.org/omm4",
  },
];
