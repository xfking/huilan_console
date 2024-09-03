import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ElementUI from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import '@wangeditor/editor/dist/css/style.css'
import "./style/index.less";
// import "./permission";
import { sublogin } from "./permission"

import "element-plus/dist/index.css";
import { isoToDateStrFormat } from "./utils";

sublogin()
const app: any = createApp(App);
// 定义一个全局filter
app.config.globalProperties.$filters = {
  formatTime(time: any) {
    if (!time) return "";
    return isoToDateStrFormat(time);
  },
};

app.use(router);
app.use(ElementUI, { locale: zhCn });
app.use(createPinia());
app.mount("#app");
