import request from "@/utils/request";

const order = {
    // 出厂单列表
    pageOutFactorySheet(data: API.ListParams) {
        return request({
            url: "/admin/outFactorySheet/pageOutFactorySheet",
            method: "get",
            params: data,
        });
    },
    // 出厂单详情
    infoOutFactorySheet(data: API.ListParams) {
        return request({
            url: "/admin/outFactorySheet/infoOutFactorySheet",
            method: "get",
            params: data,
        });
    },
    // 入厂单列表
    pageInFactorySheet(data: API.ListParams) {
        return request({
            url: "/admin/inFactorySheet/pageInFactorySheet",
            method: "get",
            params: data,
        });
    },
    // 入厂单详情
    infoInFactorySheet(data: API.ListParams) {
        return request({
            url: "/admin/inFactorySheet/infoInFactorySheet",
            method: "get",
            params: data,
        });
    },
    // 订单列表
    pageOrders(data: API.ListParams) {
        return request({
            url: "/admin/orders/pageOrders",
            method: "get",
            params: data,
        });
    },
    // 订单详情
    infoOrders(data: API.ListParams) {
        return request({
            url: "/admin/orders/infoOrders",
            method: "get",
            params: data,
        });
    },
    // 确认出厂
    confirmFactory(data: API.ListParams) {
        return request({
            url: "/admin/orders/confirmFactory",
            method: "post",
            data,
        });
    },

      // 出厂单详情
      infoOutFactory(data: API.ListParams) {
        return request({
            url: "/admin/orders/infoOutFactory",
            method: "get",
            params: data,
        });
    },
};

export default order;
