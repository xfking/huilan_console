import { defineStore } from "pinia";
import api from "@/api";

export const clientStore = defineStore({
  id: "client",
  state: () => ({}),
  actions: {
    // 获取司机列表
    getPageDriver(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .pageDriver(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 添加司机
    createDriver(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .createDriver(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除司机
    delDriver(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .delDriver(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 编辑司机
    editDriver(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .editDriver(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 获取司机详情
    infoDriver(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .infoDriver(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 区域列表
    pageArea(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .pageArea(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 区域列表
    getArea(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .getArea(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 新增区域
    createArea(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .createArea(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改区域
    editArea(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .editArea(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除区域
    delArea(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .delArea(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 供应商列表
    pageSupplier(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .pageSupplier(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 供应商详情
    infoSupplier(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .infoSupplier(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 新增供应商
    createSupplier(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .createSupplier(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改供应商
    editSupplier(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .editSupplier(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除供应商
    delSupplier(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .delSupplier(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 经销商列表
    pageAgent(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .pageAgent(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 经销商详情
    infoAgent(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .infoAgent(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 所有经销商
    getAgent(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .getAgent(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 新增经销商
    createAgent(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .createAgent(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改经销商
    editAgent(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .editAgent(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改经销商
    delAgent(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .delAgent(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 客户列表
    pageMember(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .pageMember(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 客户详情
    infoMember(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .infoMember(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 添加客户
    createMember(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .createMember(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 编辑客户
    editMember(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .editMember(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除客户
    delMember(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .delMember(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 客户充值
    rechargeMember(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .rechargeMember(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 客户调价
    // 调价列表
    pageMCement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .pageMCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 调价详情
    infoMCement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .infoMCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 新增调价
    createMCement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .createMCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改调价
    editMCement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .editMCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除调价
    delMCement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .delMCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 经销商调价
    // 调价列表
    agentPageMCement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .agentPageMCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 调价详情
    agentInfomcement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .agentInfomcement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 新增调价
    agentCreatemcement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .agentCreatemcement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改调价
    agentEditmcement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .agentEditmcement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除调价
    agentDelmcement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .agentDelmcement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 区域调价
    // 调价列表
    areaPageMCement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .areaPageMCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 调价详情
    infoAreaCement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .infoAreaCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 新增调价
    createAreaCement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .createAreaCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 修改调价
    editAreaCement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .editAreaCement(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 删除调价
    delAreaCement(params: any) {
      return new Promise((resolve, reject) => {
        api.client
          .delAreaCement(params)
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
