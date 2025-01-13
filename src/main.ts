import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import MenuPage from "./pages/MenuPage.vue";
import ContactPage from "./pages/ContactPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/menu", component: MenuPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return savedPosition || { top: 0 };
  },
});

const app = createApp(App);
app.use(router);
app.mount("#app");
