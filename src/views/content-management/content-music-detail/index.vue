<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ContentBox from "@/components/contentbox.vue";
import ComponentsUploadImg from "@/components/componentsuploadimg.vue";
import { contentStore } from "@/store/content";
import { ElMessage } from "element-plus";

const router = useRouter();
const { currentRoute } = useRouter();
const route = currentRoute.value;
const store = contentStore();

/** 初始数据 */
const dataSet = ref({
  id: "",
  name: "",
  author: "",
  desc: "",
  state: true,
  url: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
  cover:
    "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
});

/** 初始方法 */
onMounted(() => {
  if (route.query.id) {
    dataSet.value.id = route.query.id;

    getInit();
  }
});

const getInit = () => {
  store.infoMusic({ id: dataSet.value.id }).then((res) => {
    dataSet.value = {
      ...res.data,
      state: !!res.data.state,
    };
  });
};

/** 提交 */
const onSubmit = async () => {
  console.log("======", dataSet.value);
  const params = {
    ...dataSet.value,
    state: Number(dataSet.value.state),
  };
  let res = "";
  if (params.id) {
    res = await store.editMusic(params);
  } else {
    res = await store.createMusic(params);
  }

  if (res) {
    ElMessage.success("提交成功");
    const timer = setTimeout(() => {
      router.go(-1);
    }, 1000);
  }
};

/** 返回 */
const onBack = () => {
  router.go(-1);
};
</script>
<template>
  <div class="content">
    <!-- 基础信息 -->
    <ContentBox title="基础信息">
      <el-form
        :inline="true"
        :model="dataSet"
        class="demo-form-inline"
        label-width="150"
        label-suffix="："
      >
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="音乐名称">
              <el-input v-model="dataSet.name" placeholder="请输入" clearable />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="音乐作者">
              <el-input
                v-model="dataSet.author"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="音乐简介">
              <el-input v-model="dataSet.desc" placeholder="请输入" clearable />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="启用">
              <el-switch
                v-model="dataSet.state"
                class="ml-2"
                style="
                  --el-switch-on-color: #13ce66;
                  --el-switch-off-color: #ff4949;
                "
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="音乐封面">
              <ComponentsUploadImg :img="dataSet.cover" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="音乐文件">
              <ComponentsUploadImg :img="dataSet.url" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </ContentBox>

    <div class="page_footer">
      <el-button type="primary" size="large" @click="onSubmit">提交</el-button>
      <el-button size="large" @click="onBack">返回</el-button>
    </div>
  </div>
</template>
