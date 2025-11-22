"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TypingTitleProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBetween?: number;
  className?: string;
  textClassName?: string;
  height?: number;
}

export const TypingTitle = ({
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBetween = 1000,
  className,
  textClassName,
  height = 16,
}: TypingTitleProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let pauseTimer: NodeJS.Timeout;

    const animate = () => {
      const currentString = texts[currentTextIndex];
      const timeout = isDeleting ? deletingSpeed : typingSpeed;

      timer = setTimeout(() => {
        if (!isDeleting) {
          // Escribiendo
          setCurrentText(currentString.substring(0, currentText.length + 1));
        } else {
          // Borrando
          setCurrentText(currentString.substring(0, currentText.length - 1));
        }

        // Cambiar entre modos
        if (!isDeleting && currentText === currentString) {
          pauseTimer = setTimeout(() => setIsDeleting(true), pauseBetween);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, timeout);
    };

    animate();

    return () => {
      clearTimeout(timer);
      clearTimeout(pauseTimer);
    };
  }, [
    currentText,
    isDeleting,
    currentTextIndex,
    texts,
    deletingSpeed,
    typingSpeed,
    pauseBetween,
  ]);

  if (!texts || texts?.length === 0) return null;

  return (
    <div className={cn("inline-flex items-center", className)}>
      <h1 className={cn("text-md font-normal leading-1", textClassName)}>
        {currentText}
      </h1>
      <span
        className="ml-1 w-0.5 animate-blink bg-primary"
        style={{ height }}
      />
    </div>
  );
};
