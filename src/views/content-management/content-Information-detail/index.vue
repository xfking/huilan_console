<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ContentBox from "@/components/contentBox.vue";
import ComponentsRichText from "@/components/ComponentsRichText.vue";
import ComponentsUploadImg from "@/components/ComponentsUploadImg.vue";
import { contentStore } from "@/store/content";
import { ElMessage } from "element-plus";

const router = useRouter();
const { currentRoute } = useRouter();
const route = currentRoute.value;
const store = contentStore();

/** 初始数据 */
const dataSet = ref({
  id: "",
  title: "",
  summary: "",
  content: "",
  cover: "",
  state: true,
});

/** 提交 */
const onSubmit = async () => {
  const params = {
    ...dataSet.value,
    state: Number(dataSet.value.state),
  };
  console.log("==待提交数据==", dataSet.value);
  let res = "";
  if (params.id) {
    res = await store.editArticle(params);
  } else {
    res = await store.createArticle(params);
  }

  if (res) {
    ElMessage.success("提交成功");
    const timer = setTimeout(() => {
      router.go(-1);
    }, 1000);
  }
};

/** 初始方法 */
onMounted(() => {
  if (route.query.id) {
    dataSet.value.id = route.query.id;

    getInit();
  }
});

const getInit = () => {
  store.infoArticle({ id: dataSet.value.id }).then((res) => {
    dataSet.value = {
      ...res.data,
      state: !!res.data.state,
    };
  });
};

const update = (e: any) => {
  dataSet.value.content = e;
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
            <el-form-item label="新闻标题">
              <el-input
                v-model="dataSet.title"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="启用">
              <el-switch
                v-model="dataSet.state"
                style="
                  --el-switch-on-color: #13ce66;
                  --el-switch-off-color: #ff4949;
                "
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="新闻描述">
              <el-input
                v-model="dataSet.summary"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="新闻封面">
              <ComponentsUploadImg
                :img="dataSet.cover"
                @updata:img="dataSet.cover = $event"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <ComponentsRichText :data="dataSet.content" @update="update" />
    </ContentBox>

    <div class="page_footer">
      <el-button type="primary" size="large" @click="onSubmit">提交</el-button>
      <el-button size="large" @click="onBack">返回</el-button>
    </div>
  </div>
</template>
