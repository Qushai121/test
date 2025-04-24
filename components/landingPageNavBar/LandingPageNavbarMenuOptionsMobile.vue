<script lang="ts" setup></script>

<template>
  <div class="h-full grid grid-cols-3 items-center">
    <NuxtLink href="/home" class="flex flex-col items-center text-light-1">
      <Icon icon="menu" class="!w-[39px] !h-[39px]" />
      <p class="text-sm leading-6">Home</p>
    </NuxtLink>
    <NuxtLink
      href="/promitions"
      class="flex flex-col items-center text-light-1"
    >
      <Icon icon="menu" class="!w-[39px] !h-[39px]" />
      <p class="text-sm leading-6">Promotions</p>
    </NuxtLink>
    <div class="flex flex-col items-center text-light-1">
      <Icon icon="menu" class="!w-[39px] !h-[39px]" />
      <p class="text-sm leading-6">Other</p>
    </div>
  </div>
</template>
