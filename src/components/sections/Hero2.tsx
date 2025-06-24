"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero2() {
  return (
    <section className="py-20 px-4 w-full " id="hero">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl px-5  ">
        {/* Left Column - Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold leading-snug"
          >
            <span className="typing-animation block">
              Hi, I’m Abdullah — a Frontend Developer in Dubai ✨
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg text-gray-600"
          >
            I build fast, SEO-optimized and beautiful websites using Next.js,
            Tailwind, and modern web standards.
          </motion.p>
        </div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-end"
        >
          <Image
            src="/developer.png"
            alt="Web development illustration"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
