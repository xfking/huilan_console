import request from "@/utils/request";

const member = {
  // 会员列表
  pageMember(data: API.ListParams) {
    return request({
      url: "/admin/member/pageMember",
      method: "get",
      params: data,
    });
  },
  // 会员详情
  infoMember(data: API.ListParams) {
    return request({
      url: "/admin/member/infoMember",
      method: "get",
      params: data,
    });
  },

  // 新增会员
  createMember(data: API.ListParams) {
    return request({
      url: "/admin/member/createMember",
      method: "post",
      data,
    });
  },
  // 修改会员
  editMember(data: API.ListParams) {
    return request({
      url: "/admin/member/editMember",
      method: "post",
      data,
    });
  },
  // 删除会员
  delMember(data: API.ListParams) {
    return request({
      url: "/admin/member/delMember",
      method: "post",
      data,
    });
  },
  // 开启/禁用会员
  stateMember(data: API.ListParams) {
    return request({
      url: "/admin/member/stateMember",
      method: "post",
      data,
    });
  },

  // 管理员列表
  pageStaff(data: API.ListParams) {
    return request({
      url: "/admin/staff/pageStaff",
      method: "get",
      params: data,
    });
  },
  // 管理员详情
  infoStaff(data: API.ListParams) {
    return request({
      url: "/admin/staff/infoStaff",
      method: "get",
      params: data,
    });
  },

  // 新增管理员
  createStaff(data: API.ListParams) {
    return request({
      url: "/admin/staff/createStaff",
      method: "post",
      data,
    });
  },
  // 修改管理员
  editStaff(data: API.ListParams) {
    return request({
      url: "/admin/staff/editStaff",
      method: "post",
      data,
    });
  },
  // 删除管理员
  delStaff(data: API.ListParams) {
    return request({
      url: "/admin/staff/delStaff",
      method: "post",
      data,
    });
  },
  // 开启/禁用管理员
  stateStaff(data: API.ListParams) {
    return request({
      url: "/admin/staff/stateStaff",
      method: "post",
      data,
    });
  },
};

export default member;
