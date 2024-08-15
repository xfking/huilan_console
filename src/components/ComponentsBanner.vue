<template>
  <div class="component_box">
    <ContentBox title="banner信息">
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
    <ContentBox title="banner列表">
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
        <el-table-column prop="pcImg" min-width="150" label="PC素材" />
        <el-table-column prop="appImg" min-width="150" label="APP素材" />
        <el-table-column prop="desciption" min-width="150" label="描述" />
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
            <el-button
              type="danger"
              @click="handleDelete(scope.$index, scope.row.id)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </ContentBox>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, reactive, ref, toRefs } from "vue";
import ContentBox from "@/components/ContentBox.vue";

const emit = defineEmits(["updataDateSet"]);
const props = defineProps({
  data: {
    default: {},
  },
});
const { data } = toRefs(props);
const currentId = ref(0);
const formData = ref({
  id: "",
  title: "",
  path: "",
  desciption: "",
  buttonText: "",
  pcImg: "",
  appImg: "",
});

/** 重置 */
const handReset = () => {
  formData.value = {
    id: "",
    title: "",
    path: "",
    desciption: "",
    buttonText: "",
    pcImg: "",
    appImg: "",
  };
};

const handSubmit = () => {
  if (formData.value.id) {
  }
  if (!data.value.data) {
    data.value.data = [];
  }
  data.value.data.push(formData.value);
};
</script>

<style lang="less" scoped>
.component_box {
  padding: 20px 0;
}
</style>
