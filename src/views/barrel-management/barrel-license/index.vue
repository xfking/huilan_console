<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ContentBox from "@/components/contentbox.vue";
import { Search, Plus } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { barrelStore } from "@/store/barrel";

const router = useRouter();
const store = barrelStore();

const list = ref([]);
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const formInline = ref({
  barrel_id: "",
  m_id: "",
  start_tm: "",
  end_tm: "",
});

const getList = () => {
  const query = {
    ...formInline.value,
    page: currentPage.value,
    per_page: pageSize.value,
  };
  store.pageCard(query).then((res: any) => {
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
    barrel_id: "",
    m_id: "",
    start_tm: "",
    end_tm: "",
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
  store.delCard({ id }).then(() => {
    ElMessage.success("删除成功");
    list.value.splice(index - 1, 1);
  });
};

const handAdd = (id: any) => {
  router.push({ path: "barrelLicenseDetail", query: { id } });
};

const handState = (row: any) => {
  const id = row.id;
  const state = Number(!row.state);
  store.stateCard({ id, state }).then((res) => {
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
          <el-form-item label="单桶编号">
            <el-input
              v-model="formInline.barrel_id"
              placeholder="请输入"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="用户名称">
            <el-input
              v-model="formInline.m_id"
              placeholder="请输入"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="开始时间">
            <el-date-picker
              v-model="formInline.start_tm"
              type="datetime"
              value-format="x"
              placeholder="请选择时间"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8" :xl="6">
          <el-form-item label="结束时间">
            <el-date-picker
              v-model="formInline.end_tm"
              type="datetime"
              value-format="x"
              placeholder="请选择时间"
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
      <el-table-column prop="bucket_no" min-width="150" label="单桶编号" />
      <el-table-column prop="barrel_name" min-width="150" label="单桶名称" />
      <el-table-column prop="barrel_flavour" min-width="150" label="风味" />
      <el-table-column prop="barrel_net" min-width="150" label="净含量" />
      <el-table-column prop="member_no" min-width="150" label="用户编号" />
      <el-table-column prop="member_name" min-width="150" label="用户名称" />
      <el-table-column prop="bucket_tm" min-width="150" label="绑定时间" />
      <el-table-column prop="edit_tm" min-width="150" label="更新时间" />
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
          <el-button> 更新单桶 </el-button>
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
