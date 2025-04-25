<script setup lang="ts">
import type { ButtonEvents, ButtonProps } from "./button.type";

defineEmits<ButtonEvents>();
const props = withDefaults(defineProps<ButtonProps>(), {
  severity: "primary",
  useBackground: true,
});

const btnClassSeverity = computed(() => {
  switch (props.severity) {
    case "primary": {
      return "text-white bg-primary";
    }
    case "error": {
      return "text-white bg-red-1";
    }
    case "contrast": {
      return "text-dark bg-light-gray-2";
    }
  }
});
</script>

<template>
  <button
    @click="$emit('click', $event)"
    class="px-[18px] py-2.5 cursor-pointer font-medium text-sm rounded-[100px]"
    :class="[btnClassSeverity, props.class]"
  >
    <slot />
  </button>
</template>
