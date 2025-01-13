<script setup lang="ts">
defineProps<{}>();
import InstagramIcon from "../assets/instagram-icon.svg";
import FacebookIcon from "../assets/facebook-icon.svg";

const handleSocialLink = (str: string) => {
  if (str === "facebook") {
    window.open("https://www.facebook.com", "_blank");
  } else {
    window.open("https://www.instagram.com", "_blank");
  }
};
</script>

<template>
  <div class="container">
    <p>2025 © Solihiya Inc. | All Rights Reserved.</p>
    <ul class="social-container">
      <li @click="() => handleSocialLink('facebook')" class="social-icon">
        <FacebookIcon />
      </li>
      <li @click="() => handleSocialLink('instagram')" class="social-icon">
        <InstagramIcon />
      </li>
    </ul>
  </div>
</template>
<style scoped>
.container {
  background-color: black;
  color: white;
  height: 150px;
  display: flex;
  justify-content: center;
  gap: 4rem;
  align-items: center;
}

.social-container {
  list-style: none;
  display: flex;
  gap: 1rem;
}
.social-icon {
  stroke: white;
  fill: white;
  cursor: pointer;
}
.social-icon:hover {
  stroke: rgb(164, 164, 164);
  fill: rgb(164, 164, 164);
}
</style>
