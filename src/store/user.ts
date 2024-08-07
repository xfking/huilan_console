import { defineStore } from "pinia";
import {
  getToken,
  removeToken,
  removeUserInfo,
  setToken,
  setUserInfo,
} from "@/utils/auth";
import api from "@/api";

export const userStore = defineStore({
  id: "user",
  state: () => ({
    token: getToken(),
    userInfo: {},
  }),
  actions: {
    // 用户登录
    login(value: API.InterData) {
      const { account, password } = value;
      return new Promise((resolve, reject) => {
        api.user
          .login({ account, password })
          .then((res) => {
            const { token } = res.data;
            const userInfo = res.data;

            setUserInfo(userInfo);
            setToken(token);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 登出
    logout() {
      return new Promise((resolve, reject) => {
        api.user
          .logout()
          .then(() => {
            this.userInfo = {};
            removeToken();
            removeUserInfo();
            resolve(true);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
