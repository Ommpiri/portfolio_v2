import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul items-center gap-6">
      <li className="nav-li">
        <a className="nav-link text-neutral-300 hover:text-aqua transition-colors font-medium" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-300 hover:text-aqua transition-colors font-medium" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-300 hover:text-aqua transition-colors font-medium" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link text-neutral-300 hover:text-aqua transition-colors font-medium"
          href="#certificates"
        >
          Certificates
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-300 hover:text-aqua transition-colors font-medium" href="#contact">
          Contact
        </a>
      </li>
      <li className="nav-li pl-2">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-medium text-aqua bg-indigo/60 border border-aqua/30 rounded-full hover:border-aqua hover:text-white hover:bg-storm/60 hover:shadow-[0_0_18px_rgba(51,194,204,0.35)] transition-all backdrop-blur-md"
          title="Switch back to Classic 2006 Retro Desktop OS"
        >
          <span className="text-aqua">⏪</span>
          <span>Classic 2006 OS</span>
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-xl bg-midnight/80 border-b border-storm/40 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3">
          <a
            href="/"
            className="flex items-center gap-2.5 text-xl font-bold tracking-wider transition-colors text-white hover:text-aqua"
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-aqua shadow-[0_0_10px_#33c2cc] animate-pulse"></span>
            <span className="font-extrabold tracking-tight">OMM_OS</span>
            <span className="text-[11px] font-mono font-medium tracking-widest text-aqua px-2 py-0.5 rounded-md bg-indigo/80 border border-aqua/30 shadow-[0_0_10px_rgba(51,194,204,0.2)]">2026</span>
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
          className="block overflow-hidden text-center sm:hidden bg-midnight/95 border-b border-storm/40 backdrop-blur-xl"
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
