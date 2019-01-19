<template>
  <div class="components-item">
    <div class="components-item-header">交换量占比分析</div>
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
  name: "ExchangeVolume",
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
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          top: "30%",
          right: "10%",
          itemWidth: 14,
          data: ["公安局", "工商局", "电信公司", "环保局", "其他单位"],
          textStyle: {
            color: "#fff"
          }
        },
        color: ["#eec93c", "#ca3cea", "#199ed9", "#19b6bb", "#e52362"],
        series: [
          {
            name: "交换量占比",
            type: "pie",
            radius: ["52%", "80%"],
            center: ["30%", "60%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                formatter: "{c}",
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "公安局" },
              { value: 310, name: "工商局" },
              { value: 234, name: "电信公司" },
              { value: 135, name: "环保局" },
              { value: 548, name: "其他单位" }
            ]
          }
        ]
      });
      let index = 0; //默认选中高亮模块索引
      this.myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: 0
      });
      this.myChart.on("mouseover", function(e) {
        if (e.dataIndex != index) {
          this.myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: index
          });
        }
      });
      this.myChart.on("mouseout", function(e) {
        index = e.dataIndex;
        this.myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: e.dataIndex
        });
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