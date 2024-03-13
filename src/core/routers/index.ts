import { ROUTES } from "@constants";
import { createRouter, createWebHistory } from "vue-router";
import authGuard from "../guards/auth.guard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("@pages/landingPages/landingPages.vue"),
      children: [
        {
          ...ROUTES.HOME,
          component: () => import("@pages/landingPages/Home/home.vue"),
        },
        {
          ...ROUTES.AUTH,
          component: () => import("@pages/landingPages/auth/auth.vue"),
          beforeEnter: authGuard,
        },
      ],
    },
  ],
});
export default router;
