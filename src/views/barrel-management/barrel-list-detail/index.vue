<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ContentBox from "@/components/contentbox.vue";
import ComponentsUploadImg from "@/components/componentsuploadimg.vue";
import { barrelStore } from "@/store/barrel";
import { ElMessage } from "element-plus";

const router = useRouter();
const { currentRoute } = useRouter();
const route = currentRoute.value;
const store = barrelStore();

/** 初始数据 */
const dataSet = ref({
  id: "",
  name: "",
  flavour: "",
  net_content: "",
  material: "",
  tags: "",
  ferment_way: "",
  distill_way: "",
  barrel_strength: "",
  peat_strength: "",
  tasting_note: "",
  barrel_pic: "",
  state: true,
});

/** 初始方法 */
onMounted(() => {
  if (route.query.id) {
    dataSet.value.id = route.query.id;

    getInit();
  }
});

const getInit = () => {
  store.infoBarrel({ id: dataSet.value.id }).then((res: any) => {
    dataSet.value = {
      ...res.data,
      state: !!res.data.state,
    };
  });
};

/** 提交 */
const onSubmit = async () => {
  const params = {
    ...dataSet.value,
    state: Number(dataSet.value.state),
  };
  console.log("==待提交数据==", dataSet.value);
  let res: any = "";
  if (params.id) {
    res = await store.editBarrel(params);
  } else {
    res = await store.createBarrel(params);
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
            <el-form-item label="单桶编号">
              <el-input
                v-model="dataSet.id"
                placeholder="请输入"
                readonly
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="单桶名称">
              <el-input v-model="dataSet.name" placeholder="请输入" clearable />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="风味">
              <el-input
                v-model="dataSet.flavour"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="净含量">
              <el-input
                v-model="dataSet.net_content"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="原料">
              <el-input
                v-model="dataSet.material"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="产品标签">
              <el-input v-model="dataSet.tags" placeholder="请输入" clearable />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="发酵方式">
              <el-input
                v-model="dataSet.ferment_way"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="蒸馏方式">
              <el-input
                v-model="dataSet.distill_way"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="入桶强度">
              <el-input
                v-model="dataSet.barrel_strength"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="入泥煤强度">
              <el-input
                v-model="dataSet.peat_strength"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="品鉴笔记">
              <el-input
                v-model="dataSet.tasting_note"
                placeholder="请输入"
                clearable
              />
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
            <el-form-item label="单桶图片">
              <ComponentsUploadImg
                :img="dataSet.barrel_pic"
                @updata:img="dataSet.barrel_pic = $event"
              />
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
