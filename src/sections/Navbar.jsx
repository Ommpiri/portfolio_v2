import { useState } from "react";
import { motion } from "motion/react";

const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: (
      <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:text-aqua transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: "About",
    href: "#about",
    icon: (
      <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:text-aqua transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    name: "Work",
    href: "#work",
    icon: (
      <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:text-aqua transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Certificates",
    href: "#certificates",
    icon: (
      <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:text-aqua transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    name: "Education",
    href: "#education",
    icon: (
      <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:text-aqua transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    name: "Contact",
    href: "#contact",
    icon: (
      <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:text-aqua transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function Navigation() {
  return (
    <ul className="nav-ul items-center gap-5 md:gap-6">
      {navItems.map((item) => (
        <li key={item.name} className="nav-li">
          <a
            className="nav-link flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors group"
            href={item.href}
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        </li>
      ))}
      <li className="nav-li pl-2">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium text-neutral-200 bg-white/5 border border-white/15 rounded-full hover:border-[#3dffa0]/60 hover:text-white hover:bg-white/10 hover:shadow-[0_0_12px_rgba(61,255,160,0.2)] transition-all backdrop-blur-md group"
          title="Switch back to Classic 2006 Retro Desktop OS"
        >
          <svg className="w-3.5 h-3.5 text-[#3dffa0] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
          </svg>
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
            <span className="font-bold tracking-wider text-white font-mono text-sm group-hover:text-neutral-200">OMM / ARCHIVE</span>
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
