import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul items-center">
      <li className="nav-li">
        <a className="nav-link text-neutral-300 hover:text-white" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-300 hover:text-white" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-300 hover:text-white" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link text-neutral-300 hover:text-white"
          href="#certificates"
        >
          Certificates
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-300 hover:text-white" href="#contact">
          Contact
        </a>
      </li>
      <li className="nav-li pl-2">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-semibold text-amber-200 bg-gradient-to-r from-amber-950/60 to-orange-950/60 border border-amber-500/40 rounded-full hover:border-amber-300 hover:text-amber-100 hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all backdrop-blur-md"
          title="Switch back to Classic 2006 Retro Desktop OS"
        >
          <span className="text-amber-400">⏪</span>
          <span>Classic 2006 OS</span>
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-xl bg-slate-950/60 border-b border-purple-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3">
          <a
            href="/"
            className="flex items-center gap-2.5 text-xl font-bold tracking-wider transition-colors text-white hover:text-cyan-300"
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8] animate-pulse"></span>
            <span className="font-extrabold tracking-tight">OMM_OS</span>
            <span className="text-[11px] font-mono font-medium tracking-widest text-cyan-300 px-2 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-500/40 shadow-[0_0_10px_rgba(56,189,248,0.2)]">2026</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden bg-slate-950/95 border-b border-purple-500/20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.3 }}
        >
          <nav className="py-4">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
