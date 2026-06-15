"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } =
    useTheme();

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-xl transition-all hover:scale-105"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}