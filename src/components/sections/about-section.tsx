"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import SectionHeading from "../common/section-heading";

const stats = [
  {
    number: "250+",
    label: "DSA Problems",
  },
  {
    number: "7+",
    label: "Projects Built",
  },
  {
    number: "3rd",
    label: "Year ECE Student",
  },
  {
    number: "2027",
    label: "Graduation",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28"
    >
      <Container>
        <SectionHeading
          subtitle="About Me"
          title="Passionate About Building Scalable Digital Experiences"
        />

        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-zinc-400">
              I&apos;m Shubham Kumar, a Full Stack Developer and
              Electronics & Communication Engineering student at
              Jabalpur Engineering College.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              I enjoy building scalable backend systems,
              modern frontend applications, and solving
              real-world problems through clean and efficient code.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              My current focus is on full-stack development,
              system design fundamentals, backend engineering,
              and creating high-performance user experiences.
            </p>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h3 className="text-4xl font-bold">
                  {item.number}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}