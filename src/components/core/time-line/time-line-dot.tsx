import { cn } from "@/lib/utils";
import React from "react";

interface TimeLineDotProps {
  isFirst?: boolean;
  bg?: string;
}

const TimeLineDot = ({ isFirst, bg }: TimeLineDotProps) => {
  return (
    <div
      className={cn(
        "absolute w-4 h-4 rounded-full -left-8 mt-2 transform -translate-y-1/2 ",
        isFirst ? "bg-primary animate-ping" : "bg-gray-500",
        bg,
      )}
    />
  );
};

export default TimeLineDot;
