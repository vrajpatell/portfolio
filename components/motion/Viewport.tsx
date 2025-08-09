"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

export const stagger = {
  hidden: {},
  show: (i: number = 0) => ({
    transition: { staggerChildren: 0.08, delayChildren: i * 0.1 },
  }),
};

type MotionSectionProps = React.PropsWithChildren<{
  delayIndex?: number;
  className?: string;
}>;

export const MotionSection: React.FC<MotionSectionProps> = ({ children, delayIndex, className }) => {
  const reduce = useReducedMotion();
  if (reduce) {
    return <section className={className}>{children}</section>;
  }
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      custom={delayIndex}
    >
      {children}
    </motion.section>
  );
};

export const MotionOnceInView: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      {children}
    </motion.div>
  );
};

export default motion;


