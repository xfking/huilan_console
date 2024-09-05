<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ContentBox from "@/components/contentbox.vue";
import { Search, Plus } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { memberStore } from "@/store/member";

const router = useRouter();
const store = memberStore();

const list = ref([]);
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const formInline = ref({
  name: "",
});

const form = ref({
  id: "",
  name: "",
});

const outerVisible = ref(false);

const getList = () => {
  const query = {
    ...formInline.value,
    page: currentPage.value,
    per_page: pageSize.value,
  };
  store.pageRole(query).then((res: any) => {
    list.value = res.data.data;
    total.value = res.data.total;
  });
};

/** 搜索 */
const onSubmit = () => {
  currentPage.value = 1;
  pageSize.value = 10;
  getList();
};

const onReset = () => {
  formInline.value = {
    name: "",
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

const handleDelete = (index: number, id: any) => {
  store.delRole({ id }).then(() => {
    ElMessage.success("删除成功");
    list.value.splice(index - 1, 1);
  });
};

const handEdit = (id: any) => {
  router.push({ path: "rolePermission", query: { id } });
};

const handAdd = (row: any) => {
  if (row) {
    form.value = row;
  } else {
    form.value = {
      id: "",
      name: "",
    };
  }
  outerVisible.value = !outerVisible.value;
};

const handSubmit = async () => {
  const params = {
    ...form.value,
  };
  console.log("==待提交数据==", params);
  let res: any = "";
  if (params.id) {
    res = await store.editRole(params);
  } else {
    res = await store.createRole(params);
  }

  if (res) {
    ElMessage.success("提交成功");
    const timer = setTimeout(() => {
      handAdd("");
      getList();
    }, 500);
  }
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
          <el-form-item label="角色名称">
            <el-input
              v-model="formInline.name"
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
        <el-button type="primary" :icon="Plus" @click="handAdd('')"
          >新增角色</el-button
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
      <el-table-column prop="name" min-width="150" label="角色名称" />
      <el-table-column prop="add_tm" min-width="150" label="创建时间" />
      <el-table-column prop="edit_tm" min-width="150" label="修改时间" />
      <el-table-column label="操作" width="360" fixed="right">
        <template #default="scope">
          <el-button type="primary" @click="handAdd(scope.row)">
            编辑
          </el-button>
          <el-button
            type="danger"
            @click="handleDelete(scope.$index, scope.row.id)"
          >
            删除
          </el-button>
          <el-button style="success" @click="handEdit(scope.row.id)">
            设置权限
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

  <el-dialog v-model="outerVisible" title="编辑角色" width="800" center>
    <el-form :inline="true" :model="form" label-width="150" label-suffix="：">
      <el-form-item label="角色名称">
        <el-input v-model="form.name" placeholder="请输入" clearable />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handAdd('')">取消</el-button>
        <el-button type="primary" @click="handSubmit()"> 提交 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
