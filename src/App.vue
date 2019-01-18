<template>
  <div class="wrapper">
    <div class="header"></div>
    <div class="content">
      <div class="content-aside">
        <div class="content-index-top">
          <api-service :data="apiService"></api-service>
        </div>
        <div class="content-index-bottom">
          <trend-prediction :data="trendPrediction"></trend-prediction>
        </div>
      </div>
      <div class="content-session">
        <div class="content-index-top">
          <business-analysis :data="businessAnalysis"></business-analysis>
        </div>
        <div class="content-index-bottom">
          <business-statistics :data="businessStatistics"></business-statistics>
        </div>
      </div>
      <div class="content-aside">
        <div class="content-index-top">
          <data-exchange :data="dataExchange"></data-exchange>
        </div>
        <div class="content-index-bottom">
          <exchange-volume :data="exchangeVolume"></exchange-volume>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "./components/api-service";
import TrendPrediction from "./components/trend-prediction";
import BusinessAnalysis from "./components/business-analysis";
import BusinessStatistics from "./components/business-statistics";
import DataExchange from "./components/data-exchange";
import ExchangeVolume from "./components/exchange-volume";
export default {
  name: "app",
  components: {
    ApiService,
    TrendPrediction,
    BusinessAnalysis,
    BusinessStatistics,
    DataExchange,
    ExchangeVolume
  },
  data() {
    return {
      apiService: {},
      trendPrediction: {},
      businessAnalysis: {},
      businessStatistics: {},
      dataExchange: {},
      exchangeVolume: {}
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: auto;
  height: 100%;
  background: url("./assets/background2.jpg") no-repeat center;
  min-width: 1600px;

  .header {
    height: 72px;
    background: url("./assets/logo_03.png") no-repeat center;
  }

  .content {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    padding: 24px;

    &-aside {
      width: 25%;
    }

    &-session {
      flex: 1;
      flex-basis: auto;
      padding: 0 24px;
    }

    &-index-top {
      height: 70%;
    }

    &-index-bottom {
      height: 30%;
    }
  }
}
</style>
