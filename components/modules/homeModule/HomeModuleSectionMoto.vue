<script lang="ts" setup></script>
<template>
  <section class="relative flex flex-col justify-center items-center py-20">
    <div
      class="bg-[url('/assets/images/home/home_bg_section_1.png')] opacity-3 z-0 h-full absolute w-full"
    ></div>

    <div
      class="relative z-10 grid w-full px-4 md:px-8 xl:px-32 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-rows-3 gap-4 items-center justify-center"
    >
      <h1
        class="row-span-1 xl:h-full xl:flex xl:items-end lg:w-[482px] text-5xl leading-16 text-primary font-medium md:text-[64px]"
      >
        Good Food Us Good Mood
      </h1>

      <div
        class="row-span-2 xl:row-span-3 md:col-span-1 lg:col-start-2 grid justify-start lg:justify-center xl:justify-end w-full h-fit py-10"
      >
        <div
          class="bg-light-1/10 rounded-full w-[240px] h-[240px] xl:w-[495px] xl:h-[495px] grid justify-center items-center relative"
        >
          <img
            src="/assets/images/home/green_salad_tomato.png"
            alt=""
            class="w-[200px] h-[200px] xl:w-[415px] xl:h-[415px]"
          />
          <div
            class="bg-white/75 backdrop-blur-[11px] shadow-xs px-8 py-4 grid grid-cols-[52px_auto] rounded-[17px] gap-x-4 grid-rows-[auto] absolute h-[93x] w-fit bottom-0 -right-[140px] xl:left-0"
          >
            <img
              src="/assets/images/home/green_salad_tomato.png"
              alt=""
              class="w-[52px] h-[52px] col-span-1 row-span-3"
            />

            <p
              class="text-sm leading-[22px] text-nowrap font-semibold row-span-1"
            >
              Green Salah Tomato
            </p>
            <p
              class="text-xs leading-[14px] font-normal row-span-1 h-fit text-dark-40"
            >
              Tomato
            </p>
            <div class="row-span-1 py-2">
              <Rating :max-rating="5" :rating="4" />
            </div>
          </div>
        </div>
      </div>

      <div class="row-span-1 md:row-span-1 lg:w-[482px] flex flex-col gap-4">
        <p class="text-lg leading-[29px] text-light-1">
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>

        <div class="flex items-center gap-4">
          <Button
            severity="primary"
            class="text-sm font-medium leading-[22px] shadow-xl"
            >Daftar Sekarang</Button
          >
          <Button
            severity="contrast"
            class="text-sm font-medium leading-[22px] text-light-gray-2"
            >About Us</Button
          >
        </div>
      </div>
    </div>
  </section>
</template>
