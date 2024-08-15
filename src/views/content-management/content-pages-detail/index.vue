<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { Plus, DeleteFilled } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import ContentBox from "@/components/ContentBox.vue";
import ComponentsBanner from "@/components/ComponentsBanner.vue";

const router = useRouter();

/** 初始数据 */
const dataSet = ref({
  title: "",
  path: "",
  desciption: "",
  state: 1,
  components: [],
});

/** 组件类型下拉选项 */
const componentsType = ref([
  {
    text: "轮播图",
    value: "banner",
  },
  {
    text: "了解回澜",
    value: "about",
  },
  {
    text: "回澜体验",
    value: "experience",
  },
  {
    text: "回澜资讯",
    value: "information",
  },
  {
    text: "威士忌共创",
    value: "creation",
  },
  {
    text: "回澜团队",
    value: "team",
  },
]);

/** 初始方法 */
onMounted(() => {});

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

/** 子组件更新父组件数据 */
const handUpdataDateSet = (index: number, data: any) => {
  dataSet.value.components[index] = data;
};

/** 提交 */
const onSubmit = () => {
  console.log("==待提交数据==", dataSet.value);
};
/** 返回 */
const onBack = () => {
  router.go(-1);
};
</script>
<template>
  <div class="content">
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
              <el-input v-model="dataSet.path" placeholder="请输入" clearable />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="页面描述">
              <el-input
                v-model="dataSet.desciption"
                :autosize="{ minRows: 3, maxRows: 5 }"
                type="textarea"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </ContentBox>

    <ContentBox title="页面配置">
      <el-button type="primary" :icon="Plus" @click="handAdd()"
        >新增组件</el-button
      >

      <template v-if="dataSet?.components?.length">
        <div
          class="groups"
          v-for="(item, index) in dataSet.components"
          :key="index"
        >
          <div class="flex flex_between groups_top">
            <div class="flex flex_align">
              <div class="groups_label">类型：</div>
              <el-select
                v-model="item.type"
                placeholder="选择类型"
                style="width: 240px"
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
          <ComponentsBanner
            v-if="item.type"
            @updataDateSet="handUpdataDateSet"
            :data="item"
          />
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
  background: rgba(0, 0, 0, 0.1);

  .groups_top {
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .groups_label {
    font-size: 14px;
    margin-right: 10px;
  }
}
</style>
