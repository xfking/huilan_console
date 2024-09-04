<script lang="ts" setup>
import { userStore } from "@/store/user";
import { UploadProps } from "element-plus";
import { onMounted, reactive, ref, toRefs, watch } from "vue";
import { Plus } from "@element-plus/icons-vue";

const emit = defineEmits(["updata:img"]);
const props = defineProps({
  img: {
    default: "",
  },
  isEdit: {
    default: false,
  },
});

const { img } = toRefs(props);
const image = ref(img.value);

const store = userStore();

/** 上传参数 */
const objDate: any = ref({
  OSSAccessKeyId: "",
  policy: "",
  Signature: "",
  key: "",
  host: "",
  dir: "",
});

onMounted(() => {});

/** 图片上传 */
const beforeAvatarUpload = (rawFile: any) => {
  return new Promise((resolve, reject) => {
    store
      .fileUpload({})
      .then((res: any) => {
        objDate.value = {
          OSSAccessKeyId: res.data.accessid,
          policy: res.data.policy,
          Signature: res.data.signature,
          key: res.data.dir + rawFile.name,
          host: res.data.host,
          dir: res.data.dir,
        };

        resolve(true); // 继续上传
      })
      .catch(function (error) {
        console.log(error);
        reject(false);
      });
  });
};

/** 上传成功 */
const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile
) => {
  image.value = objDate.value.host + "/" + objDate.value.key;
  emit("updata:img", image.value);
};
</script>

<template>
  <el-upload
    class="avatar-uploader"
    :action="objDate.host"
    :data="objDate"
    :show-file-list="false"
    :before-upload="beforeAvatarUpload"
    :on-success="handleAvatarSuccess"
    :disabled="isEdit === 'N'"
  >
    <img v-if="img" :src="img" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    <!-- <el-icon><Plus /></el-icon> -->
  </el-upload>
</template>

<style lang="less" scoped>
.component_box {
  padding: 20px 0;
}
</style>
