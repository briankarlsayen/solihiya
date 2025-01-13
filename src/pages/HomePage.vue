<script setup lang="ts">
import AboutView from "../components/AboutView.vue";
import BestSeller from "../components/BestSeller.vue";

defineProps<{}>();
</script>

<template>
  <div class="content-container">
    <div class="hero-img-container">
      <img class="hero-img" src="../assets/coffee-hero.jpg" alt="Banner" />
      <div class="hero-content dancing-script-font">
        <p class="tagline">"Waves of flavor,</p>
        <p class="tagline">cups of comfort."</p>
      </div>
    </div>
    <section id="about" class="about-container">
      <div class="about">
        <AboutView />
        <div>
          <BestSeller />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.content-container {
  margin-bottom: 2rem;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 800px;
}

.hero-img-container {
  height: 900px;
  width: 100%;
  display: flex;
  position: relative;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 8px;
  color: white;
  text-transform: uppercase;
  font-size: 3.4rem;
  letter-spacing: 1.4px;
  color: white;
  padding: 0;
  margin: 0;
  font-weight: 800;
  font-style: italic;
  line-height: 54px;
}

.hero-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: brightness(40%);
}

.hero h1 {
  font-size: 5rem;
}

.about-container {
  display: flex;
  justify-content: center;
}
.about {
  width: 100%;
  max-width: 1200px;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 0 22px 0 rgba(0, 0, 0, 0.08);
  margin-top: -2rem;
  z-index: 99;
}

.tagline {
  opacity: 0;
  transform: translateY(20px); /* Slightly slide up */
  animation: fadeIn 1.5s ease-out forwards; /* Play animation */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
