import type { MenuItem } from "~/types/menuItem.type";

export const landingPageNavBarOptions: MenuItem[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Promotions",
    url: "/promotions",
    badge: {
      name: "HOT",
      severity: "error",
    },
  },
  {
    name: "Blogs",
    url: "/blogs",
  },
  {
    name: "Contact Us",
    url: "/contact-us",
  },
];
