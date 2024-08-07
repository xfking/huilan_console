import Layout from "@/layout/index.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录", hidden: true },
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    meta: { title: "首页" },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/home/index.vue"),
        meta: { title: "首页" },
      },
    ],
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
