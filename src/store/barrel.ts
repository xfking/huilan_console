import { defineStore } from "pinia";
import api from "@/api";

export const barrelStore = defineStore({
  id: "barrel",
  actions: {
    // 单桶列表
    pageBarrel(params: any) {
      return new Promise((resolve, reject) => {
        api.barrel
          .pageBarrel(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 单桶详情
    infoBarrel(params: any) {
      return new Promise((resolve, reject) => {
        api.barrel
          .infoBarrel(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 开启/禁用单桶
    stateBarrel(params: any) {
      return new Promise((resolve, reject) => {
        api.barrel
          .stateBarrel(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 新增单桶
    createBarrel(params: any) {
      return new Promise((resolve, reject) => {
        api.barrel
          .createBarrel(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改单桶
    editBarrel(params: any) {
      return new Promise((resolve, reject) => {
        api.barrel
          .editBarrel(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除单桶
    delBarrel(params: any) {
      return new Promise((resolve, reject) => {
        api.barrel
          .delBarrel(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 酒证列表
    pageCard(params: any) {
      return new Promise((resolve, reject) => {
        api.barrel
          .pageCard(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 酒证详情
    infoCard(params: any) {
      return new Promise((resolve, reject) => {
        api.barrel
          .infoCard(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 新增酒证
    createCard(params: any) {
      return new Promise((resolve, reject) => {
        api.barrel
          .createCard(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改酒证
    editCard(params: any) {
      return new Promise((resolve, reject) => {
        api.barrel
          .editCard(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除酒证
    delCard(params: any) {
      return new Promise((resolve, reject) => {
        api.barrel
          .delCard(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 开启/禁用酒证
    stateCard(params: any) {
      return new Promise((resolve, reject) => {
        api.barrel
          .stateCard(params)
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
