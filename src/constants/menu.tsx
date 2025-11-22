import {
  BookMarked,
  Eye,
  FlaskRound,
  LaptopMinimal,
  Send,
  User,
} from "lucide-react";

export const menu_links = [
  {
    name: "common:menu.about",
    href: "/about-me",
    icon: <User className="h-20 w-20" />,
  },
  {
    name: "common:menu.resumen",
    href: "/resumen",
    icon: <FlaskRound className="h-20 w-20" />,
  },
  {
    name: "common:menu.works",
    href: "/works",
    icon: <Eye className="h-20 w-20" />,
  },
  {
    name: "common:menu.blog",
    href: "/blog",
    icon: <BookMarked className="h-20 w-20" />,
  },
  {
    name: "common:menu.contact",
    href: "/contact",
    icon: <Send className="h-20 w-20" />,
  },
  {
    name: "common:products",
    href: "/products",
    icon: <LaptopMinimal className="h-20 w-20" />,
  },
];
