<script lang="ts" setup>
import type { BadgeProps } from "./badge.type";

const props = withDefaults(defineProps<BadgeProps>(), {
  severity: "primary",
});

const getClassBySeverity = computed(() => {
  switch (props.severity) {
    case "primary": {
      return "text-white bg-primary";
    }
    case "error": {
      return "text-white bg-red-1";
    }
  }
});
</script>

<template>
  <div
    class="font-bold leading-[14px] text-[8px] w-fit px-[9px] pt-[3px] pb-[2px] rounded-lg flex items-center"
    :class="[getClassBySeverity, props.class]"
  >
    <slot />
  </div>
</template>
