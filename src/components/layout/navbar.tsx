"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./container";
import { useActiveSection } from "@/hooks/use-active-section";
import ThemeToggle from "../common/theme-toggle";

const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
  name: "Experience",
  href: "#experience",
 },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <ThemeToggle />
          {/* LOGO */}
          <Link
            href="/"
            className="text-xl font-bold tracking-wide"
          >
            Portfolio
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex">
  {navLinks.map((link) => {
    const sectionName =
      link.href.replace("#", "");

    const isActive =
      activeSection === sectionName;

    return (
      <Link
        key={link.name}
        href={link.href}
        className={`relative text-sm transition-colors ${
          isActive
            ? "text-white"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        {link.name}

        {isActive && (
          <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-500" />
        )}
      </Link>
    );
  })}
</nav>

          {/* RESUME BUTTON */}
          <Link
            href="/resume.pdf"
            target="_blank"
            className="hidden rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium backdrop-blur-lg transition-all hover:border-white/20 hover:bg-white/10 md:block"
          >
            Resume
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <Container>
              <div className="flex flex-col py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="py-4 text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="mt-4 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-medium backdrop-blur-lg"
                >
                  Resume
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}