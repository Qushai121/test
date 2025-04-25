<script setup lang="ts">
import type {
  InputEmailEvents,
  InputEmailProps,
  InputEmailSlots,
} from "./inputEmail.type";

const props = defineProps<InputEmailProps>();
const slots = defineSlots<InputEmailSlots>();
const model = defineModel('modelValue')
defineEmits<InputEmailEvents>();
</script>

<template>
  <div class="input__email-comp-container">
    <input
      type="email"
      :placeholder="props.placeholder"
      v-model="model"
      class="input__email-comp"
      :class="props.inputClass"
    />

    <div
      class="input__email-comp-addon-container"
      @click="$emit('addonClick', 'addon-right')"
    >
      <slot name="addon-right" />
    </div>
  </div>
</template>
