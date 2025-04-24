import type { VNode } from "vue";
import type { Severity } from "~/types/severity.type";

export type ButtonProps = {
  // change the color or button
  severity: Severity;
  // used to determine whether button bg is should be shouw or no
  useBackground: boolean;
  //   class can overide useBackground and severity
  class: any;
};

export type ButtonEvents = {
  // trigger when button clicked
  click: [event: any];
};

export type ButtonSlots = {
  //Content inside of button
  default(): VNode;
};
