import React from "react";
import { DrawerDemo } from "./drawer-menu";
import { ModeToggle } from "../ui/mode-toggle";
import LanguageChanger from "../core/language-changer/language-changer";

import Logo from "../core/logo";
import config from "@/lib/admin/config";

const NavarMobile = async ({ locale }: { locale: string }) => {
  return (
    <div className="flex lg:hidden justify-between items-center ">
      <div className="flex flex-row gap-2 items-center">
        <Logo className="w-6 h-6" />
        <p>{config.env.app.name}</p>
      </div>
      <div className="flex flex-row gap-1">
        <LanguageChanger locale={locale} />
        <ModeToggle />
        <DrawerDemo />
      </div>
    </div>
  );
};

export default NavarMobile;
