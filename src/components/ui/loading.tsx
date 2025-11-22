"use client";

import type * as React from "react";
import { cn } from "@/lib/utils";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "spinner" | "dots" | "pulse";
}

export function Loading({
  size = "md",
  variant = "spinner",
  className,
  ...props
}: LoadingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  if (variant === "spinner") {
    return (
      <div
        className={cn("relative", sizeClasses[size], className)}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <div className="absolute inset-0 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        <span className="sr-only">Loading</span>
      </div>
    );
  }

  if (variant === "dots") {
    const dotSize = {
      sm: "h-1 w-1",
      md: "h-2 w-2",
      lg: "h-3 w-3",
    };

    return (
      <div
        className={cn("flex items-center justify-center gap-2", className)}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <div
          className={cn(
            "rounded-full bg-primary animate-bounce",
            dotSize[size],
          )}
          style={{ animationDelay: "0ms" }}
        />
        <div
          className={cn(
            "rounded-full bg-primary animate-bounce",
            dotSize[size],
          )}
          style={{ animationDelay: "150ms" }}
        />
        <div
          className={cn(
            "rounded-full bg-primary animate-bounce",
            dotSize[size],
          )}
          style={{ animationDelay: "300ms" }}
        />
        <span className="sr-only">Loading</span>
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div
        className={cn("relative flex items-center justify-center", className)}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <div className={cn("bg-primary/20 rounded-full", sizeClasses[size])} />
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-primary animate-ping opacity-75",
            sizeClasses[size],
          )}
        />
        <span className="sr-only">Loading</span>
      </div>
    );
  }

  return null;
}

// Specialized components for convenience
export function Spinner({
  size,
  className,
  ...props
}: Omit<LoadingProps, "variant">) {
  return (
    <Loading variant="spinner" size={size} className={className} {...props} />
  );
}

export function DotsLoader({
  size,
  className,
  ...props
}: Omit<LoadingProps, "variant">) {
  return (
    <Loading variant="dots" size={size} className={className} {...props} />
  );
}

export function PulseLoader({
  size,
  className,
  ...props
}: Omit<LoadingProps, "variant">) {
  return (
    <Loading variant="pulse" size={size} className={className} {...props} />
  );
}
