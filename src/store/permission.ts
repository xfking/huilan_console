import { defineStore } from "pinia";
import router from "@/router";
import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

export const permissionStore = defineStore({
  id: "permission",
  state: () => ({
    routes: [
      {
        path: "/content",
        component: Layout,
        meta: { title: "内容管理" },
        children: [
          {
            path: "/pages",
            name: "pages",
            component: () => import("../views/pages-management/index.vue"),
            meta: { title: "页面管理" },
          },
          {
            path: "/pagesDetail",
            name: "pagesDetail",
            component: () => import("../views/pages-management/index.vue"),
            meta: { title: "编辑", hidden: true },
          },
        ],
      },
    ],
  }),
  actions: {
    getRoutes() {
      console.log(router);
    },
    addRoutes() {
      this.routes.forEach((route: RouteRecordRaw) => {
        router.addRoute(route);
      });
    },
  },
});
