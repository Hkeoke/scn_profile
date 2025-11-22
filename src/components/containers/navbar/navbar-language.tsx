import {
  NavigationMenu,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import LanguageChanger from "../../core/language-changer/language-changer";
import { ModeToggle } from "@/components/ui/mode-toggle";

export async function VerticalLanguageNav({ locale }: { locale: string }) {
  return (
    <nav>
      <NavigationMenu className="lg:h-auto w-21 p-2 bg-card rounded-md">
        <NavigationMenuList className="flex flex-col gap-2 items-center justify-center">
          <ModeToggle />
          <LanguageChanger locale={locale} />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
