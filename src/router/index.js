import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/home-view.vue";
import Contact from "@/views/contact/contact.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/mailing-lists",
      name: "mailing",
      component: () => import("../views/mailing-lists/mailing-lists.vue"),
    },
    {
      path: "/campaigns",
      name: "campaigns",
      component: () => import("../views/campaigns/campaigns.vue"),
    },
    {
      path:"/email-templates",
      name:"email-templates",
      component: () => import("../views/email-templates/email-templates.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

export default router;
