<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ContentBox from "@/components/contentbox.vue";
import ComponentsUploadImg from "@/components/componentsuploadimg.vue";
import { ElMessage } from "element-plus";
import { memberStore } from "@/store/member";

const router = useRouter();
const { currentRoute } = useRouter();
const route = currentRoute.value;
const store = memberStore();

/** 初始数据 */
const dataSet = ref({
  id: "",
  email: "",
  mobile: "",
  password: "",
  nickname: "",
  surname: "",
  name: "",
  born_year: "1995",
  born_month: "9",
  born_day: "1",
  state: true,
  passwordCopy: "",
});

/** 初始方法 */
onMounted(() => {
  if (route.query.id) {
    dataSet.value.id = route.query.id;

    getInit();
  }
});

const getInit = () => {
  store.infoMember({ id: dataSet.value.id }).then((res: any) => {
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
    res = await store.editMember(params);
  } else {
    res = await store.createMember(params);
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
            <el-form-item label="用户编号">
              <el-input
                v-model="dataSet.id"
                placeholder="请输入"
                readonly
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="用户名称">
              <el-input v-model="dataSet.name" placeholder="请输入" clearable />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="姓氏">
              <el-input
                v-model="dataSet.surname"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="称谓">
              <el-input
                v-model="dataSet.nickname"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="生日">
              <el-date-picker
                v-model="dataSet.born_day"
                type="datetime"
                value-format="x"
                placeholder="请选择日期"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="电话号码">
              <el-input
                v-model="dataSet.mobile"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="地址">
              <el-input
                v-model="dataSet.address"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="邮箱">
              <el-input
                v-model="dataSet.email"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="联系喜好">
              <el-input v-model="dataSet.like" placeholder="请输入" clearable />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="登录密码">
              <el-input
                v-model="dataSet.password"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="再次确认密码">
              <el-input
                v-model="dataSet.passwordCopy"
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
        </el-row>
      </el-form>
    </ContentBox>

    <div class="page_footer">
      <el-button type="primary" size="large" @click="onSubmit">提交</el-button>
      <el-button size="large" @click="onBack">返回</el-button>
    </div>
  </div>
</template>
