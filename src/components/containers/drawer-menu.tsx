import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import { NavLinks } from "./navbar/navbar-link";
import Logo from "../core/logo";

export function DrawerDemo() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button
          variant="link"
          className="p-0 hover:cursor-pointer text-color hover:[&>svg]:text-primary"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="!max-w-[100px] bg-card  border-none shadow-none p-4">
        <header id="menu" className={"flex-col gap-4 flex"}>
          <nav className="h-auto w-full md:w-18 p-2 md:mr-4 lg:bg-card rounded-md">
            {/* Lista de Enlaces */}
            <NavigationMenu orientation="horizontal" className="w-full">
              <NavigationMenuList className="grid grid-cols-1 gap-2 md:gap-4 mx-auto isZoom">
                <Logo className="w-10 h-10 mb-2 mx-auto" />
                <NavLinks />
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </header>
      </DrawerContent>
    </Drawer>
  );
}
