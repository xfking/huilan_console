import request from "@/utils/request";

const user = {
  // 登录
  login(data: API.InterData) {
    return request({
      url: "/admin/staff/login",
      method: "post",
      data,
    });
  },
  //登出
  logout() {
    return request({
      url: "/admin/staff/logout",
      method: "get",
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
  // 获取用户列表
  getUserList(data: API.ListParams) {
    return request({
      url: "/admin/staff/pageStaff",
      method: "get",
      params: data,
    });
  },
};

export default user;
