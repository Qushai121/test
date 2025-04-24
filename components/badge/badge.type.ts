import type { VNode } from "vue";
import type { Severity } from "~/types/severity.type";

export type BadgeProps = {
  // change the color or button
  // @default "primary"
  severity?: Severity;

  //   class can overide severity
  class?: any;
};

export type BadgeSlots = {
  default(): VNode;
};
