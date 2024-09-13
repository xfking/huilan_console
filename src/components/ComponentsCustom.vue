<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs } from "vue";
import ContentBox from "@/components/contentBox.vue";
import ComponentsUploadImg from "@/components/ComponentsUploadImg.vue";
import { userStore } from "@/store/user";
import { CircleClose } from "@element-plus/icons-vue";

interface IitemInfo {
  id?: string;
  title?: string;
  position?: string;
  path?: string;
  desciption?: string;
  buttonText?: string;
  pcImg?: string;
  appImg?: string;
}

const store = userStore();
const emit = defineEmits(["updataDateSet"]);
const props = defineProps({
  data: {
    default: {},
  },
  pathOptions: {
    default: [],
  },
});
const { data, pathOptions } = toRefs(props);
const currentId: number = ref(0);
const formData: IitemInfo = ref({
  id: "",
  title: "",
  path: "",
  displays: 1,
  desciption: "",
  buttonText: "",
});

const options: any = ref([
  {
    text: "回澜资讯",
    value: "news",
  },
  {
    text: "回澜团队",
    value: "team",
  },
  {
    text: "单桶威士忌",
    value: "barrel",
  },
  {
    text: "回澜音乐",
    value: "music",
  },
]);

onMounted(() => {
  if (data.value) {
    formData.value = { ...formData.value, ...data.value.data };
  }
});

/** 提交保存方法 */
const handSubmit = () => {
  const newData = Object.assign({}, formData.value);
  data.value.data = newData;
};
</script>

<template>
  <div class="component_box">
    <ContentBox title="组件信息">
      <el-form
        :inline="true"
        v-model="formData"
        class="demo-form-inline"
        label-width="150"
        label-suffix="："
      >
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="标题">
              <el-input
                v-model="formData.title"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="描述">
              <el-input
                v-model="formData.desciption"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="跳转按钮文案">
              <el-input
                v-model="formData.buttonText"
                placeholder="例如：探索更多"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="一页展示条数">
              <el-input
                v-model="formData.displays"
                type="number"
                placeholder="默认1条"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="轮播数据绑定">
              <el-select
                v-model="formData.path"
                filterable
                allow-create
                :reserve-keyword="false"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.text"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="">
        <el-button type="primary" @click="handSubmit">保存</el-button>
      </div>
    </ContentBox>
  </div>
</template>

<style lang="less" scoped>
.component_box {
  padding: 20px 0;
}
</style>
