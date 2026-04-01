"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image, { ImageProps } from "next/image";

export default function AnimatedImage(props: ImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: bigger range for more visible movement
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  // Scale: starts much smaller, grows fully into view
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.6, 1.05, 1.05, 0.85]);
  // Rotate: gentle tilt
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 1.5]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ y, scale, rotate }}
    >
      <Image {...props} />
    </motion.div>
  );
}
