"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  live,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* IMAGE */}
      <div className="relative h-[260px] overflow-hidden">
        
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* HOVER BUTTONS */}
        <div className="absolute bottom-5 left-5 flex gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
          
          <Link
            href={github}
            target="_blank"
            className="rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl transition-all hover:bg-white hover:text-black"
          >
            <Globe size={18} />
          </Link>

          <Link
            href={live}
            target="_blank"
            className="rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl transition-all hover:bg-white hover:text-black"
          >
            <Globe size={18} />
          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-7">
        
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-4 leading-relaxed text-zinc-400">
          {description}
        </p>

        {/* TECH STACK */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-white/10 bg-black/30 px-3 py-1 text-sm text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}