"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always render the same structure - default to light theme for initial render
  // This ensures server and client render identical HTML
  // After mount, use actual theme value
  const isDark = mounted && theme === "dark";

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="relative w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700 p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 cursor-pointer"
      aria-label="Toggle theme"
      type="button"
    >
      <div
        className={`absolute top-1 w-6 h-6 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out ${
          isDark ? "left-[24px]" : "left-1"
        }`}
        suppressHydrationWarning
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-amber-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </div>
    </button>
  );
}

