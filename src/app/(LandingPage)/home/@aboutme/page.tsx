"use client";

import Wax from "@public/images/transparant-wax.png";
import AnimatedImage from "@/components/ui/AnimatedImage";
import { Button } from "@/components/ui/button";
import RubiStand from "@public/images/profileStand.png";
import RubiMic from "@public/images/rubi-mic.jpeg"
import Image from "next/image";
import { motion } from "motion/react";

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutMeSlot() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen bg-brand-bg px-10 max-sm:px-4 max-sm:py-10"
    >
      <div className="flex items-center gap-12 max-w-5xl max-sm:flex-col max-sm:gap-8">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="shrink-0"
        >
          <Image
            src={RubiMic}
            alt="Rubi Aye Nyein San"
            width={350}
            height={350}
            className="rounded-2xl"
          />
        </motion.div>
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg leading-relaxed text-brand-text-secondary space-y-4"
        >
          <h2 className="scroll-m-20 text-center text-4xl pr-2 font-extrabold tracking-tight text-brand-text-bg text-brand-text mb-8">
            About Me.
          </h2>
          <div className="text-2xl font-light font-stretch-condensed text-justify">
            <p>
              I'm <span className="text-4xl">Aye Nyein San</span>, a Software
              Engineer based in Thailand. I started with frontends, but kept
              finding myself more curious about what was happening behind the
              scenes — the servers, the pipelines, the infrastructure holding it
              all together.
            </p>
            <p>
              Now I gravitate toward backend engineering, cloud architecture,
              and MLOps. There's something satisfying about a clean CI/CD
              pipeline or a model that actually serves reliably in production —
              the kind of work that's invisible when it's done right.
            </p>
            <p>
              I'm always poking at new tools in the cloud-native and ML
              engineering space. Good infrastructure is quiet, and I like
              building things that stay quiet.
            </p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="text-brand-text-secondary mt-4 text-xl italic"
            >
              <span className="relative inline-block w-3 h-3 mr-2 align-middle">
                <motion.span
                  className="absolute inset-0 rounded-full bg-brand dark:bg-brand-text"
                  animate={{
                    y: [0, -4, 0],
                    boxShadow: [
                      "0 0 4px 1px var(--glow-color)",
                      "0 0 12px 4px var(--glow-color)",
                      "0 0 4px 1px var(--glow-color)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.span
                  className="absolute inset-0 rounded-full bg-brand/50 dark:bg-brand-text/50"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
              TimeZone: Indonesia (GMT+7)
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="mt-4"
            >
              <Button onClick={()=> {window.alert("I need to implement this one!")}}>Download Resume</Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
