<script setup lang="ts">
import type { ButtonEvents } from "./button.type";

defineEmits<ButtonEvents>();
</script>

<template>
  <button @click="$emit('click', $event)">
    <slot />
  </button>
</template>
