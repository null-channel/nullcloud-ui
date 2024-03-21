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
          ...ROUTES.CONTACT,
          component: () => import("@pages/landingPages/contact/contact.vue")
        },
        {
          ...ROUTES.ABOUT,
          component: () => import("@pages/landingPages/about/about.vue")
        },
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
    {
      path: "/dashboards",
      name: "dashboards",
      redirect: { path: "dashboards/apps" }, // redirect property
      component: () => import("@pages/dashboardPages/dashboards.vue"),
      beforeEnter: authGuard,
      children: [
        {
          name: "apps",
          path: "apps",
          component: () => import("@pages/dashboardPages/apps/apps.vue"),
        },
        {
          name: "billing",
          path: "billing",
          component: () => import("@pages/dashboardPages/billing/billing.vue"),
        },
      ],
    },
  ],
});
export default router;
