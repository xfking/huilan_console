<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ElMessage, ISelectProps } from "element-plus";
import { Plus, DeleteFilled } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import ContentBox from "@/components/contentBox.vue";
import ComponentsBanner from "@/components/componentsBanner.vue";
import ComponentsSingle from "@/components/componentsSingleImg.vue";
import ComponentsCard from "@/components/componentsCard.vue";
import ComponentsRichText from "@/components/componentsRichTextBox.vue";
import { contentStore } from "@/store/content";

const router = useRouter();
const { currentRoute } = useRouter();
const route = currentRoute.value;
const store = contentStore();

/** 初始数据 */
const dataSet = ref({
  id: "",
  title: "",
  url: "",
  desc: "",
  state: true,
  components: [],
});

/** 组件类型下拉选项 */
const componentsType = ref([
  {
    text: "轮播图",
    value: "banner",
  },
  {
    text: "单图",
    value: "single",
  },
  {
    text: "卡片",
    value: "card",
  },
  {
    text: "富文本",
    value: "richText",
  },
  {
    text: "团队",
    value: "team",
  },
]);

/** 初始方法 */
onMounted(() => {
  if (route.query.id) {
    dataSet.value.id = route.query.id;

    getInit();
  }
});

const getInit = () => {
  store.infoPages({ id: dataSet.value.id }).then((res) => {
    dataSet.value = {
      ...res.data,
      state: !!res.data.state,
      components: res.data.content,
    };
  });
};

/** 新增组件 */
const handAdd = () => {
  dataSet.value.components.push({
    type: "",
    data: "",
  });
};

/** 删除组件 */
const handDel = (index: number) => {
  dataSet.value.components.splice(index, 1);
};

/** 选择组件类型切换事件 */
const handChange = (e: InputEvent, index: number) => {
  dataSet.value.components[index] = {
    type: e,
    data: "",
  };
};

/** 子组件更新父组件数据 */
const handUpdataDateSet = (index: number, data: any) => {
  dataSet.value.components[index] = data;
};

/** 提交 */
const onSubmit = async () => {
  const params = {
    ...dataSet.value,
    state: Number(dataSet.value.state),
    content: JSON.stringify(dataSet.value.components),
  };
  console.log("==待提交数据==", dataSet.value);
  let res = "";
  if (params.id) {
    res = await store.editPages(params);
  } else {
    res = await store.contentCreatePages(params);
  }

  if (res) {
    ElMessage.success("提交成功");
    const timer = setTimeout(() => {
      router.go(-1);
    }, 1000);
  }
};
/** 返回 */
const onBack = () => {
  router.go(-1);
};
</script>
<template>
  <div class="content">
    <!-- 基础信息 -->
    <ContentBox title="基础信息">
      <el-form
        :inline="true"
        :model="dataSet"
        class="demo-form-inline"
        label-width="150"
        label-suffix="："
      >
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="页面标题">
              <el-input
                v-model="dataSet.title"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="页面链接">
              <el-input v-model="dataSet.url" placeholder="请输入" clearable />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="页面描述">
              <el-input
                v-model="dataSet.desc"
                :autosize="{ minRows: 3, maxRows: 5 }"
                type="textarea"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="启用页面">
              <el-switch
                v-model="dataSet.state"
                style="
                  --el-switch-on-color: #13ce66;
                  --el-switch-off-color: #ff4949;
                "
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </ContentBox>
    <!-- 页面配置 -->
    <ContentBox title="页面配置">
      <el-button type="primary" :icon="Plus" @click="handAdd()"
        >新增组件</el-button
      >

      <!-- 页面组件 组合 -->
      <template v-if="dataSet?.components?.length">
        <div
          class="groups"
          v-for="(item, index) in dataSet.components"
          :key="index"
        >
          <!-- 切换类型 -->
          <div class="flex flex_between groups_top">
            <div class="flex flex_align">
              <div class="groups_label">类型：</div>
              <el-select
                v-model="item.type"
                placeholder="选择类型"
                style="width: 240px"
                @change="handChange($event, index)"
              >
                <el-option
                  v-for="item in componentsType"
                  :key="item.value"
                  :label="item.text"
                  :value="item.value"
                />
              </el-select>
            </div>

            <el-button
              type="danger"
              :icon="DeleteFilled"
              @click="handDel(index)"
              >删除组件</el-button
            >
          </div>

          <template v-if="item.type">
            <!-- 轮播图组件 -->
            <ComponentsBanner
              v-if="item.type === 'banner'"
              @updataDateSet="handUpdataDateSet"
              :data="item"
            />
            <!-- 单图组件 -->
            <ComponentsSingle
              v-if="item.type === 'single'"
              @updataDateSet="handUpdataDateSet"
              :data="item"
            />

            <!-- 卡片组件 -->
            <ComponentsCard
              v-if="item.type === 'card'"
              @updataDateSet="handUpdataDateSet"
              :data="item"
            />

            <ComponentsRichText
              v-if="item.type === 'richText'"
              @updataDateSet="handUpdataDateSet"
              :data="item"
            />
          </template>
        </div>
      </template>
    </ContentBox>

    <div class="page_footer">
      <el-button type="primary" size="large" @click="onSubmit">提交</el-button>
      <el-button size="large" @click="onBack">返回</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.groups {
  width: 100%;
  margin: 40px 0;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.07);

  .groups_top {
    width: 100%;
    // padding: 15px 0;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .groups_label {
    font-size: 14px;
    font-weight: 700;
    margin-right: 10px;
  }
}
</style>
