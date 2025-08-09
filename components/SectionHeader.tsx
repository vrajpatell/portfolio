"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export default function SectionHeader({ children, className, as = "h1" }: Props) {
  const reduce = useReducedMotion();
  const Heading = as as any;
  return (
    <div className="inline-block">
      <Heading className={className}>{children}</Heading>
      <div
        className={`mt-2 h-[3px] w-full origin-left rounded bg-gradient-to-r from-emerald-400 via-sky-400 to-transparent ${
          reduce ? "" : "animate-underlineIn"
        }`}
        aria-hidden
      />
    </div>
  );
}


