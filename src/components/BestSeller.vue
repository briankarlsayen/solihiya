<script setup lang="ts">
defineProps<{}>();
import americanoImg from "../assets/americano.png";
import capuccinoImg from "../assets/capuccino.png";
import latteImg from "../assets/latte.png";
import mochaImg from "../assets/mocha.png";

const items = [
  {
    id: 1,
    name: "Americano",
    img: americanoImg,
    alt: "java chip javakula img",
  },
  {
    id: 2,
    name: "Capuccino",
    img: capuccinoImg,
    alt: "capuccino img",
  },
  {
    id: 3,
    name: "Latte",
    img: latteImg,
    alt: "latte",
  },
  {
    id: 4,
    name: "Mocha",
    img: mochaImg,
    alt: "mocha img",
  },
];

const goToMenu = () => {
  console.log("click");
};
</script>
<template>
  <div class="container">
    <h2 class="title">Our best sellers</h2>
    <ul class="menu-items">
      <li v-for="item in items" :key="item.id" class="menu-item">
        <div class="menu-img-container">
          <img :src="item.img" :alt="item.alt" />
        </div>
        <p>{{ item.name }}</p>
      </li>
    </ul>

    <div class="menu-banner-container">
      <img
        class="menu-banner"
        src="../assets/menu-banner.jpg"
        alt="menu-banner"
      />
      <div class="menu-banner-content">
        <h2 class="banner-text">
          Discover our delightful menu crafted just for you.
        </h2>

        <button class="menu-button" @click="goToMenu">
          <router-link to="/menu">Menu</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  /* min-height: 1000px;
  height: 100%; */
}

.title {
  padding: 0px;
  margin: 0px;
  line-height: 0px;
}
.menu-items {
  display: flex;
  gap: 3rem;
  padding-bottom: 100px;
}
.menu-item {
  list-style: none;
  font-size: medium;
  font-weight: 400;
  text-align: center;
  line-height: 0px;
}

.menu-img-container {
  height: 220px;
  width: 100%;
  display: flex;
}

.menu-img-container img {
  width: 100%;
  height: auto; /* Keep aspect ratio */
  object-fit: cover;
}

.menu-banner-container {
  height: 400px;
  width: 100%;
  display: flex;
  position: relative;
}
.menu-banner {
  width: 100%;
  height: auto; /* Keep aspect ratio */
  object-fit: cover;
  filter: brightness(70%);
}

.menu-banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  color: white;
  text-transform: uppercase;
  font-size: larger;
  letter-spacing: 1.4px;
}

.menu-button {
  font-size: large;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border: 2px white solid;
  color: white;
  background-color: transparent;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: medium;
  letter-spacing: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.menu-button a {
  color: white;
}

.menu-button:hover {
  background-color: #b5b5b5; /* Change background color on hover */
  transform: scale(1.05); /* Slightly enlarge button on hover */
}

.banner-text {
  line-height: 28px;
}
</style>
