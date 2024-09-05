<template>
  <div class="content">
    <ContentBox title="设置权限">
      <div v-for="(item, index) in list" :key="index" class="check_box">
        <el-checkbox
          v-model="item.select"
          :indeterminate="item.isIndeterminate"
          @change="handleCheckAllChange($event, item)"
          >{{ item.title }}</el-checkbox
        >
        <el-checkbox-group
          class="check_group"
          v-model="item.selectList"
          v-for="(child, indexs) in item.action"
          :key="indexs"
          @change="handleCheckedChange($event, item)"
        >
          <el-checkbox v-for="cur in child" :key="cur.id" :label="cur.id">{{
            cur.title
          }}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="footer">
        <el-button type="primary" @click="handSubmit">保存</el-button>
        <el-button @click="handClose">取消</el-button>
      </div>
    </ContentBox>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ContentBox from "@/components/ContentBox.vue";
import { ElMessage } from "element-plus";
import { memberStore } from "@/store/member";

const router = useRouter();
const { currentRoute } = useRouter();
const route = currentRoute.value;
const store = memberStore();

const roleId: any = ref("");
const list: any = ref([]);

/** 获取部门权限列表 */
const getInit = () => {
  store.getPermission({ role_id: roleId.value }).then((res: any) => {
    const newArray = res.data;
    newArray.forEach((item: any) => {
      const { checkList, selectList }: any = initCheckList(item);
      if (selectList.length) {
        item.selectList = selectList;
        item.select = selectList.length === checkList.length;
        item.isIndeterminate =
          selectList.length > 0 && selectList.length < checkList.length;
      }
    });
    list.value = newArray;
  });
};

/** 初始化列表数据 */
const initCheckList = (item: any) => {
  const checkList: any[] = [];
  const selectList: any[] = [];
  if (item && item.action?.length) {
    item.action.forEach((item: any) => {
      if (item?.length) {
        item.forEach((m: any) => {
          checkList.push(m.id);
          if (!!m.select) {
            selectList.push(m.id);
          }
        });
      }
    });
  }

  return { checkList, selectList };
};

/** 全选方法 */
const handleCheckAllChange = (val: boolean, item: any) => {
  const checkList: any[] = getCheckListChildren(item);
  item.isIndeterminate = false;
  item.selectList = val ? checkList : [];
};
/** 勾选方法 */
const handleCheckedChange = (value: string[], item: any) => {
  const checkedCount = value.length;
  const checkList: any[] = getCheckListChildren(item);
  item.select = checkedCount === checkList.length;
  item.isIndeterminate = checkedCount > 0 && checkedCount < checkList.length;
};
/** 获取选中数据 */
const getCheckListChildren = (item: any) => {
  const checkList: any[] = [];
  if (item && item.action?.length) {
    item.action.forEach((item: any) => {
      if (item?.length) {
        item.forEach((m: any) => {
          checkList.push(m.id);
        });
      }
    });
  }

  return checkList;
};
/** 提交 */
const handSubmit = () => {
  const listValue = list.value;
  let checkPermission: any[] = [];
  listValue.forEach((item: any) => {
    if (item.selectList && item.selectList.length) {
      checkPermission = checkPermission.concat(item.selectList);
    }
  });
  console.log("--待提交数据--", checkPermission);
  const params = {
    role_id: roleId.value,
    permission: checkPermission.join(","),
  };
  store.setPermission(params).then(() => {
    ElMessage.success("提交成功");
    const timer = setTimeout(() => {
      if (timer) {
        clearTimeout(timer);
      }

      router.go(-1);
    }, 1500);
  });
};
/** 取消 */
const handClose = () => {
  router.go(-1);
};

/** 初始化方法 */
onMounted(() => {
  if (route.query.id) {
    roleId.value = route.query.id;
  }
  getInit();
});
</script>

<style scoped>
.check_box {
  margin-bottom: 15px;
}
.check_group {
  margin-left: 30px;
}
.footer {
  margin-top: 50px;
}
</style>
