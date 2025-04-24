import type { Severity } from "./severity.type";

export type MenuItem = {
  name: string;
  url: string;
  badge?: {
    name: string;
    severity: Severity;
  };
};
