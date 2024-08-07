<template>
  <div class="header">
    <div class="header-left"></div>
    <div class="header-right">
      <div class="header_user">
        <img
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
          alt=""
        />
      </div>
      <div class="user">{{ userInfo.realname || "暂未获取到用户名称" }}</div>
      <div class="layout" @click="handOut">登 出</div>
    </div>
  </div>

  <el-dialog v-model="dialogVisible" title="确认出厂单信息" width="850">
    <el-form
      :inline="true"
      :model="dataSet"
      class="demo-form-inline"
      label-width="100"
      label-suffix="："
    >
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="出厂单号" prop="order_no">
            {{ dataSet.out_no }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="订单号" prop="state_txt">
            {{ dataSet.order_no }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="经销商" prop="member">
            {{ dataSet.agent }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="客户" prop="user">
            {{ dataSet.member }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="品牌" prop="user">
            {{ dataSet.breed }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="出场编号" prop="user">
            {{ dataSet.factory_no }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="车牌号" prop="user">
            {{ dataSet.plate }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="进厂时间" prop="user">
            {{ dataSet.in_factory }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="出场时间" prop="user">
            {{ dataSet.out_factory }}
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="8">
          <el-form-item label="停留时间" prop="user">
            {{ dataSet.stop_factory }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="单位" prop="user">
            {{ dataSet.unit }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="皮重" prop="user">
            {{ dataSet.tare_weight }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="总重">
            {{ dataSet.total_weight }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="净重">
            {{ dataSet.net_weight }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="发货员">
            {{ dataSet.delivery_staff }}
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="司磅员" prop="user">
            {{ dataSet.weighbridge_staff }}
          </el-form-item>
        </el-col>
        <el-col :xs="24">
          <el-form-item label="备注">
            {{ dataSet.remark }}
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="描述" prop="user">
            {{ dataSet.description }}
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="hansSubmit()"> 确定 </el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog v-model="scoreDialogVisible" title="车辆进场" width="850">
    <el-form
      :inline="true"
      :model="dataSet"
      class="demo-form-inline"
      label-width="100"
      label-suffix="："
    >
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="订单号">
            {{ dataSet.order_no }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="车牌号">
            {{ dataSet.plate }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="进场时间">
            {{ dataSet.in_factory }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="下单数量">
            {{ dataSet.amount }}
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="scoreDialogVisible = false"
          >确 定</el-button
        >
      </div>
    </template>
  </el-dialog>

  <el-dialog v-model="InDialogVisible" title="入厂单信息" width="850">
    <el-form
      :inline="true"
      :model="dataSet"
      class="demo-form-inline"
      label-width="100"
      label-suffix="："
    >
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="入厂单号">
            {{ dataSet.in_no }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="订单号">
            {{ dataSet.order_no }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="车牌号">
            {{ dataSet.plate }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="进场时间">
            {{ dataSet.in_factory }}
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="下单数量">
            {{ dataSet.amount }}
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="InDialogVisible = false"
          >确 定</el-button
        >
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { userStore } from "@/store/user";
import { getToken, getUserInfo } from "@/utils/auth";
import { ref, onMounted, h } from "vue";
import { ElMessage, ElNotification } from "element-plus";
import { orderStore } from "@/store/order";
import { useRouter } from "vue-router";

const store = userStore();
const order = orderStore();
const userInfo = getUserInfo();
const router = useRouter();

const dialogVisible = ref(false);
const scoreDialogVisible = ref(false);
const InDialogVisible = ref(false);
const dataSet = ref("");
const maxNumber = ref(0);

const handOut = () => {
  store.logout().then(() => {
    location.reload();
  });
};

const hansSubmit = () => {
  order.confirmFactory({}).then((res) => {
    if (res && res.data) {
      ElMessage.success("提交成功,即将跳转出厂单据打印页面");
      let timer = setTimeout(() => {
        router.push({
          path: "orderPrint",
          query: { id: res.data.id, type: "FACTORY" },
        });
      }, 1000);
    }
  });
};

const connectWebSocket = () => {
  const token: any = getToken();
  const ws = new WebSocket("wss://api.shsn.top/websocket");

  ws.onopen = function (event) {
    console.log("WebSocket 连接已打开");
    console.log("==重新连接次数==", maxNumber.value);
    // ws.send("连接已建立，可以开始发送数据");
    ws.send(JSON.stringify({ type: "auth", token }));
    setInterval(function () {
      if (ws.readyState === WebSocket.OPEN) {
        // 发送心跳包
        ws.send(JSON.stringify({ type: "ping", msg: "保持心跳" }));
      }
    }, 10000);
  };

  ws.onmessage = function (event) {
    let data = {
      type: "",
      message: "",
    };
    try {
      data = JSON.parse(event.data);
    } catch {
      data = event.data;
    }

    console.log("收到服务器消息:", data);

    if (data.type === "in_factory") {
      ElNotification({
        title: "消息提示",
        message: h("div", [
          h("strong", {}, "有司机扫码入厂"),
          h(
            "a",
            {
              style: "",
            },
            [
              h(
                "a",
                {
                  style: "color:#409eff;margin-left:15px;cursor: pointer;",
                  onClick: () => {
                    dataSet.value = JSON.parse(data.message);
                    console.log("=======车辆扫码入厂======", dataSet.value);
                    scoreDialogVisible.value = true;
                  },
                  id: 1,
                },
                "查看详情"
              ),
            ]
          ),
        ]),
        type: "info",
        duration: 10000,
      });
    } else if (data.type === "in_weighing_sheet") {
      ElNotification({
        title: "消息提示",
        message: h("div", [
          h("strong", {}, "有新的入厂单生成"),
          h(
            "a",
            {
              style: "",
            },
            [
              h(
                "a",
                {
                  style: "color:#409eff;margin-left:15px;cursor: pointer;",
                  onClick: () => {
                    dataSet.value = JSON.parse(data.message);
                    console.log("=======入厂单信息======", dataSet.value);
                    InDialogVisible.value = true;
                  },
                  id: 1,
                },
                "查看详情"
              ),
            ]
          ),
        ]),
        type: "success",
        duration: 10000,
      });
    } else if (data.type === "out_weighing_sheet") {
      ElNotification({
        title: "确认信息",
        message: h("div", [
          h("strong", {}, "请确认出厂单信息"),
          h(
            "a",
            {
              style: "",
            },
            [
              h(
                "a",
                {
                  style: "color:#409eff;margin-left:15px;cursor: pointer;",
                  onClick: () => {
                    dataSet.value = JSON.parse(data.message);
                    console.log("=======出厂单信息======", dataSet.value);
                    dialogVisible.value = true;
                  },
                  id: 1,
                },
                "点击确认"
              ),
            ]
          ),
        ]),
        type: "warning",
        position: "bottom-right",
        dangerouslyUseHTMLString: true,
        duration: 0,
        offset: 100,
      });
    }
  };

  ws.onclose = function (event) {
    console.log("WebSocket 连接已关闭", event);
    if (maxNumber.value < 20) {
      maxNumber.value++;
      connectWebSocket();
    }
  };

  ws.onerror = function (error) {
    console.error("WebSocket 出错:", error);
  };
};

onMounted(() => {
  // 值守人员可以收到提示信息
  if (userInfo.is_duty == 1) {
    connectWebSocket();
  }
});
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  box-sizing: border-box;
  background-color: #242424;
  color: #fff;

  .header-right {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .header_user {
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 20px;
    margin-right: 12px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .user {
    margin-right: 24px;
  }

  .layout:hover {
    color: #ffd04b;
  }
}
</style>
