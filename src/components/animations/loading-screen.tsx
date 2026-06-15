"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center">
            
            {/* GLOW */}
            <div className="absolute h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

            {/* NAME */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative z-10 text-5xl font-bold tracking-wide md:text-7xl"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Shubham
              </span>
            </motion.h1>

            {/* LOADING LINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 220 }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
              }}
              className="mt-8 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}