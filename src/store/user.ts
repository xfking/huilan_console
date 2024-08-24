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
        // api.user
        //   .login({ account, password })
        //   .then((res) => {
        //     const { token } = res.data;
        //     const userInfo = res.data;

        //     setUserInfo(userInfo);
        //     setToken(token);
        //     resolve(res);
        //   })
        //   .catch((err) => {
        //     reject(err);
        //   });

        const token = "admin";
        const userInfo = { realname: "蒋总" };

        setUserInfo(userInfo);
        setToken(token);
        resolve(userInfo);
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
    // 文件上传
    fileUpload(params: any) {
      return new Promise((resolve, reject) => {
        api.user
          .fileUpload(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
