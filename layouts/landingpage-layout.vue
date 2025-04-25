<script lang="ts" setup>
import useIsMobile from "~/composable/useIsMobile";
const isMobileSize = useIsMobile();
</script>

<template>
  <div class="layout">
    <LandingPageNavBar :menu-options-visiblity="isMobileSize" />
    <slot />
    <LandingPageFooter />
    <div
      v-if="isMobileSize"
      class="layout__nav-ldg-page-mobile"
    >
      <LandingPageNavBarLandingPageNavbarMenuOptionsMobile />
    </div>
  </div>
</template>
