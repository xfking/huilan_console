import request from "@/utils/request";

const goods = {
    // 商品列表
    pageCement(data: any) {
        return request({
            url: "/admin/cement/pageCement",
            method: "get",
            params: data
        });
    },
    // 商品详情
    infoCement(data: any) {
        return request({
            url: "/admin/cement/infoCement",
            method: "get",
            params: data
        });
    },
    // 所有商品
    getCement(data: any) {
        return request({
            url: "/admin/cement/getCement",
            method: "get",
            params: data
        });
    },
    // 新建商品
    createCement(data: any) {
        return request({
            url: "/admin/cement/createCement",
            method: "post",
            data
        });
    },
    // 修改商品
    editCement(data: any) {
        return request({
            url: "/admin/cement/editCement",
            method: "post",
            data
        });
    },
    // 品牌列表
    pageBrand(data: any) {
        return request({
            url: "/admin/brand/pageBrand",
            method: "get",
            params: data
        });
    },
    // 所有品牌
    getBrand(data: any) {
        return request({
            url: "/admin/brand/getBrand",
            method: "get",
            params: data
        });
    },
    // 品牌详情
    infoBrand(data: any) {
        return request({
            url: "/admin/brand/infoBrand",
            method: "get",
            params: data
        });
    },
    // 新增品牌
    createBrand(data: any) {
        return request({
            url: "/admin/brand/createBrand",
            method: "post",
            data
        });
    },
    // 修改品牌 
    editBrand(data: any) {
        return request({
            url: "/admin/brand/editBrand",
            method: "post",
            data
        });
    },
    // 删除品牌
    delBrand(data: any) {
        return request({
            url: "/admin/brand/delBrand",
            method: "post",
            data
        });
    },
    // 文件上传
  fileUpload(data: any) {
    return request({
      url: "/admin/file/getOssSignature",
      method: "get",
      params: data,
    });
  },
};

export default goods;
