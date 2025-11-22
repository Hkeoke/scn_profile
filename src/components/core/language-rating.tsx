import { cn } from "@/lib/utils";

interface LanguageProps {
  name: string;
  level: number;
  maxLevel?: number;
  className?: string;
}

export const LanguageRating = ({
  name,
  level,
  maxLevel = 10,
  className,
}: LanguageProps) => {
  return (
    <div className={cn("flex flex-col gap-1 w-full", className)}>
      <h1>{name}</h1>
      <div className="flex w-full gap-4">
        {Array.from({ length: maxLevel }).map((_, index) => (
          <div
            key={index}
            className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full  ${index < level ? "bg-primary" : "bg-muted"}`}
          />
        ))}
      </div>
    </div>
  );
};
