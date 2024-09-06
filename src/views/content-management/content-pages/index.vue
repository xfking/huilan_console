<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ContentBox from "@/components/contentBox.vue";
import { Search, Plus } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { contentStore } from "@/store/content";
import { whitePath } from "@/utils";

const router = useRouter();
const store = contentStore();

const list = ref([]);
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const formInline = ref({
  title: "",
  path: "",
  desc: "",
});

const getList = () => {
  const query = {
    ...formInline.value,
    page: currentPage.value,
    per_page: pageSize.value,
  };
  store.contentPagePages(query).then((res: any) => {
    list.value = res.data.data;
    total.value = res.data.total;
  });
};

/** 提交 */
const onSubmit = () => {
  currentPage.value = 1;
  pageSize.value = 10;
  getList();
};

const onReset = () => {
  formInline.value = {
    title: "",
    path: "",
    desc: "",
  };
};

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
  pageSize.value = val;
  getList();
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
  currentPage.value = val;
  getList();
};

const handEdit = (flg: boolean, id: any) => {
  router.push({
    path: "pagesDetail",
    query: { isEdit: flg ? "Y" : "N", id },
  });
};

const handleDelete = (index: number, id: any) => {
  store.delPages({ id }).then(() => {
    ElMessage.success("删除成功");
    list.value.splice(index - 1, 1);
  });
};

const handAdd = () => {
  router.push({ path: "pagesDetail" });
};

const handState = (row) => {
  const id = row.id;
  const state = Number(!row.state);
  store.contentStatePages({ id, state }).then((res) => {
    ElMessage.success("修改成功");
    onSubmit();
  });
};

onMounted(() => {
  getList();
});
</script>

<template>
  <!-- 查询条件 -->
  <ContentBox title="查询条件">
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      label-width="150"
      label-suffix="："
    >
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="标题">
            <el-input
              v-model="formInline.title"
              placeholder="请输入"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="网址">
            <el-input
              v-model="formInline.path"
              placeholder="请输入"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="页面描述">
            <el-input
              v-model="formInline.desc"
              placeholder="请输入"
              clearable
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="form-button">
      <el-button @click="onReset">重置</el-button>
      <el-button type="primary" @click="onSubmit" :icon="Search"
        >查询</el-button
      >
    </div>
  </ContentBox>

  <!-- 查询结果 -->
  <ContentBox title="查询结果">
    <template v-slot:workflow>
      <div>
        <el-button type="primary" :icon="Plus" @click="handAdd()"
          >新增页面</el-button
        >
      </div>
    </template>
    <el-table
      :data="list"
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
      <el-table-column prop="url" min-width="150" label="网址" />
      <el-table-column prop="desc" min-width="150" label="页面描述" />
      <el-table-column prop="add_tm" min-width="150" label="创建时间" />
      <el-table-column prop="edit_tm" min-width="150" label="修改时间" />
      <el-table-column label="操作" width="360" fixed="right">
        <template #default="scope">
          <el-button type="primary" @click="handEdit(true, scope.row.id)">
            编辑
          </el-button>
          <el-button
            v-if="whitePath.indexOf(scope.row.url) === -1"
            type="danger"
            @click="handleDelete(scope.$index, scope.row.id)"
          >
            删除
          </el-button>
          <el-button
            v-if="whitePath.indexOf(scope.row.url) === -1"
            :type="scope.row.state ? 'danger' : 'success'"
            @click="handState(scope.row)"
          >
            {{ scope.row.state ? "禁用" : "启用" }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </ContentBox>
</template>
