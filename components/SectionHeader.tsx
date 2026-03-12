"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";

type HeadingTag = keyof Pick<React.JSX.IntrinsicElements, "h1" | "h2" | "h3">;

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: HeadingTag;
  id?: string;
};

export default function SectionHeader({ children, className, as = "h1", id }: Props) {
  const reduce = useReducedMotion();
  return (
    <div className="inline-block">
      {React.createElement(as, { className, id }, children)}
      <div
        className={`mt-2 h-[3px] w-full origin-left rounded bg-gradient-to-r from-emerald-400 via-sky-400 to-transparent ${
          reduce ? "" : "animate-underlineIn"
        }`}
        aria-hidden
      />
    </div>
  );
}


