"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import { UserPlus,Globe, Mail } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-75 w-75 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
              Full Stack Developer
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Shubham Kumar
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              I build scalable full-stack applications with modern
              technologies focused on performance, clean UI, and
              seamless user experiences.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              
              <Link href="#projects">
                <button className="rounded-xl bg-white px-6 py-3 font-medium text-black transition-all hover:scale-105">
                  View Projects
                </button>
              </Link>

              <Link href="#contact">
                <button className="rounded-xl border border-zinc-700 bg-zinc-900/50 px-6 py-3 font-medium backdrop-blur-md transition-all hover:border-zinc-500">
                  Contact Me
                </button>
              </Link>
            </div>

            {/* SOCIALS */}
            <div className="mt-10 flex items-center gap-5">
              
              <Link
                href="https://github.com/Shubhamkumar2703/"
                target="_blank"
                className="rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all hover:border-zinc-600 hover:text-white"
              >
                <Globe size={20} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/shubham-kumar27034/"
                target="_blank"
                className="rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all hover:border-zinc-600 hover:text-white"
              >
                <UserPlus size={20} />
              </Link>

              <Link
                href="mailto:shubham27034@gmail.com"
                className="rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all hover:border-zinc-600 hover:text-white"
              >
                <Mail size={20} />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="space-y-5">
                
                <div>
                  <p className="text-sm text-zinc-500">
                    Current Focus
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    Full Stack Development
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Tech Stack
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Java",
                      "Spring Boot",
                      "React",
                      "TypeScript",
                      "Next.js",
                      "Node.js",
                      "MongoDB",
                      "PostgreSQL",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Based In
                  </p>

                  <h3 className="mt-1 text-lg font-medium">
                    Indore, India 🇮🇳
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Scroll
            </span>

            <div className="h-10 w-px bg-linear-to-b from-zinc-500 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}