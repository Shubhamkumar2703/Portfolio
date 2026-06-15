"use client";

import { useEffect, useState } from "react";

const sections = [
  "about",
  "skills",
  "projects",
  "contact",
];

export function useActiveSection() {
  const [activeSection, setActiveSection] =
    useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 200;

      sections.forEach((sectionId) => {
        const section =
          document.getElementById(sectionId);

        if (!section) return;

        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return activeSection;
}