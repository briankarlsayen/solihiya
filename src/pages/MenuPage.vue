<script setup lang="ts">
defineProps<{}>();
import menu from "../api/menu.json";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  calories: number;
  type: "non-coffee" | "coffee" | "tea" | string;
}

const getMenuList = () => {
  const coffee: MenuItem[] = [];
  const tea: MenuItem[] = [];
  const nonCoffee: MenuItem[] = [];

  menu.map((item) => {
    if (item.type === "coffee") {
      coffee.push(item);
    } else if (item.type === "tea") {
      tea.push(item);
    } else {
      nonCoffee.push(item);
    }
  });
  return {
    coffee,
    tea,
    nonCoffee,
  };
};
const { coffee, tea, nonCoffee } = getMenuList();

const getMaxTypeId = (arr: MenuItem[]): number => {
  return arr.reduce((max, obj) => {
    return obj.id > max.id ? obj : max;
  })?.id;
};
</script>

<template>
  <div class="container">
    <h1 class="page-title">Menu</h1>
    <div class="menu-type-container">
      <div class="menu-container">
        <h2 class="brown-text">Coffee</h2>
        <ul class="menu-items">
          <li v-for="item in coffee" :key="item.id" class="menu-item">
            <h4>{{ item.name }}</h4>
            <p>{{ item.description }}</p>
            <hr v-if="item.id !== getMaxTypeId(coffee)" />
          </li>
        </ul>
      </div>
      <div class="menu-container">
        <h2 class="brown-text">Non-Coffee</h2>
        <ul class="menu-items">
          <li v-for="item in nonCoffee" :key="item.id" class="menu-item">
            <h4>{{ item.name }}</h4>
            <p>{{ item.description }}</p>
            <hr v-if="item.id !== getMaxTypeId(nonCoffee)" />
          </li>
        </ul>
      </div>
      <div class="menu-container">
        <h2 class="brown-text">Tea</h2>
        <ul class="menu-items">
          <li v-for="item in tea" :key="item.id" class="menu-item">
            <h4>{{ item.name }}</h4>
            <p>{{ item.description }}</p>
            <hr class="brown-text" v-if="item.id !== getMaxTypeId(tea)" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container h1 {
  text-align: center;
}

.page-title {
  text-transform: uppercase;
}

.menu-type-container {
  justify-content: center;
  display: flex;
  align-items: self-start;
}
.menu-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
ul {
  list-style-type: none;
  max-width: 500px;
}
</style>
