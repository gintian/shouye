<template>
  <div>
    <div class="header">数据交换</div>
    <statistics-item></statistics-item>
    <statistics-item></statistics-item>
    <statistics-item></statistics-item>
    <div class="statistics-echarts">
      <div class="statistics-echarts-header">流量监控</div>
      <div
        class="statistics-echarts-content"
        style="height: 200px;"
      >
        <div
          ref="ec_1"
          style="height: 100%"
        ></div>
      </div>
    </div>
    <div class="statistics-echarts">
      <div class="statistics-echarts-header">流量监控</div>
      <div
        class="statistics-echarts-content"
        style="height: 200px;"
      >
        <div
          ref="ec_2"
          style="height: 100%"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import StatisticsItem from "./statistics-item/statistics-item";
export default {
  name: "DataExchange",
  components: { StatisticsItem },
  methods: {
    draw() {
      let myChart = echarts.init(this.$refs.ec_1);
      myChart.setOption({
        title: {
          show: false
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      });
    },
    draw2() {
      let myChart = echarts.init(this.$refs.ec_2);
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["利润", "支出", "收入"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "value"
          }
        ],
        yAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        series: [
          {
            name: "利润",
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "inside"
              }
            },
            data: [200, 170, 240, 244, 200, 220, 210]
          },
          {
            name: "收入",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true
              }
            },
            data: [320, 302, 341, 374, 390, 450, 420]
          },
          {
            name: "支出",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "left"
              }
            },
            data: [-120, -132, -101, -134, -190, -230, -210]
          }
        ]
      });
    }
  },
  created() {
    this.$nextTick(() => {
      this.draw();
      this.draw2();
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

.statistics-echarts {
  &-header {
    height: 24px;
    text-indent: 14px;
    &::before {
      content: "";
      display: block;
      width: 6px;
      height: 18px;
      background: #3ba9c4;
      border-radius: 4px;
      position: absolute;
    }
  }
}
</style>
