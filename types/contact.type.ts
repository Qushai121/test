// Contact usually can be dynamic from db so that admin can perform Crud to update the new contact

import type { IconOptions } from "~/components/icon/icon.type";

// there for in this case can be just js object
export type Contact = {
  icon: IconOptions;
  //   data used to store data like email name, phone number, @instgramAccount
  data: string;
  link?: string;
};
