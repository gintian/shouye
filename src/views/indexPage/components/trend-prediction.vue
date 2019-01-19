<template>
  <div class="components-item">
    <div class="components-item-header">24小时趋势预测</div>
    <div
      class="components-item-body"
      ref="echart"
    ></div>
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
  name: "TrendPrediction",
  data() {
    return {
      xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      yData: [
        [820, 932, 901, 434, 690, 630, 320],
        [420, 632, 301, 934, 490, 230, 720]
      ]
    };
  },
  methods: {
    draw() {
      if (!this.myChart) {
        const myChart = this.$echarts.init(this.$refs.echart);
        this.myChart = myChart;
      }
      this.myChart.setOption({
        grid: {
          y: 24,
          y2: 24
        },
        tooltip: tooltip,
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xData,
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
            data: this.yData[0],
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            areaStyle: {
              color: "#02c7d8",
              opacity: "0.3"
            },
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
            data: this.yData[1],
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            areaStyle: {
              color: "#87d95d",
              opacity: "0.3"
            },
            itemStyle: {
              normal: {
                color: "#87d95d",
                lineStyle: {
                  color: "#87d95d"
                }
              }
            }
          }
        ]
      });
    }
  },
  created() {
    const r = () => {
      return Math.ceil(Math.random() * 800 + 30);
    };
    this.$nextTick(() => {
      this.draw();
    });
    setInterval(() => {
      this.yData = [
        [r(), r(), r(), r(), r(), r(), r()],
        [r(), r(), r(), r(), r(), r(), r()]
      ];
      this.draw();
    }, 5000);
  }
};
</script>