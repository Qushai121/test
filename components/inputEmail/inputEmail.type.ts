import type { Slot } from "vue";

export type InputEmailProps = {
  // berguna untuk validasi dari be return {fieldName : "erroMessge" }
  // @default "email"
  //   field?: string;

  //   label input
  //   label?: string;

  //   berguna untuk set initial value
  modelValue?: string;

  placeholder?: string;

  inputClass?: string;

  //   berguna untuk validasi jika dibutuhkan
  // @default false
  //   isRequired?: boolean;
};

export type InputEmailEvents = {
  "update:modelValue": [value: string];
  addonClick: [addonType: 'addon-right'];
};

export type InputEmailSlots = {
  "addon-right": Slot;
};
