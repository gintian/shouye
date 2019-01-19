<template>
  <div class="index-page">
    <!-- 头部 -->
    <div class="index-page-header">
      
    </div>
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
            <trend-prediction></trend-prediction>
          </div>
        </div>
        <!-- 主体 -->
        <div class="index-page-body">
          <!-- 当日全网业务量实时分析 -->
          <div class="index-page-content-2x">
          </div>
          <!-- 全网业务量变化态势 -->
          <div class="index-page-content">
            <business-statistics></business-statistics>
          </div>
        </div>
        <!-- 侧边右 -->
        <div class="index-page-aside">
          <!-- 数据交换 -->
          <div class="index-page-content-2x">
            <data-exchange></data-exchange>
          </div>
          <!-- 交换量占比分析 -->
          <div class="index-page-content">
            <exchange-volume></exchange-volume>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "./components/api-service";
import TrendPrediction from "./components/trend-prediction";
import DataExchange from "./components/data-exchange";
import ExchangeVolume from "./components/exchange-volume";
import BusinessStatistics from "./components/business-statistics";
export default {
  name: "IndexPage",
  components: {
    ApiService,
    TrendPrediction,
    DataExchange,
    ExchangeVolume,
    BusinessStatistics
  }
};
</script>

<style lang="scss">
@import "./main.scss";
</style>
