import request from "@/utils/request";

const barrel = {
  // 单桶列表
  pageBarrel(data: API.ListParams) {
    return request({
      url: "/admin/barrel/pageBarrel",
      method: "get",
      params: data,
    });
  },
  // 单桶详情
  infoBarrel(data: API.ListParams) {
    return request({
      url: "/admin/barrel/infoBarrel",
      method: "get",
      params: data,
    });
  },

  // 开启/禁用单桶
  stateBarrel(data: API.ListParams) {
    return request({
      url: "/admin/barrel/stateBarrel",
      method: "post",
      data,
    });
  },
  // 新增单桶
  createBarrel(data: API.ListParams) {
    return request({
      url: "/admin/barrel/createBarrel",
      method: "post",
      data,
    });
  },
  // 修改单桶
  editBarrel(data: API.ListParams) {
    return request({
      url: "/admin/barrel/editBarrel",
      method: "post",
      data,
    });
  },
  // 删除单桶
  delBarrel(data: API.ListParams) {
    return request({
      url: "/admin/barrel/delBarrel",
      method: "post",
      data,
    });
  },

  // 酒证列表
  pageCard(data: API.ListParams) {
    return request({
      url: "/admin/wine/pageCard",
      method: "get",
      params: data,
    });
  },
  // 酒证详情
  infoCard(data: API.ListParams) {
    return request({
      url: "/admin/wine/infoCard",
      method: "get",
      params: data,
    });
  },

  // 新增酒证
  createCard(data: API.ListParams) {
    return request({
      url: "/admin/wine/createCard",
      method: "post",
      data,
    });
  },
  // 修改酒证
  editCard(data: API.ListParams) {
    return request({
      url: "/admin/wine/editCard",
      method: "post",
      data,
    });
  },
  // 删除酒证
  delCard(data: API.ListParams) {
    return request({
      url: "/admin/wine/delCard",
      method: "post",
      data,
    });
  },
  // 开启/禁用酒证
  stateCard(data: API.ListParams) {
    return request({
      url: "/admin/wine/stateCard",
      method: "post",
      data,
    });
  },
};

export default barrel;
