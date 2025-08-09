"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

type Intensity = "low" | "medium" | "high";

type Props = {
  className?: string;
  particles?: boolean;
  intensity?: Intensity;
  showGrain?: boolean;
  showBlobs?: boolean;
  showGradient?: boolean;
};

const clampParticles = (intensity: Intensity) => {
  if (intensity === "high") return 40;
  if (intensity === "medium") return 28;
  return 16;
};

export default function BackgroundLayers({
  className,
  particles,
  intensity = "medium",
  showGrain = true,
  showBlobs = true,
  showGradient = true,
}: Props) {
  const reduce = useReducedMotion();

  const [engineReady, setEngineReady] = React.useState(false);
  React.useEffect(() => {
    if (!particles || reduce) return;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, [particles, reduce]);

  return (
    <div aria-hidden className={"pointer-events-none fixed inset-0 -z-10 overflow-hidden " + (className ?? "")}> 
      {showGradient && <GradientMesh />}
      {showBlobs && <AnimatedBlobs disabled={!!reduce} intensity={intensity} />} 
      {showGrain && <GrainOverlay />}
      {particles && !reduce && engineReady && (
        <div className="absolute inset-x-0 top-0 h-[50vh]">
          <Particles
            id="tsparticles-hero"
            options={{
              fpsLimit: 60,
              detectRetina: true,
              pauseOnOutsideViewport: true,
              pauseOnBlur: true,
              particles: {
                number: { value: clampParticles(intensity) },
                color: { value: ["#22c55e", "#38bdf8"] },
                opacity: { value: 0.3 },
                size: { value: { min: 1, max: 2 } },
                move: { enable: true, speed: 0.4, direction: "none", outModes: { default: "out" } },
              },
              interactivity: {},
              background: { color: "transparent" },
            }}
          />
        </div>
      )}
    </div>
  );
}

function GradientMesh() {
  return <div className="absolute inset-0 bg-gradient-mesh" />;
}

function GrainOverlay() {
  return <div className="absolute inset-0 bg-noise" style={{ opacity: 0.2 }} />;
}

function AnimatedBlobs({ disabled, intensity }: { disabled?: boolean; intensity: Intensity }) {
  const scale = intensity === "high" ? 1.3 : intensity === "medium" ? 1 : 0.8;
  const blur = intensity === "high" ? "blur-3xl" : "blur-2xl";
  const opacity = intensity === "high" ? "opacity-25" : intensity === "medium" ? "opacity-20" : "opacity-15";
  const anim = disabled ? "" : "animate-blob";
  return (
    <>
      <div className={`absolute -top-20 -left-10 h-72 w-72 rounded-full bg-emerald-400/40 ${blur} ${opacity} ${anim}`} style={{ transform: `scale(${scale})` }} />
      <div className={`absolute top-40 right-[-60px] h-80 w-80 rounded-full bg-sky-400/40 ${blur} ${opacity} ${anim}`} style={{ animationDelay: "-4s", transform: `scale(${scale})` }} />
      <div className={`absolute bottom-[-60px] left-1/3 h-64 w-64 rounded-full bg-fuchsia-400/40 ${blur} ${opacity} ${anim}`} style={{ animationDelay: "-8s", transform: `scale(${scale})` }} />
    </>
  );
}


