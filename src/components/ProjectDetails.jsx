import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  href,
  github,
  tags,
  closeModal,
}) => {
  const [viewMode, setViewMode] = useState("preview"); // "preview" | "live"
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const handleRefresh = () => {
    setIframeLoaded(false);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 md:p-6 overflow-y-auto backdrop-blur-md bg-black/75">
      <motion.div
        className="relative w-full max-w-4xl lg:max-w-5xl border shadow-2xl rounded-2xl bg-gradient-to-b from-storm via-midnight to-primary border-white/15 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
      >
        {/* Browser Top Chrome Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111428] border-b border-white/10 select-none">
          {/* Traffic Light Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={closeModal}
              title="Close window"
              className="size-3.5 rounded-full bg-red-500 hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center"
            />
            <span className="size-3.5 rounded-full bg-yellow-500/80" />
            <span className="size-3.5 rounded-full bg-emerald-500/80" />
          </div>

          {/* Browser Address Bar & View Mode Toggle */}
          <div className="flex items-center gap-3 bg-midnight/90 border border-white/10 px-3.5 py-1.5 rounded-full text-xs text-neutral-300 max-w-lg w-full mx-3 shadow-inner">
            <span className="text-emerald-400 font-mono text-[11px] hidden sm:inline">🔒 https://</span>
            <span className="truncate font-mono text-neutral-300 flex-1">
              {href ? href.replace(/^https?:\/\//, "") : "live-site.app"}
            </span>

            {/* View Mode Switcher Pills */}
            <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-full border border-white/5">
              <button
                onClick={() => setViewMode("preview")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                  viewMode === "preview"
                    ? "bg-lavender/80 text-white shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
                title="View UI Mockup"
              >
                Mockup
              </button>
              <button
                onClick={() => setViewMode("live")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                  viewMode === "live"
                    ? "bg-aqua/80 text-black font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
                title="Try in-frame Live Embed"
              >
                Live Frame
              </button>
            </div>

            {viewMode === "live" && (
              <button
                onClick={handleRefresh}
                title="Reload live page"
                className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            )}
          </div>

          {/* Close Icon Button */}
          <button
            onClick={closeModal}
            className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Close"
          >
            <img src="assets/close.svg" className="size-5" alt="close" />
          </button>
        </div>

        {/* Viewport Area */}
        <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] bg-slate-950 overflow-hidden flex-shrink-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {viewMode === "preview" ? (
              <motion.div
                key="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative size-full group cursor-pointer overflow-hidden flex items-center justify-center"
                onClick={() => href && window.open(href, "_blank", "noopener,noreferrer")}
              >
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="text-neutral-500">Preview image unavailable</div>
                )}

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <span className="px-5 py-2.5 rounded-full font-semibold text-sm bg-radial from-lavender to-royal text-white shadow-xl flex items-center gap-2">
                    Launch Real-Time Website
                    <img src="assets/arrow-up.svg" className="size-3.5" alt="open" />
                  </span>
                  <span className="text-xs font-mono text-neutral-300">
                    Click to open {href ? href.replace(/^https?:\/\//, "") : "live site"}
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="live"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative size-full bg-slate-950 flex flex-col"
              >
                {/* Notice header if iframe is blocked by X-Frame-Options */}
                <div className="bg-indigo/80 border-b border-white/10 px-4 py-1.5 flex items-center justify-between text-xs text-neutral-300">
                  <span className="truncate text-neutral-400">
                    If this site blocks in-frame embedding (X-Frame-Options), open directly:
                  </span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 font-semibold text-aqua hover:underline shrink-0 flex items-center gap-1"
                  >
                    Open in New Tab ↗
                  </a>
                </div>

                <div className="relative flex-1 w-full h-full bg-slate-950">
                  {!iframeLoaded && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950 text-neutral-400 gap-3">
                      <div className="size-8 border-2 border-aqua/30 border-t-aqua rounded-full animate-spin" />
                      <p className="text-xs font-mono tracking-wider text-neutral-400">
                        Connecting to live site: {title}...
                      </p>
                    </div>
                  )}

                  {href ? (
                    <iframe
                      key={iframeKey}
                      src={href}
                      title={title}
                      onLoad={() => setIframeLoaded(true)}
                      className="w-full h-full border-0 bg-white"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-neutral-500">
                      Live URL unavailable
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Project Information Footer Area */}
        <div className="p-5 md:p-6 overflow-y-auto bg-gradient-to-b from-indigo/40 to-storm/60">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="text-sm font-normal text-neutral-300 mt-1">{description}</p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-radial from-lavender to-royal text-white hover-animation shadow-md"
                >
                  Open Live Website
                  <img src="assets/arrow-up.svg" className="size-3.5" alt="external" />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View GitHub Repository"
                  className="inline-flex items-center justify-center p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {subDescription && subDescription.length > 0 && (
            <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5">
              {subDescription.map((subDesc, index) => (
                <p key={index} className="text-xs md:text-sm font-normal text-neutral-400 leading-relaxed">
                  • {subDesc}
                </p>
              ))}
            </div>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/5">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-2.5 py-1 text-xs rounded-md bg-midnight/80 text-neutral-300 border border-white/10 flex items-center gap-1.5"
                >
                  {tag.path && <img src={tag.path} alt={tag.name} className="size-3.5" />}
                  {tag.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
