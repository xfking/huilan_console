<template>
  <div class="menu-box">
    <div class="logo">
      <img
        class="login-logo"
        width="136"
        src="/src/assets/logo1.png"
        alt="logo"
      />
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#7E3628"
      default-active="2"
      text-color="#fff"
    >
      <template v-for="(item, index) in routerList" :key="index">
        <MenuItem :router="item" :index="index" />
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { RouteRecordRaw, useRouter } from "vue-router";

import MenuItem from "./menuItem.vue";

const router = useRouter();
const routerList = router
  .getRoutes()
  .filter((item: RouteRecordRaw) => item.children?.length);

onMounted(() => {
  // console.log("1111111111", currentRoute);
});
</script>

<style lang="less" scoped>
.menu-box {
  width: 220px;
  min-height: 100vh;
  color: #fff;
  background-color: #7e3628;

  .logo {
    height: 64px;
    text-align: center;
    line-height: 64px;
    border-bottom: 1px solid #f0f0f0;
    font-weight: 700;
  }

  .login-logo {
    margin-top: 10px;
  }
}
</style>
