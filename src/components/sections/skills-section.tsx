"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import SectionHeading from "../common/section-heading";
import SkillCard from "../common/skill-card";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />

      <Container>
        <SectionHeading
          subtitle="Tech Stack"
          title="Technologies I Work With"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <SkillCard
                title={category.title}
                skills={category.skills}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}