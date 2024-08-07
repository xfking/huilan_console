import { defineStore } from "pinia";
import api from "@/api";

export const appStore = defineStore({
  id: "app",
  state: () => ({
    collapsed: false,
  }),
  actions: {
    changeCollapsed(value: boolean) {
      this.collapsed = value;
    },
    // 用户列表
    getUserList(params: any) {
      return new Promise((resolve, reject) => {
        api.user
          .getUserList(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 获取用户下拉数据
    getUserOptions(params: any) {
      return new Promise((resolve, reject) => {
        api.user
          .getStaff(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 编辑员工
    editStaff(params: any) {
      return new Promise((resolve, reject) => {
        api.user
          .editStaff(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 新增用户
    createUser(params: any) {
      return new Promise((resolve, reject) => {
        api.user
          .createStaff(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 删除用户
    delUser(params: any) {
      return new Promise((resolve, reject) => {
        api.user
          .delStaff(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 获取用户信息
    getUserInfo(params: any) {
      return new Promise((resolve, reject) => {
        api.user
          .infoStaff(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 部门列表
    getDepartmentList(params: any) {
      return new Promise((resolve, reject) => {
        api.department
          .getDepartmentList(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 获取部门下拉选项数据
    getDepartmentOptions(params: any) {
      return new Promise((resolve, reject) => {
        api.department
          .getDepartment(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 添加部门
    addDepartment(params: any) {
      return new Promise((resolve, reject) => {
        api.department
          .createDepartment(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 编辑部门
    editDepartment(params: any) {
      return new Promise((resolve, reject) => {
        api.department
          .editDepartment(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除部门
    delDepartment(params: any) {
      return new Promise((resolve, reject) => {
        api.department
          .delDepartment(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 获取部门权限
    getPermission(params: any) {
      return new Promise((resolve, reject) => {
        api.department
          .getPermission(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 设置部门权限
    setPermission(params: any) {
      return new Promise((resolve, reject) => {
        api.department
          .setPermission(params)
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
