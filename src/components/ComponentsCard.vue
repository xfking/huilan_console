<script lang="ts" setup>
import { reactive, ref, toRefs } from "vue";
import ContentBox from "@/components/ContentBox.vue";

interface IitemInfo {
  id?: string;
  title?: string;
  position?: string;
  path?: string;
  desciption?: string;
  buttonText?: string;
  video?: string;
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
  path: "",
  desciption: "",
  buttonText: "",
  video: "",
  pcImg: "",
  appImg: "",
});

/** 重置 */
const handReset = () => {
  formData.value = {
    id: "",
    title: "",
    position: "top",
    path: "",
    desciption: "",
    buttonText: "",
    video: "",
    pcImg: "",
    appImg: "",
  };
};

/** 提交保存方法 */
const handSubmit = () => {
  // 编辑
  if (typeof formData.value.id === "number") {
    const index: number = data.value.data.findIndex(
      (m: IitemInfo) => m.id === formData.value.id
    );
    if (index >= 0) {
      data.value.data[index] = formData.value;
    }
  } else {
    // 新增
    if (!data.value.data) {
      data.value.data = [];
    }
    formData.value.id = currentId.value;
    data.value.data.push(formData.value);
    currentId.value++;
  }
  handReset();
};

/** 编辑banner */
const handEdit = (row: IitemInfo) => {
  formData.value = Object.assign({}, row);
};

const handleDelete = (index: number) => {
  if (index) {
    data.value.data.splice(index, 1);
  }
};
</script>

<template>
  <div class="component_box">
    <ContentBox title="卡片信息">
      <el-form
        :inline="true"
        v-model="formData"
        class="demo-form-inline"
        label-width="150"
        label-suffix="："
      >
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :lg="24" :xl="24">
            <el-form-item label="标题定位">
              <el-radio-group v-model="data.cardType">
                <el-radio value="normal" size="large">普通</el-radio>
                <el-radio value="grid" size="large">宫格</el-radio>
                <el-radio value="pin" size="large">品字</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
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
        <el-button @click="handReset">重置</el-button>
        <el-button type="primary" @click="handSubmit">保存</el-button>
      </div>
    </ContentBox>
    <ContentBox title="数据列表">
      <el-table
        :data="data.data"
        stripe
        border
        :header-cell-style="{
          background: '#7e3628',
          color: '#ffffff',
          padding: '15px 0',
        }"
        style="width: 100%"
      >
        <el-table-column prop="title" min-width="150" label="标题" />
        <el-table-column prop="desciption" min-width="150" label="描述" />
        <el-table-column prop="pcImg" min-width="150" label="PC素材" />
        <el-table-column prop="appImg" min-width="150" label="APP素材" />
        <el-table-column prop="path" min-width="150" label="跳转链接" />
        <el-table-column
          prop="buttonText"
          min-width="150"
          label="跳转按钮文案"
        />
        <el-table-column label="操作" width="360" fixed="right">
          <template #default="scope">
            <el-button type="primary" @click="handEdit(scope.row)">
              编辑
            </el-button>
            <el-button type="danger" @click="handleDelete(scope.$index)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </ContentBox>
  </div>
</template>

<style lang="less" scoped>
.component_box {
  padding: 20px 0;
}
</style>
