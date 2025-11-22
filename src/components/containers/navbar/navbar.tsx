import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { VerticalLanguageNav } from "./navbar-language";
import { NavLinks } from "./navbar-link";

type Props = {
  locale: string;
  className?: string;
};

// Componente Principal
export async function VerticalNav({ className, locale }: Props) {
  return (
    <header className={cn("flex-col gap-2 hidden lg:flex", className)}>
      <VerticalLanguageNav locale={locale} />
      <nav className="h-auto w-full md:w-21 p-2 md:mr-4 lg:bg-card rounded-md">
        {/* Lista de Enlaces */}
        <NavigationMenu orientation="horizontal" className="w-full">
          <NavigationMenuList className="grid grid-cols-1 gap-2 md:gap-4 mx-auto isZoom">
            <NavLinks />
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
