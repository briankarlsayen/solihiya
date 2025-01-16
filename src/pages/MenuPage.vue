<script lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import menu from "../api/menu.json";
import { WIDTH_BREAKPOINT } from "../config";
interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  calories: number;
  type: "non-coffee" | "coffee" | "tea" | string;
}

export default {
  setup() {
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

    const isMobile = ref<boolean>(false); // Define as a boolean type

    const updateViewport = (): void => {
      isMobile.value = window.innerWidth <= WIDTH_BREAKPOINT; // Adjust breakpoint as needed
    };

    onMounted((): void => {
      updateViewport(); // Set initial value
      window.addEventListener("resize", updateViewport); // Listen for window resize
    });

    onUnmounted((): void => {
      window.removeEventListener("resize", updateViewport); // Cleanup listener
    });

    return {
      coffee,
      tea,
      nonCoffee,
      getMaxTypeId,
      isMobile,
    };
  },
};
</script>

<template>
  <div v-if="isMobile">
    <h1 class="page-title">Menu</h1>
    <div class="m-container">
      <n-tabs type="line" animated justify-content="space-evenly">
        <n-tab-pane name="coffee" tab="Coffee">
          <ul class="menu-items">
            <li v-for="item in coffee" :key="item.id" class="menu-item">
              <h4>{{ item.name }}</h4>
              <p>{{ item.description }}</p>
              <hr v-if="item.id !== getMaxTypeId(coffee)" />
            </li>
          </ul>
        </n-tab-pane>
        <n-tab-pane name="non-coffee" tab="Non Coffee"
          ><ul class="menu-items">
            <li v-for="item in nonCoffee" :key="item.id" class="menu-item">
              <h4>{{ item.name }}</h4>
              <p>{{ item.description }}</p>
              <hr v-if="item.id !== getMaxTypeId(nonCoffee)" />
            </li></ul
        ></n-tab-pane>
        <n-tab-pane name="tea" tab="Tea"
          ><ul class="menu-items">
            <li v-for="item in tea" :key="item.id" class="menu-item">
              <h4>{{ item.name }}</h4>
              <p>{{ item.description }}</p>
              <hr class="brown-text" v-if="item.id !== getMaxTypeId(tea)" />
            </li></ul
        ></n-tab-pane>
      </n-tabs>
    </div>
  </div>

  <div v-else class="container">
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

.m-container {
  padding: 0.5rem;
}

.page-title {
  text-transform: uppercase;
  text-align: center;
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

@media (max-width: 768px) {
  .menu-type-container {
    flex-direction: column;
    padding: 1rem;
  }
  .menu-items {
    padding: 0px;
  }
}

.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}
</style>
