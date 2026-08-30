import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["AI Systems", "Full-Stack", "IoT Cloud", "Agentic AI", "Next-Gen Web"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-36 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-white md:text-5xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm <span className="text-transparent bg-gradient-to-r from-cyan-300 via-teal-200 to-orange-300 bg-clip-text">Omm Atrayu Piri</span>
        </motion.h1>
        <div className="flex flex-col items-start mt-2">
          <motion.p
            className="text-3xl font-medium md:text-4xl text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Software Engineer Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="text-6xl font-black text-white md:text-7xl drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            />
          </motion.div>
          <motion.p
            className="mt-3 text-base font-normal max-w-xl text-neutral-300/80 leading-relaxed"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            B.Tech CSE @ Lovely Professional University · Building practical software across full-stack development, AI agent platforms &amp; IoT security.
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden">
        <motion.p
          className="text-3xl font-bold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm <span className="text-transparent bg-gradient-to-r from-aqua via-lavender to-cyan-300 bg-clip-text">Omm Atrayu Piri</span>
        </motion.p>
        <div>
          <motion.p
            className="text-2xl font-bold text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="text-4xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            />
          </motion.div>
          <motion.p
            className="mt-2 text-sm text-neutral-300/80"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            B.Tech CSE @ LPU · Full-Stack, AI &amp; IoT Systems
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
