import { ROUTES } from "@constants";
import { createRouter, createWebHistory } from "vue-router";
import authGuard from "../guards/auth.guard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      ...ROUTES.HOME,
      component: () => import("@pages/Home/home.vue"),
    },
    {
      ...ROUTES.AUTH,
      component: () => import("@pages/auth/auth.vue"),
      beforeEnter: authGuard,
    },
  ],
});
export default router;
