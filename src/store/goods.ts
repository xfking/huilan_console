import { defineStore } from "pinia";
import api from "@/api";

export const goodsStore = defineStore({
  id: "goods",
  state: () => ({}),
  actions: {
    // 商品列表
    pageCement(params: any) {
      return new Promise((resolve, reject) => {
        api.goods
          .pageCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 商品详情
    infoCement(params: any) {
      return new Promise((resolve, reject) => {
        api.goods
          .infoCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 所有商品
    getCement(params: any) {
      return new Promise((resolve, reject) => {
        api.goods
          .getCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 新建商品
    createCement(params: any) {
      return new Promise((resolve, reject) => {
        api.goods
          .createCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改商品
    editCement(params: any) {
      return new Promise((resolve, reject) => {
        api.goods
          .editCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 品牌列表
    pageBrand(params: any) {
      return new Promise((resolve, reject) => {
        api.goods
          .pageBrand(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 所有品牌
    getBrand(params: any) {
      return new Promise((resolve, reject) => {
        api.goods
          .getBrand(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 品牌详情
    infoBrand(params: any) {
      return new Promise((resolve, reject) => {
        api.goods
          .infoBrand(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 新增品牌
    createBrand(params: any) {
      return new Promise((resolve, reject) => {
        api.goods
          .createBrand(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改品牌
    editBrand(params: any) {
      return new Promise((resolve, reject) => {
        api.goods
          .editBrand(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除品牌
    delBrand(params: any) {
      return new Promise((resolve, reject) => {
        api.goods
          .delBrand(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 文件上传
    fileUpload(params: any) {
      return new Promise((resolve, reject) => {
        api.goods
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
