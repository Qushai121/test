<script lang="ts" setup>
import type { RatingProps } from "./rating.type";
const props = defineProps<RatingProps>();

const ratingDatas = computed(() => {
  return Array.from({ length: props.maxRating }).map((data, index) => {
    return {
      isRatedClass: index + 1 <= props.rating ? "rating__comp-star--active" : "rating__comp-star--in-active",
    };
  });
});
</script>

<template>
  <div class="rating__comp">
    <div v-for="ratingData in ratingDatas">
      <Icon
        icon="star"
        class="rating__comp-star"
        :class="ratingData.isRatedClass"
      />
    </div>
  </div>
</template>
