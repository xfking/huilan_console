<template>
  <div class="content-box">
    <div class="cont-header">
      <span class="cont-title"> {{ title }}</span>
      <slot name="workflow"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    title: String,
  },
});
</script>

<style lang="less" scoped>
.content-box {
  padding: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 6px;

  .cont-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    position: relative;
  }

  .cont-header::after {
    content: "";
    position: absolute;
    top: 0;
    left: -10px;
    height: 60%;
    width: 2px;
    background-color: red;
  }

  .cont-title {
    font-weight: 700;
  }
}
</style>
