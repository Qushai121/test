<script lang="ts" setup>
import type { RatingProps } from "./rating.type";

const props = defineProps<RatingProps>();

const ratingDatas = computed(() => {
  return Array.from({ length: props.maxRating }).map((data, index) => {
    return {
      isRatedClass: index + 1 <= props.rating ? "text-orange-1" : "text-dark-1",
    };
  });
});
</script>

<template>
  <div class="flex gap-1 items-center">
    <div v-for="ratingData in ratingDatas">
      <Icon
        icon="star"
        class="h-[11px] w-[11px]"
        :class="ratingData.isRatedClass"
      />
    </div>
  </div>
</template>
