import request from "@/utils/request";

const content = {
  // 页面管理列表
  contentPagePages(data: API.ListParams) {
    return request({
      url: "/admin/pages/pagePages",
      method: "get",
      params: data,
    });
  },
  // 页面详情
  infoPages(data: API.ListParams) {
    return request({
      url: "/admin/pages/infoPages",
      method: "get",
      params: data,
    });
  },
  // 开启/禁用页面
  contentStatePages(data: API.ListParams) {
    return request({
      url: "/admin/pages/statePages",
      method: "post",
      data,
    });
  },
  // 新增页面
  contentCreatePages(data: API.ListParams) {
    return request({
      url: "/admin/pages/createPages",
      method: "post",
      data,
    });
  },
  // 修改页面
  editPages(data: API.ListParams) {
    return request({
      url: "/admin/pages/editPages",
      method: "post",
      data,
    });
  },
  // 删除页面
  delPages(data: API.ListParams) {
    return request({
      url: "/admin/pages/delPages",
      method: "post",
      data,
    });
  },

  // 资讯列表
  pageArticle(data: API.ListParams) {
    return request({
      url: "/admin/article/pageArticle",
      method: "get",
      params: data,
    });
  },
  // 资讯详情
  infoArticle(data: API.ListParams) {
    return request({
      url: "/admin/article/infoArticle",
      method: "get",
      params: data,
    });
  },
  // 新增资讯
  createArticle(data: API.ListParams) {
    return request({
      url: "/admin/article/createArticle",
      method: "post",
      data,
    });
  },
  // 修改资讯
  editArticle(data: API.ListParams) {
    return request({
      url: "/admin/article/editArticle",
      method: "post",
      data,
    });
  },
  // 删除资讯
  delArticle(data: API.ListParams) {
    return request({
      url: "/admin/article/delArticle",
      method: "post",
      data,
    });
  },
  // 开启/禁用资讯
  stateArticle(data: API.ListParams) {
    return request({
      url: "/admin/article/stateArticle",
      method: "post",
      data,
    });
  },

  // 团队列表
  pageTeam(data: API.ListParams) {
    return request({
      url: "/admin/team/pageTeam",
      method: "get",
      params: data,
    });
  },
  // 团队详情
  infoTeam(data: API.ListParams) {
    return request({
      url: "/admin/team/infoTeam",
      method: "get",
      params: data,
    });
  },
  // 新增团队
  createTeam(data: API.ListParams) {
    return request({
      url: "/admin/team/createTeam",
      method: "post",
      data,
    });
  },
  // 修改团队
  editTeam(data: API.ListParams) {
    return request({
      url: "/admin/team/editTeam",
      method: "post",
      data,
    });
  },
  // 删除团队
  delTeam(data: API.ListParams) {
    return request({
      url: "/admin/team/delTeam",
      method: "post",
      data,
    });
  },
  // 开启/禁用团队
  stateTeam(data: API.ListParams) {
    return request({
      url: "/admin/team/stateTeam",
      method: "post",
      data,
    });
  },

  // 音乐列表
  pageMusic(data: API.ListParams) {
    return request({
      url: "/admin/music/pageMusic",
      method: "get",
      params: data,
    });
  },
  // 音乐详情
  infoMusic(data: API.ListParams) {
    return request({
      url: "/admin/music/infoMusic",
      method: "get",
      params: data,
    });
  },
  // 新增音乐
  createMusic(data: API.ListParams) {
    return request({
      url: "/admin/music/createMusic",
      method: "post",
      data,
    });
  },
  // 修改音乐
  editMusic(data: API.ListParams) {
    return request({
      url: "/admin/music/editMusic",
      method: "post",
      data,
    });
  },
  // 删除音乐
  delMusic(data: API.ListParams) {
    return request({
      url: "/admin/music/delMusic",
      method: "post",
      data,
    });
  },
  // 开启/禁用音乐
  stateMusic(data: API.ListParams) {
    return request({
      url: "/admin/music/stateMusic",
      method: "post",
      data,
    });
  },
};

export default content;
