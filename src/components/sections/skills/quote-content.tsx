"use client";
import { User } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import QuoteIcon from "@/components/icons/quote-icon";
import { useTranslation } from "react-i18next";

type Props = {
  quote: string;
  autor: string;
  image: string;
  rol: string;
};
const QuoteContent = ({ autor, rol, image, quote }: Props) => {
  const { t } = useTranslation("resumen");
  return (
    <div className="flex flex-col w-full px-4 lg:px-8 gap-4 pt-5 lg:mt-10 ">
      <div className="px-4 py-2 relative">
        <p className="text-lg text-center text-color italic font-md">
          {t(quote)}
        </p>
        <QuoteIcon className="absolute -top-1 -left-1 w-3 h-3" />
        <QuoteIcon className="absolute bottom-0 -right-1 w-3 h-3  rotate-180" />
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <Avatar className="w-20 h-20">
          <AvatarImage src={image} alt="perfil" />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
        <h1 className="text-color font-bold text-xl mt-4">{autor}</h1>
        <p className="text-color-secondary font-light text-center text-md max-w-[20rem]">
          {t(rol)}
        </p>
      </div>
    </div>
  );
};

export default QuoteContent;
