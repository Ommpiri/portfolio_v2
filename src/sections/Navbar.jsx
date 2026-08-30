import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul items-center gap-6">
      <li className="nav-li">
        <a className="nav-link text-neutral-300 hover:text-white transition-colors" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-300 hover:text-white transition-colors" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-300 hover:text-white transition-colors" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link text-neutral-300 hover:text-white transition-colors"
          href="#certificates"
        >
          Certificates
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-300 hover:text-white transition-colors" href="#contact">
          Contact
        </a>
      </li>
      <li className="nav-li pl-2">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium text-neutral-200 bg-white/5 border border-white/15 rounded-full hover:border-[#ff2b4d]/60 hover:text-white hover:bg-white/10 hover:shadow-[0_0_12px_rgba(255,43,77,0.2)] transition-all backdrop-blur-md"
          title="Switch back to Classic 2006 Retro Desktop OS"
        >
          <span className="text-[#ff2b4d]">⏪</span>
          <span>Classic OS</span>
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-xl bg-[#08090c]/80 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2.5">
          <a
            href="/"
            className="flex items-center gap-2.5 transition-colors group"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-[#ff2b4d] shadow-[0_0_8px_#ff2b4d] animate-pulse"></span>
            <span className="font-bold tracking-wider text-white font-mono text-sm group-hover:text-neutral-200">OMM / ARCHIVE</span>
            <span className="text-[10px] font-mono font-medium tracking-widest text-[#3dffa0] px-2 py-0.5 rounded-full bg-[#3dffa0]/10 border border-[#3dffa0]/30 shadow-[0_0_8px_rgba(61,255,160,0.15)]">2026 SPATIAL</span>
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
          className="block overflow-hidden text-center sm:hidden bg-[#08090c]/95 border-b border-white/10 backdrop-blur-xl"
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
    </header>
  );
};

export default Navbar;
