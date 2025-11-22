import React from "react";
import { format as dateFormat } from "date-fns";
import { cn } from "@/lib/utils";

interface Props {
  value: string | Date | undefined;
  format?: string;
}

export const DateValue: React.FC<Props & { className?: string }> = ({
  value,
  format = "dd MMM yyyy",
  className,
}) => {
  const getValidDate = (value: string | Date | undefined): Date => {
    if (value instanceof Date) {
      return value;
    }

    if (typeof value === "string") {
      const parsedDate = new Date(value);
      return isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
    }

    return new Date();
  };

  const validDate = getValidDate(value);

  return (
    <div className={cn("text-md font-medium ", className)}>
      {dateFormat(validDate, format)}
    </div>
  );
};

export default DateValue;
