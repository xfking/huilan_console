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
  // 获取用户列表
  getUserList(data: API.ListParams) {
    return request({
      url: "/admin/staff/pageStaff",
      method: "get",
      params: data,
    });
  },
  // 新增员工
  createStaff(data: API.ListParams) {
    return request({
      url: "/admin/staff/createStaff",
      method: "post",
      data,
    });
  },
  // 员工信息
  infoStaff(data: API.ListParams) {
    return request({
      url: "/admin/staff/infoStaff",
      method: "get",
      params: data,
    });
  },
  // 修改员工
  editStaff(data: API.ListParams) {
    return request({
      url: "/admin/staff/editStaff",
      method: "post",
      data,
    });
  },
  // 删除员工
  delStaff(data: API.ListParams) {
    return request({
      url: "/admin/staff/delStaff",
      method: "post",
      data,
    });
  },
  // 所有员工
  getStaff(data: API.ListParams) {
    return request({
      url: "/admin/staff/getStaff",
      method: "get",
      data,
    });
  },
};

export default user;
