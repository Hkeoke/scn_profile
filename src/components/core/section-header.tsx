"use client";
import TransTypography from "@/components/core/trans-typography";
import { AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Avatar } from "@radix-ui/react-avatar";
import React, { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  className?: string;
};
const SectionHeader = ({ icon, title, className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center gap-4 fade-line-bottom pb-4",
        className,
      )}
    >
      <Avatar className="w-9 h-9 lg:w-12 lg:h-12">
        <AvatarFallback className="text-primary border-primary border bg-transparent p-2 md:p-0">
          {icon}
        </AvatarFallback>
      </Avatar>
      <TransTypography
        className="text-lg lg:text-xl font-bold uppercase"
        message={title}
      />
    </div>
  );
};

export default SectionHeader;
