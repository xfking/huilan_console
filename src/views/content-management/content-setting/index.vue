<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ElMessage, ISelectProps } from "element-plus";
import ContentBox from "@/components/contentBox.vue";
import { contentStore } from "@/store/content";
import ComponentsUploadImg from "@/components/componentsuploadimg.vue";
import { Delete } from "@element-plus/icons-vue";

const store = contentStore();

/** 初始数据 */
const dataSet: any = ref({
  id: "",
  header: {
    pc_logo: "",
    app_logo: "",
  },
  footer: {
    pc_logo: "",
    app_logo: "",
  },
  footerDesc: "",
  icp: "",
  components: [],
});

/** 初始方法 */
onMounted(() => {
  init();
});

const init = () => {
  store.getSetting({ setting_key_string: "page_setting" }).then((res: any) => {
    dataSet.value = res.data;
  });
};

/** 新增组件 */
const handAdd = () => {
  if (dataSet.value.components.length < 3) {
    dataSet.value.components.push({
      title: "",
      data: [],
    });
  }
};

/** 删除组件 */
const handDel = (index: number) => {
  dataSet.value.components.splice(index, 1);
};

/** 新增子组件 */
const handSubAdd = (index: number) => {
  dataSet.value.components[index].data.push({
    title: "",
    url: "",
  });
};

/** 删除子组件 */
const handSubDel = (index: number, key: number) => {
  dataSet.value.components[index].data.splice(key, 1);
};

const onSubmit = () => {
  const params = {
    setting_key: "page_setting",
    setting_value: JSON.stringify(dataSet.value),
  };
  console.log("==待提交数据==", dataSet.value);
  let res: any = store.putSetting(params);

  if (res) {
    ElMessage.success("提交成功");
  }
};
</script>
<template>
  <div class="content">
    <!-- 基础信息 -->
    <ContentBox title="基础信息">
      <el-form
        :inline="true"
        :model="dataSet"
        label-width="150"
        label-suffix="："
      >
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="顶部LOGO">
              <div class="flex">
                <div class="logo_box">
                  <ComponentsUploadImg
                    :img="dataSet.header.pc_logo"
                    @updata:img="dataSet.header.pc_logo = $event"
                  />
                  <span>PC端logo</span>
                </div>
                <div class="logo_box">
                  <ComponentsUploadImg
                    :img="dataSet.header.app_logo"
                    @updata:img="dataSet.header.app_logo = $event"
                  />
                  <span>mobile端logo</span>
                </div>
              </div>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="底部LOGO">
              <div class="flex">
                <div class="logo_box">
                  <ComponentsUploadImg
                    :img="dataSet.footer.pc_logo"
                    @updata:img="dataSet.footer.pc_logo = $event"
                  />
                  <span>PC端logo</span>
                </div>
                <div class="logo_box">
                  <ComponentsUploadImg
                    :img="dataSet.footer.app_logo"
                    @updata:img="dataSet.footer.app_logo = $event"
                  />
                  <span>mobile端logo</span>
                </div>
              </div>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="footer标语">
              <el-input
                v-model="dataSet.footerDesc"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12" :xl="12">
            <el-form-item label="ICP备案文案">
              <el-input v-model="dataSet.icp" placeholder="请输入" clearable />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </ContentBox>
    <!-- 基础信息 -->
    <ContentBox title="底部菜单">
      <div class="flex">
        <el-button type="primary" :icon="Plus" @click="handAdd()">
          新增菜单
        </el-button>
        <div class="tips">最多添加三列</div>
      </div>
      <div
        class="groups"
        v-for="(item, index) in dataSet.components"
        :key="index"
      >
        <!-- 切换类型 -->
        <div class="flex flex_between groups_top">
          <el-row :gutter="20" style="flex: 1">
            <el-col :xs="24" :sm="12" :lg="12" :xl="12">
              <div class="flex flex_align">
                <div class="groups_label">标题：</div>
                <el-input v-model="item.title" placeholder="请输入" clearable />
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="12" :xl="12">
              <el-button type="primary" :icon="Plus" @click="handSubAdd(index)">
                新增子菜单
              </el-button>
            </el-col>
          </el-row>

          <el-button type="danger" :icon="DeleteFilled" @click="handDel(index)"
            >删除组件</el-button
          >
        </div>

        <div class="group_box" v-if="item.data.length">
          <div
            class="flex flex_between"
            v-for="(list, key) in item.data"
            :key="key"
          >
            <el-row :gutter="20" style="margin: 15px 0; flex: 1">
              <el-col :xs="24" :sm="12" :lg="12" :xl="12">
                <div class="flex flex_align">
                  <div class="groups_label">标题：</div>
                  <el-input
                    v-model="list.title"
                    placeholder="请输入"
                    clearable
                  />
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :lg="12" :xl="12">
                <div class="flex flex_align">
                  <div class="groups_label">跳转链接</div>
                  <el-input v-model="list.url" placeholder="请输入" clearable />
                </div>
              </el-col>
            </el-row>
            <el-button
              type="danger"
              :icon="Delete"
              @click="handSubDel(index, key)"
            />
          </div>
        </div>
      </div>
    </ContentBox>

    <div class="page_footer">
      <el-button type="primary" size="large" @click="onSubmit">提交</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
}
.logo_box {
  margin: 0 10px;
  text-align: center;
}

.tips {
  padding: 10px;
  color: red;
}

.groups {
  width: 100%;
  margin: 40px 0;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.07);

  .groups_top {
    width: 100%;
    // padding: 15px 0;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .groups_label {
    font-size: 14px;
    font-weight: 700;
    margin-right: 10px;
    width: 100px;
    text-align: right;
  }

  .group_box {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    background: #fff;
    margin: 20px 0;
    box-sizing: border-box;
  }
}
</style>
