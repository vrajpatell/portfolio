"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, fadeUp } from "@/components/motion/Viewport";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedProse({ children, className }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        const tag = (child.type as any)?.toString?.() ?? "";
        const isImageLike = typeof child.type === "string" && ["img", "figure", "picture"].includes(child.type);
        const variants = isImageLike ? fadeUp : fadeIn;
        return (
          <motion.div key={index} variants={variants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}


