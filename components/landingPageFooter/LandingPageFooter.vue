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
  <section class="foot__ldg-page-section">
    <div
      class="foot__ldg-page-container"
    >
      <div class="w-full">
        <img
          src="/assets/images/elemes-logo.png"
          alt=""
          class="foot__ldg-page-logo"
        />
        <p class="foot__ldg-page-address">
          Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
          Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
        </p>
        <div class="foot__ldg-page-contact-menu">
          <div v-for="contact in leftContactList">
            <Button
              severity="contrast"
              class="foot__ldg-page-contact-menu-item"
            >
              <div class="py-2">
                <Icon :icon="contact.icon" class="foot__ldg-page-contact-menu-item-icon" />
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div class="foot__ldg-page-group-container">
        <h3 class="foot__ldg-page-group-title">Categories</h3>
        <div class="foot__ldg-page-group-menu">
          <NuxtLink
            v-for="category in categoryRecipeList?.data"
            :href="`/category-recipe/${category.id}`"
            class="foot__ldg-page-group-menu-item"
          >
            {{ category.name }}
          </NuxtLink>
        </div>
      </div>

      <div class="foot__ldg-page-group-container">
        <h3 class="foot__ldg-page-group-title">About Us</h3>
        <div class="foot__ldg-page-group-menu">
          <NuxtLink
            v-for="aboutUsMenu in aboutUsMenuItems"
            :href="aboutUsMenu.url"
            class="foot__ldg-page-group-menu-item"
          >
            {{ aboutUsMenu.name }}
          </NuxtLink>
        </div>
      </div>

      <div class="foot__ldg-page-group-container">
        <h3 class="foot__ldg-page-group-title">Newsletter</h3>
        <div class="foot__ldg-page-group-menu">
          <p class="foot__ldg-page-group-menu-item">
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
          <div v-for="contact in rightContactList" class="foot__ldg-page-newsletter-contact">
            <Icon :icon="contact.icon" severity="primary" class="foot__ldg-page-newsletter-contact-icon" />
            <p class="foot__ldg-page-newsletter-contact-label">
              {{ contact.data }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
