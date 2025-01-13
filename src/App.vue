<script setup lang="ts">
import FooterView from "./components/FooterView.vue";
import NavbarView from "./components/NavbarView.vue";
</script>

<template>
  <main>
    <NavbarView />
    <router-view />
    <FooterView />
  </main>
</template>
