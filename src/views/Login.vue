<template>
  <div id="login-back">
    <img
      class="login-logo"
      width="300"
      src="/src/assets/index_back.png"
      alt="logo"
    />
    <img class="back-logo" width="300" src="/src/assets/back6.png" alt="logo" />
    <div class="login-form">
      <div class="title">登 录</div>
      <div class="form-box">
        <el-form ref="form" :data="formData" :colon="true" :label-width="0">
          <el-form-item name="account">
            <el-input
              v-model="formData.account"
              clearable
              placeholder="请输入账户名"
            >
            </el-input>
          </el-form-item>
          <el-form-item name="password">
            <el-input
              v-model="formData.password"
              type="password"
              clearable
              placeholder="请输入密码"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit"> 登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- <div class="login-forget">忘记密码</div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { userStore } from "@/store/user";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const store = userStore();
const router = useRouter();
const INITIAL_DATA = {
  account: "jxf",
  password: "123456",
};
const formData = ref({ ...INITIAL_DATA });

const onSubmit = () => {
  // ElMessage.success("登录成功");

  store
    .login(formData.value)
    .then(() => {
      ElMessage.success("登录成功");
      router.push({ path: "/" });
    })
    .catch((err) => {
      ElMessage.error(err);
    });
};
</script>

<style scoped lang="less">
#login-back {
  width: 100%;
  height: 100vh;
  background-color: #7e3628;
  box-sizing: border-box;
  position: relative;

  .login-logo {
    position: absolute;
    top: 90px;
    left: 90px;
    width: 200px;
  }

  .back-logo {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 450px;
  }

  .login-forget {
    display: flex;
    padding-left: 32px;
    cursor: pointer;
  }

  .login-form {
    position: absolute;
    top: 50%;
    right: 300px;
    transform: translateY(-50%);
    width: 450px;
    height: 540px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 5px 5px 10px rgba(0, 52, 181, 0.5);
  }

  .title {
    padding: 60px 40px 30px 40px;
    font-size: 32px;
    font-weight: 700;
  }

  .form-box {
    padding: 32px 32px 0 32px;
    box-sizing: border-box;

    //更改TDesign默认表单样式
    .el_form__item {
      margin-bottom: 30px;
    }

    .el-input {
      height: 50px !important;
      line-height: 60px;
    }

    .el-button {
      height: 50px;
      width: 100%;
      font-weight: 700;
      margin-top: 50px;
    }
  }
}
</style>
