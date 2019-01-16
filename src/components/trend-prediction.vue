<template>
  <div>
    <div class="header">24小时趋势预测</div>
    <div
      ref="ec"
      style="height: 200px"
    ></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "TrendPrediction",
  methods: {
    draw() {
      let myChart = echarts.init(this.$refs.ec);
      myChart.setOption({
        grid: {
          y: 24,
          y2: 24
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      });
    }
  },
  created() {
    this.$nextTick(() => {
      this.draw();
    });
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 36px;
  line-height: 36px;
  text-indent: 16px;
  letter-spacing: 1.2px;
  color: #72ccee;
  font-size: 16px;
  font-weight: 600;
  background: url("../assets/cardheader2.png") no-repeat;
  background-size: 100% 100%;
}
</style>
