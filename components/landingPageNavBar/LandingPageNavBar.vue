<script lang="ts" setup>
import { landingPageNavBarOptions } from "./options";

defineProps<{
  menuOptionsVisiblity: boolean;
}>();
</script>

<template>
  <div class="nav__ldg-page-container">
    <img
      src="/assets/images/elemes-logo.png"
      alt=""
      class="nav__ldg-page-logo"
    />

    <div class="flex gap-8" v-if="!menuOptionsVisiblity">
      <div v-for="option in landingPageNavBarOptions">
        <NuxtLink
          :href="option.url"
          class="nav__ldg-page-menu-item"
        >
          <p>{{ option.name }}</p>
          <Badge
            v-if="option.badge"
            class="nav__ldg-page-menu-item-badge"
            :severity="option.badge?.severity"
          >
            {{ option.badge?.name }}
          </Badge>
        </NuxtLink>
      </div>
    </div>

    <div>
      <Button severity="primary"> Daftar Sekarang </Button>
    </div>
  </div>
</template>
