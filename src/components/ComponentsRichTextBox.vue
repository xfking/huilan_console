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
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { userStore } from "@/store/user";
import axios from "axios";

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
const { data }: any = toRefs(props);
const store = userStore();

const formData: any = ref({
  id: "",
  title: "",
  desciption: "",
  content: "",
});

const content = ref("");
const objDate = ref("");

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

const toolbarConfig: any = {};
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

        // const fileBase64 = fileToBase64Async(file);
        // insertFn(fileBase64);
      },
    },
  },
};

onMounted(() => {
  if (data.value) {
    formData.value = data.value.data;
    console.log("=========", formData.value);
  }

  setTimeout(() => {
    content.value = formData.value.content ?? ""; //回显数据
  }, 200);
});

const fileToBase64Async = (file: File) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      resolve(e.target.result);
    };
  });
};
const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

/** 提交保存方法 */
const handSubmit = () => {
  const newData = Object.assign({}, formData.value);
  newData.content = content.value;
  data.value.data = newData;
  console.log("3333333333", data.value);
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor: any = editorRef.value;
  if (editor === null) return;
  editor.destroy();
});
</script>

<template>
  <div class="component_box">
    <ContentBox title="富文本信息">
      <el-form
        :inline="true"
        v-model="formData"
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
          mode="default"
          :defaultConfig="toolbarConfig"
        />
        <Editor
          style="height: 500px; overflow-y: hidden"
          v-model="content"
          mode="default"
          :defaultConfig="editorConfig"
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
