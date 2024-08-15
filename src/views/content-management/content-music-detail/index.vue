<script lang="ts" setup>
import { ref, onMounted } from "vue";
import ContentBox from "@/components/ContentBox.vue";
import { ElMessage } from "element-plus";

const dataSet = ref({
  title: "",
  path: "",
  desciption: "",
  state: 1,
});

onMounted(() => {});
</script>
<template>
  <div class="content">
    <ContentBox title="查询条件">
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
                v-model="formInline.title"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="页面链接">
              <el-input
                v-model="formInline.path"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="页面描述">
              <el-input
                v-model="formInline.desciption"
                :autosize="{ minRows: 2, maxRows: 4 }"
                type="textarea"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="form-button">
        <el-button @click="onReset">重置</el-button>
        <el-button type="primary" @click="onSubmit" :icon="Search"
          >查询</el-button
        >
      </div>
    </ContentBox>
  </div>
</template>
