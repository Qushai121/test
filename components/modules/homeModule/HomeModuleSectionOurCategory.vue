<script lang="ts" setup>
import useIsMobile from "~/composable/useIsMobile";

const { data } = await useFetch("/api/category-recipe");
const isMobile = useIsMobile();
</script>
<template>
  <section class="index__ldg-page-section-container">
    <div class="index__ldg-page-section-container-title">
      <h1>Browser Our Category</h1>
      <span class="index__ldg-page-section-container-title--higlight"
        >Recipe</span
      >
    </div>

    <div class="index__ldg-page-ctgry-section-container-list">
      <div
        v-for="categoryRecipe in data?.data"
        :style="{
          backgroundColor: categoryRecipe.colorScheme,
        }"
        class="index__ldg-page-ctgry-section-card group"
      >
        <img
          src="/assets/images/home/home_bg_section_1.png"
          alt=""
          class="index__ldg-page-ctgry-section-card-bg opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-5"
        />

        <div class="index__ldg-page-ctgry-section-card-content-container">
          <img
            :src="categoryRecipe.icon"
            :alt="categoryRecipe.name"
            class="index__ldg-page-ctgry-section-card-content-img"
          />
          <p class="index__ldg-page-ctgry-section-card-content-title">
            {{ categoryRecipe.name }}
          </p>
          <p class="index__ldg-page-ctgry-section-card-content-count">
            {{ categoryRecipe.countRecipes }} items
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="!isMobile"
      class="index__ldg-page-ctgry-section-slider-container"
    >
      <Button severity="primary">
        <div
          class="index__ldg-page-ctgry-section-slider-action"
          @action="`here`"
        >
          <div class="index__ldg-page-ctgry-section-slider-action-icon">
            <Icon icon="arrow-left" severity="primary" />
          </div>
          <p class="index__ldg-page-ctgry-section-slider-action-label">PREV</p>
        </div>
      </Button>
      <Button severity="primary">
        <div
          class="index__ldg-page-ctgry-section-slider-action"
          @action="`here`"
        >
          <p class="index__ldg-page-ctgry-section-slider-action-label">NEXT</p>
          <div class="index__ldg-page-ctgry-section-slider-action-icon">
            <Icon icon="arrow-right" severity="primary" />
          </div>
        </div>
      </Button>
    </div>
  </section>
</template>
