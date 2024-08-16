<script lang="ts" setup>
import {
  defineEmits,
  defineProps,
  onMounted,
  reactive,
  ref,
  toRefs,
} from "vue";
import ContentBox from "@/components/ContentBox.vue";

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

const emit = defineEmits(["updataDateSet"]);
const props = defineProps({
  data: {
    default: {},
  },
});
const { data } = toRefs(props);
const currentId: number = ref(0);
const formData: IitemInfo = ref({
  id: "",
  title: "",
  position: "top",
  path: "",
  desciption: "",
  buttonText: "",
  pcImg: "",
  appImg: "",
});

onMounted(() => {
  if (data.value) {
    formData.value = { ...formData.value, ...data.value };
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
            <el-form-item label="标题定位">
              <el-radio-group v-model="formData.position">
                <el-radio value="top" size="large">顶部</el-radio>
                <el-radio value="bottom" size="large">底部</el-radio>
                <el-radio value="center" size="large">正中</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="跳转按钮文案">
              <el-input
                v-model="formData.buttonText"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="跳转链接">
              <el-input
                v-model="formData.path"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="视频链接">
              <el-input
                v-model="formData.video"
                placeholder="上传视频素材（建议大小20M）"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="PC素材">
              <el-input
                v-model="formData.pcImg"
                placeholder="上传PC素材（建议尺寸1920px * 1080px）"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="APP素材">
              <el-input
                v-model="formData.appImg"
                placeholder="上传mobile素材（建议尺寸750px * 800px）"
                clearable
              />
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
