import type { Severity } from "~/types/severity.type";

export type IconProps = {
  // determine color of the icon using severity string
  //   @dafault "primary"
  severity?: Severity;

  //class can overide severity and icon props
  class?: string;

  icon: IconOptions;
};

export type IconOptions = "menu" | "mail" | "phone" | "instagram" | "star" | "arrow-left" | "arrow-right"; 
