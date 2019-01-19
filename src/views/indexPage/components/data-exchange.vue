<template>
  <div class="components-item">
    <div class="components-item-header">API服务</div>
    <div class="components-item-body">
      <!-- 数据 -->
      <div class="components-item-body-data">
        <div class="data">
          <div class="data-icon">
            <img
              src="../../../assets/database.png"
              alt=""
            >
          </div>
          <div class="data-content">
            <div class="data-content-title">数据库(万条)</div>
            <div class="data-content-number">3.15</div>
          </div>
        </div>
        <div class="data">
          <div class="data-icon">
            <img
              src="../../../assets/file.png"
              alt=""
            >
          </div>
          <div class="data-content">
            <div class="data-content-title">文件(GB)</div>
            <div class="data-content-number">54.3</div>
          </div>
        </div>
        <div class="data">
          <div class="data-icon">
            <img
              src="../../../assets/task.png"
              alt=""
            >
          </div>
          <div class="data-content">
            <div class="data-content-title">任务数(次)</div>
            <div class="data-content-number">168</div>
          </div>
        </div>
      </div>
      <div class="components-item-body-content">
        <!-- 图表1 -->
        <div class="components-item-body-content-echart">
          <div class="components-item-body-content-echart-header">流量监控</div>
          <div
            class="components-item-body-content-echart-content"
            ref="echart1"
          ></div>
        </div>
        <!-- 图表2 -->
        <div class="components-item-body-content-echart">
          <div class="components-item-body-content-echart-header">流量监控</div>
          <div
            class="components-item-body-content-echart-content"
            ref="echart2"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  title,
  tooltip,
  axisLabel,
  axisLine,
  axisTick,
  splitLine
} from "../echarts.json";
export default {
  data() {
    return {
      xData1: ["1", "2", "3", "4", "5", "6"],
      yData1: [[55, 200, 160, 1000, 100, 260], [25, 100, 360, 500, 60, 260]],
      xData2: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      yData2: [
        [120, 132, 101, 134, 190, 230, 210],
        [-120, -132, -101, -134, -190, -230, -210]
      ]
    };
  },
  methods: {
    draw1() {
      if (!this.myChart1) {
        const myChart = this.$echarts.init(this.$refs.echart1);
        this.myChart1 = myChart;
      }
      this.myChart1.setOption({
        tooltip: tooltip,
        legend: {
          show: true,
          data: ["流量A", "流量B"],
          top: -5,
          right: 24,
          icon: "rect",
          itemWidth: 12,
          itemHeight: 12,
          borderRadius: 4,
          textStyle: {
            color: "#fff"
          },
          inactiveColor: "#fff"
        },
        color: ["#02c7d8", "#9c13ab"],
        grid: {
          top: 24,
          bottom: 10,
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xData1,
          axisLabel: axisLabel,
          axisLine: axisLine,
          splitLine: splitLine,
          axisTick: axisTick
        },
        yAxis: {
          type: "value",
          axisLabel: axisLabel,
          axisLine: axisLine,
          splitLine: splitLine,
          axisTick: axisTick
        },
        series: [
          {
            name: "流量A",
            type: "line",
            data: this.yData1[0],
            showSymbol: false,
            hoverAnimation: false,
            smooth: true,
            itemStyle: {
              normal: {
                color: "#02c7d8",
                lineStyle: {
                  color: "#02c7d8"
                }
              }
            }
          },
          {
            name: "流量B",
            type: "line",
            data: this.yData1[1],
            showSymbol: false,
            hoverAnimation: false,
            smooth: true,
            itemStyle: {
              normal: {
                color: "#9c13ab",
                lineStyle: {
                  color: "#9c13ab"
                }
              }
            }
          }
        ]
      });
    },
    draw2() {
      if (!this.myChart2) {
        const myChart = this.$echarts.init(this.$refs.echart2);
        this.myChart2 = myChart;
      }
      this.myChart2.setOption({
        tooltip: tooltip,
        grid: {
          top: 24,
          bottom: 10,
          containLabel: true
        },
        xAxis: [
          {
            type: "value",
            axisLabel: axisLabel,
            axisLine: axisLine,
            splitLine: splitLine,
            axisTick: axisTick
          }
        ],
        yAxis: [
          {
            type: "category",
            axisTick: axisTick,
            data: this.xData2,
            axisLabel: axisLabel,
            axisLine: axisLine,
            splitLine: splitLine
          }
        ],
        series: [
          {
            name: "流入",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "right",
                color: "#fff"
              }
            },
            barWidth: "40%",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#11A4FC"
                  },
                  {
                    offset: 1,
                    color: "#79F9F9"
                  }
                ]),
                barBorderRadius: [0, 8, 8, 0]
              }
            },
            data: this.yData2[0]
          },
          {
            name: "流出",
            type: "bar",
            stack: "总量",
            barWidth: 16,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#f7f352"
                  },
                  {
                    offset: 1,
                    color: "#f8b528"
                  }
                ]),
                barBorderRadius: [8, 0, 0, 8]
              }
            },
            label: {
              normal: {
                show: true,
                position: "left",
                color: "#fff"
              }
            },
            data: this.yData2[1]
          }
        ]
      });
    }
  },
  created() {
    this.$nextTick(() => {
      this.draw1();
      this.draw2();
    });

    const r = () => {
      return Math.ceil(Math.random() * 800 + 30);
    };

    setInterval(() => {
      this.xData1.shift();
      this.xData1.push(Number(this.xData1[this.xData1.length - 1]) + 1);
      this.yData1[0].shift();
      this.yData1[0].push(r());
      this.yData1[1].shift();
      this.yData1[1].push(r());
      this.draw1();

      this.yData2 = [
        [r(), r(), r(), r(), r(), r(), r()],
        [-r(), -r(), -r(), -r(), -r(), -r(), -r()]
      ];
      this.draw2();
    }, 5000);
  }
};
</script>

<style lang="scss" scoped>
.data {
  width: 33.33333%;
}
</style>

