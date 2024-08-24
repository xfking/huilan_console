<template>
  <div class="content-box">
    <div class="home_top">
      <div class="home_left flex flex_center">
        <img
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
          class="home_logo"
          alt=""
        />
        <div class="home_left_title">
          <div class="f_w" style="margin-top: 15px">您好！系统管理员</div>
          <div class="color_gray" style="margin-top: 10px; font-size: 13px">
            今日天气晴朗，气温在15℃至25℃之间，东南风。
          </div>
        </div>
      </div>
      <div class="home_right flex flex_center">
        <div class="num_box">
          <div class="flex flex_center">
            <el-icon color="#67C23A" size="20"><TrendCharts /></el-icon>
            <span style="padding-left: 5px">累积销售额</span>
          </div>
          <div class="num">2222222</div>
        </div>
        <div class="num_box">
          <div class="flex flex_center">
            <el-icon color="#F56C6C" size="20"><WalletFilled /></el-icon>
            <span style="padding-left: 5px">累积销售量</span>
          </div>
          <div class="num">888888</div>
        </div>
      </div>
    </div>

    <el-row :gutter="15">
      <el-col :span="6">
        <div class="grid-content">
          <div class="group flex flex_between">
            <span>销售额</span>
            <span class="title color_1">当日</span>
          </div>
          <div class="flex flex_align flex_between">
            <div class="group_num">3000</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="group flex flex_between">
            <span>销售额</span>
            <span class="title color_2">昨日</span>
          </div>
          <div class="flex flex_align flex_between">
            <div class="group_num">3000</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="group flex flex_between">
            <span>销售额</span>
            <span class="title color_3">当月</span>
          </div>
          <div class="flex flex_align flex_between">
            <div class="group_num">3000</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="group flex flex_between">
            <span>销售额</span>
            <span class="title color_4">累积</span>
          </div>
          <div class="flex flex_align flex_between">
            <div class="group_num">3000</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="group flex flex_between">
            <span>销售量</span>
            <span class="title color_1">当日</span>
          </div>
          <div class="flex flex_align flex_between">
            <div class="group_num">3000</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="group flex flex_between">
            <span>销售量</span>
            <span class="title color_2">昨日</span>
          </div>
          <div class="flex flex_align flex_between">
            <div class="group_num">3000</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="group flex flex_between">
            <span>销售量</span>
            <span class="title color_3">当月</span>
          </div>
          <div class="flex flex_align flex_between">
            <div class="group_num">3000</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="group flex flex_between">
            <span>销售量</span>
            <span class="title color_4">累积</span>
          </div>
          <div class="flex flex_align flex_between">
            <div class="group_num">3000</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <ContentBox title="报表统计" style="flex: 1">
      <div id="echart" style="flex: 1"></div>
    </ContentBox>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import ContentBox from "@/components/ContentBox.vue";
import * as echarts from "echarts";
import {
  TrendCharts,
  WalletFilled,
  PieChart,
  Coin,
} from "@element-plus/icons-vue";
import { getToken, getUserInfo } from "@/utils/auth";

const userInfo = getUserInfo();
const option: any = ref({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  legend: {
    data: ["销售额", "销售量", "累计销售额"],
  },
  xAxis: [
    {
      type: "category",
      data: [
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期日",
      ],
      axisPointer: {
        type: "shadow",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "销售量",
      min: 0,
      max: 300,
      interval: 50,
      axisLabel: {
        formatter: "{value}",
      },
    },
    {
      type: "value",
      name: "累计销售额",
      min: 0,
      max: 30,
      interval: 5,
      axisLabel: {
        formatter: "{value} w",
      },
    },
  ],
  series: [
    {
      name: "销售额",
      type: "bar",
      tooltip: {
        valueFormatter: function (value: any) {
          return value;
        },
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
      ],
    },
    {
      name: "销售量",
      type: "bar",
      tooltip: {
        valueFormatter: function (value: string) {
          return value + " 单";
        },
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
      ],
    },
    {
      name: "累计销售额",
      type: "line",
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value: string) {
          return value + " 元";
        },
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    },
  ],
});

const init = () => {
  var dom = document.getElementById("echart");
  var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });

  myChart.setOption(option.value);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
};

onMounted(() => {
  init();
});
</script>

<style lang="less" scoped>
.content-box {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.home_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  background: #fff;
  border-radius: 4px;
  padding: 15px;
}

.home_logo {
  width: 80px;
  height: 80px;
  margin-right: 15px;
  border-radius: 50%;
  overflow: hidden;
}

.home_left_title {
  line-height: 1.6;
}

.color_gray {
  color: rgba(0, 0, 0, 0.5);
}

.num_box {
  margin-right: 40px;
  text-align: center;
  line-height: 1.6;
}

.num {
  font-size: 26px;
  // font-weight: 700;
  color: #f56c6c;
}

.el-row {
  margin-bottom: 15px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
  margin-bottom: 15px;
}

.grid-content {
  border-radius: 4px;
  background: #fff;
  height: 80px;
  padding: 15px;
}

.group {
  margin-bottom: 15px;
}
.group_num {
  font-size: 36px;
  // font-weight: 700;
}
.title {
  font-size: 12px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
.color_1 {
  color: #409eff;
  background-color: #c6e2ff;
  border-color: #a0cfff;
}

.color_2 {
  color: #67c23a;
  background-color: #d1edc4;
  border-color: #b3e19d;
}

.color_3 {
  color: #e6a23c;
  background-color: #f8e3c5;
  border-color: #f3d19e;
}

.color_4 {
  color: #f56c6c;
  background-color: #fcd3d3;
  border-color: #fab6b6;
}
</style>
