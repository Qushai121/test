<script lang="ts" setup></script>

<template>
  <div class="nav-mob__ldg-page-menu-container">
    <NuxtLink href="/home" class="nav-mob__ldg-page-menu-body">
      <Icon icon="menu" class="nav-mob__ldg-page-menu-icon" />
      <p class="nav-mob__ldg-page-menu-label">Home</p>
    </NuxtLink>
    <NuxtLink href="/promitions" class="nav-mob__ldg-page-menu-body">
      <Icon icon="menu" class="nav-mob__ldg-page-menu-icon" />
      <p class="nav-mob__ldg-page-menu-label">Promotions</p>
    </NuxtLink>
    <div class="nav-mob__ldg-page-menu-body">
      <Icon icon="menu" class="nav-mob__ldg-page-menu-icon" />
      <p class="nav-mob__ldg-page-menu-label">Other</p>
    </div>
  </div>
</template>
