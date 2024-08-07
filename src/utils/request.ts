import axios from "axios";
import { getToken } from "./auth";
import { ElMessage } from "element-plus";

const service = axios.create({
  baseURL: import.meta.env.DEV ? "/api" : import.meta.env.BASE_URL + 'api',
  // baseURL:import.meta.env.VITE_BASE_API,
  withCredentials: true,
  timeout: 18000,
});

service.interceptors.request.use((config: any) => {
  const token = getToken();

  if (token) {
    config.headers["token"] = getToken();
  }

  // 修改请求的参数 --- get
  if (config.method === 'get' && config.params?.start_tm || config.params?.end_tm) {
    config.params = {
      ...config.params,
      start_tm: Math.floor(config.params.start_tm / 1000),
      end_tm: Math.floor(config.params.end_tm / 1000),
    };
  }
  // 修改请求的参数 --- post
  if (config.method === 'post' && config.data?.start_tm || config.data?.end_tm) {
    config.data = {
      ...config.data,
      start_tm: Math.floor(config.data.start_tm / 1000),
      end_tm: Math.floor(config.data.end_tm / 1000),
    };
  }


  return config;
});

service.interceptors.response.use(
  (response) => {
    const { data } = response;
    //Todo
    console.log(response);
    if (data.code !== 200) {
      console.error("接口请求出错！");
      ElMessage.error(data.msg);
      return Promise.reject(response);
    }

    // if (data.data?.start_tm || data.data?.end_tm) {
    //   data.data.start_tm = `${data.data.start_tm}000`
    //   data.data.end_tm = `${data.data.end_tm}000`
    // }
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
