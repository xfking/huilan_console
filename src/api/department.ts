import request from "@/utils/request";

const department = {
  // 获取部门列表
  getDepartmentList(data: API.ListParams) {
    return request({
      url: "/admin/department/pageDepartment",
      method: "get",
      params: data,
    });
  },
  // 新建部门
  createDepartment(data: API.ListParams) {
    return request({
      url: "/admin/department/createDepartment",
      method: "post",
      data,
    });
  },
  // 修改部门
  editDepartment(data: API.ListParams) {
    return request({
      url: "/admin/department/editDepartment",
      method: "post",
      data,
    });
  },
  // 所有部门
  getDepartment(data: API.ListParams) {
    return request({
      url: "/admin/department/getDepartment",
      method: "get",
      params:data,
    });
  },
  // 部门详情
  infoDepartment(data: API.ListParams) {
    return request({
      url: "/admin/department/infoDepartment",
      method: "get",
      params:data,
    });
  },
  // 删除部门
  delDepartment(data: API.ListParams) {
    return request({
      url: "/admin/department/delDepartment",
      method: "post",
      data,
    });
  },
  // 部门权限
  getPermission(data: API.ListParams) {
    return request({
      url: "/admin/department/getPermission",
      method: "get",
      params:data,
    });
  },
  // 设置部门权限
  setPermission(data: API.ListParams) {
    return request({
      url: "/admin/department/setPermission",
      method: "post",
      data,
    });
  },
};

export default department;
