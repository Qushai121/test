<script setup lang="ts">
import InputEmail from "../inputEmail/InputEmail.vue";
import {
  aboutUsMenuItems,
  contactEmail,
  contactInstagram,
  contactPhone,
} from "./options";

const leftContactList = [contactEmail, contactPhone, contactInstagram];
const rightContactList = [contactEmail, contactPhone];

const { data: categoryRecipeList } = await useFetch("/api/category-recipe");

const email = ref<string>();

</script>

<template>
  <section class="py-20">
    <div
      class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-[62px] py-[74px] mx-4 md:mx-8 xl:mx-[110px]"
    >
      <div class="w-full">
        <img
          src="/assets/images/elemes-logo.png"
          alt=""
          class="w-[207px] h-[50px] object-cover"
        />
        <p class="text-light-1 text-sm leading-5 mt-5">
          Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
          Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
        </p>
        <div class="flex gap-2 mt-[33px]">
          <div v-for="contact in leftContactList">
            <Button
              severity="contrast"
              class="!rounded-full text-primary !w-[40px] !h-[40px] flex justify-center items-center hover:text-white hover:bg-primary transition-all ease-in-out"
            >
              <div class="py-2">
                <Icon :icon="contact.icon" class="!w-[20px] !h-[20px]" />
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div class="w-fit">
        <h3 class="text-dark font-medium text-lg leading-6">Categories</h3>
        <div class="mt-[33px] flex flex-col gap-[19px]">
          <NuxtLink
            v-for="category in categoryRecipeList?.data"
            :href="`/category-recipe/${category.id}`"
            class="text-sm leading-4 text-light-1"
          >
            {{ category.name }}
          </NuxtLink>
        </div>
      </div>

      <div class="w-fit">
        <h3 class="text-dark font-medium text-lg leading-6">About Us</h3>
        <div class="mt-[33px] flex flex-col gap-[19px]">
          <NuxtLink
            v-for="aboutUsMenu in aboutUsMenuItems"
            :href="aboutUsMenu.url"
            class="text-sm leading-4 text-light-1"
          >
            {{ aboutUsMenu.name }}
          </NuxtLink>
        </div>
      </div>

      <div class="w-fit">
        <h3 class="text-dark font-medium text-lg leading-6">Newsletter</h3>
        <div class="mt-[33px] flex flex-col gap-[19px]">
          <p class="text-sm leading-4 text-light-1">
            Get now free 50% discount for all products on your first order
          </p>
          <InputEmail
            v-model="email"
            placeholder="Your email address"
          >
            <template #addon-right>
              <p>Send</p>
            </template>
          </InputEmail>
          <div v-for="contact in rightContactList" class="flex gap-1">
            <Icon :icon="contact.icon" severity="primary" class="!h-5 !w-5" />
            <p class="text-black text-sm leading-6">
              {{ contact.data }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
