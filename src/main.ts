import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "@router";
import { axiosHelper } from "@helpers";
import { MotionPlugin } from "@vueuse/motion";
import { clerkPlugin } from "vue-clerk/plugin";
import VueCookies from "vue-cookies";

async function run() {
  const pinia = createPinia();
  const app = createApp(App);
  app.use(MotionPlugin);
  app.use(clerkPlugin, {
    publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
  });
  app.use(pinia);
  app.use(router);
  app.use(VueCookies, { expires: "7d" });
  app.use(axiosHelper);
  app.mount("#app");
}
run();
