/* ================================================================
   OMM_OS — PERSONAL OPERATING SYSTEM & PORTFOLIO
   Configured for Omm Atrayu Piri
   ================================================================ */
const CONFIG = {
  name: "Omm Atrayu Piri",
  initials: "OP",
  avatarImg: "profile.jpeg",
  handle: "@ommpiri",
  tagline: "Born 2006. Still figuring out how fingers work, let alone computers — but give me a few years.",
  location: "Punjab / Odisha, India (Lovely Professional University)",
  bio: [
    "Hi. I'm new here.",
    "Born 2006. Still figuring out how fingers work, let alone computers — but give me a few years.",
    "I don't know what Wi-Fi is yet. I don't know what I'll build, break, or become. All I've got right now is a heartbeat, a name, and apparently... a website already running.",
    "Ask me again in twenty years."
  ],
  skills: [
    "Python", "C", "C++", "Next.js", "React", "Node.js", "Tailwind CSS",
    "Pyodide", "Auth.js", "PostgreSQL", "Gemini API", "ESP32",
    "MQTT (HiveMQ)", "WebSockets", "Judge0 API", "Git & GitHub", "Vercel"
  ],
  funFacts: [
    "Led & managed 4XT — a competitive BGMI esports organization overseeing roster strategy, team coordination & tournament participation.",
    "Certified Oracle Agentic AI Foundations Associate (2026) & Infosys Python Graduate.",
    "Co-authored an IEEE research paper on Multi-Domain Intrusion Detection using ESP32 sensor fusion & WebSockets.",
    "Engineered PyDude — an AI programming tutor built on Gemini function-calling with an Auto-Debug Agent mode.",
    "Designed full brand identity & digital strategy for Ambika Agency with custom terracotta ripple branding."
  ],
  resumeUrl: "https://github.com/Ommpiri",
  projects: [
    {
      title: "Okpythion",
      tag: "Full-Stack AI",
      year: "2026",
      desc: "Architected a full-stack Python learning platform using Next.js, PostgreSQL, and Auth.js, integrating Pyodide for in-browser execution. Engineered PyDude, an AI tutor built on Gemini function-calling with Auto-Debug Agent mode for real-time error diagnosis. 15-module curriculum with server-side content gating.",
      stack: ["Next.js", "PostgreSQL", "Auth.js", "Pyodide", "Judge0", "Gemini API", "Tailwind CSS"],
      link: "https://okpython.vercel.app",
      github: "https://github.com/Ommpiri/okpythion"
    },
    {
      title: "Ambika Agency — Business & Digital Presence",
      tag: "Web & Branding",
      year: "2025",
      desc: "Developed a mobile-first business website (ambikaagency.co.in) with optimized meta/OG tags and hardened security. Led end-to-end digital strategy, Google Business Profile optimization, and designed water-ripple monogram branding in copper/terracotta palette.",
      stack: ["Next.js", "React", "Tailwind CSS", "SEO / OG Tags", "Brand Identity"],
      link: "https://ambikaagency.co.in",
      github: "https://github.com/Ommpiri/ambika-agency"
    },
    {
      title: "Multi-Domain Intrusion Detection System (Sentinel-One)",
      tag: "IoT & Security",
      year: "2025",
      desc: "Engineered an ESP32-based intrusion detection system covering 3 security domains using servo-sweep scanning and real-time sensor fusion. Developed a live WebSocket dashboard and integrated MQTT messaging via HiveMQ. Co-authored an IEEE paper on the approach.",
      stack: ["ESP32", "C++", "WebSocket", "MQTT (HiveMQ)", "Next.js", "Vercel"],
      link: "",
      github: ""
    },
    {
      title: "4XT Esports Organization Platform",
      tag: "Leadership",
      year: "2024",
      desc: "Led and managed a competitive BGMI esports organization, overseeing roster strategy, team performance analytics, and tournament operations.",
      stack: ["Team Coordination", "Esports Analytics", "Strategic Operations"],
      link: "",
      github: ""
    },
    {
      title: "OMM_OS Personal Operating System",
      tag: "Interactive Web",
      year: "2026",
      desc: "Interactive browser-based desktop operating system portfolio with window management, terminal shell, Open-Meteo weather, Leaflet life map, synth player, and integrated Spotify Web Player.",
      stack: ["HTML5", "CSS3", "JavaScript", "Leaflet", "Web Audio API", "Spotify Embed"],
      link: "https://ommpiri.github.io/personal-os",
      github: "https://github.com/Ommpiri/personal-os"
    }
  ],
  links: [
    { label: "Email", sub: "ommpiri21@gmail.com", icon: "✉️", href: "mailto:ommpiri21@gmail.com" },
    { label: "GitHub", sub: "github.com/Ommpiri", icon: "🐙", href: "https://github.com/Ommpiri" },
    { label: "LinkedIn", sub: "linkedin.com/in/aomm", icon: "💼", href: "https://www.linkedin.com/in/aomm" },
    { label: "Mobile", sub: "+91-8249587790", icon: "📱", href: "tel:+918249587790" }
  ],
  weather: { city: "Phagwara, Punjab (LPU)", lat: 31.2530, lon: 75.7037 },
  lifeMap: [
    { year: "2022", label: "Secondary Education (90.2%)", city: "Modern Public School", lat: 20.2961, lon: 85.8245, emoji: "🏫", desc: "Graduated secondary school with 90.2% distinction." },
    { year: "2024", label: "4XT BGMI Esports Org", city: "Esports Arena", lat: 28.6139, lon: 77.2090, emoji: "🎮", desc: "Led competitive BGMI esports team strategy & operations." },
    { year: "2024", label: "Ambika Agency Launched", city: "Digital Presence", lat: 20.9517, lon: 85.0985, emoji: "🚀", desc: "Designed brand identity, digital strategy & live business site (ambikaagency.co.in)." },
    { year: "2025", label: "Higher Secondary Completion", city: "Modern Public School", lat: 20.2961, lon: 85.8245, emoji: "🎓", desc: "Completed senior secondary education focusing on Sciences & Computer Science." },
    { year: "2025", label: "Sentinel-One & IEEE Paper", city: "IoT & Security Lab", lat: 31.2554, lon: 75.7050, emoji: "🛡️", desc: "Engineered ESP32 intrusion detection system and co-authored IEEE research paper." },
    { year: "2026", label: "B.Tech CSE @ LPU & Okpythion", city: "Lovely Professional University", lat: 31.2530, lon: 75.7037, emoji: "📍", desc: "Studying B.Tech CSE, building PyDude AI agent and full-stack software systems." }
  ],
  education: [
    {
      id: "btech",
      category: "undergrad",
      level: "Undergraduate Degree",
      degree: "Bachelor of Technology — Computer Science & Engineering",
      institution: "Lovely Professional University",
      shortInst: "LPU Punjab",
      location: "Phagwara / Jalandhar, Punjab, India",
      period: "Aug 2026 – Present",
      status: "Active / In Progress",
      statusType: "active",
      score: "Undergraduate Scholar",
      summary: "Pursuing B.Tech in Computer Science and Engineering, focusing on building practical software systems across full-stack development, AI-powered applications, and IoT.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (PostgreSQL)",
        "Operating Systems & Architecture",
        "Computer Networks",
        "Microcontroller Programming (ESP32)",
        "Full-Stack Web Engineering"
      ],
      highlights: [
        "Maintaining high academic and practical engineering performance across software architecture, data structures, and distributed systems.",
        "Engineered okpython (PyDude AI Tutor) — incorporating autonomous Gemini API debug agent mode and Pyodide WASM in-browser execution.",
        "Developed Sentinel-One IoT perimeter intrusion surveillance system with ESP32 microcontrollers, WebSockets, and HiveMQ MQTT broker.",
        "Co-authored research paper on multi-domain sensor fusion architecture submitted for IEEE conference publication.",
        "Cultivated production-grade skills across Next.js, React, Node.js, PostgreSQL, C++, and cloud deployment pipelines."
      ],
      projects: [
        { name: "okpython (PyDude AI Tutor)", desc: "Interactive Python platform with in-browser WASM runtime & Gemini AI debug agent." },
        { name: "Sentinel-One IoT System", desc: "Multi-domain physical perimeter intrusion detection with live WebSockets (<50ms)." },
        { name: "Ambika Agency Web & Brand", desc: "High-performance business web app with 98+ Lighthouse score." }
      ],
      skills: ["Python", "C++", "Next.js", "React", "Node.js", "PostgreSQL", "Pyodide WASM", "ESP32", "MQTT (HiveMQ)", "WebSockets", "Gemini API", "Tailwind CSS"]
    },
    {
      id: "senior_secondary",
      category: "senior_sec",
      level: "Senior Secondary (Class XII)",
      degree: "Higher Secondary Education — Science & Computer Science",
      institution: "Modern Public School",
      shortInst: "MPS Odisha",
      location: "Odisha, India",
      period: "May 2024 – Mar 2025",
      status: "Completed",
      statusType: "completed",
      score: "Science & CS Stream",
      summary: "Completed Senior Secondary Education focusing on Sciences (Physics, Chemistry, Mathematics) and Computer Science, establishing strong algorithmic and STEM foundations.",
      coursework: [
        "Advanced Calculus & Algebra",
        "Mechanics & Electromagnetism",
        "Physical & Organic Chemistry",
        "Python Programming Fundamentals",
        "Data Representation & Logic Design"
      ],
      highlights: [
        "Built a solid foundation in computational thinking, programming fundamentals in Python and C++, and analytical problem solving.",
        "Mastered advanced mathematics and physics principles applied to computational simulation and software logic.",
        "Led and managed 4XT competitive BGMI esports organization, coordinating roster strategies, zone rotation analytics, and tournament operations.",
        "Participated actively in computing clubs and science showcases."
      ],
      projects: [
        { name: "4XT Esports Organization Platform", desc: "Tournament coordination, roster metrics, and tactical scrim analytics." },
        { name: "Algorithmic Computing Models", desc: "Python-based mathematical problem solvers and logic applications." }
      ],
      skills: ["Python", "C++", "Mathematical Modeling", "Problem Solving", "Team Leadership", "Analytics"]
    },
    {
      id: "secondary",
      category: "highschool",
      level: "Secondary School (Class X)",
      degree: "Secondary School Examination — High School Distinction",
      institution: "Modern Public School",
      shortInst: "MPS Odisha",
      location: "Odisha, India",
      period: "May 2022 – Mar 2023",
      status: "Distinction — 90.2%",
      statusType: "distinction",
      score: "90.2% Aggregate Distinction",
      summary: "Graduated secondary school examination with academic distinction, achieving 90.2% aggregate across all core STEM and academic disciplines.",
      coursework: [
        "Mathematics & Geometry",
        "Physics, Chemistry & Biology",
        "Computer Applications & Logic",
        "English Language & Literature",
        "Social Sciences"
      ],
      highlights: [
        "Graduated secondary school examination with academic distinction, achieving a stellar 90.2% aggregate score.",
        "Demonstrated academic excellence across core STEM subjects and computational logic.",
        "Actively participated in science exhibitions, mathematics Olympiads, and computing quizzes.",
        "Initiated self-directed learning into programming logic, web markup, and computer hardware."
      ],
      projects: [
        { name: "STEM Exhibition Exhibits", desc: "Science models and algorithmic computing demonstrations." },
        { name: "Academic Merit Honor Roll", desc: "Distinction ranking across high school examinations." }
      ],
      skills: ["Mathematics", "STEM Fundamentals", "Computer Fundamentals", "Logic Design", "Scientific Problem Solving"]
    }
  ],
  certificates: [
    {
      id: 1,
      title: "Oracle Certified Foundations Associate — Agentic AI",
      issuer: "Oracle University",
      date: "2026",
      credentialId: "ORCL-AGENTIC-AI-2026",
      category: "AI & ML",
      icon: "🤖",
      description: "Autonomous agent architectures, LLM reasoning patterns, tool calling, schema generation, prompt caching, and enterprise multi-agent workflows.",
      skills: ["Agentic AI", "Oracle Cloud", "LLM Reasoning", "Prompt Engineering"],
      href: "https://education.oracle.com/"
    },
    {
      id: 2,
      title: "Infosys Springboard — Python Graduate",
      issuer: "Infosys Springboard",
      date: "2024",
      credentialId: "INFY-PY-2024-GRAD",
      category: "Core Eng",
      icon: "🐍",
      description: "Advanced Python programming, data structures, algorithm optimization, object-oriented software design, and memory efficiency.",
      skills: ["Python", "Algorithms", "Data Structures", "OOP"],
      href: "https://infyspringboard.onwingspan.com/"
    },
    {
      id: 3,
      title: "Multi-Domain IoT & Sensor Fusion Research",
      issuer: "IEEE Computer Society & LPU",
      date: "2025",
      credentialId: "IEEE-IOT-2025-PIRI",
      category: "IoT & Systems",
      icon: "🛡️",
      description: "Real-time sensor arrays, ESP32 dual-core microcontroller firmware, low-latency WebSocket / MQTT telemetry pipelines, and hardware debugging.",
      skills: ["ESP32 / C++", "MQTT (HiveMQ)", "WebSockets", "Sensor Fusion"],
      href: "https://www.ieee.org/"
    },
    {
      id: 4,
      title: "Full-Stack Web Development & Modern React",
      issuer: "Lovely Professional University",
      date: "2025",
      credentialId: "LPU-CSE-FSWD-2025",
      category: "Full-Stack",
      icon: "⚛️",
      description: "Modern SPA engineering, React 19 component architecture, state management, REST & WebSocket integration, and Tailwind CSS design systems.",
      skills: ["React.js", "Next.js", "JavaScript ES6+", "TailwindCSS"],
      href: "https://www.lpu.in/"
    }
  ]
};

/* ================================================================
   RETRO MUSIC DATA & CONFIGURATION
   ================================================================ */
const SPOTIFY_PLAYLISTS = [
  {
    id: "37i9dQZF1DX5Ejj0EkURtP",
    title: "All Out 2010s — Global Mega Hits",
    subtitle: "Avicii, Calvin Harris, Rihanna, Bruno Mars, Drake, The Weeknd",
    genre: "2010s Hits",
    icon: "🔥",
    bg: "linear-gradient(135deg, #0284c7, #082f49)",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX5Ejj0EkURtP?utm_source=generator&theme=0"
  },
  {
    id: "37i9dQZF1DX0XUfTFmZeZw",
    title: "2010s Bollywood Chartbusters",
    subtitle: "Arijit Singh, Mohit Chauhan, Pritam, Shreya Ghoshal, Atif Aslam",
    genre: "2010s Bollywood",
    icon: "✨",
    bg: "linear-gradient(135deg, #e11d48, #4c0519)",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmZeZw?utm_source=generator&theme=0"
  },
  {
    id: "37i9dQZF1DX4dyzvuaRJ0n",
    title: "2010s EDM & Dance Festival Anthems",
    subtitle: "Swedish House Mafia, David Guetta, Martin Garrix, Tiësto, Skrillex",
    genre: "2010s EDM",
    icon: "⚡",
    bg: "linear-gradient(135deg, #7c3aed, #2e1065)",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4dyzvuaRJ0n?utm_source=generator&theme=0"
  },
  {
    id: "37i9dQZF1DXb57FjYWz00c",
    title: "All Out 80s — Pop & Rock Hits",
    subtitle: "Michael Jackson, Queen, Madonna, Wham!, Cyndi Lauper",
    genre: "80s Hits",
    icon: "📼",
    bg: "linear-gradient(135deg, #b91c1c, #450a0a)",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXb57FjYWz00c?utm_source=generator&theme=0"
  },
  {
    id: "37i9dQZF1DWTJ7xPn4vNaz",
    title: "All Out 70s — Disco & Rock Legends",
    subtitle: "ABBA, Bee Gees, Fleetwood Mac, Pink Floyd, Queen",
    genre: "70s Classics",
    icon: "🪩",
    bg: "linear-gradient(135deg, #d97706, #451a03)",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWTJ7xPn4vNaz?utm_source=generator&theme=0"
  },
  {
    id: "37i9dQZF1DXbTxeAdrVG2l",
    title: "All Out 90s — Grunge & Pop Nostalgia",
    subtitle: "Nirvana, Backstreet Boys, Oasis, Britney Spears, TLC",
    genre: "90s Nostalgia",
    icon: "📻",
    bg: "linear-gradient(135deg, #059669, #064e3b)",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXbTxeAdrVG2l?utm_source=generator&theme=0"
  },
  {
    id: "37i9dQZF1DX4o1oenSJRJd",
    title: "All Out 2000s — Millennial Anthems",
    subtitle: "Linkin Park, Eminem, Coldplay, Green Day, Avril Lavigne",
    genre: "2000s Y2K",
    icon: "💿",
    bg: "linear-gradient(135deg, #2563eb, #1e3a8a)",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4o1oenSJRJd?utm_source=generator&theme=0"
  },
  {
    id: "37i9dQZF1DXa2huw76qM20",
    title: "90s Bollywood Evergreen Hits",
    subtitle: "Udit Narayan, Alka Yagnik, Kumar Sanu, Sonu Nigam, AR Rahman",
    genre: "Retro Bollywood",
    icon: "🪕",
    bg: "linear-gradient(135deg, #c026d3, #581c87)",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXa2huw76qM20?utm_source=generator&theme=0"
  },
  {
    id: "37i9dQZF1DXd9rSD9QytIk",
    title: "Synthwave / 80s Retrowave",
    subtitle: "Neon cruising, analog arpeggios, nostalgic synth",
    genre: "Synthwave",
    icon: "⚡",
    bg: "linear-gradient(135deg, #db2777, #4a044e)",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXd9rSD9QytIk?utm_source=generator&theme=0"
  },
  {
    id: "37i9dQZF1DX1rVvRgjX59F",
    title: "80s Rock Anthems — Hard & Heavy",
    subtitle: "AC/DC, Guns N' Roses, Bon Jovi, Aerosmith, Def Leppard",
    genre: "Classic Rock",
    icon: "🎸",
    bg: "linear-gradient(135deg, #475569, #0f172a)",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1rVvRgjX59F?utm_source=generator&theme=0"
  },
  {
    id: "37i9dQZF1DWTx0xog3ug9A",
    title: "Vintage Soul & 60s/70s Groove",
    subtitle: "Aretha Franklin, Stevie Wonder, Marvin Gaye, Otis Redding",
    genre: "Vintage Soul",
    icon: "🎷",
    bg: "linear-gradient(135deg, #78350f, #291102)",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWTx0xog3ug9A?utm_source=generator&theme=0"
  }
];

let activeSpotifyPlaylistId = SPOTIFY_PLAYLISTS[0].id;

function parseSpotifyUrl(input){
  if(!input) return null;
  const str = input.trim();
  if(str.includes('open.spotify.com/embed/')){
    return str;
  }
  // Standard Spotify URL: https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M
  const urlMatch = str.match(/open\.spotify\.com\/(track|playlist|album|artist|episode|show)\/([a-zA-Z0-9]+)/i);
  if(urlMatch){
    const type = urlMatch[1];
    const id = urlMatch[2];
    return `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`;
  }
  // Spotify URI: spotify:playlist:37i9dQZF1DXcBWIGoYBM5M
  const uriMatch = str.match(/spotify:(track|playlist|album|artist|episode|show):([a-zA-Z0-9]+)/i);
  if(uriMatch){
    const type = uriMatch[1];
    const id = uriMatch[2];
    return `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`;
  }
  return null;
}

function loadSpotifyEmbed(url, title = "Retro Track"){
  const iframe = document.getElementById('spotify-iframe');
  if(!iframe) return;
  iframe.src = url;
  const badge = document.getElementById('spotify-status-badge');
  if(badge) badge.innerHTML = `<span class="spotify-pulse-dot" style="background:#ff9f43; box-shadow:0 0 8px #ff9f43;"></span> Playing: ${title}`;
  showToast(`Loaded "${title}" in Retro Music`);
  beep(600, 0.05, 'triangle', 0.03);
}

function initSpotifyApp(){
  const tagsContainer = document.getElementById('spotify-quick-tags');
  const playlistContainer = document.getElementById('spotify-playlist-list');
  const customUrlInput = document.getElementById('spotify-custom-url');
  const loadBtn = document.getElementById('spotify-load-btn');
  const openSpotifyBtn = document.getElementById('open-spotify-btn');

  if(openSpotifyBtn){
    openSpotifyBtn.addEventListener('click', ()=>{
      openApp('spotify');
    });
  }

  if(tagsContainer){
    const genres = ["All", ...new Set(SPOTIFY_PLAYLISTS.map(p=>p.genre))];
    tagsContainer.innerHTML = genres.map((g,i)=>`
      <button class="spotify-tag-btn${i===0?' active':''}" data-genre="${g}">${g}</button>
    `).join('');

    tagsContainer.querySelectorAll('.spotify-tag-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        tagsContainer.querySelectorAll('.spotify-tag-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const genre = btn.dataset.genre;
        renderSpotifyPlaylists(genre);
        beep(520, 0.03, 'square', 0.02);
      });
    });
  }

  function renderSpotifyPlaylists(filterGenre = 'All'){
    if(!playlistContainer) return;
    const filtered = filterGenre === 'All' 
      ? SPOTIFY_PLAYLISTS 
      : SPOTIFY_PLAYLISTS.filter(p=>p.genre === filterGenre);

    playlistContainer.innerHTML = filtered.map(p=>`
      <div class="spotify-playlist-card${p.id === activeSpotifyPlaylistId ? ' active' : ''}" data-id="${p.id}" data-url="${p.embedUrl}">
        <div class="spotify-card-cover" style="background:${p.bg}">${p.icon}</div>
        <div class="spotify-card-info">
          <div class="spotify-card-title">${p.title}</div>
          <div class="spotify-card-desc">${p.subtitle} · ${p.genre}</div>
        </div>
        <button class="spotify-card-play-btn" title="Play ${p.title}">▶</button>
      </div>
    `).join('');

    playlistContainer.querySelectorAll('.spotify-playlist-card').forEach(card=>{
      card.addEventListener('click', ()=>{
        playlistContainer.querySelectorAll('.spotify-playlist-card').forEach(c=>c.classList.remove('active'));
        card.classList.add('active');
        activeSpotifyPlaylistId = card.dataset.id;
        const pl = SPOTIFY_PLAYLISTS.find(p=>p.id === activeSpotifyPlaylistId);
        loadSpotifyEmbed(card.dataset.url, pl ? pl.title : 'Selected Station');
      });
    });
  }

  renderSpotifyPlaylists();

  if(loadBtn && customUrlInput){
    const handleLoad = ()=>{
      const val = customUrlInput.value.trim();
      if(!val) return;
      const parsed = parseSpotifyUrl(val);
      if(parsed){
        loadSpotifyEmbed(parsed, "Custom Link");
        customUrlInput.value = '';
      } else {
        showToast("Invalid Spotify link. Paste a track/album/playlist URL");
        beep(220, 0.1, 'sawtooth', 0.04);
      }
    };
    loadBtn.addEventListener('click', handleLoad);
    customUrlInput.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter') handleLoad();
    });
  }
}

/* ================================================================
   RENDER CONTENT FROM CONFIG
   ================================================================ */
function renderAbout(){
  const el = document.getElementById('about-body');
  if(!el) return;
  const avatarHtml = CONFIG.avatarImg
    ? `<div class="avatar avatar-has-img"><img src="${CONFIG.avatarImg}" alt="${CONFIG.name}" class="avatar-img" /></div>`
    : `<div class="avatar">${CONFIG.initials}</div>`;
  el.innerHTML = `
    <div class="about-grid">
      ${avatarHtml}
      <div class="about-bio">
        <div class="h-eyebrow">// whoami &amp; profile (2006 vintage)</div>
        <div class="h-title" style="margin-bottom:2px;">${CONFIG.name}</div>
        <div class="pill" style="margin-bottom:14px;">${CONFIG.location}</div>
        <div class="retro-bio-text" style="display:flex; flex-direction:column; gap:10px;">
          ${CONFIG.bio.map(p=>`<p style="line-height:1.65; color:var(--ink-soft);">${p}</p>`).join('')}
        </div>
        
        <div class="future-log-box" style="margin-top:20px; padding:12px 14px; background:rgba(157,66,52,0.07); border:1.5px dashed #aa4535; border-radius:3px;">
          <div style="font-family:var(--font-mono); font-size:11.5px; font-weight:700; color:#aa4535; letter-spacing:0.8px; margin-bottom:4px;">
            🔒 [FUTURE LOG — LOCKED]
          </div>
          <div style="font-family:var(--font-mono); font-size:11px; color:var(--ink-soft); line-height:1.4;">
            // available after OS update
          </div>
          <button id="about-unlock-btn" style="margin-top:10px; padding:5px 12px; font-family:var(--font-mono); font-size:10.5px; font-weight:bold; background:#9d4234; color:#fff; border:1px solid #633127; border-radius:2px; cursor:pointer; box-shadow:2px 2px 0 #633127;">
            ⚡ Update to 2026 Edition ↗
          </button>
        </div>

        <div style="margin-top:20px;">
          <a href="${CONFIG.resumeUrl}" target="_blank"><button class="resume-btn">📄 GitHub &amp; Archive ↗</button></a>
        </div>
      </div>
    </div>`;

  const unlockBtn = el.querySelector('#about-unlock-btn');
  if(unlockBtn){
    unlockBtn.addEventListener('click', shiftTo2026);
  }
}

function renderProjects(){
  const el = document.getElementById('proj-grid');
  if(!el) return;
  el.innerHTML = CONFIG.projects.map(p=>`
    <div class="proj-card" data-tag="${p.tag}">
      <div class="proj-top"><h3>${p.title}</h3><span class="year-tag">${p.year}</span></div>
      <span class="pill">${p.tag}</span>
      <p>${p.desc}</p>
      <div class="proj-stack">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div>
      <div class="proj-footer">
        ${p.link ? `<a class="proj-link" href="${p.link}" target="_blank" rel="noopener noreferrer">View project →</a>` : `<span class="proj-link" style="opacity:0.55; cursor:default;">Hardware / System</span>`}
        ${p.github ? `
        <a class="proj-gh-link" href="${p.github}" target="_blank" rel="noopener noreferrer" title="View repository on GitHub (${p.title})" aria-label="View repository on GitHub">
          <svg class="proj-gh-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>` : ''}
      </div>
    </div>`).join('');

  const tags = ["All", ...new Set(CONFIG.projects.map(p=>p.tag))];
  const tabsEl = document.getElementById('proj-tabs');
  if(!tabsEl) return;
  tabsEl.innerHTML = tags.map((t,i)=>`<button class="proj-tab${i===0?' active':''}" data-tag="${t}">${t}</button>`).join('');
  tabsEl.querySelectorAll('.proj-tab').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      tabsEl.querySelectorAll('.proj-tab').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const tag = btn.dataset.tag;
      document.querySelectorAll('.proj-card').forEach(card=>{
        card.classList.toggle('hide', tag !== 'All' && card.dataset.tag !== tag);
      });
      beep(500,0.03,'square',0.02);
    });
  });
}

function renderLinks(){
  const el = document.getElementById('link-grid');
  if(!el) return;
  el.innerHTML = CONFIG.links.map(l=>`
    <a class="link-card" href="${l.href}" target="_blank">
      <div class="lg">${l.icon}</div>
      <div><div class="lt">${l.label}</div><div class="ls">${l.sub}</div></div>
    </a>`).join('');
}

const copyEmailBtn = document.getElementById('copy-email-btn');
if(copyEmailBtn){
  copyEmailBtn.addEventListener('click', async (e)=>{
    const mailLink = CONFIG.links.find(l=>l.label==='Email');
    const email = mailLink ? mailLink.href.replace('mailto:','') : 'ommpiri21@gmail.com';
    try{
      await navigator.clipboard.writeText(email);
      e.target.textContent = '✓ copied';
      showToast(`Copied ${email} to clipboard`);
    }catch(err){
      e.target.textContent = email;
    }
    setTimeout(()=> e.target.textContent = '⧉ copy email', 1800);
  });
}

function renderEducation(){
  const el = document.getElementById('education-body');
  if(!el) return;

  const eduData = CONFIG.education || [];
  const certData = CONFIG.certificates || [];

  let activeFilter = 'all';

  function buildHtml(){
    const filteredEdu = activeFilter === 'all' 
      ? eduData 
      : (activeFilter === 'certs' ? [] : eduData.filter(e => e.category === activeFilter || e.id === activeFilter));

    const showCerts = activeFilter === 'all' || activeFilter === 'certs';

    return `
      <!-- Breadcrumb & Header -->
      <div class="edu-folder-nav">
        <div class="edu-breadcrumb">
          <span>📁 Root</span>
          <span class="slash">/</span>
          <span>CV_Records</span>
          <span class="slash">/</span>
          <b>Education_Folder</b>
        </div>
        <div style="font-family:var(--font-mono); font-size:9.5px; color:#aa4535;">
          ● 3 Verified Records · 4 Credentials
        </div>
      </div>

      <!-- Quick Stats Ribbon -->
      <div class="edu-stats-banner">
        <div class="edu-stat-box">
          <div class="edu-stat-lbl">Current Standing</div>
          <div class="edu-stat-val" style="font-size:14px;">B.Tech CSE</div>
          <div class="edu-stat-sub">Lovely Professional Univ.</div>
        </div>
        <div class="edu-stat-box">
          <div class="edu-stat-lbl">Secondary Exam</div>
          <div class="edu-stat-val">90.2%</div>
          <div class="edu-stat-sub">Academic Distinction</div>
        </div>
        <div class="edu-stat-box">
          <div class="edu-stat-lbl">Primary Disciplines</div>
          <div class="edu-stat-val" style="font-size:13px;">AI, Full-Stack &amp; IoT</div>
          <div class="edu-stat-sub">Applied Systems &amp; WASM</div>
        </div>
        <div class="edu-stat-box">
          <div class="edu-stat-lbl">Scholastic Output</div>
          <div class="edu-stat-val" style="font-size:14px;">IEEE Paper + AI Tutor</div>
          <div class="edu-stat-sub">okpython &amp; Sentinel-One</div>
        </div>
      </div>

      <!-- Interactive Filter Tabs -->
      <div class="edu-filter-tabs">
        <button class="edu-tab-btn${activeFilter==='all'?' active':''}" data-filter="all">📂 All Academic Records</button>
        <button class="edu-tab-btn${activeFilter==='undergrad'?' active':''}" data-filter="undergrad">🎓 B.Tech CSE (LPU)</button>
        <button class="edu-tab-btn${activeFilter==='senior_sec'?' active':''}" data-filter="senior_sec">🏛️ Class XII (PCM + CS)</button>
        <button class="edu-tab-btn${activeFilter==='highschool'?' active':''}" data-filter="highschool">🏫 Class X (90.2% Distinction)</button>
        <button class="edu-tab-btn${activeFilter==='certs'?' active':''}" data-filter="certs">📜 Verified Certifications (${certData.length})</button>
      </div>

      <!-- Education Cards List -->
      <div class="edu-cards-list">
        ${filteredEdu.map(e => `
          <div class="edu-card" data-category="${e.category}">
            <div class="edu-card-top">
              <div class="edu-card-title-group">
                <div class="edu-card-inst">
                  <span>🏛️</span> ${e.institution} · <span style="color:var(--ink-dim);">${e.level}</span>
                </div>
                <div class="edu-card-degree">${e.degree}</div>
              </div>
              <div class="edu-card-badge-group">
                <span class="edu-date-badge">${e.period}</span>
                <span class="edu-status-pill ${e.statusType === 'distinction' ? 'distinction' : ''}">
                  ${e.statusType === 'active' ? '● ' : '✓ '} ${e.status}
                </span>
              </div>
            </div>

            <div class="edu-card-loc">📍 ${e.location}</div>

            <div class="edu-card-details">
              <p>${e.summary}</p>
              
              <div style="font-family:var(--font-mono); font-size:9.5px; color:#aa4535; text-transform:uppercase; margin-top:8px; letter-spacing:0.8px;">
                // Key Coursework &amp; Subject Mastery:
              </div>
              <div class="edu-course-grid">
                ${e.coursework.map(c => `<span class="edu-course-tag">${c}</span>`).join('')}
              </div>

              <div style="font-family:var(--font-mono); font-size:9.5px; color:#aa4535; text-transform:uppercase; margin-top:12px; letter-spacing:0.8px;">
                // Academic Highlights &amp; Practical Systems:
              </div>
              <ul class="edu-bullet-list">
                ${e.highlights.map(h => `<li>${h}</li>`).join('')}
              </ul>

              ${e.projects && e.projects.length ? `
                <div class="edu-projects-box">
                  <div class="edu-proj-lbl">⚡ Applied Projects &amp; Research During Term:</div>
                  ${e.projects.map(p => `
                    <div class="edu-proj-item">
                      <b>• ${p.name}:</b> ${p.desc}
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>

            <div class="edu-card-footer">
              <span style="font-family:var(--font-mono); font-size:9px; color:var(--ink-dim);">Skills Cultivated:</span>
              <div class="edu-skills-tags">
                ${e.skills.map(s => `<span class="edu-skill-chip">${s}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}

        <!-- Certifications sub-view when relevant -->
        ${showCerts ? `
          <div style="margin-top:10px;">
            <div class="h-eyebrow">// verified academic credentials &amp; certifications</div>
            <div class="h-title" style="font-size:22px; margin-bottom:12px;">Certifications Ledger</div>
            <div class="certs-grid">
              ${certData.map(c => `
                <div class="cert-card">
                  <div>
                    <div class="cert-head">
                      <div class="cert-icon">${c.icon || '🎓'}</div>
                      <div class="cert-title-wrap">
                        <div class="cert-issuer">${c.issuer} · ${c.date}</div>
                        <div class="cert-title">${c.title}</div>
                      </div>
                    </div>
                    <div class="cert-desc">${c.description}</div>
                  </div>
                  <div>
                    <div class="edu-skills-tags" style="margin-bottom:10px;">
                      ${c.skills.map(s => `<span class="edu-skill-chip">${s}</span>`).join('')}
                    </div>
                    <div class="cert-footer">
                      <span class="cert-id-tag">${c.credentialId}</span>
                      <a href="${c.href}" target="_blank" rel="noopener noreferrer" style="color:#aa4535; font-weight:bold; text-decoration:none;">Verify ↗</a>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Action Footer -->
      <div class="edu-action-bar">
        <a href="${CONFIG.resumeUrl}" target="_blank" class="edu-action-btn">
          <span>📄</span> View Full CV / GitHub Profile ↗
        </a>
        <button class="edu-action-btn" id="edu-open-about" style="background:#f1dfb8; color:#60462f; border-color:#b99b68;">
          <span>🧑‍💻</span> Open About Me
        </button>
        <button class="edu-action-btn" id="edu-open-map" style="background:#f1dfb8; color:#60462f; border-color:#b99b68;">
          <span>🗺️</span> View Life Journey Map
        </button>
      </div>
    `;
  }

  function attachEvents(){
    el.querySelectorAll('.edu-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        render();
        beep(520, 0.03, 'square', 0.02);
      });
    });

    const openAboutBtn = el.querySelector('#edu-open-about');
    if(openAboutBtn){
      openAboutBtn.addEventListener('click', () => openApp('about'));
    }

    const openMapBtn = el.querySelector('#edu-open-map');
    if(openMapBtn){
      openMapBtn.addEventListener('click', () => openApp('map'));
    }
  }

  function render(){
    el.innerHTML = buildHtml();
    attachEvents();
  }

  render();
}

function renderCerts(){
  const el = document.getElementById('certs-body');
  if(!el) return;
  const certData = CONFIG.certificates || [];
  el.innerHTML = `
    <div class="h-eyebrow">// credentials &amp; achievements</div>
    <div class="h-title">Certificates</div>
    <p style="font-size:13px; color:var(--ink-soft); margin-bottom:16px;">
      Verified credentials and academic certifications earned by ${CONFIG.name}.
    </p>
    <div class="certs-grid">
      ${certData.map(c => `
        <div class="cert-card">
          <div>
            <div class="cert-head">
              <div class="cert-icon">${c.icon || '🎓'}</div>
              <div class="cert-title-wrap">
                <div class="cert-issuer">${c.issuer} · ${c.date}</div>
                <div class="cert-title">${c.title}</div>
              </div>
            </div>
            <div class="cert-desc">${c.description}</div>
          </div>
          <div>
            <div class="edu-skills-tags" style="margin-bottom:10px;">
              ${c.skills.map(s => `<span class="edu-skill-chip">${s}</span>`).join('')}
            </div>
            <div class="cert-footer">
              <span class="cert-id-tag">${c.credentialId}</span>
              <a href="${c.href}" target="_blank" rel="noopener noreferrer" style="color:#aa4535; font-weight:bold; text-decoration:none;">Verify ↗</a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="edu-action-bar" style="margin-top:16px;">
      <button class="edu-action-btn" id="certs-open-edu">
        <span>📁</span> Open Full Education Folder
      </button>
    </div>
  `;

  const openEduBtn = el.querySelector('#certs-open-edu');
  if(openEduBtn){
    openEduBtn.addEventListener('click', () => openApp('education'));
  }
}

renderAbout(); 
renderEducation();
renderProjects(); 
renderCerts();
renderLinks();
initSpotifyApp();

/* ================================================================
   SOUND (Web Audio synth beeps)
   ================================================================ */
let audioCtx = null;
let soundOn = false;
function beep(freq=440, dur=0.08, type='sine', vol=0.05){
  if(!soundOn) return;
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    const o = audioCtx.createOscillator(); const g = audioCtx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.value = vol;
    o.connect(g); g.connect(audioCtx.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
    o.stop(audioCtx.currentTime + dur);
  }catch(e){}
}
const soundToggle = document.getElementById('sound-toggle');
if(soundToggle){
  soundToggle.addEventListener('click', (e)=>{
    soundOn = !soundOn;
    e.currentTarget.textContent = soundOn ? '🔊 SOUND: ON' : '🔈 SOUND: OFF';
    if(soundOn) beep(660,0.09,'triangle',0.06);
  });
}

/* ================================================================
   BOOT SEQUENCE
   ================================================================ */
const bootLines = [
  "OMM_OS v2.0 initializing...",
  "Loading profile: Omm Atrayu Piri (@ommpiri) ... OK",
  "Mounting /okpythion (PyDude AI Agent) ...... OK",
  "Mounting /sentinel-one (ESP32 IoT HiveMQ) ... OK",
  "Starting Spotify Web Player Subsystem ..... OK",
  "Starting Window Manager & Desktop .......... OK",
  "Welcome to Omm's Personal OS."
];
const bootLog = document.getElementById('boot-log');
const bootBar = document.getElementById('boot-bar');
let bootLineIndex = 0;
function typeBootLine(){
  if(!bootLog || !bootBar) return;
  if(bootLineIndex >= bootLines.length){
    setTimeout(()=>{
      const bootEl = document.getElementById('boot');
      if(bootEl) bootEl.classList.add('hidden');
      beep(880,0.12,'sine',0.07);
      setTimeout(()=>beep(1174,0.14,'sine',0.06),110);
    }, 400);
    return;
  }
  const line = document.createElement('div');
  line.innerHTML = `<span class="dim">[${String(bootLineIndex+1).padStart(2,'0')}]</span> ${bootLines[bootLineIndex]}`;
  bootLog.appendChild(line);
  bootBar.style.width = Math.round(((bootLineIndex+1)/bootLines.length)*100) + '%';
  bootLineIndex++;
  setTimeout(typeBootLine, 240);
}
setTimeout(typeBootLine, 350);

/* ================================================================
   CLOCK
   ================================================================ */
function tickClock(){
  const clockEl = document.getElementById('clock');
  if(!clockEl) return;
  const d = new Date();
  clockEl.textContent = d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',second:'2-digit'});
}
tickClock(); setInterval(tickClock, 1000);

/* ================================================================
   WINDOW MANAGER
   ================================================================ */
let zTop = 10;
const windows = {};
document.querySelectorAll('.window').forEach(w=>{ windows[w.dataset.win] = w; });

function haptic(pattern=8){
  if(!('vibrate' in navigator) || !window.matchMedia('(pointer: coarse)').matches) return;
  try{ navigator.vibrate(pattern); }catch(e){}
}
function saveWindowBounds(win){
  if(win.dataset.windowMode) return;
  win.dataset.prevW=win.style.width; win.dataset.prevH=win.style.height; win.dataset.prevT=win.style.top; win.dataset.prevL=win.style.left;
}
function restoreWindow(win){
  if(!win.dataset.windowMode) return false;
  win.style.width=win.dataset.prevW||'620px'; win.style.height=win.dataset.prevH||'480px'; win.style.top=win.dataset.prevT||'60px'; win.style.left=win.dataset.prevL||'60px';
  win.dataset.windowMode=''; win.classList.remove('maximized','snapped'); return true;
}
function windowMaximize(win){
  saveWindowBounds(win); win.style.top='52px'; win.style.left='16px'; win.style.width='calc(100vw - 32px)'; win.style.height='calc(100vh - 142px)';
  win.dataset.windowMode='max'; win.classList.add('maximized'); win.classList.remove('snapped'); 
  if(win.dataset.win==='map') setTimeout(()=>lifeMapInstance&&lifeMapInstance.invalidateSize(),220);
}
function toggleMaximize(win){ if(!restoreWindow(win)) windowMaximize(win); haptic([8,20,8]); }
function snapWindow(win,side){
  saveWindowBounds(win); win.style.top='52px'; win.style.height='calc(100vh - 142px)'; win.style.width='calc(50vw - 24px)'; win.style.left=side==='left'?'16px':'calc(50vw + 8px)';
  win.dataset.windowMode=side; win.classList.add('snapped'); win.classList.remove('maximized'); 
  if(win.dataset.win==='map') setTimeout(()=>lifeMapInstance&&lifeMapInstance.invalidateSize(),220); 
  haptic([8,16,8]);
}
function setSnapGuide(mode=''){ document.body.classList.remove('snap-left','snap-right','snap-max'); if(mode) document.body.classList.add(`snap-${mode}`); }
function focusWindow(win){
  zTop++;
  win.style.zIndex = zTop;
  document.querySelectorAll('.window.focused').forEach(other=>other.classList.remove('focused'));
  win.classList.add('focused');
}
function openApp(name){
  const win = windows[name];
  if(!win) return;
  win.classList.remove('minimized');
  win.classList.add('open');
  focusWindow(win);
  updateDockState();
  beep(520,0.05,'square',0.03);
  haptic(8);
  if(name === 'map'){ setTimeout(initLifeMap, 60); }
  if(name === 'weather' && !weatherLoadedOnce){ weatherLoadedOnce = true; loadWeather(); }
  if(name === 'games'){ setTimeout(initGamesApp, 60); }
}
function closeApp(win){
  win.classList.remove('open');
  win.classList.remove('focused');
  if(win.dataset.win === 'games') stopCurrentGame();
  updateDockState();
  haptic(14);
}
function minApp(win){
  win.classList.add('minimized');
  win.classList.remove('focused');
  updateDockState();
  haptic(10);
}
function updateDockState(){
  document.querySelectorAll('.dock-btn').forEach(btn=>{
    const win = windows[btn.dataset.app];
    btn.classList.toggle('active', win && win.classList.contains('open') && !win.classList.contains('minimized'));
  });
}

document.querySelectorAll('[data-app]').forEach(el=>{
  el.addEventListener('click', ()=> openApp(el.dataset.app));
});

document.querySelectorAll('.window').forEach(win=>{
  const closeBtn = win.querySelector('[data-action="close"]');
  const minBtn = win.querySelector('[data-action="min"]');
  const maxBtn = win.querySelector('[data-action="max"]');

  if(closeBtn) closeBtn.addEventListener('click', ()=>{ beep(300,0.06,'sine',0.03); closeApp(win); });
  if(minBtn) minBtn.addEventListener('click', ()=>{ beep(380,0.05,'sine',0.03); minApp(win); });
  if(maxBtn) maxBtn.addEventListener('click', ()=>toggleMaximize(win));
  win.addEventListener('mousedown', ()=>focusWindow(win));

  // dragging
  const bar = win.querySelector('.win-titlebar');
  if(bar){
    let dragging=false, offX=0, offY=0;
    bar.addEventListener('mousedown', (e)=>{
      if(e.target.closest('.traffic') || e.target.closest('input') || e.target.closest('button')) return;
      restoreWindow(win);
      dragging = true; focusWindow(win);
      offX = e.clientX - win.offsetLeft; offY = e.clientY - win.offsetTop;
    });
    window.addEventListener('mousemove', (e)=>{
      if(!dragging) return;
      win.style.left = Math.max(0, e.clientX - offX) + 'px';
      win.style.top = Math.max(44, e.clientY - offY) + 'px';
      setSnapGuide(e.clientY<76?'max':(e.clientX<40?'left':(e.clientX>window.innerWidth-40?'right':'')));
    });
    window.addEventListener('mouseup', (e)=>{
      if(!dragging) return; 
      const mode=e.clientY<76?'max':(e.clientX<40?'left':(e.clientX>window.innerWidth-40?'right':'')); 
      dragging=false; 
      setSnapGuide(); 
      if(mode==='max') windowMaximize(win); 
      else if(mode) snapWindow(win,mode);
    });
    bar.addEventListener('dblclick', e=>{ if(!e.target.closest('.traffic')) toggleMaximize(win); });

    // touch dragging
    bar.addEventListener('touchstart', (e)=>{
      if(e.target.closest('.traffic')) return;
      restoreWindow(win);
      const t = e.touches[0]; dragging = true; focusWindow(win);
      offX = t.clientX - win.offsetLeft; offY = t.clientY - win.offsetTop;
    }, {passive:true});
    window.addEventListener('touchmove', (e)=>{
      if(!dragging) return; const t = e.touches[0];
      win.style.left = Math.max(0, t.clientX - offX) + 'px';
      win.style.top = Math.max(44, t.clientY - offY) + 'px';
    }, {passive:true});
    window.addEventListener('touchend', ()=>{ if(dragging){dragging=false; haptic(6);} });
  }

  // resizing
  const handle = win.querySelector('.resize-handle');
  if(handle){
    let resizing=false, startW=0, startH=0, startX=0, startY=0;
    handle.addEventListener('mousedown', (e)=>{
      resizing = true; e.stopPropagation();
      startW = win.offsetWidth; startH = win.offsetHeight; startX = e.clientX; startY = e.clientY;
    });
    window.addEventListener('mousemove', (e)=>{
      if(!resizing) return;
      win.style.width = Math.max(320, startW + (e.clientX-startX)) + 'px';
      win.style.height = Math.max(240, startH + (e.clientY-startY)) + 'px';
      if(win.dataset.win === 'map' && lifeMapInstance) lifeMapInstance.invalidateSize();
    });
    window.addEventListener('mouseup', ()=> resizing=false);
  }
});

/* Shortcuts */
window.addEventListener('keydown', e=>{
  if(!e.altKey || !['ArrowLeft','ArrowRight','ArrowUp'].includes(e.key)) return;
  const active=document.querySelector('.window.focused.open'); if(!active) return;
  e.preventDefault();
  if(e.key==='ArrowUp') toggleMaximize(active); else snapWindow(active,e.key==='ArrowLeft'?'left':'right');
});
document.addEventListener('pointerdown', e=>{
  if(e.target.closest('.dock-btn,.desk-icon,.top-action,.home-search,.wallpaper-swatch,.station-btn,.player-controls button,.proj-tab,.link-card,.map-entry,.spotify-mini-btn,.spotify-tag-btn,.spotify-playlist-card')) haptic(5);
});

/* ================================================================
   TERMINAL
   ================================================================ */
const termLog = document.getElementById('term-log');
const termInput = document.getElementById('term-input');
const termScroll = document.getElementById('term-scroll');
let termHistory = [];
let termHistIdx = -1;

function printTerm(html){
  if(!termLog || !termScroll) return;
  const line = document.createElement('div');
  line.innerHTML = html;
  termLog.appendChild(line);
  termScroll.scrollTop = termScroll.scrollHeight;
}

const commands = {
  help: ()=> `<span class="accent">Available commands:</span>
  help        show this list
  about       who is ${CONFIG.name}?
  education   view academic qualifications & detailed CV records
  certs       view verified credentials & certificates
  projects    list selected projects
  music       open retro music player (e.g. "music 80s", "music bollywood", "music 70s")
  contact     show contact links & email
  weather     open weather.app
  map         open life_map.app
  games       open 2006 retro games arcade
  gallery     open 2006 photo gallery archive
  upgrade     upgrade OS to 2026 3D Spatial Edition
  skills      list technical skills
  whoami      visitor identity
  resume      open GitHub / profile
  matrix      ...you'll see
  coffee      ☕
  clear       clear terminal screen
  sudo [x]    admin elevation`,
  about: ()=> `${CONFIG.name} — ${CONFIG.tagline}\n${CONFIG.bio.join(' ')}`,
  education: ()=> {
    openApp('education');
    return `Opening Education Folder & CV Academic Ledger...\n• B.Tech CSE @ Lovely Professional University (Aug 2026–Present)\n• Senior Secondary XII @ Modern Public School (May 2024–Mar 2025)\n• Secondary X Distinction (90.2%) @ Modern Public School (May 2022–Mar 2023)`;
  },
  edu: ()=> commands.education(),
  academic: ()=> commands.education(),
  academics: ()=> commands.education(),
  cv: ()=> commands.education(),
  certs: ()=> {
    openApp('certs');
    return `Opening Certificates Ledger...\n• Oracle Certified Foundations Associate — Agentic AI (2026)\n• Infosys Springboard — Python Graduate (2024)\n• Multi-Domain IoT & Sensor Fusion Research (IEEE & LPU, 2025)\n• Full-Stack Web Development & Modern React (LPU, 2025)`;
  },
  certificates: ()=> commands.certs(),
  projects: ()=> CONFIG.projects.map(p=>`• ${p.title} (${p.year}) [${p.tag}] — ${p.desc}`).join('\n\n'),
  music: (arg)=> {
    openApp('spotify');
    if(!arg) return 'Opening Retro Music Player...';
    const cleanArg = arg.toLowerCase().trim();
    const match = SPOTIFY_PLAYLISTS.find(p=> p.genre.toLowerCase().includes(cleanArg) || p.title.toLowerCase().includes(cleanArg));
    if(match){
      loadSpotifyEmbed(match.embedUrl, match.title);
      return `Loaded retro playlist "${match.title}" in Retro Music Player.`;
    }
    const parsed = parseSpotifyUrl(arg);
    if(parsed){
      loadSpotifyEmbed(parsed, "Custom Track");
      return `Loaded custom track URL into Retro Music Player.`;
    }
    return `Opening Retro Music player with vintage station selection.`;
  },
  spotify: (arg)=> commands.music(arg),
  retro: (arg)=> commands.music(arg),
  contact: ()=> CONFIG.links.map(l=>`${l.label}: ${l.sub} (${l.href})`).join('\n'),
  skills: ()=> CONFIG.skills.join(', '),
  whoami: ()=> `visitor_${Math.floor(Math.random()*9000+1000)} <span class="muted">(Omm's guest on OMM_OS)</span>`,
  resume: ()=> { window.open(CONFIG.resumeUrl,'_blank'); return 'Opening GitHub profile / résumé...'; },
  coffee: ()=> `<span class="warn">☕ brewing fresh filter coffee...</span>\n[████████████████████] 100%\nReady. Fuel up and code!`,
  clear: ()=> { if(termLog) termLog.innerHTML=''; return null; },
  matrix: ()=> { startMatrix(); return '<span class="accent">Wake up, Neo...</span>'; },
  weather: ()=> { openApp('weather'); return 'Opening weather.app...'; },
  games: ()=> { openApp('games'); return 'Opening 2006 Retro Games Folder...'; },
  gallery: ()=> { openApp('gallery'); return 'Opening 2006 Photo Gallery Folder...'; },
  photos: ()=> { openApp('gallery'); return 'Opening 2006 Photo Gallery Folder...'; },
  pics: ()=> { openApp('gallery'); return 'Opening 2006 Photo Gallery Folder...'; },
  upgrade: ()=> { setTimeout(shiftTo2026, 300); return 'Switching to OMM_OS 2026 Edition...'; },
  map: ()=> { openApp('map'); return 'Opening life_map.app...'; },
  exit: ()=> { if(windows.terminal) closeApp(windows.terminal); return null; }
};

function runCommand(raw){
  const trimmed = raw.trim();
  if(trimmed === ''){ return; }
  printTerm(`<span class="prompt">omm@os</span><span class="muted">:~$</span> ${trimmed}`);
  termHistory.push(trimmed); termHistIdx = termHistory.length;

  const [cmd, ...rest] = trimmed.split(' ');
  const lc = cmd.toLowerCase();

  if(lc === 'sudo'){
    printTerm(`<span class="warn">Nice try. Permission denied — this is Omm's personal machine. 😄</span>`);
    beep(200,0.1,'sawtooth',0.03);
    return;
  }
  if(commands[lc]){
    const out = commands[lc](rest.join(' '));
    if(out) printTerm(out.replace(/\n/g,'<br>'));
    beep(700,0.03,'square',0.02);
    return;
  }
  printTerm(`<span class="warn">command not found:</span> ${lc} <span class="muted">— type "help" for a list</span>`);
  beep(180,0.08,'sawtooth',0.03);
}

if(termInput){
  termInput.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
      runCommand(termInput.value);
      termInput.value = '';
    } else if(e.key === 'ArrowUp'){
      if(termHistIdx > 0){ termHistIdx--; termInput.value = termHistory[termHistIdx] || ''; }
      e.preventDefault();
    } else if(e.key === 'ArrowDown'){
      if(termHistIdx < termHistory.length){ termHistIdx++; termInput.value = termHistory[termHistIdx] || ''; }
      e.preventDefault();
    }
  });
}
if(termScroll && termInput){
  termScroll.addEventListener('click', ()=> termInput.focus());
}
printTerm(`<span class="accent">Welcome to ${CONFIG.name}'s shell (OMM_OS).</span> <span class="muted">Type "help" or "spotify" to begin.</span>`);

/* ================================================================
   GUESTBOOK
   ================================================================ */
let guestEntries = [
  { name:"Arjun", msg:"Really impressed with Okpythion and the PyDude AI auto-debugger! Great work.", when:"yesterday" },
  { name:"Dev", msg:"Sentinel-One IEEE paper implementation is awesome. Love the Spotify addition to the OS.", when:"2 days ago" }
];
function renderGuestbook(){
  const list = document.getElementById('gb-list');
  if(!list) return;
  list.innerHTML = guestEntries.map(g=>`
    <div class="gb-entry">
      <div class="gb-head"><span>${g.name}</span><span>${g.when}</span></div>
      <p>${g.msg}</p>
    </div>`).join('') + `<div class="gb-note">Note: Entries are kept in active memory. Leave a message for Omm!</div>`;
}
renderGuestbook();
const gbForm = document.getElementById('gb-form');
if(gbForm){
  gbForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('gb-name').value.trim();
    const msg = document.getElementById('gb-msg').value.trim();
    if(!name || !msg) return;
    guestEntries.unshift({ name, msg, when:"just now" });
    renderGuestbook();
    e.target.reset();
    showToast("Signed! Thanks for visiting OMM_OS 🖊️");
    beep(880,0.08,'triangle',0.05);
  });
}

/* ================================================================
   CONTACT FORM
   ================================================================ */
const msgForm = document.getElementById('msg-form');
if(msgForm){
  msgForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('msg-name').value;
    const email = document.getElementById('msg-email').value;
    const text = document.getElementById('msg-text').value;
    const mailLink = CONFIG.links.find(l=>l.label==='Email');
    const to = mailLink ? mailLink.href.replace('mailto:','') : 'ommpiri21@gmail.com';
    window.location.href = `mailto:${to}?subject=Message from ${encodeURIComponent(name)} via OMM_OS&body=${encodeURIComponent(text + '\n\nFrom: ' + email)}`;
    showToast("Opening your email client to send message...");
  });
}

/* ================================================================
   TOAST
   ================================================================ */
let toastTimer;
function showToast(text){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = text;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 2400);
}

/* ================================================================
   WEATHER APP — Open-Meteo
   ================================================================ */
let weatherLoadedOnce = false;

const WX_CODES = {
  0:["☀️","Clear sky"], 1:["🌤️","Mostly clear"], 2:["⛅","Partly cloudy"], 3:["☁️","Overcast"],
  45:["🌫️","Fog"], 48:["🌫️","Icy fog"],
  51:["🌦️","Light drizzle"], 53:["🌦️","Drizzle"], 55:["🌧️","Heavy drizzle"],
  61:["🌦️","Light rain"], 63:["🌧️","Rain"], 65:["🌧️","Heavy rain"],
  71:["🌨️","Light snow"], 73:["🌨️","Snow"], 75:["❄️","Heavy snow"],
  80:["🌦️","Rain showers"], 81:["🌧️","Rain showers"], 82:["⛈️","Violent showers"],
  95:["⛈️","Thunderstorm"], 96:["⛈️","Storm + hail"], 99:["⛈️","Severe storm"]
};
function wxLookup(code){ return WX_CODES[code] || ["🌡️","Unknown"]; }
function wxBackground(code){
  if(code === 0 || code === 1) return ["#ffe9b8","#fff6e0"];
  if(code === 2 || code === 3) return ["#dbe4f0","#f2f5fa"];
  if([45,48].includes(code)) return ["#dcdfe4","#eef0f3"];
  if([51,53,55,61,63,65,80,81,82].includes(code)) return ["#c9dbf5","#e9f1ff"];
  if([71,73,75].includes(code)) return ["#e4edf7","#f7fbff"];
  if([95,96,99].includes(code)) return ["#cfd0e6","#e9e9f7"];
  return ["#cfe0ff","#eef4ff"];
}

async function loadWeather(lat, lon, label){
  const useLat = lat ?? CONFIG.weather.lat;
  const useLon = lon ?? CONFIG.weather.lon;
  const useLabel = label ?? CONFIG.weather.city;
  const statusEl = document.getElementById('wx-status');
  const condEl = document.getElementById('wx-cond');
  if(statusEl) statusEl.textContent = "Fetching live conditions...";
  if(condEl) condEl.textContent = "Loading...";

  try{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${useLat}&longitude=${useLon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=5`;
    const res = await fetch(url);
    if(!res.ok) throw new Error('bad response');
    const data = await res.json();
    const [emoji, condLabel] = wxLookup(data.current.weather_code);
    const [bgA, bgB] = wxBackground(data.current.weather_code);

    const emojiEl = document.getElementById('wx-emoji');
    const tempEl = document.getElementById('wx-temp');
    const locEl = document.getElementById('wx-loc');
    const feelsEl = document.getElementById('wx-feels');
    const windEl = document.getElementById('wx-wind');
    const humEl = document.getElementById('wx-humidity');
    const heroEl = document.getElementById('wx-hero');

    if(emojiEl) emojiEl.textContent = emoji;
    if(tempEl) tempEl.textContent = Math.round(data.current.temperature_2m) + '°';
    if(condEl) condEl.textContent = condLabel;
    if(locEl) locEl.textContent = useLabel;
    if(feelsEl) feelsEl.textContent = `feels like ${Math.round(data.current.apparent_temperature)}°`;
    if(windEl) windEl.textContent = `wind ${Math.round(data.current.wind_speed_10m)} km/h`;
    if(humEl) humEl.textContent = `humidity ${data.current.relative_humidity_2m}%`;
    if(heroEl){
      heroEl.style.setProperty('--wx-a', bgA);
      heroEl.style.setProperty('--wx-b', bgB);
    }
    if(statusEl) statusEl.textContent = `Last updated ${new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})} · Open-Meteo`;

    const days = data.daily.time.slice(1,5);
    const forecastEl = document.getElementById('wx-forecast');
    if(forecastEl){
      forecastEl.innerHTML = days.map((d,i)=>{
        const idx = i+1;
        const [dEmoji] = wxLookup(data.daily.weather_code[idx]);
        const dayName = new Date(d + 'T00:00:00').toLocaleDateString([], {weekday:'short'});
        return `<div class="wx-day">
          <div class="wd-name">${dayName}</div>
          <div class="wd-emoji">${dEmoji}</div>
          <div class="wd-range">${Math.round(data.daily.temperature_2m_max[idx])}° <span>${Math.round(data.daily.temperature_2m_min[idx])}°</span></div>
        </div>`;
      }).join('');
    }
  }catch(err){
    const emojiEl = document.getElementById('wx-emoji');
    if(emojiEl) emojiEl.textContent = "⚠️";
    if(condEl) condEl.textContent = "Couldn't load live weather";
    if(statusEl) statusEl.textContent = "Connecting to Open-Meteo failed — check connection.";
  }
}

const wxRefreshBtn = document.getElementById('wx-refresh');
if(wxRefreshBtn){
  wxRefreshBtn.addEventListener('click', ()=>{ beep(500,0.04,'square',0.03); loadWeather(); });
}
const wxMyLocBtn = document.getElementById('wx-mylocation');
if(wxMyLocBtn){
  wxMyLocBtn.addEventListener('click', ()=>{
    const statusEl = document.getElementById('wx-status');
    if(statusEl) statusEl.textContent = "Requesting your location...";
    if(!navigator.geolocation){ showToast("Geolocation is not supported"); return; }
    navigator.geolocation.getCurrentPosition(
      (pos)=> loadWeather(pos.coords.latitude, pos.coords.longitude, "Your location"),
      ()=>{ 
        showToast("Location permission denied"); 
        if(statusEl) statusEl.textContent = "Showing weather for Lovely Professional University, Punjab"; 
      }
    );
  });
}

/* ================================================================
   LIFE MAP APP — Leaflet + OpenStreetMap
   ================================================================ */
let lifeMapInstance = null;
function initLifeMap(){
  if(typeof L === 'undefined') return;
  if(lifeMapInstance){ lifeMapInstance.invalidateSize(); return; }
  const mapEl = document.getElementById('life-map');
  if(!mapEl) return;

  lifeMapInstance = L.map('life-map', { scrollWheelZoom:true, zoomControl:true }).setView([CONFIG.lifeMap[0].lat, CONFIG.lifeMap[0].lon], 4);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution:'&copy; OpenStreetMap &copy; CARTO', maxZoom:18
  }).addTo(lifeMapInstance);

  const markers = [];
  CONFIG.lifeMap.forEach((stop)=>{
    const icon = L.divIcon({ className:'', html:'<div class="map-pin"></div>', iconSize:[16,16], iconAnchor:[8,14] });
    const marker = L.marker([stop.lat, stop.lon], { icon }).addTo(lifeMapInstance);
    marker.bindPopup(`<b>${stop.emoji} ${stop.label}</b><br>${stop.city} — ${stop.year}<br>${stop.desc}`);
    markers.push(marker);
  });

  const bounds = L.latLngBounds(CONFIG.lifeMap.map(s=>[s.lat, s.lon]));
  lifeMapInstance.fitBounds(bounds, { padding:[36,36] });

  const sidebar = document.getElementById('map-sidebar');
  if(sidebar){
    sidebar.innerHTML = CONFIG.lifeMap.map((s,i)=>`
      <div class="map-entry" data-i="${i}">
        <div class="me-year">${s.emoji} ${s.year}</div>
        <div class="me-label">${s.label}</div>
        <div class="me-city">${s.city}</div>
      </div>`).join('');
    sidebar.querySelectorAll('.map-entry').forEach(entry=>{
      entry.addEventListener('click', ()=>{
        sidebar.querySelectorAll('.map-entry').forEach(e=>e.classList.remove('active'));
        entry.classList.add('active');
        const i = parseInt(entry.dataset.i, 10);
        const stop = CONFIG.lifeMap[i];
        lifeMapInstance.flyTo([stop.lat, stop.lon], 9, { duration:0.9 });
        markers[i].openPopup();
        beep(500,0.03,'square',0.02);
      });
    });
  }
}

/* ================================================================
   EASTER EGG: KONAMI CODE -> MATRIX RAIN
   ================================================================ */
const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiPos = 0;
window.addEventListener('keydown', (e)=>{
  const key = e.key;
  if(key === konami[konamiPos]){ konamiPos++; } else { konamiPos = (key===konami[0])?1:0; }
  if(konamiPos === konami.length){ konamiPos = 0; startMatrix(); showToast("🕶️ Konami code accepted."); }
});

const matrixCanvas = document.getElementById('matrix-canvas');
let mctx = matrixCanvas ? matrixCanvas.getContext('2d') : null;
let matrixInterval = null;
function startMatrix(){
  if(!matrixCanvas) return;
  mctx = matrixCanvas.getContext('2d');
  matrixCanvas.style.display = 'block';
  matrixCanvas.width = window.innerWidth; matrixCanvas.height = window.innerHeight;
  const cols = Math.floor(matrixCanvas.width/16);
  const drops = new Array(cols).fill(1);
  const chars = "アイウエオカキクケコサシスセソ01";
  clearInterval(matrixInterval);
  matrixInterval = setInterval(()=>{
    mctx.fillStyle = 'rgba(0,0,0,0.08)';
    mctx.fillRect(0,0,matrixCanvas.width,matrixCanvas.height);
    mctx.fillStyle = '#3dffa0';
    mctx.font = '15px monospace';
    drops.forEach((y,i)=>{
      const ch = chars[Math.floor(Math.random()*chars.length)];
      mctx.fillText(ch, i*16, y*16);
      if(y*16 > matrixCanvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }, 45);
  setTimeout(stopMatrix, 6000);
}
function stopMatrix(){
  clearInterval(matrixInterval);
  if(matrixCanvas){
    matrixCanvas.style.display = 'none';
    if(mctx) mctx.clearRect(0,0,matrixCanvas.width,matrixCanvas.height);
  }
}
if(matrixCanvas) matrixCanvas.addEventListener('click', stopMatrix);

/* ================================================================
   DOCK MAGNIFICATION
   ================================================================ */
const dockEl = document.getElementById('dock');
if(dockEl){
  const dockBtns = Array.from(document.querySelectorAll('.dock-btn'));
  dockEl.addEventListener('mousemove', (e)=>{
    dockBtns.forEach(btn=>{
      const r = btn.getBoundingClientRect();
      const center = r.left + r.width/2;
      const dist = Math.abs(e.clientX - center);
      const maxDist = 110;
      const scale = dist < maxDist ? 1 + (1 - dist/maxDist) * 0.55 : 1;
      const lift = dist < maxDist ? (1 - dist/maxDist) * 10 : 0;
      btn.style.transform = `scale(${scale}) translateY(${-lift}px)`;
    });
  });
  dockEl.addEventListener('mouseleave', ()=>{
    dockBtns.forEach(btn=> btn.style.transform = 'scale(1)');
  });
}

/* ================================================================
   WALLPAPER PARALLAX
   ================================================================ */
const blobs = document.querySelectorAll('.blob');
window.addEventListener('mousemove', (e)=>{
  const nx = (e.clientX / window.innerWidth) - 0.5;
  const ny = (e.clientY / window.innerHeight) - 0.5;
  blobs.forEach((b,i)=>{
    const depth = (i+1) * 14;
    b.style.transform = `translate(${-nx*depth}px, ${-ny*depth}px)`;
  });
});

/* ================================================================
   COMMAND LAYER
   ================================================================ */
const searchLayer = document.getElementById('search-layer');
const commandInput = document.getElementById('command-input');
const commandResults = document.getElementById('command-results');
const notifyPanel = document.getElementById('notify-panel');
const contextMenu = document.getElementById('context-menu');

const commandItems = [
  {app:'about', icon:'🧑‍💻', title:'About Me', note:'Profile, background, LPU education & skills'},
  {app:'education', icon:'📁', title:'Education Folder', note:'B.Tech CSE @ LPU, Senior Secondary XII, High School (90.2% Distinction) & CV records'},
  {app:'projects', icon:'🗂️', title:'Projects', note:'Okpythion (AI tutor), Ambika Agency, Sentinel-One'},
  {app:'spotify', icon:'📻', title:'Retro Music', note:'70s Disco, 80s Pop/Rock, 90s Grunge, 2000s Y2K & Bollywood Classics'},
  {app:'certs', icon:'🎓', title:'Certificates', note:'Credentials, course completions & achievements'},
  {app:'contact', icon:'📡', title:'Contact & Links', note:'Email, GitHub, LinkedIn, Mobile'},
  {app:'map', icon:'🗺️', title:'Life & Career Map', note:'Interactive journey across Odisha, Delhi & Punjab'},
  {app:'weather', icon:'⛅', title:'Weather', note:'Real-time conditions in Phagwara / Jalandhar'},
  {app:'terminal', icon:'⌨️', title:'Terminal', note:'Type help, spotify, projects or skills'},
  {app:'games', icon:'🕹️', title:'Retro Games (2006)', note:'5 classic playable arcade games: Snake, Tetris, Breakout, Invaders, Pong'},
  {app:'gallery', icon:'🖼️', title:'Photo Gallery (2006)', note:'19 high-resolution picture archives, tech morph evolution & setup gallery'},
  {app:'upgrade', icon:'🚀', title:'Upgrade to OMM_OS 2026', note:'Spatial 3D Three.js WebGL interface & interactive AI universe'},
  {app:'guestbook', icon:'📝', title:'Guestbook', note:'Sign and leave a note behind'}
];
let selectedCommand = 0;

function renderCommandResults(query=''){
  if(!commandResults) return [];
  const q = query.trim().toLowerCase();
  const matches = commandItems.filter(item => !q || `${item.title} ${item.note}`.toLowerCase().includes(q));
  selectedCommand = Math.min(selectedCommand, Math.max(0, matches.length - 1));
  commandResults.innerHTML = matches.length 
    ? matches.map((item, i) => `<button class="command-result${i===selectedCommand?' focused':''}" data-app="${item.app}"><span class="command-icon">${item.icon}</span><span><b>${item.title}</b><small>${item.note}</small></span></button>`).join('') 
    : '<div style="padding:18px;color:#9eacce;font:11px var(--font-mono)">NO APPLICATION FOUND</div>';
  commandResults.querySelectorAll('.command-result').forEach(button => button.addEventListener('click', () => { openApp(button.dataset.app); closeSearch(); }));
  return matches;
}
function openSearch(){
  if(!searchLayer || !commandInput) return;
  searchLayer.classList.add('open'); searchLayer.setAttribute('aria-hidden','false'); commandInput.value=''; selectedCommand=0; renderCommandResults();
  setTimeout(() => commandInput.focus(), 80);
}
function closeSearch(){ 
  if(!searchLayer) return;
  searchLayer.classList.remove('open'); searchLayer.setAttribute('aria-hidden','true'); 
}

const searchToggle = document.getElementById('search-toggle');
if(searchToggle) searchToggle.addEventListener('click', openSearch);

if(commandInput){
  commandInput.addEventListener('input', () => { selectedCommand=0; renderCommandResults(commandInput.value); });
  commandInput.addEventListener('keydown', e => {
    const matches = commandItems.filter(item => !commandInput.value.trim() || `${item.title} ${item.note}`.toLowerCase().includes(commandInput.value.trim().toLowerCase()));
    if(e.key === 'ArrowDown'){ e.preventDefault(); selectedCommand = Math.min(selectedCommand + 1, matches.length - 1); renderCommandResults(commandInput.value); }
    if(e.key === 'ArrowUp'){ e.preventDefault(); selectedCommand = Math.max(selectedCommand - 1, 0); renderCommandResults(commandInput.value); }
    if(e.key === 'Enter' && matches[selectedCommand]){ openApp(matches[selectedCommand].app); closeSearch(); }
  });
}
if(searchLayer) searchLayer.addEventListener('mousedown', e => { if(e.target === searchLayer) closeSearch(); });

const notifyToggle = document.getElementById('notify-toggle');
if(notifyToggle && notifyPanel) notifyToggle.addEventListener('click', () => notifyPanel.classList.toggle('open'));

const clearNoticesBtn = document.getElementById('clear-notices');
if(clearNoticesBtn){
  clearNoticesBtn.addEventListener('click', () => { 
    const noticeList = document.getElementById('notice-list');
    if(noticeList) noticeList.innerHTML='<div style="padding:18px 8px;color:#9eacce;font:10px var(--font-mono)">NO NEW SYSTEM EVENTS</div>'; 
  });
}

function addNotice(title, detail){
  const list = document.getElementById('notice-list');
  if(!list) return;
  if(list.children.length && list.textContent.includes('NO NEW SYSTEM EVENTS')) list.innerHTML='';
  const notice = document.createElement('div'); notice.className='notice'; notice.innerHTML=`<span class="notice-mark">✦</span><div><b>${title}</b><p>${detail}</p></div>`;
  list.prepend(notice);
}

const originalOpenApp = openApp;
openApp = function(name){ 
  originalOpenApp(name); 
  const item = commandItems.find(i => i.app === name); 
  if(item) addNotice(`${item.title} active`, item.note); 
};

window.addEventListener('keydown', e => {
  if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); searchLayer.classList.contains('open') ? closeSearch() : openSearch(); }
  if(e.key === 'Escape'){ closeSearch(); if(notifyPanel) notifyPanel.classList.remove('open'); if(contextMenu) contextMenu.classList.remove('open'); }
});
document.addEventListener('click', e => { 
  if(notifyPanel && !notifyPanel.contains(e.target) && e.target.id !== 'notify-toggle') notifyPanel.classList.remove('open'); 
  if(contextMenu && !contextMenu.contains(e.target)) contextMenu.classList.remove('open'); 
});

const desktopEl = document.getElementById('desktop');
if(desktopEl && contextMenu){
  desktopEl.addEventListener('contextmenu', e => { 
    if(e.target.closest('.window')) return; 
    e.preventDefault(); 
    contextMenu.style.left=`${Math.min(e.clientX, window.innerWidth-190)}px`; 
    contextMenu.style.top=`${Math.min(e.clientY, window.innerHeight-190)}px`; 
    contextMenu.classList.add('open'); 
  });
  contextMenu.addEventListener('click', e => { 
    const action=e.target.dataset.context; 
    if(!action) return; 
    if(action==='search') openSearch(); 
    else if(action==='close') Object.values(windows).forEach(closeApp); 
    else openApp(action); 
    contextMenu.classList.remove('open'); 
  });
}

/* ================================================================
   HOME DESKTOP — battery, paper switcher & audio player
   ================================================================ */
const homeSearchBtn = document.getElementById('home-search');
if(homeSearchBtn) homeSearchBtn.addEventListener('click', openSearch);

const batteryPct = document.getElementById('battery-pct');
const batteryFill = document.querySelector('.battery-icon i');
function paintBattery(level, charging=false){
  if(!batteryPct || !batteryFill) return;
  const pct = Math.round(level * 100); batteryPct.textContent = `${pct}%${charging?' +':''}`;
  batteryFill.style.width = `${Math.max(5,pct)}%`;
  batteryFill.style.background = pct < 20 ? '#aa4535' : (charging ? '#6f9b58' : '#84905b');
}
if(navigator.getBattery){ navigator.getBattery().then(battery => { const refresh=()=>paintBattery(battery.level,battery.charging); refresh(); battery.addEventListener('levelchange',refresh); battery.addEventListener('chargingchange',refresh); }).catch(()=>paintBattery(.98)); } else paintBattery(.98);

const paperButtons = [...document.querySelectorAll('.wallpaper-swatch')];
function setPaper(paper){
  document.body.classList.remove('paper-indigo','paper-moss');
  if(paper !== 'parchment') document.body.classList.add(`paper-${paper}`);
  paperButtons.forEach(btn=>btn.classList.toggle('active',btn.dataset.paper===paper));
  try{localStorage.setItem('omm-os-paper',paper);}catch(e){}
}
paperButtons.forEach(btn=>btn.addEventListener('click',()=>setPaper(btn.dataset.paper)));
try{setPaper(localStorage.getItem('omm-os-paper') || 'parchment');}catch(e){setPaper('parchment');}

const lofiTracks = [
  {title:'Study Lofi', file:'audio/alex-morgan-study-lofi-music-548638.mp3', notes:[130.81,164.81,196,246.94], bpm:82},
  {title:'Calm Peaceful Chill Hop', file:'audio/fassounds-lofi-study-calm-peaceful-chill-hop-112191.mp3', notes:[146.83,174.61,220,261.63], bpm:72},
  {title:'Sentimental Jazzy Love', file:'audio/sonican-lo-fi-music-loop-sentimental-jazzy-love-473154.mp3', notes:[110,138.59,164.81,220], bpm:76},
  {title:'Mountain Lofi Beats', file:'audio/the_mountain-lofi-beats-567433.mp3', notes:[123.47,146.83,185,220], bpm:68}
];
let lofiTrack=0, lofiRunning=false;
const lofiToggle=document.getElementById('lofi-toggle');
const recordDisc=document.getElementById('record-disc');
const lofiProgressEl=document.getElementById('lofi-progress');
const lofiTime=document.getElementById('lofi-time');
const lofiTitle=document.getElementById('lofi-title');
const lofiStatus=document.getElementById('lofi-status');
const lofiStations=document.getElementById('player-stations');
const lofiAudio=document.getElementById('lofi-audio');

function nativeTime(seconds){
  if(!Number.isFinite(seconds)) return '00:00';
  return `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(Math.floor(seconds%60)).padStart(2,'0')}`;
}
function renderNativeStations(){
  if(!lofiStations) return;
  lofiStations.innerHTML=lofiTracks.map((track,index)=>`<button class="station-btn${index===lofiTrack?' active':''}" data-track="${index}" title="${track.title}">${String(index+1).padStart(2,'0')}</button>`).join('');
  lofiStations.querySelectorAll('.station-btn').forEach(button=>button.addEventListener('click',()=>loadLocalTrack(Number(button.dataset.track),true)));
}
function setNativePlaying(playing){
  lofiRunning=playing; 
  if(lofiToggle){
    lofiToggle.textContent=playing?'Ⅱ':'▶'; 
    lofiToggle.setAttribute('aria-label',playing?'Pause lo-fi music':'Play lo-fi music');
  }
  if(recordDisc) recordDisc.classList.toggle('spinning',playing); 
  if(lofiStatus) lofiStatus.textContent=playing?`Now playing · Track ${String(lofiTrack+1).padStart(2,'0')} / 04`:`Paused · Track ${String(lofiTrack+1).padStart(2,'0')} / 04`;
}
function loadLocalTrack(index,shouldPlay=false){
  if(!lofiAudio) return;
  const wasPlaying=shouldPlay||!lofiAudio.paused; 
  lofiTrack=index; 
  const track=lofiTracks[index];
  lofiAudio.src=track.file; 
  lofiAudio.load(); 
  if(lofiTitle) lofiTitle.textContent=track.title; 
  if(recordDisc) recordDisc.textContent=String.fromCharCode(65+index); 
  if(lofiProgressEl) lofiProgressEl.style.width='0%'; 
  if(lofiTime) lofiTime.textContent='00:00 / --:--'; 
  renderNativeStations();
  if(lofiStatus) lofiStatus.textContent=`Loading · Track ${String(index+1).padStart(2,'0')} / 04`;
  if(wasPlaying){ 
    lofiAudio.play().then(()=>setNativePlaying(true)).catch(()=>{
      if(lofiStatus) lofiStatus.textContent='Could not play this file'; 
      setNativePlaying(false);
    }); 
  } else {
    setNativePlaying(false);
  }
}
function toggleLocalTrack(){
  if(!lofiAudio) return;
  if(!lofiAudio.src){ loadLocalTrack(lofiTrack,false); }
  if(lofiAudio.paused){ 
    lofiAudio.play().then(()=>setNativePlaying(true)).catch(()=>{
      if(lofiStatus) lofiStatus.textContent='Playback blocked - tap Play again';
    }); 
  } else { 
    lofiAudio.pause(); 
    setNativePlaying(false); 
  }
}

if(lofiAudio){
  lofiAudio.addEventListener('loadedmetadata',()=>{ if(lofiTime) lofiTime.textContent=`${nativeTime(lofiAudio.currentTime)} / ${nativeTime(lofiAudio.duration)}`; });
  lofiAudio.addEventListener('timeupdate',()=>{ 
    const ratio=lofiAudio.duration?lofiAudio.currentTime/lofiAudio.duration:0; 
    if(lofiProgressEl) lofiProgressEl.style.width=`${Math.max(0,ratio*100)}%`; 
    if(lofiTime) lofiTime.textContent=`${nativeTime(lofiAudio.currentTime)} / ${nativeTime(lofiAudio.duration)}`; 
  });
  lofiAudio.addEventListener('ended',()=>loadLocalTrack((lofiTrack+1)%lofiTracks.length,true));
  lofiAudio.addEventListener('error',()=>{ if(lofiStatus) lofiStatus.textContent='Audio track standby'; setNativePlaying(false); });
}

renderNativeStations(); 
loadLocalTrack(0,false); 
if(lofiToggle) lofiToggle.addEventListener('click',toggleLocalTrack); 
const lofiNextBtn = document.getElementById('lofi-next');
if(lofiNextBtn) lofiNextBtn.addEventListener('click',()=>loadLocalTrack((lofiTrack+1)%lofiTracks.length,lofiRunning));

/* ================================================================
   PHOTO GALLERY & PICTURE VIEWER CONTROLLER (2006 Retro Edition)
   ================================================================ */
function initGalleryApp(){
  const imgWrapper = document.getElementById('g-photo-wrapper');
  const stageContainer = document.getElementById('g-stage-container');
  const previewImg = document.getElementById('gallery-preview-img');
  const zoomInBtn = document.getElementById('g-zoom-in');
  const zoomOutBtn = document.getElementById('g-zoom-out');
  const zoomFitBtn = document.getElementById('g-zoom-fit');
  const zoom100Btn = document.getElementById('g-zoom-100');
  const rotLeftBtn = document.getElementById('g-rot-left');
  const rotRightBtn = document.getElementById('g-rot-right');
  const zoomReadout = document.getElementById('g-zoom-readout');

  let currentZoom = 1.0;
  let currentRotation = 0;
  let isFitMode = true;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let startDragX = 0;
  let startDragY = 0;

  function updateTransform(){
    if(!imgWrapper) return;
    if(isFitMode){
      imgWrapper.style.transform = `rotate(${currentRotation}deg)`;
      if(zoomReadout) zoomReadout.textContent = `Zoom: Fit (${Math.round(currentZoom * 100)}%)`;
    } else {
      imgWrapper.style.transform = `translate(${panX}px, ${panY}px) scale(${currentZoom}) rotate(${currentRotation}deg)`;
      if(zoomReadout) zoomReadout.textContent = `Zoom: ${Math.round(currentZoom * 100)}%`;
    }

    if(zoomFitBtn) zoomFitBtn.classList.toggle('active', isFitMode);
    if(zoom100Btn) zoom100Btn.classList.toggle('active', !isFitMode && Math.abs(currentZoom - 1.0) < 0.05);
  }

  function setZoom(newZoom){
    isFitMode = false;
    currentZoom = Math.min(3.5, Math.max(0.3, newZoom));
    updateTransform();
    beep(520, 0.03, 'sine', 0.02);
  }

  if(zoomInBtn) zoomInBtn.addEventListener('click', ()=> setZoom(currentZoom * 1.25));
  if(zoomOutBtn) zoomOutBtn.addEventListener('click', ()=> setZoom(currentZoom / 1.25));
  
  if(zoomFitBtn) zoomFitBtn.addEventListener('click', ()=>{
    isFitMode = true;
    currentZoom = 1.0;
    panX = 0;
    panY = 0;
    updateTransform();
    beep(480, 0.03, 'sine', 0.02);
  });

  if(zoom100Btn) zoom100Btn.addEventListener('click', ()=>{
    isFitMode = false;
    currentZoom = 1.0;
    panX = 0;
    panY = 0;
    updateTransform();
    beep(560, 0.03, 'sine', 0.02);
  });

  if(rotLeftBtn) rotLeftBtn.addEventListener('click', ()=>{
    currentRotation = (currentRotation - 90) % 360;
    updateTransform();
    beep(440, 0.04, 'triangle', 0.02);
  });

  if(rotRightBtn) rotRightBtn.addEventListener('click', ()=>{
    currentRotation = (currentRotation + 90) % 360;
    updateTransform();
    beep(440, 0.04, 'triangle', 0.02);
  });

  // Mouse wheel zoom
  if(stageContainer){
    stageContainer.addEventListener('wheel', (e)=>{
      e.preventDefault();
      const delta = e.deltaY < 0 ? 1.15 : 0.85;
      setZoom(currentZoom * delta);
    }, { passive: false });

    // Drag to pan
    stageContainer.addEventListener('mousedown', (e)=>{
      if(e.button !== 0) return;
      isDragging = true;
      startDragX = e.clientX - panX;
      startDragY = e.clientY - panY;
    });

    window.addEventListener('mousemove', (e)=>{
      if(!isDragging) return;
      isFitMode = false;
      panX = e.clientX - startDragX;
      panY = e.clientY - startDragY;
      updateTransform();
    });

    window.addEventListener('mouseup', ()=>{
      isDragging = false;
    });

    // Double click to toggle fit / 100%
    stageContainer.addEventListener('dblclick', ()=>{
      if(isFitMode){
        setZoom(1.5);
      } else {
        isFitMode = true;
        currentZoom = 1.0;
        panX = 0;
        panY = 0;
        updateTransform();
      }
      beep(600, 0.04, 'sine', 0.02);
    });
  }

  updateTransform();
}

initGalleryApp();

/* Open About window by default so the OS loads populated */
setTimeout(()=>{ openApp('about'); }, 1400);

/* ================================================================
   DIRECT VERSION SHIFT (2006 ➔ 2026)
   Instant direct transition to v2026 3D Spatial Edition
   ================================================================ */
const upgradeTopbarBtn  = document.getElementById('upgrade-topbar-btn');
const startUpgradeBtn   = document.getElementById('start-upgrade-btn');

function shiftTo2026(){
  if (window.location.protocol === 'file:') {
    window.location.href = '2026.html';
  } else {
    window.location.href = '/2026';
  }
}

if(upgradeTopbarBtn){
  upgradeTopbarBtn.addEventListener('click', shiftTo2026);
}

if(startUpgradeBtn){
  startUpgradeBtn.addEventListener('click', shiftTo2026);
}

/* ================================================================
   ENTRY BOOT NARRATIVE MODAL CONTROLLER (2006 Retro OS)
   ================================================================ */
const bootOverlay       = document.getElementById('boot-narrative-overlay');
const bootModal         = document.getElementById('boot-narrative-modal');
const bootCloseBtn      = document.getElementById('boot-narrative-close-btn');
const bootTerminal      = document.getElementById('boot-narrative-terminal');
const bootLogEl         = document.getElementById('boot-narrative-log');
const bootCursorEl      = document.getElementById('boot-narrative-cursor');
const bootActionsEl     = document.getElementById('boot-narrative-actions');
const bootStayBtn       = document.getElementById('boot-stay-btn');
const bootContinueBtn   = document.getElementById('boot-continue-btn');
const bootSkipBtn       = document.getElementById('boot-narrative-skip-btn');

const NARRATIVE_STORAGE_KEY = 'ommos_boot_narrative_seen';

const fullNarrativeScript = [
  { type: 'system-head', text: 'OMM_OS v2006 — BOOTING...', delay: 420 },
  { type: 'system-dim', text: 'loading dial-up... loading a boy with a dream...', delay: 600 },
  { type: 'narrative-break' },
  { type: 'narrative-os', text: "This is where I started.", delay: 550 },
  { type: 'narrative-text', text: "No frameworks. No shortcuts. Just a kid who refused to wait.", delay: 650 },
  { type: 'narrative-break' },
  { type: 'narrative-text', text: "You're standing in 2006 right now.", delay: 550 },
  { type: 'narrative-text', text: 'Everything since then — every late night, every "one more try" — led somewhere.', delay: 680 },
  { type: 'narrative-break' },
  { type: 'narrative-os', text: "I didn't move on from this version of me. I built on it.", delay: 650 },
  { type: 'narrative-break' },
  { type: 'narrative-question', text: "So — do you want to meet where I began?", delay: 580 },
  { type: 'narrative-question', text: "Or see what twenty years of not giving up looks like?", delay: 500 }
];

const returningNarrativeScript = [
  { type: 'system-head', text: 'OMM_OS v2006 // WELCOME BACK' },
  { type: 'system-dim', text: 'session restored · 2006 vintage environment active' },
  { type: 'narrative-text', text: "Hey. Welcome back to 2006." },
  { type: 'narrative-question', text: "Do you want to meet where I began, or see what twenty years of not giving up looks like?" }
];

let isNarrativeRevealing = false;
let narrativeTimeoutId = null;
let activeTypingTimeoutId = null;

function playTypingBeep(){
  if(!soundOn) return;
  beep(900 + Math.random() * 250, 0.02, 'triangle', 0.02);
}

function playNarrativeCompleteChime(){
  if(!soundOn) return;
  beep(587, 0.08, 'triangle', 0.04);
  setTimeout(() => beep(880, 0.12, 'triangle', 0.04), 90);
}

function renderScriptLineInstantly(lineData){
  if(!bootLogEl) return;
  const line = document.createElement('div');
  line.className = `boot-log-line ${lineData.type || ''}`;
  if(lineData.text) {
    line.textContent = lineData.text;
  }
  bootLogEl.appendChild(line);
  if(bootTerminal) {
    bootTerminal.scrollTop = bootTerminal.scrollHeight;
  }
}

function finishNarrativeInstantly(){
  if(!isNarrativeRevealing) return;
  clearTimeout(narrativeTimeoutId);
  clearTimeout(activeTypingTimeoutId);
  isNarrativeRevealing = false;

  if(bootLogEl){
    bootLogEl.innerHTML = '';
    fullNarrativeScript.forEach(line => renderScriptLineInstantly(line));
  }
  showNarrativeActions();
}

function showNarrativeActions(){
  if(bootActionsEl){
    bootActionsEl.style.display = 'flex';
  }
  if(bootCursorEl){
    bootCursorEl.style.display = 'inline-block';
  }
  playNarrativeCompleteChime();

  setTimeout(()=>{
    if(bootStayBtn) bootStayBtn.focus();
  }, 100);
}

function typeLineLetterByLetter(lineItem, onComplete){
  if(!bootLogEl || !isNarrativeRevealing) return;

  if(lineItem.type === 'narrative-break'){
    const breakEl = document.createElement('div');
    breakEl.className = 'boot-log-line narrative-break';
    bootLogEl.appendChild(breakEl);
    narrativeTimeoutId = setTimeout(onComplete, 120);
    return;
  }

  const lineEl = document.createElement('div');
  lineEl.className = `boot-log-line ${lineItem.type || ''}`;
  bootLogEl.appendChild(lineEl);

  const text = lineItem.text || '';
  let charIdx = 0;

  function typeChar(){
    if(!isNarrativeRevealing) return;

    if(charIdx < text.length){
      const char = text[charIdx];
      lineEl.textContent += char;
      charIdx++;

      if(bootTerminal){
        bootTerminal.scrollTop = bootTerminal.scrollHeight;
      }

      if(charIdx % 3 === 1 && char !== ' '){
        playTypingBeep();
      }

      let speed = 20;
      if(char === '.' || char === '?' || char === '!' || char === '—'){
        speed = 90;
      } else if(char === ','){
        speed = 50;
      }

      activeTypingTimeoutId = setTimeout(typeChar, speed);
    } else {
      const endPause = lineItem.type === 'system-head' ? 240 : (lineItem.type === 'system-dim' ? 320 : 280);
      narrativeTimeoutId = setTimeout(onComplete, endPause);
    }
  }

  typeChar();
}

function playNarrativeSequence(index = 0){
  if(index >= fullNarrativeScript.length){
    isNarrativeRevealing = false;
    showNarrativeActions();
    return;
  }

  isNarrativeRevealing = true;
  typeLineLetterByLetter(fullNarrativeScript[index], ()=>{
    playNarrativeSequence(index + 1);
  });
}

function showBootNarrativeModal(){
  if(!bootOverlay || !bootModal) return;
  bootOverlay.style.display = 'flex';
  beep(740, 0.08, 'triangle', 0.04);

  if(bootLogEl) bootLogEl.innerHTML = '';
  if(bootActionsEl) bootActionsEl.style.display = 'none';

  // Always play letter-by-letter typewriter narrative on every reload
  playNarrativeSequence(0);
}

function dismissBootNarrativeModal(){
  if(!bootOverlay) return;
  clearTimeout(narrativeTimeoutId);
  clearTimeout(activeTypingTimeoutId);
  isNarrativeRevealing = false;

  bootOverlay.style.animation = 'overlay-fade .2s ease reverse forwards';
  if(bootModal) bootModal.style.animation = 'popup-in .2s ease reverse forwards';

  setTimeout(()=>{
    bootOverlay.style.display = 'none';
    bootOverlay.style.animation = '';
    if(bootModal) bootModal.style.animation = '';
  }, 220);
}

// Event Listeners
if(bootCloseBtn) {
  bootCloseBtn.addEventListener('click', ()=>{
    beep(420, 0.06, 'sine', 0.03);
    dismissBootNarrativeModal();
  });
}

if(bootSkipBtn) {
  bootSkipBtn.addEventListener('click', ()=>{
    beep(420, 0.06, 'sine', 0.03);
    dismissBootNarrativeModal();
  });
}

if(bootStayBtn) {
  bootStayBtn.addEventListener('click', ()=>{
    beep(520, 0.06, 'square', 0.03);
    dismissBootNarrativeModal();
  });
}

if(bootContinueBtn) {
  bootContinueBtn.addEventListener('click', ()=>{
    dismissBootNarrativeModal();
    shiftTo2026();
  });
}

// Click anywhere on terminal to speed up / skip reveal if in progress
if(bootTerminal) {
  bootTerminal.addEventListener('click', ()=>{
    if(isNarrativeRevealing){
      finishNarrativeInstantly();
    }
  });
}

// Keyboard navigation
window.addEventListener('keydown', (e)=>{
  if(!bootOverlay || bootOverlay.style.display === 'none') return;

  if(e.key === 'Escape'){
    e.preventDefault();
    dismissBootNarrativeModal();
    return;
  }

  if(isNarrativeRevealing && (e.key === 'Enter' || e.key === ' ')){
    e.preventDefault();
    finishNarrativeInstantly();
    return;
  }
});

/* Trigger boot narrative modal 1.9s after page load (once hardware boot finishes) */
setTimeout(showBootNarrativeModal, 1900);


