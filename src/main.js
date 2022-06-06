import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import fenlei from "./components/HelloWorld.vue";
import shopp from "./Shopp.vue";
import aboutme from "./aboutme.vue";
let routes = [
  { path: "/", component: Home },
  { path: "/fenlei", component: fenlei },
  { path: "/shopp", component: shopp },
  { path: "/aboutme", component: aboutme },
];

let router = createRouter({ routes: routes, history: createWebHistory() });

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
