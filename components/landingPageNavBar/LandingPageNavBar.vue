<script lang="ts" setup>
import { landingPageNavBarOptions } from "./options";

defineProps<{
  menuOptionsVisiblity: boolean;
}>();
</script>

<template>
  <div class="flex justify-between px-8 xl:px-32 py-7 items-center">
    <img
      src="/assets/images/elemes-logo.png"
      alt=""
      class="w-[150px] h-9 lg:w-[207px] lg:h-[50px]"
    />

    <div class="flex gap-8" v-if="!menuOptionsVisiblity">
      <div v-for="option in landingPageNavBarOptions">
        <NuxtLink
          :href="option.url"
          class="text-light-1 text-sm leading-[22px] font-medium relative"
        >
          <p>{{ option.name }}</p>
          <Badge
            v-if="option.badge"
            class="absolute -top-4 -right-[18px]"
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
