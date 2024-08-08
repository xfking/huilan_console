import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录", hidden: true },
    component: () => import("../views/Login.vue"),
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
        component: () => import("../views/Home.vue"),
        meta: { title: "首页" },
      },
    ],
  },
];

export const activerRoutes: Array<RouteRecordRaw> = [
  {
    path: "/content",
    name: 'content',
    component: Layout,
    meta: { title: "内容管理" },
    children: [
      {
        path: "/pages",
        name: "pages",
        component: () => import("../views/content-management/content-pages/index.vue"),
        meta: { title: "页面管理" },
      },
      {
        path: "/pagesDetail",
        name: "pagesDetail",
        component: () => import("../views/content-management/content-pages-detail/index.vue"),
        meta: { title: "编辑", hidden: true },
      },
      {
        path: "/information",
        name: "information",
        component: () => import("../views/content-management/content-Information/index.vue"),
        meta: { title: "回澜资讯" },
      },
      {
        path: "/informationDetail",
        name: "informationDetail",
        component: () => import("../views/content-management/content-information-detail/index.vue"),
        meta: { title: "编辑", hidden: true },
      },
      {
        path: "/team",
        name: "team",
        component: () => import("../views/content-management/content-team/index.vue"),
        meta: { title: "回澜团队" },
      },
      {
        path: "/teamDetail",
        name: "teamDetail",
        component: () => import("../views/content-management/content-team-detail/index.vue"),
        meta: { title: "编辑", hidden: true },
      },
      {
        path: "/music",
        name: "music",
        component: () => import("../views/content-management/content-music/index.vue"),
        meta: { title: "回澜音乐" },
      },
      {
        path: "/musicDetail",
        name: "musicDetail",
        component: () => import("../views/content-management/content-music-detail/index.vue"),
        meta: { title: "编辑", hidden: true },
      },
      {
        path: "/menu",
        name: "menu",
        component: () => import("../views/content-management/content-menu/index.vue"),
        meta: { title: "菜单管理" },
      },
      {
        path: "/menuDetail",
        name: "menuDetail",
        component: () => import("../views/content-management/content-menu-detail/index.vue"),
        meta: { title: "编辑", hidden: true },
      },
      {
        path: "/setting",
        name: "setting",
        component: () => import("../views/content-management/content-setting/index.vue"),
        meta: { title: "系统配置" },
      }
    ],
  },
  {
    path: "/barrel",
    name: 'barrel',
    component: Layout,
    meta: { title: "单桶管理" },
    children: [
      {
        path: "/barrelList",
        name: "barrelList",
        component: () => import("../views/barrel-management/barrel-list/index.vue"),
        meta: { title: "单桶管理" },
      },
      {
        path: "/barrelDetail",
        name: "barrelDetail",
        component: () => import("../views/barrel-management/barrel-list-detail/index.vue"),
        meta: { title: "编辑", hidden: true },
      },
      {
        path: "/barrelLicense",
        name: "barrelLicense",
        component: () => import("../views/barrel-management/barrel-license/index.vue"),
        meta: { title: "酒证管理" },
      },
      {
        path: "/barrelLicenseDetail",
        name: "barrelLicenseDetail",
        component: () => import("../views/barrel-management/barrel-license-detail/index.vue"),
        meta: { title: "编辑", hidden: true },
      },
    ]
  },
  {
    path: "/user",
    name: 'user',
    component: Layout,
    meta: { title: "用户管理" },
    children: [
      {
        path: "/member",
        name: "member",
        component: () => import("../views/user-management/user-member/index.vue"),
        meta: { title: "会员管理" },
      },
      {
        path: "/memberDetail",
        name: "memberDetail",
        component: () => import("../views/user-management/user-member-detail/index.vue"),
        meta: { title: "编辑", hidden: true },
      },
      {
        path: "/admin",
        name: "admin",
        component: () => import("../views/user-management/user-admin/index.vue"),
        meta: { title: "管理员管理" },
      },
      {
        path: "/adminDetail",
        name: "adminDetail",
        component: () => import("../views/user-management/user-admin-detail/index.vue"),
        meta: { title: "编辑", hidden: true },
      },
      {
        path: "/role",
        name: "role",
        component: () => import("../views/user-management/user-role/index.vue"),
        meta: { title: "角色管理" },
      },
      {
        path: "/rolePermission",
        name: "rolePermission",
        component: () => import("../views/user-management/user-role-permission/index.vue"),
        meta: { title: "编辑", hidden: true },
      },
    ]
  },
  {
    path: "/reserve",
    name: 'reserve',
    component: Layout,
    meta: { title: "预约管理" },
    children: [
      {
        path: "/visit",
        name: "visit",
        component: () => import("../views/reserve-management/reserve-visit/index.vue"),
        meta: { title: "参观预约" },
      },
      {
        path: "/visitDetail",
        name: "visitDetail",
        component: () => import("../views/reserve-management/reserve-visit-detail/index.vue"),
        meta: { title: "编辑", hidden: true },
      }
    ]
  },
  {
    path: "/reserve",
    name: 'reserve',
    component: Layout,
    meta: { title: "预约管理" },
    children: [
      {
        path: "/visit",
        name: "visit",
        component: () => import("../views/reserve-management/reserve-visit/index.vue"),
        meta: { title: "参观预约" },
      },
      {
        path: "/visitDetail",
        name: "visitDetail",
        component: () => import("../views/reserve-management/reserve-visit-detail/index.vue"),
        meta: { title: "编辑", hidden: true },
      }
    ]
  },
  {
    path: "/notify",
    name: 'notify',
    component: Layout,
    meta: { title: "系统通知" },
    children: [
      {
        path: "/notifyList",
        name: "notifyList",
        component: () => import("../views/notify-management/notify-list/index.vue"),
        meta: { title: "系统通知" },
      },
      {
        path: "/notifyDetail",
        name: "notifyDetail",
        component: () => import("../views/notify-management/notify-detail/index.vue"),
        meta: { title: "编辑", hidden: true },
      }
    ]
  },
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
