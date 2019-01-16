<template>
  <div class="layout">
    <div class="layout-header"></div>
    <div class="layout-content">
      <div class="layout-content-aside-left">
        <api-service></api-service>
        <trend-prediction></trend-prediction>
      </div>
      <div class="layout-content-main">
        <business-analysis></business-analysis>
        <business-statistics></business-statistics>
      </div>
      <div class="layout-content-aside-right">
        <data-exchange></data-exchange>
        <exchange-volume></exchange-volume>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "./components/api-service";
import BusinessAnalysis from "./components/business-volume-analysis";
import DataExchange from "./components/data-exchange";
import TrendPrediction from "./components/trend-prediction";
import ExchangeVolume from "./components/exchange-volume";
import BusinessStatistics from "./components/business-volume-statistics";
export default {
  name: "app",
  components: {
    ApiService,
    BusinessAnalysis,
    BusinessStatistics,
    DataExchange,
    TrendPrediction,
    ExchangeVolume
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: auto;
  height: 100%;
  background: url("./assets/background.jpg") no-repeat center;

  &-header {
    height: 72px;
    background: url("./assets/logo_03.png") no-repeat center;
  }

  &-content {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    padding: 24px;
    &-aside-left {
      width: 25%;
    }

    &-main {
      flex: 1;
      flex-basis: auto;
      padding: 0 24px;
    }

    &-aside-right {
      width: 25%;
    }
  }
}
</style>
