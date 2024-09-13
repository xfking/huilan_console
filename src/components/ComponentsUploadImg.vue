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
  isVideo: {
    default: false,
  },
});

const { img } = toRefs(props);
const image = ref(img.value);
const videoList = ref([]);

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

onMounted(() => {
  // videoList = [image.value];
});

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
  console.log("-------------", image.value, img.value);
};

const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
  image.value = "";
  emit("updata:img", image.value);
};
</script>

<template>
  <el-upload
    class="avatar-uploader"
    :action="objDate.host"
    :data="objDate"
    :limit="1"
    :file-list="videoList"
    :on-remove="handleRemove"
    :show-file-list="isVideo"
    :before-upload="beforeAvatarUpload"
    :on-success="handleAvatarSuccess"
    :disabled="isEdit === 'N'"
  >
    <template v-if="isVideo">
      <el-input
        placeholder="上传音频素材（建议大小20M）"
        readonly
        clearable
        style="width: 240px"
      />
    </template>
    <template v-else>
      <img v-if="img" :src="img" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </template>
  </el-upload>
</template>

<style lang="less" scoped>
.component_box {
  padding: 20px 0;
}
</style>
