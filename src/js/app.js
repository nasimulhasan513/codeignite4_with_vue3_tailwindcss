import { createApp } from "vue";
import App from "./App.vue";

import store from "./store";

import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "./views/Home.vue";
import AboutVue from "./views/About.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue,
  },
  {
    path: "/about",
    name: "About",
    component: AboutVue,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

let app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
