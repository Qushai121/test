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
      return "severity__primary-bg-text";
    }
    case "error": {
      return "severity__error-bg-text";
    }
    case "contrast": {
      return "severity__contrast-bg-text";
    }
  }
});
</script>

<template>
  <button
    @click="$emit('click', $event)"
    class="btn__comp"
    :class="[btnClassSeverity, props.class]"
  >
    <slot />
  </button>
</template>
