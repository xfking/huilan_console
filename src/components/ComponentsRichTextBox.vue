<script lang="ts" setup>
import {
  onMounted,
  ref,
  toRefs,
  shallowRef,
  onBeforeUnmount,
  defineComponent,
} from "vue";
import ContentBox from "@/components/contentBox.vue";
import ComponentsRichText from "@/components/componentsRichText.vue";

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
  desciption: "",
  content: "",
});

onMounted(() => {
  if (data.value) {
    formData.value = { ...formData.value, ...data.value.data };
    console.log("----------", formData.value);
  }
});

const update = (e) => {
  // formData.value.content = e;
  console.log("2222222222", e);
};

/** 提交保存方法 */
const handSubmit = () => {
  const newData = Object.assign({}, formData.value);
  data.value.data = newData;
  console.log("33333333", newData, data.value);
};
</script>

<template>
  <div class="component_box">
    <ContentBox title="富文本信息">
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
        </el-row>
      </el-form>
      {{ formData.content }}
      <ComponentsRichText :data="formData.content" @update="update" />

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
.rich_box {
  margin: 20px 0;
  border: 1px solid #ccc;
}
</style>
