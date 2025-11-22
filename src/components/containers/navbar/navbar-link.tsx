"use client";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { menu_links } from "@/constants/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export const NavLinks = () => {
  const { t } = useTranslation("common");
  const pathName = usePathname();
  const isActive = useCallback(
    (path: string) => {
      const normalizedPath = path.startsWith("/") ? path : `/${path}`;
      const pathWithoutLocale = pathName.replace(/^\/(es|en)/, "") || "/";
      return normalizedPath === pathWithoutLocale;
    },
    [pathName],
  );

  return menu_links.map((link) => (
    <NavigationMenuItem key={link.name} className="w-full relative">
      <Link href={link.href} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            "flex items-center gap-1 md:gap-2 p-2 uppercase rounded-md transition-colors text-color",
            isActive(link.href) && "text-primary [&>svg]:stroke-primary ring-1",
          )}
        >
          {link.icon}
          <span className="text-xs text-center">{t(link.name)}</span>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  ));
};
