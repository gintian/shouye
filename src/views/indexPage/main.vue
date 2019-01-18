<template>
  <div class="index-page">
    <!-- 头部 -->
    <div class="index-page-header"></div>
    <div class="index-page-main">
      <div class="row">
        <!-- 侧边左 -->
        <div class="index-page-aside">
          <!-- api服务 -->
          <div class="index-page-content-2x">
            <api-service></api-service>
          </div>
          <!-- 24小时趋势预测 -->
          <div class="index-page-content">
            <api-service></api-service>
          </div>
        </div>
        <!-- 主体 -->
        <div class="index-page-body">
          <!-- 当日全网业务量实时分析 -->
          <div class="index-page-content-2x">
            <api-service></api-service>
          </div>
          <!-- 全网业务量变化态势 -->
          <div class="index-page-content">
            <api-service></api-service>
          </div>
        </div>
        <!-- 侧边右 -->
        <div class="index-page-aside">
          <!-- 数据交换 -->
          <div class="index-page-content-2x">
            <api-service></api-service>
          </div>
          <!-- 交换量占比分析 -->
          <div class="index-page-content">
            <api-service></api-service>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "./components/api-service";
export default {
  name: "IndexPage",
  components: {
    ApiService
  }
};
</script>

<style lang="scss" scoped>
.index-page {
  height: 100%;

  &-header {
    height: 72px;
  }

  &-main {
    position: absolute;
    top: 72px;
    width: 100%;
    bottom: 0;
  }

  .row {
    height: 100%;
    margin-left: -10px;
    margin-right: -10px;
    padding: 20px;
  }

  &-aside,
  &-body {
    height: 100%;
    display: inline-block;
    vertical-align: top;
    padding-left: 10px;
    padding-right: 10px;
  }

  &-aside {
    width: 25%;
  }

  &-body {
    width: 50%;
  }

  &-content-2x {
    width: 100%;
    height: 60%;
    padding-bottom: 10px;
  }

  &-content {
    width: 100%;
    height: 40%;
    padding-top: 10px;
  }
}
</style>
