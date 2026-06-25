"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function SectionReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const dirMap = {
    up:    { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1 } },
    left:  { hidden: { x: -24, opacity: 0 }, show: { x: 0, opacity: 1 } },
    right: { hidden: { x: 24, opacity: 0 }, show: { x: 0, opacity: 1 } },
    none:  { hidden: { opacity: 0 }, show: { opacity: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={dirMap[direction]}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
