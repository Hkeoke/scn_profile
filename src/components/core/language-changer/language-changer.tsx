"use client";
import React, { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import i18nConfig from "../../../../next-i18next.config";

type Props = {
  locale: string;
};

const LanguageChanger = ({ locale }: Props) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const { t } = useTranslation("common");

  // Synchronize the current language with the URL language
  useEffect(() => {
    const urlLocale = currentPathname.split("/")[1]; // Extrae el idioma de la URL
    if (urlLocale !== i18n.language) {
      i18n.changeLanguage(urlLocale).then(); // Cambia el idioma de i18n
    }
  }, [currentPathname, i18n]);

  // Change language and sync URL
  const handleChange = useCallback(
    (lang: string) => {
      if (lang !== i18n.language) {
        i18n.changeLanguage(lang).then(); // Change language in i18n

        // Set the cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `NEXT_LOCALE=${lang};expires=${date.toUTCString()};path=/`;

        // Build the new URL
        const isDefaultLocale =
          locale === i18nConfig.defaultLocale && !i18nConfig?.defaultLocale;
        const newPath = isDefaultLocale
          ? `/${lang}${currentPathname}`
          : currentPathname.replace(`/${locale}`, `/${lang}`);
        router.push(newPath);
        router.refresh();
      }
    },
    [i18n, locale, currentPathname, router],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          size="icon"
          className="hover:cursor-pointer text-color hover:[&>svg]:text-primary"
        >
          <Globe className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all  " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18nConfig?.locales?.map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleChange(code)}
            className={cn(
              "cursor-pointer",
              currentLocale === code ? "font-bold text-primary" : "",
            )}
          >
            {t(`languages.${code}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default memo(LanguageChanger);
