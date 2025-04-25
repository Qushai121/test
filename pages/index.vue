<script lang="ts" setup>
import HomeModuleSectionMoto from "~/components/modules/homeModule/HomeModuleSectionMoto.vue";
import HomeModuleSectionOurCategory from "~/components/modules/homeModule/HomeModuleSectionOurCategory.vue";
import HomeModuleSectionTrendingRecipe from "~/components/modules/homeModule/HomeModuleSectionTrendingRecipe.vue";

definePageMeta({
  layout: "landingpage-layout",
});
</script>

<template>
  <div class="overflow-hidden">
    <HomeModuleSectionMoto />
    <HomeModuleSectionOurCategory />
    <HomeModuleSectionTrendingRecipe />
  </div>
</template>
