import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1: Bio */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] opacity-60"
            alt="coding"
          />
          <div className="z-10 relative">
            <p className="headtext">Hi, I'm Omm Atrayu Piri</p>
            <p className="subtext">
              Computer Science undergraduate at Lovely Professional University focused on building practical software systems across full-stack development, AI-powered applications, and IoT.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2: Core Engineering Craft */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-4xl md:text-5xl text-gray-500 font-bold tracking-widest opacity-40">
              BUILD &amp; SHIP
            </p>
            <Card
              style={{ rotate: "15deg", top: "25%", left: "15%" }}
              text="Python &amp; C++"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "58%", left: "42%" }}
              text="Next.js &amp; React"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", bottom: "25%", left: "68%" }}
              text="Gemini Agentic AI"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-35deg", top: "45%", left: "5%" }}
              text="Pyodide WASM"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "12%", left: "40%" }}
              text="ESP32 &amp; IoT"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "65%", left: "20%" }}
              text="WebSockets &amp; MQTT"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "15%", left: "70%" }}
              text="PostgreSQL &amp; Auth"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3: Location */}
        <div className="grid-black-color grid-3 relative overflow-hidden flex flex-col justify-between">
          <div className="z-10 w-[55%] pointer-events-none">
            <p className="headtext">Location &amp; Time Zone</p>
            <p className="subtext">
              Based in Punjab / Odisha, India (LPU). Open to software engineering roles &amp; remote collaborations worldwide.
            </p>
          </div>
          <figure className="absolute top-1/2 -translate-y-1/2 -right-12 sm:-right-8 md:-right-10 w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] flex items-center justify-center">
            <Globe className="w-full h-full" />
          </figure>
        </div>

        {/* Grid 4: Call to Action */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Want to build something impactful together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5: Tech Stack Orbit */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Universe</p>
            <p className="subtext">
              Modern JavaScript, Python, embedded C++, cloud backends, AI function-calling &amp; real-time sensor networks.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
