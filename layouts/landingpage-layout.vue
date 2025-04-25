<script lang="ts" setup>
import useIsMobile from "~/composable/useIsMobile";
const isMobileSize = useIsMobile();
</script>

<template>
  <div class="flex flex-col relative min-h-[100vh]">
    <LandingPageNavBar :menu-options-visiblity="isMobileSize" />
    <slot />
    <LandingPageFooter />
    <div v-if="isMobileSize" class="fixed bottom-0 h-[89px] w-full backdrop-blur-xs">
      <LandingPageNavBarLandingPageNavbarMenuOptionsMobile />
    </div>
  </div>
</template>
