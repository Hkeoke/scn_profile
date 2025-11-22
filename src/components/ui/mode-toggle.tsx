"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion as m, Variants } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

const raysVariants: Variants = {
  hidden: {
    strokeOpacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    strokeOpacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const rayVariant: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    scale: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      pathLength: { duration: 0.3 },
      opacity: { duration: 0.1 },
      scale: { duration: 0.3 },
    },
  },
};

const sunPath =
  "M20 27.6667C24.2342 27.6667 27.6667 24.2342 27.6667 20C27.6667 15.7658 24.2342 12.3333 20 12.3333C15.7658 12.3333 12.3333 15.7658 12.3333 20C12.3333 24.2342 15.7658 27.6667 20 27.6667Z";
const moonPath =
  "M18.33 35.33C27.7188 35.33 35.33 27.7188 35.33 18.33C21.5335 25.6886 12.9301 19.2817 18.33 1.33C8.94116 1.33 1.33 8.94116 1.33 18.33C1.33 27.7188 8.94116 35.33 18.33 35.33Z";

const toggleVariant: Variants = {
  moon: {
    fillOpacity: 0.35,
    strokeOpacity: 1,
    d: moonPath,
  },
  sun: {
    fillOpacity: 0.35,
    strokeOpacity: 1,
    d: sunPath,
  },
};

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const { t } = useTranslation("common");

  return (
    <div className="flex items-center justify-center">
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-transparent hover:bg-transparent shadow-none hover:[&>svg]:stroke-primary hover:[&>svg]:fill-primary [&>svg]:fill-color [&>svg]:stroke-color "
        size="sm"
      >
        <m.svg
          strokeWidth={2}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="none"
        >
          <m.path
            variants={toggleVariant}
            initial={{ fillOpacity: 0, strokeOpacity: 0 }}
            animate={theme === "dark" ? "moon" : "sun"}
            d={sunPath}
          />

          <m.g
            variants={raysVariants}
            initial="hidden"
            animate={theme === "light" ? "visible" : "hidden"}
          >
            <m.path variants={rayVariant} d="M20 0.833333V4.66667" />
            <m.path variants={rayVariant} d="M20 35.3333V39.1667" />
            <m.path
              variants={rayVariant}
              d="M6.44917 6.44917L9.15167 9.15167"
            />
            <m.path
              variants={rayVariant}
              d="M30.8483 30.8483L33.5508 33.5508"
            />
            <m.path variants={rayVariant} d="M0.833332 20H4.66667" />
            <m.path variants={rayVariant} d="M35.3333 20H39.1667" />
            <m.path
              variants={rayVariant}
              d="M9.15167 30.8483L6.44917 33.5508"
            />
            <m.path
              variants={rayVariant}
              d="M33.5508 6.44917L30.8483 9.15167"
            />
          </m.g>
        </m.svg>
      </Button>
    </div>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          size="icon"
          className="hover:cursor-pointer text-color hover:[&>svg]:text-primary"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {t("mode.light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {t("mode.dark")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
