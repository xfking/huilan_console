import { defineStore } from "pinia";
import api from "@/api";

export const memberStore = defineStore({
  id: "member",
  actions: {
    // 会员列表
    pageMember(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .pageMember(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 会员详情
    infoMember(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .infoMember(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 新增会员
    createMember(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .createMember(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改会员
    editMember(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .editMember(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除会员
    delMember(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .delMember(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 开启/禁用会员
    stateMember(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .stateMember(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 管理员列表
    pageStaff(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .pageStaff(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 管理员详情
    infoStaff(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .infoStaff(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 新增管理员
    createStaff(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .createStaff(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改管理员
    editStaff(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .editStaff(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除管理员
    delStaff(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .delStaff(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 开启/禁用管理员
    stateStaff(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .stateStaff(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 角色列表
    pageRole(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .pageRole(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 角色详情
    infoRole(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .infoRole(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 角色权限
    getPermission(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .getPermission(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 新增角色
    createRole(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .createRole(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改角色
    editRole(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .editRole(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除角色
    delRole(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .delRole(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 开启/禁用角色
    stateRole(params: any) {
      return new Promise((resolve, reject) => {
        api.member
          .stateRole(params)
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
