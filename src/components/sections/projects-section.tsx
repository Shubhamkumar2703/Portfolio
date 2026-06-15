"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import SectionHeading from "../common/section-heading";
import ProjectCard from "../common/project-card";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-28"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl" />

      <Container>
        <SectionHeading
          subtitle="Featured Projects"
          title="Selected Work & Engineering Projects"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}