<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ContentBox from "@/components/ContentBox.vue";
import { Search, Plus } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

const router = useRouter();

const list = ref([
  {
    title: "首页",
    path: "home",
    disc: "测试首页",
  },
]);
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const formInline = ref({
  title: "",
  path: "",
  disc: "",
});

const getList = () => {
  const query = {
    ...formInline.value,
    page: currentPage.value,
    per_page: pageSize.value,
  };
  // store.pageCement(query).then((res: any) => {
  //   list.value = res.data.data;
  //   total.value = res.data.total;
  // });
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
    disc: "",
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
  // store.delSupplier({ id }).then(() => {
  //   ElMessage.success("删除成功");
  //   list.value.splice(index - 1, 1);
  // });
};

const handAdd = (id: any) => {
  router.push({ path: "teamDetail", query: { id } });
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
          <el-form-item label="团队名称">
            <el-input
              v-model="formInline.title"
              placeholder="请输入"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="团队简介">
            <el-input
              v-model="formInline.path"
              placeholder="请输入"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="团队描述">
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
          >新增</el-button
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
      <el-table-column prop="title" min-width="150" label="团队名称" />
      <el-table-column prop="path" min-width="150" label="团队简介" />
      <el-table-column prop="disc" min-width="150" label="团队描述" />
      <el-table-column prop="creat_time" min-width="150" label="创建时间" />
      <el-table-column prop="date" min-width="150" label="修改时间" />
      <el-table-column label="操作" width="360" fixed="right">
        <template #default="scope">
          <el-button type="primary" @click="handAdd(scope.row.id)">
            编辑
          </el-button>
          <el-button
            type="danger"
            @click="handleDelete(scope.$index, scope.row.id)"
          >
            删除
          </el-button>
          <el-button type="success" @click="handEdit(false, scope.row.id)">
            启用
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </ContentBox>
</template>
