"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FFFBF5]">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft gradient blobs */}
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#4A7C6F]/[0.06] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#D4943A]/[0.06] blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#4A7C6F]/[0.03] blur-3xl" />

        {/* Subtle staff lines */}
        <div className="absolute top-1/4 left-0 right-0 opacity-[0.04]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="mb-3 h-px bg-[#2C2418]" />
          ))}
        </div>

        {/* Floating musical notes */}
        {["♪", "♫", "♩", "♬"].map((note, i) => (
          <motion.div
            key={i}
            className="absolute font-serif text-[#4A7C6F]/[0.07] select-none pointer-events-none"
            style={{
              top: `${20 + i * 18}%`,
              left: `${10 + i * 22}%`,
              fontSize: `${3 + i * 1.5}rem`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + i,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          >
            {note}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4A7C6F]/20 bg-[#4A7C6F]/[0.08] px-4 py-1.5 text-sm font-medium text-[#4A7C6F]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4A7C6F] animate-pulse" />
            Now accepting new students for 2026
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl font-bold leading-tight tracking-tight text-[#2C2418] sm:text-6xl lg:text-7xl"
        >
          Learn Piano with{" "}
          <span className="bg-gradient-to-r from-[#4A7C6F] via-[#3A6357] to-[#4A7C6F] bg-clip-text text-transparent">
            Heart & Soul
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-[#8B7E6A] sm:text-xl leading-relaxed"
        >
          Personalised piano lessons for all ages and skill levels.
          Whether you&apos;re a complete beginner or looking to master your craft,
          I&apos;ll meet you where you are.
        </motion.p>

        {/* Location tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-sm text-[#A89F91]"
        >
          Based in Ourimbah, Central Coast NSW &bull; Online lessons available worldwide
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href="/lessons" size="lg">
            Start Your Journey
          </Button>
          <Button href="/resources" variant="outline" size="lg">
            Browse Resources
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[#A89F91]"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {["bg-[#4A7C6F]", "bg-[#5D8E81]", "bg-[#D4943A]"].map((bg, i) => (
                <div key={i} className={`h-8 w-8 rounded-full ${bg} border-2 border-[#FFFBF5] flex items-center justify-center text-xs font-bold text-white`}>
                  {["S", "T", "J"][i]}
                </div>
              ))}
            </div>
            <span>Trusted by 50+ students</span>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="h-4 w-4 text-[#D4943A]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1">5.0 rating</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#A89F91]"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 4v16m0 0l-5-5m5 5l5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
