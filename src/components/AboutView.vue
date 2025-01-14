<script setup lang="ts">
defineProps<{}>();
</script>

<template>
  <div class="container">
    <div class="barista-container">
      <img class="barista-img" src="../assets/barista.jpg" alt="Banner" />
    </div>
    <div class="about-desc">
      <h2>About Us</h2>
      <p>
        Nestled near the tranquil shores of the Philippine coastline, our coffee
        shop was born from a passion for crafting moments as warm and inviting
        as the ocean breeze. Inspired by the rich coffee traditions of the
        Philippines and the serenity of beach life, we set out to create a haven
        where locals and travelers alike can savor the perfect cup of coffee
        while basking in the calming sound of waves. Each brew tells a story,
        featuring sustainably sourced beans from local farmers and prepared with
        care to bring out their unique flavors. Whether you’re here to start
        your day with a bold espresso or unwind at sunset with a creamy latte,
        our little seaside cafe promises a blend of community, relaxation, and
        unforgettable taste.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 2rem;
  min-height: 400px;
}
.barista-container {
  height: 220px;
  width: 220px;
  display: flex;
  border-radius: 100%;
}

.barista-img {
  width: 100%;
  height: auto; /* Keep aspect ratio */
  object-fit: cover;
  border-radius: 100%;
}

.about-desc {
  flex-basis: 66%;
}
</style>
