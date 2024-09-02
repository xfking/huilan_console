import { defineStore } from "pinia";
import api from "@/api";

export const contentStore = defineStore({
  id: "content",
  actions: {
    // 页面管理列表
    contentPagePages(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .contentPagePages(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 页面详情
    infoPages(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .infoPages(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 开启/禁用页面
    contentStatePages(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .contentStatePages(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 新增页面
    contentCreatePages(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .contentCreatePages(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改页面
    editPages(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .editPages(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除页面
    delPages(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .delPages(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 资讯列表
    pageArticle(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .pageArticle(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 资讯详情
    infoArticle(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .infoArticle(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 新增资讯
    createArticle(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .createArticle(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改资讯
    editArticle(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .editArticle(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除资讯
    delArticle(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .delArticle(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 开启/禁用资讯
    stateArticle(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .stateArticle(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 团队列表
    pageTeam(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .pageTeam(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 团队详情
    infoTeam(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .infoTeam(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 新增团队
    createTeam(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .createTeam(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改团队
    editTeam(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .editTeam(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除团队
    delTeam(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .delTeam(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 开启/禁用团队
    stateTeam(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .stateTeam(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 音乐列表
    pageMusic(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .pageMusic(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 音乐详情
    infoMusic(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .infoMusic(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 新增音乐
    createMusic(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .createMusic(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改音乐
    editMusic(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .editMusic(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除音乐
    delMusic(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .delMusic(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 开启/禁用音乐
    stateMusic(params: any) {
      return new Promise((resolve, reject) => {
        api.content
          .stateMusic(params)
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
