import { defineStore } from "pinia";
import api from "@/api";

export const orderStore = defineStore({
    id: "order",
    state: () => ({}),
    actions: {
        // 出厂单列表
        pageOutFactorySheet(params: any) {
            return new Promise((resolve, reject) => {
                api.order
                    .pageOutFactorySheet(params)
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        // 出厂单详情
        infoOutFactorySheet(params: any) {
            return new Promise((resolve, reject) => {
                api.order
                    .infoOutFactorySheet(params)
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },

        // 入厂单列表
        pageInFactorySheet(params: any) {
            return new Promise((resolve, reject) => {
                api.order
                    .pageInFactorySheet(params)
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },

        // 入厂单详情
        infoInFactorySheet(params: any) {
            return new Promise((resolve, reject) => {
                api.order
                    .infoInFactorySheet(params)
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },

        // 订单列表
        pageOrders(params: any) {
            return new Promise((resolve, reject) => {
                api.order
                    .pageOrders(params)
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },

        // 订单详情
        infoOrders(params: any) {
            return new Promise((resolve, reject) => {
                api.order
                    .infoOrders(params)
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },

        // 确认出厂
        confirmFactory(params: any) {
            return new Promise((resolve, reject) => {
                api.order
                    .confirmFactory(params)
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        // 出厂单详情
        infoOutFactory(params: any) {
            return new Promise((resolve, reject) => {
                api.order
                    .infoOutFactory(params)
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
