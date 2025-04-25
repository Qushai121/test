<script lang="ts" setup>
import type { IconProps } from "./icon.type";

const props = defineProps<IconProps>();

const getClassBySeverity = computed(() => {
  switch (props.severity) {
    case "primary": {
      return "text-primary";
    }
  }
});
</script>

<template>
  <i
    class="icon icon__comp"
    :class="[props.icon, props.severity, getClassBySeverity, props.class]"
  />
</template>
