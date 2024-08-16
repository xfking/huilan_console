<script lang="ts" setup>
import {
  defineEmits,
  defineProps,
  onMounted,
  ref,
  toRefs,
  shallowRef,
  onBeforeUnmount,
} from "vue";
import ContentBox from "@/components/ContentBox.vue";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

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

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };

onMounted(() => {
  if (data.value) {
    formData.value = { ...formData.value, ...data.value };
  }
});

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor: any = editorRef.value;
  if (editor === null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

/** 提交保存方法 */
const handSubmit = () => {
  const newData = Object.assign({}, formData.value);
  data.value.data = newData;
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

      <div class="rich_box">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          :mode="mode"
        />
        <Editor
          style="height: 500px; overflow-y: hidden"
          v-model="formData.content"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="handleCreated"
        />
      </div>

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
