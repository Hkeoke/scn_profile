"use client";

import { useEffect, useState } from "react";

interface SkillCircularProgressProps {
  percentage: number;
  skill: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  duration?: number;
}

export const SkillCircularProgress = ({
  percentage = 75,
  skill = "Skill",
  size = 120,
  strokeWidth = 4,
  color = "#f59e0b", // Amber/gold color
  duration = 1500,
}: SkillCircularProgressProps) => {
  const [progress, setProgress] = useState(0);

  // Calculate circle properties
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Center position
  const center = size / 2;

  useEffect(() => {
    // Animate the progress
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#333333"
            strokeWidth={strokeWidth}
          />

          {/* Progress circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${center} ${center})`}
            style={{
              transition: `stroke-dashoffset ${duration}ms ease-in-out`,
            }}
          />
        </svg>

        {/* Percentage text */}
        <div
          className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white"
          style={{
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: progress > 0 ? 1 : 0,
          }}
        >
          {Math.round(progress)}%
        </div>
      </div>

      {/* Skill label */}
      <div className="mt-3 text-center text-md font-medium text-gray-300">
        {skill}
      </div>
    </div>
  );
};
