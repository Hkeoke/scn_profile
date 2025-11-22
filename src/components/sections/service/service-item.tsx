"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { IAboutMeService } from "@/definitions/about-me";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
export const ServiceIcon = ({ service }: { service: IAboutMeService }) => {
  const { t } = useTranslation("about-me");
  return (
    <article
      className={cn(
        "flex flex-col gap-2 py-2 ",
        service?.span ? "col-span-1 md:col-span-2" : "col-span-1",
      )}
    >
      <Avatar className="w-15 h-15 border-[1px] border-dashed border-secondary p-1 ">
        <AvatarFallback className="bg-primary/80">
          {service?.icon}
        </AvatarFallback>
      </Avatar>
      <h1 className="font-bold">{t(service?.title)}</h1>
      <p className="font-normal text-md sm:text-sm ">
        {t(service?.description)}
      </p>
    </article>
  );
};
