<template>
  <div class="header">
    <div class="header-left"></div>
    <div class="header-right">
      <div class="header_user">
        <img
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
          alt=""
        />
      </div>
      <div class="user">{{ userInfo.realname || "暂未获取到用户名称" }}</div>
      <div class="layout" @click="handOut">登 出</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { userStore } from "@/store/user";
import { getToken, getUserInfo } from "@/utils/auth";
import { ref, onMounted, h } from "vue";
import { ElMessage, ElNotification } from "element-plus";
import { useRouter } from "vue-router";

const store = userStore();
const userInfo = getUserInfo();
const router = useRouter();

const handOut = () => {
  store.logout().then(() => {
    location.reload();
  });
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  box-sizing: border-box;
  background-color: #7e3628;
  color: #fff;

  .header-right {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .header_user {
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 20px;
    margin-right: 12px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .user {
    margin-right: 24px;
  }

  .layout:hover {
    color: #ffd04b;
  }
}
</style>
