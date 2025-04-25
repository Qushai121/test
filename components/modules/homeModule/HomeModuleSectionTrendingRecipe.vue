<script lang="ts" setup>
const { data: recipeList } = useFetch("/api/recipe");
</script>

<template>
  <section class="index__ldg-page-section-container">
    <div class="index__ldg-page-section-container-title">
      <h1>Browser Our Trending</h1>
      <span class="index__ldg-page-section-container-title--higlight"
        >Recipe</span
      >
    </div>

    <div class="index__ldg-page-rcp-trend-section-container-list no-scrollbar">
      <div
        v-for="recipe in recipeList?.data"
        class="index__ldg-page-rcp-trend-section-card group"
        :style="{
          backgroundColor: recipe.category.colorScheme,
        }"
      >
        <img
          src="/assets/images/home/home_bg_section_1.png"
          alt=""
          class="index__ldg-page-rcp-trend-section-card-bg group-hover:opacity-5"
        />
        <div class="index__ldg-page-rcp-trend-section-card-content-container">
          <img
            :src="recipe.thumbnail"
            alt=""
            class="index__ldg-page-rcp-trend-section-card-content-img"
          />
          <p class="index__ldg-page-rcp-trend-section-card-content-title">
            {{ recipe.name }}
          </p>
          <p class="index__ldg-page-rcp-trend-section-card-content-ctgry">
            {{ recipe.category.name }}
          </p>
          <Rating :max-rating="recipe.maxRatting" :rating="recipe.rating" />
        </div>
      </div>
    </div>
    <div class="index__ldg-page-rcp-trend-section-action-all-recipe">
      <Button>ALL Recipe</Button>
    </div>
  </section>
</template>
