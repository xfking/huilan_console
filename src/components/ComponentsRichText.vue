<script lang="ts" setup>
import { onMounted, ref, toRefs, shallowRef, onBeforeUnmount } from "vue";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

const emit = defineEmits(["updataDateSet"]);
const props = defineProps({
  data: {
    default: "",
  },
});
const { data } = toRefs(props);

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };

onMounted(() => {});

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor: any = editorRef.value;
  if (editor === null) return;
  editor.destroy();
});

const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>

<template>
  <div class="rich_box">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="data"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<style lang="less" scoped>
.rich_box {
  margin: 20px 0;
  border: 1px solid #ccc;
}
</style>
