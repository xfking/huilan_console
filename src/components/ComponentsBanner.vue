<script lang="ts" setup>
import { reactive, ref, toRefs } from "vue";
import ContentBox from "@/components/contentBox.vue";
import { userStore } from "@/store/user";
import { UploadProps } from "element-plus";
import ComponentsUploadImg from "@/components/ComponentsUploadImg.vue";

interface IitemInfo {
  id?: string;
  title?: string;
  position?: string;
  path?: string;
  desciption?: string;
  buttonText?: string;
  video?: string;
  pcImg?: string;
  appImg?: string;
}

const store = userStore();

const emit = defineEmits(["updataDateSet"]);
const props = defineProps({
  data: {
    default: {},
  },
  pathOptions: {
    default: [],
  },
});
const { data, pathOptions }: any = toRefs(props);
const currentId: any = ref(0);
const formData: any = ref({
  id: "",
  title: "",
  position: "top",
  path: "",
  desciption: "",
  buttonText: "",
  video: "",
  pcImg: "",
  appImg: "",
});

const videoList = ref([]);

/** 上传参数 */
const objDate: any = ref({
  OSSAccessKeyId: "",
  policy: "",
  Signature: "",
  key: "",
  host: "",
  dir: "",
});

/** 重置 */
const handReset = () => {
  formData.value = {
    id: "",
    title: "",
    position: "top",
    path: "",
    desciption: "",
    buttonText: "",
    video: "",
    pcImg: "",
    appImg: "",
  };
};

/** 提交保存方法 */
const handSubmit = () => {
  // 编辑
  if (typeof formData.value.id === "number") {
    const index: number = data.value.data.findIndex(
      (m: IitemInfo) => m.id === formData.value.id
    );
    if (index >= 0) {
      data.value.data[index] = formData.value;
    }
  } else {
    // 新增
    if (!data.value.data) {
      data.value.data = [];
    }
    formData.value.id = currentId.value;
    data.value.data.push(formData.value);
    currentId.value++;
  }
  handReset();
};

/** 编辑banner */
const handEdit = (row: IitemInfo) => {
  formData.value = Object.assign({}, row);
};

const handleDelete = (index: number) => {
  data.value.data.splice(index, 1);
};

/** 视频上传 */
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
const updataVideo: UploadProps["onSuccess"] = (response, uploadFile) => {
  formData.value.video = objDate.value.host + "/" + objDate.value.key;
};

const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
  formData.value.video = "";
};
</script>

<template>
  <div class="component_box">
    <ContentBox title="banner信息">
      <el-form
        :inline="true"
        v-model="formData"
        class="demo-form-inline"
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
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="标题定位">
              <el-radio-group v-model="formData.position">
                <el-radio value="top" size="large">顶部</el-radio>
                <el-radio value="bottom" size="large">底部</el-radio>
                <el-radio value="center" size="large">正中</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="跳转按钮文案">
              <el-input
                v-model="formData.buttonText"
                placeholder="例如：探索更多"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="跳转链接">
              <el-select
                v-model="formData.path"
                filterable
                allow-create
                :reserve-keyword="false"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in pathOptions"
                  :key="item.url"
                  :label="item.title"
                  :value="item.url"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="视频链接">
              <el-upload
                style="width: 100%"
                :action="objDate.host"
                :data="objDate"
                :on-remove="handleRemove"
                :before-upload="beforeAvatarUpload"
                :on-success="updataVideo"
                :limit="1"
                :file-list="videoList"
              >
                <el-input
                  placeholder="上传视频素材（建议大小20M）"
                  readonly
                  clearable
                  style="width: 240px"
                />
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="PC素材">
              <div>
                <ComponentsUploadImg
                  :img="formData.pcImg"
                  @updata:img="formData.pcImg = $event"
                />
                <div class="tips">上传PC素材（建议尺寸1920px * 1080px）</div>
              </div>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="APP素材">
              <div>
                <ComponentsUploadImg
                  :img="formData.appImg"
                  @updata:img="formData.appImg = $event"
                />
                <div class="tips">上传mobile素材（建议尺寸750px * 800px）</div>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="">
        <el-button @click="handReset">重置</el-button>
        <el-button type="primary" @click="handSubmit">保存</el-button>
      </div>
    </ContentBox>
    <ContentBox title="banner列表">
      <el-table
        :data="data.data"
        stripe
        border
        :header-cell-style="{
          background: '#7e3628',
          color: '#ffffff',
          padding: '15px 0',
        }"
        style="width: 100%"
      >
        <el-table-column prop="title" min-width="150" label="标题" />
        <el-table-column prop="pcImg" min-width="150" label="PC素材">
          <template #default="scope">
            <img :src="scope.row.pcImg" class="img_pre" alt="PC素材" />
          </template>
        </el-table-column>
        <el-table-column prop="appImg" min-width="150" label="APP素材">
          <template #default="scope">
            <img :src="scope.row.appImg" class="img_pre" alt="APP素材" />
          </template>
        </el-table-column>
        <el-table-column prop="desciption" min-width="150" label="描述" />
        <el-table-column prop="path" min-width="150" label="跳转链接" />
        <el-table-column
          prop="buttonText"
          min-width="150"
          label="跳转按钮文案"
        />
        <el-table-column label="操作" width="360" fixed="right">
          <template #default="scope">
            <el-button type="primary" @click="handEdit(scope.row)">
              编辑
            </el-button>
            <el-button type="danger" @click="handleDelete(scope.$index)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </ContentBox>
  </div>
</template>

<style lang="less" scoped>
.component_box {
  padding: 20px 0;
}
.tips {
  text-align: center;
  font-size: 12px;
  color: #999;
}
.img_pre {
  width: 125px;
}
</style>
