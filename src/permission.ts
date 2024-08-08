import router from "@/router";
import { getPageTitle, getToken } from "@/utils/auth";
import { RouteRecordRaw } from "vue-router";
import { activerRoutes } from '@/router'

const whiteList = ["/login"]; // 重定向白名单

// 组装路由
export async function sublogin() {
  const routes = activerRoutes

  routes.forEach((route: RouteRecordRaw) => {
    router.addRoute(route);
  });

  router.beforeEach((to, from, next) => {
    // 设置页面标题
    document.title = getPageTitle(to.meta.title);

    const hasToken = getToken();
    if (hasToken) {
      if (to.path === "/") {
        next();
      } else {
        // const route = permissionStore();
        // route.addRoutes();
        next();
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        next(`/login?redirect=${to.path}`);
      }
    }
  });

}