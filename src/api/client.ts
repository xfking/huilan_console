import request from "@/utils/request";

const client = {
  // 司机列表
  pageDriver(data: any) {
    return request({
      url: "/admin/driver/pageDriver",
      method: "get",
      params: data,
    });
  },
  // 司机详情
  infoDriver(data: any) {
    return request({
      url: "/admin/driver/infoDriver",
      method: "get",
      params: data,
    });
  },
  // 新增司机
  createDriver(data: any) {
    return request({
      url: "/admin/driver/createDriver",
      method: "post",
      data,
    });
  },
  // 修改司机
  editDriver(data: any) {
    return request({
      url: "/admin/driver/editDriver",
      method: "post",
      data,
    });
  },
  // 删除司机
  delDriver(data: any) {
    return request({
      url: "/admin/driver/delDriver",
      method: "post",
      data,
    });
  },

  // 区域列表
  pageArea(data: any) {
    return request({
      url: "/admin/area/pageArea",
      method: "get",
      params: data,
    });
  },
  // 区域详情
  infoArea(data: any) {
    return request({
      url: "/admin/area/infoArea",
      method: "get",
      params: data,
    });
  },
  // 所有区域
  getArea(data: any) {
    return request({
      url: "/admin/area/getArea",
      method: "get",
      params: data,
    });
  },
  // 新增区域
  createArea(data: any) {
    return request({
      url: "/admin/area/createArea",
      method: "post",
      data,
    });
  },
  // 修改区域
  editArea(data: any) {
    return request({
      url: "/admin/area/editArea",
      method: "post",
      data,
    });
  },
  // 删除区域
  delArea(data: any) {
    return request({
      url: "/admin/area/delArea",
      method: "post",
      data,
    });
  },

  // 供应商列表
  pageSupplier(data: any) {
    return request({
      url: "/admin/supplier/pageSupplier",
      method: "get",
      params: data,
    });
  },
  // 供应商详情
  infoSupplier(data: any) {
    return request({
      url: "/admin/supplier/infoSupplier",
      method: "get",
      params: data,
    });
  },
  // 新增供应商
  createSupplier(data: any) {
    return request({
      url: "/admin/supplier/createSupplier",
      method: "post",
      data,
    });
  },
  // 修改供应商
  editSupplier(data: any) {
    return request({
      url: "/admin/supplier/editSupplier",
      method: "post",
      data,
    });
  },
  // 删除供应商
  delSupplier(data: any) {
    return request({
      url: "/admin/supplier/delSupplier",
      method: "post",
      data,
    });
  },

  // 经销商列表
  pageAgent(data: any) {
    return request({
      url: "/admin/agent/pageAgent",
      method: "get",
      params: data,
    });
  },
  // 经销商详情
  infoAgent(data: any) {
    return request({
      url: "/admin/agent/infoAgent",
      method: "get",
      params: data,
    });
  },
  // 所有经销商
  getAgent(data: any) {
    return request({
      url: "/admin/agent/getAgent",
      method: "get",
      params: data,
    });
  },
  // 新增经销商
  createAgent(data: any) {
    return request({
      url: "/admin/agent/createAgent",
      method: "post",
      data,
    });
  },
  // 修改经销商
  editAgent(data: any) {
    return request({
      url: "/admin/agent/editAgent",
      method: "post",
      data,
    });
  },
  // 删除经销商
  delAgent(data: any) {
    return request({
      url: "/admin/agent/delAgent",
      method: "post",
      data,
    });
  },

  // 客户列表
  pageMember(data: any) {
    return request({
      url: "/admin/member/pageMember",
      method: "get",
      params: data,
    });
  },
  // 客户详情
  infoMember(data: any) {
    return request({
      url: "/admin/member/infoMember",
      method: "get",
      params: data,
    });
  },
  // 添加客户
  createMember(data: any) {
    return request({
      url: "/admin/member/createMember",
      method: "post",
      data,
    });
  },
  // 编辑客户
  editMember(data: any) {
    return request({
      url: "/admin/member/editMember",
      method: "post",
      data,
    });
  },
  // 删除客户
  delMember(data: any) {
    return request({
      url: "/admin/member/delMember",
      method: "post",
      data,
    });
  },

  // 客户充值
  rechargeMember(data: any) {
    return request({
      url: "/admin/member/rechargeMember",
      method: "post",
      data,
    });
  },


  // 客户调价
  // 调价列表
  pageMCement(data: any) {
    return request({
      url: "/admin/mCement/pageMCement",
      method: "get",
      params: data,
    });
  },
  // 调价详情
  infoMCement(data: any) {
    return request({
      url: "/admin/mCement/infoMCement",
      method: "get",
      params: data,
    });
  },
  // 新增调价
  createMCement(data: any) {
    return request({
      url: "/admin/mCement/createMCement",
      method: "post",
      data,
    });
  },
  // 修改调价
  editMCement(data: any) {
    return request({
      url: "/admin/mCement/editMCement",
      method: "post",
      data,
    });
  },
  // 删除调价
  delMCement(data: any) {
    return request({
      url: "/admin/mCement/delMCement",
      method: "post",
      data,
    });
  },
  // 经销商调价
  // 调价列表
  agentPageMCement(data: any) {
    return request({
      url: "/admin/agentCement/pageAgentCement",
      method: "get",
      params: data,
    });
  },
  // 调价详情
  agentInfomcement(data: any) {
    return request({
      url: "/admin/agentCement/infoAgentCement",
      method: "get",
      params: data,
    });
  },
  // 新增调价
  agentCreatemcement(data: any) {
    return request({
      url: "/admin/agentCement/createAgentCement",
      method: "post",
      data,
    });
  },
  // 修改调价
  agentEditmcement(data: any) {
    return request({
      url: "/admin/agentCement/editAgentCement",
      method: "post",
      data,
    });
  },
  // 删除调价
  agentDelmcement(data: any) {
    return request({
      url: "/admin/agentCement/delAgentCement",
      method: "post",
      data,
    });
  },

  // 区域调价
  // 调价列表
  areaPageMCement(data: any) {
    return request({
      url: "/admin/areaCement/pageAreaCement",
      method: "get",
      params: data,
    });
  },
  // 调价详情
  infoAreaCement(data: any) {
    return request({
      url: "/admin/areaCement/infoAreaCement",
      method: "get",
      params: data,
    });
  },

  // 新增调价
  createAreaCement(data: any) {
    return request({
      url: "/admin/areaCement/createAreaCement",
      method: "post",
      data,
    });
  },
  // 修改调价
  editAreaCement(data: any) {
    return request({
      url: "/admin/areaCement/editAreaCement",
      method: "post",
      data,
    });
  },
  // 删除调价
  delAreaCement(data: any) {
    return request({
      url: "/admin/areaCement/delAreaCement",
      method: "post",
      data,
    });
  },
};

export default client;
