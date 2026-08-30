# 🪐 OMM_OS 2026 — 3D Spatial Developer Portfolio (v2)

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.173-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)

A cyber-futuristic, high-performance 3D developer portfolio featuring spatial WebGL architecture, interactive 3D astronaut rendering, smooth spring animations, and a project sandbox preview modal.

[**Explore Live Demo »**](https://portfolio-v2-ommpiri.vercel.app) *(or your deployed URL)*

</div>

---

## 🌟 Key Features

- 🌌 **Spatial 3D Hero Scene**: Interactive 3D spaceman rendered in real-time with **React Three Fiber**, **Drei**, and responsive camera mouse-parallax damping.
- ⚡ **Cutting-Edge Stack**: Powered by **React 19**, **Vite 6**, and **TailwindCSS 4** with lightning-fast bundling.
- 🖥️ **Interactive Project Showcase**: Deep-dive project cards featuring preview mode, live in-modal web sandbox embeds, tech stack badges, and source links.
- 📜 **Interactive Timeline**: Visual career journey and research experience milestones with responsive line highlights.
- 🏆 **Credentials & Certifications Hub**: Filterable certificates grid with one-click credential ID verification copying.
- 💌 **Direct Contact Dispatch**: Interactive contact form integrated with **EmailJS** for instant communication.
- 📱 **Adaptive & Accessible**: 100% responsive across ultra-wide monitors, tablets, and mobile screens.

---

## 🛠️ Tech Stack & Libraries

| Category | Technologies |
| :--- | :--- |
| **Core Framework** | React 19, JavaScript (ESNext) |
| **Build & Tooling** | Vite 6, PostCSS, ESLint |
| **3D & WebGL** | Three.js, `@react-three/fiber`, `@react-three/drei`, `cobe` |
| **Styling & UI** | Tailwind CSS v4, Custom CSS Utilities, Lucide / Custom SVGs |
| **Animations** | Motion (Framer Motion), GSAP |
| **Forms & Services** | EmailJS Browser SDK |

---

## 📂 Project Structure

```bash
portfolio_v2/
├── public/
│   ├── assets/             # Project screenshots, tech logos, social icons
│   └── models/             # 3D GLTF/GLB models (Spaceman scene)
├── src/
│   ├── components/         # Modular UI components (3D Canvas, Card, Globe, Modal, etc.)
│   ├── constants/          # Structured project data, experiences, certificates & socials
│   ├── sections/           # Full-page sections (Navbar, Hero, About, Projects, Contact, Footer)
│   ├── App.jsx             # Root portfolio layout
│   ├── index.css           # Design tokens, theme variables & Tailwind layer styling
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind theme configuration
├── vite.config.js          # Vite build optimizations & plugins
└── README.md
```

---

## 🚀 Quick Start (Local Setup)

### 1. Clone the Repository
```bash
git clone https://github.com/Ommpiri/portfolio_v2.git
cd portfolio_v2
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## ☁️ Deployment

### Deploy with Vercel (Recommended)
1. Push this repository to your GitHub account.
2. Import the `portfolio_v2` repository in [Vercel](https://vercel.com).
3. Framework preset will automatically be set to **Vite**.
4. Click **Deploy**.

### Deploy with Netlify
- Build Command: `npm run build`
- Publish Directory: `dist`

---

## 👤 Author

**Omm Atrayu Piri**  
*Full-Stack Engineer · AI Systems & IoT Researcher*

- 🌐 **GitHub**: [@Ommpiri](https://github.com/Ommpiri)
- 💼 **LinkedIn**: [ommpiri](https://www.linkedin.com/in/ommpiri)
- 📧 **Email**: [ommpiri@gmail.com](mailto:ommpiri@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
