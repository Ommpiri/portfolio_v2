import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { certificates } from "../constants";

const categories = ["All", ...Array.from(new Set(certificates.map((c) => c.category)))];

const getCertIcon = (type) => {
  switch (type) {
    case "ai":
      return (
        <svg className="size-6 text-aqua" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "react":
      return (
        <svg className="size-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="2.5" strokeWidth={1.75} />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" strokeWidth={1.5} />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(90 12 12)" strokeWidth={1.5} />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(150 12 12)" strokeWidth={1.5} />
        </svg>
      );
    case "iot":
      return (
        <svg className="size-6 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      );
    case "python":
      return (
        <svg className="size-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "database":
      return (
        <svg className="size-6 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      );
    case "security":
    default:
      return (
        <svg className="size-6 text-royal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
  }
};

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedId, setCopiedId] = useState(null);

  const filteredCerts =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="c-space section-spacing relative" id="certificates">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-heading">My Certifications</h2>
          <p className="subtext mt-2 max-w-2xl">
            Validated engineering proficiencies across AI architectures, full-stack systems, embedded IoT hardware, and software security.
          </p>
        </div>

        {/* Category Filters matching theme */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-gradient-to-r from-royal to-lavender text-white shadow-[0_0_20px_rgba(122,87,219,0.4)]"
                  : "bg-indigo/60 text-neutral-400 border border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {/* Certificates Grid matching theme */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert) => (
            <motion.div
              layout
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl border border-white/10 hover:border-lavender/40 hover-animation flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Top Bar: Icon + Category Badge + Date */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-xl bg-midnight/90 border border-white/10 flex items-center justify-center shadow-inner">
                      {getCertIcon(cert.iconType)}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-midnight/80 border border-white/10 text-neutral-300">
                      {cert.category}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-neutral-400 bg-midnight/80 px-2.5 py-1 rounded-md border border-white/5">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-xl font-bold text-white leading-snug mt-3">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-lavender mt-1">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="subtext text-sm mt-3 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-midnight/80 text-neutral-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Credential Verification Strip */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-neutral-400 font-mono">
                  <span className="text-neutral-500">ID:</span>
                  <span className="text-neutral-300 truncate max-w-[120px] sm:max-w-[150px]">
                    {cert.credentialId}
                  </span>
                  <button
                    onClick={() => handleCopy(cert.id, cert.credentialId)}
                    title="Copy Credential ID"
                    className="p-1 hover:text-white text-neutral-400 transition-colors cursor-pointer"
                  >
                    {copiedId === cert.id ? (
                      <span className="text-mint font-bold text-xs">✓</span>
                    ) : (
                      <img src="/assets/copy.svg" className="size-3.5 opacity-60 hover:opacity-100" alt="copy" />
                    )}
                  </button>
                </div>

                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-semibold text-aqua hover:text-white transition-colors"
                >
                  <span>Verify</span>
                  <img src="/assets/arrow-up.svg" className="size-3" alt="verify" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;
