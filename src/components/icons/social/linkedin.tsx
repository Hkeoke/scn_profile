import { cn } from "@/lib/utils";
import React from "react";

const LinkedinIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("icon", className)}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 10-4 0" />
      <path d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4z" />
    </svg>
  );
};

export default LinkedinIcon;
