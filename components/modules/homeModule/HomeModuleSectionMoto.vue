<script lang="ts" setup></script>
<template>
  <section class="index__ldg-page-moto-section">
    <div
      class="bg-[url('/assets/images/home/home_bg_section_1.png')] index__ldg-page-moto-section-bg"
    ></div>

    <div class="index__ldg-page-moto-section-container">
      <h1 class="index__ldg-page-moto-section-title">Good Food Us Good Mood</h1>

      <div class="index__ldg-page-moto-section-review-container">
        <div class="index__ldg-page-moto-section-review-bg">
          <img
            src="/assets/images/home/green_salad_tomato.png"
            alt=""
            class="index__ldg-page-moto-section-review-img"
          />
          <div class="index__ldg-page-moto-section-review-card">
            <img
              src="/assets/images/home/green_salad_tomato.png"
              alt=""
              class="index__ldg-page-moto-section-review-card-img"
            />

            <p class="index__ldg-page-moto-section-review-card-title">
              Green Salah Tomato
            </p>
            <p class="index__ldg-page-moto-section-review-card-category">
              Tomato
            </p>
            <div class="index__ldg-page-moto-section-review-card-rating">
              <Rating :max-rating="5" :rating="4" />
            </div>
          </div>
        </div>
      </div>

      <div class="index__ldg-page-moto-section-desc-container">
        <p class="index__ldg-page-moto-section-desc-content">
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>

        <div class="index__ldg-page-moto-section-action-container">
          <Button
            severity="primary"
            class="index__ldg-page-moto-section-action shadow-xl"
            >Daftar Sekarang</Button
          >
          <Button
            severity="contrast"
            class="index__ldg-page-moto-section-action "
            >About Us</Button
          >
        </div>
      </div>
    </div>
  </section>
</template>
