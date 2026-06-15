"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-20" />

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300 transition-all hover:border-blue-500/40 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}