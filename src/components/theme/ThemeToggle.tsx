// src/components/theme/ThemeToggle.tsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle color scheme"
      className="inline-flex items-center justify-center rounded-md  px-2.5 py-2
                 border-zinc-200 text-zinc-700 
                 dark:border-zinc-700 dark:text-zinc-200 "
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5  hover:text-yellow-400 transition-colors" />
      ) : (
        <Moon className="h-5 w-5  hover:text-blue-400 transition-colors" />
      )}
    </button>
  );
}
