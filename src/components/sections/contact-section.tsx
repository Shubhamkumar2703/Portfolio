"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import SectionHeading from "../common/section-heading";
import { Mail, Globe, UserPlus } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to send message"
        );
      }

      toast.success(
        "Message sent successfully 🚀"
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28"
    >
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <Container>
        <SectionHeading
          subtitle="Contact"
          title="Let’s Build Something Amazing Together"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            <p className="max-w-lg text-lg leading-relaxed text-zinc-400">
              I&apos;m currently open to internships,
              freelance opportunities,
              and exciting development projects.
            </p>

            <div className="mt-10 space-y-5">
              
              <a
                href="mailto:shubham27034@gmail.com"
                className="flex items-center gap-4 text-zinc-300 transition-colors hover:text-white"
              >
                <Mail size={20} />
                shubham27034@gmail.com
              </a>

              <Link
                href="https://github.com/"
                target="_blank"
                className="flex items-center gap-4 text-zinc-300 transition-colors hover:text-white"
              >
                <Globe size={20} />
                GitHub
              </Link>

              <Link
                href="https://linkedin.com/"
                target="_blank"
                className="flex items-center gap-4 text-zinc-300 transition-colors hover:text-white"
              >
                <UserPlus size={20} />
                LinkedIn
              </Link>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="space-y-6">
              
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition-all focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition-all focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition-all focus:border-blue-500"
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full rounded-xl bg-white px-6 py-4 font-medium text-black transition-all hover:scale-[1.02] disabled:opacity-50"
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}