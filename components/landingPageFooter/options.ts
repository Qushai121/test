import type { Contact } from "~/types/contact.type";
import type { MenuItem } from "~/types/menuItem.type";

export const contactEmail: Contact = {
  data: "elemesid@gmail.com",
  icon: "mail",
};

export const contactPhone: Contact = {
  data: "0888 1111 2222",
  icon: "phone",
};

export const contactInstagram: Contact = {
  data: "0888 1111 2222",
  icon: "instagram",
};

export const aboutUsMenuItems: MenuItem[] = [
  {
    name: "About Us",
    url: "/about-us",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
  {
    name: "Report Problem",
    url: "/contact-problem",
  },
];
