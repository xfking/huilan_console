<script lang="ts" setup>
import { onMounted, ref, toRefs, shallowRef, onBeforeUnmount } from "vue";
// import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import axios from "axios";
import { userStore } from "@/store/user";

const store = userStore();
const emit = defineEmits<{
  (e: "update", data: any): void; //主要用于父组件接收wangeditor实时编辑的内容
}>();
const props = defineProps({
  data: {
    default: "",
  },
});

const content = ref("");

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

const toolbarConfig = {};
const editorConfig = {
  placeholder: "请输入内容...",
  MENU_CONF: {
    uploadImage: {
      async customUpload(file: File, insertFn: any) {
        store.fileUpload({}).then((res: any) => {
          const objDate = {
            OSSAccessKeyId: res.data.accessid,
            policy: res.data.policy,
            Signature: res.data.signature,
            key: res.data.dir + file.name,
            host: res.data.host,
            dir: res.data.dir,
          };

          const formData = new FormData();

          // 这里添加额外的参数
          formData.append("key", res.data.dir + file.name);
          formData.append("policy", res.data.policy);
          formData.append("host", res.data.host);
          formData.append("OSSAccessKeyId", res.data.accessid);
          formData.append("Signature", res.data.signature);
          formData.append("dir", res.data.dir);
          formData.append("file", file);

          axios
            .post(res.data.host, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              // 假设服务器返回的结构是{ url: '图片地址' }
              insertFn(objDate.host + "/" + objDate.key);
            });
        });
      },
    },
  },
};

onMounted(() => {
  setTimeout(() => {
    content.value = props.data ?? ""; //回显数据
  }, 200);
});

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor: any = editorRef.value;
  if (editor === null) return;
  editor.destroy();
});

const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

const handleChanged = (editor: any) => {
  emit("update", editor.getHtml());
};
</script>

<template>
  <div class="rich_box">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      mode="default"
      :defaultConfig="toolbarConfig"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="content"
      mode="default"
      :defaultConfig="editorConfig"
      @onCreated="handleCreated"
      @onChange="handleChanged"
    />
  </div>
</template>

<style lang="less" scoped>
.rich_box {
  margin: 20px 0;
  border: 1px solid #ccc;
}
</style>
