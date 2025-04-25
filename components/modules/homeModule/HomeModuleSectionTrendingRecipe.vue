<script lang="ts" setup>
const { data: recipeList } = useFetch("/api/recipe");
</script>

<template>
  <section class="index__ldg-page-section-container">
    <div class="index__ldg-page-section-container-title">
      <h1>Browser Our Trending</h1>
      <span class="index__ldg-page-section-container-title--higlight">Recipe</span>
    </div>

    <div
      class="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-14 overflow-x-scroll lg:overflow-x-hidden no-scrollbar"
    >
      <div
        v-for="recipe in recipeList?.data"
        class="rounded-[17px] h-fit relative group overflow-hidden"
        :style="{
          backgroundColor: recipe.category.colorScheme,
        }"
      >
        <img
          src="/assets/images/home/home_bg_section_1.png"
          alt=""
          class="absolute object-cover w-full h-full opacity-0 group-hover:opacity-5 z-0 transition-all duration-300 ease-in-out"
        />
        <div class="px-5 py-8 z-10 relative">
          <img
            :src="recipe.thumbnail"
            alt=""
            class="w-[118px] h-[114px] rounded-lg"
          />
          <p class="text-[26px] leading-[50px] font-medium mt-[18px]">
            {{ recipe.name }}
          </p>
          <p class="text-lg leading-[100%] font-medium text-primary mb-[18px]">
            {{ recipe.category.name }}
          </p>
          <Rating :max-rating="recipe.maxRatting" :rating="recipe.rating" />
        </div>
      </div>
    </div>
    <div class="flex justify-center " >
      <Button>ALL Recipe</Button>
    </div>
  </section>
</template>
