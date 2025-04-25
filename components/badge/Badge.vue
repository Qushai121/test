<script lang="ts" setup>
import type { BadgeProps } from "./badge.type";

const props = withDefaults(defineProps<BadgeProps>(), {
  severity: "primary",
});

const getClassBySeverity = computed(() => {
  switch (props.severity) {
    case "primary": {
      return "severity__primary-bg-text";
    }
    case "error": {
      return "severity__error-bg-text";
    }
  }
});
</script>

<template>
  <div
    class="badge__comp"
    :class="[getClassBySeverity, props.class]"
  >
    <slot />
  </div>
</template>
