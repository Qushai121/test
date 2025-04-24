<script lang="ts" setup>
import useIsMobile from "~/composable/useIsMobile";

const { data } = await useFetch("/api/category-recipe");
const isMobile = useIsMobile();
</script>
<template>
  <section class="py-20 xl:mx-[110px] mx-4 md:mx-8">
    <div class="text-2xl leading-[30px] font-medium text-dark">
      <h1>Browser Our Trending</h1>
      <span class="text-primary">Receipt</span>
    </div>

    <div
      class="flex flex-nowrap w-fit gap-2 my-14 overflow-x-scroll lg:overflow-hidden h-[195px]"
    >
      <div
        v-for="categoryRecipe in data?.data"
        :style="{
          backgroundColor: categoryRecipe.colorScheme,
        }"
        class="rounded-lg relative col-span-1 w-[230px] h-[175px] hover:h-[195px] transition-all duration-300 ease-in-out grid justify-center py-[30px] bg-red-400 overflow-hidden"
      >
        <img
          src="/assets/images/home/home_bg_section_1.png"
          alt=""
          class="absolute bg-cover w-full h-full opacity-5 z-0"
        />

        <div class="flex flex-col items-center justify-center w-[100px]">
          <img
            :src="categoryRecipe.icon"
            :alt="categoryRecipe.name"
            class="!w-[47px] !h-[47px] mb-[23px]"
          />
          <p class="text-base text-dark font-medium leading-[22px] mb-1">
            {{ categoryRecipe.name }}
          </p>
          <p class="text-sm text-dark font-normal leading-4 text-nowrap">
            {{ categoryRecipe.countRecipes }} items
          </p>
        </div>
      </div>
    </div>

    <div v-if="!isMobile" class="flex w-full justify-end items-center gap-x-[13px]">
      <Button severity="primary">
        <div class="flex gap-[7px] items-center">
          <div class="bg-white rounded-full p-1.5">
            <Icon icon="arrow-left" severity="primary" />
          </div>
          <p class="font-medium text-base">PREV</p>
        </div>
      </Button>
      <Button severity="primary">
        <div class="flex gap-[7px] items-center">
          <p class="font-medium text-base">NEXT</p>
          <div class="bg-white rounded-full p-1.5">
            <Icon icon="arrow-right" severity="primary" />
          </div>
        </div>
      </Button>
    </div>
  </section>
</template>
