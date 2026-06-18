"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import SectionHeading from "../common/section-heading";
import {
  experiences,
  achievements,
} from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section
      className="relative py-28"
      id="experience"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-20 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl" />

      <Container>
        <SectionHeading
          subtitle="Experience & Achievements"
          title="Technical Journey"
        />

        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* EXPERIENCE */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold">
              Experience
            </h3>

            <div className="space-y-6">
              {experiences.map(
                (item, index) => (
                  <motion.div
                    key={item.organization}
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      
                      <div>
                        <h4 className="text-xl font-semibold">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-blue-400">
                          {item.organization}
                        </p>
                      </div>

                      <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-400">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-4 leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold">
              Achievements
            </h3>

            <div className="grid gap-5">
              {achievements.map(
                (item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:-translate-y-1"
                  >
                    <h4 className="text-xl font-semibold transition-colors group-hover:text-blue-400">
                      {item.title}
                    </h4>

                    <p className="mt-3 leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}