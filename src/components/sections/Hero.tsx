"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const typingText = "Hi, I’m Abdullah — a Frontend Developer in Dubai ✨";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText[index]);
        setIndex(index + 1);
      }, 60); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="py-20 px-4 max-w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column - Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-bold min-h-[120px] md:min-h-[150px] leading-snug"
          >
            <span className="whitespace-pre-line">{displayedText}</span>
            {index < typingText.length && (
              <span className="inline-block w-2 h-6 ml-1 bg-black animate-pulse" />
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
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
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/developer.png"
            alt="Web development illustration"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
