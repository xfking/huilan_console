<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ContentBox from "@/components/contentbox.vue";
import { barrelStore } from "@/store/barrel";
import { ElMessage } from "element-plus";
import { memberStore } from "@/store/member";

const router = useRouter();
const { currentRoute } = useRouter();
const route = currentRoute.value;
const store = barrelStore();
const user = memberStore();

/** 初始数据 */
const dataSet = ref({
  id: "",
  m_id: "",
  barrel_id: "",
  start_tm: "",
  end_tm: "",
  nfc_id: "",
  bucket_no: "",
  bucket_tm: "",
  state: true,
});

const options: any = ref([]);
const time = ref("");
const userOptions = ref([]);

/** 初始方法 */
onMounted(() => {
  getUser();

  if (route.query.id) {
    dataSet.value.id = route.query.id;

    getInit();
  }
});

const getInit = () => {
  store.infoCard({ id: dataSet.value.id }).then((res: any) => {
    dataSet.value = {
      ...res.data,
      state: !!res.data.state,
    };

    options.value = [
      {
        label: res.data.barrel,
        value: res.data.barrel_id,
      },
    ];
  });
};

const getUser = () => {
  user.pageMember({}).then((res: any) => {
    userOptions.value = res.data.data.map((m: any) => {
      return {
        label: m.name,
        value: m.id,
      };
    });
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
    res = await store.editCard(params);
  } else {
    res = await store.createCard(params);
  }

  if (res) {
    ElMessage.success("提交成功");
    const timer = setTimeout(() => {
      router.go(-1);
    }, 1000);
  }
};

const remoteMethod = (query: string) => {
  if (query) {
    store.pageBarrel({ name: query }).then((res: any) => {
      options.value = res.data.data.map((m: any) => {
        return {
          label: m.name,
          value: m.id,
        };
      });
    });
  }
};

const handChange = (e: any) => {
  if (e) {
    dataSet.value.start_tm = e[0];
    dataSet.value.end_tm = e[1];
  } else {
    dataSet.value.start_tm = "";
    dataSet.value.end_tm = "";
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
            <el-form-item label="单桶">
              <el-select
                v-model="dataSet.barrel_id"
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="用户">
              <el-select
                v-model="dataSet.m_id"
                filterable
                placeholder="Please enter a keyword"
              >
                <el-option
                  v-for="item in userOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="酒证有效期">
              <el-date-picker
                v-model="time"
                type="daterange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
                format="YYYY/MM/DD"
                value-format="x"
                @change="handChange"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="桶号">
              <el-input
                v-model="dataSet.bucket_no"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="装桶日期">
              <el-date-picker
                v-model="dataSet.bucket_tm"
                type="datetime"
                value-format="x"
                placeholder="请选择日期"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="NFC">
              <el-input
                v-model="dataSet.nfc_id"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <template v-if="dataSet.id">
            <el-col :xs="24" :sm="12" :lg="12" :xl="12">
              <el-form-item label="更新时间">
                {{ dataSet.edit_tm }}
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="12" :xl="12">
              <el-form-item label="绑定时间">
                {{ dataSet.bucket_tm }}
              </el-form-item>
            </el-col>
          </template>
        </el-row>
      </el-form>
    </ContentBox>

    <div class="page_footer">
      <el-button type="primary" size="large" @click="onSubmit">提交</el-button>
      <el-button size="large" @click="onBack">返回</el-button>
    </div>
  </div>
</template>
