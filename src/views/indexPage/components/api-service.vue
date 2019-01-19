<template>
  <div class="components-item">
    <div class="components-item-header">API服务</div>
    <div class="components-item-body">
      <!-- 数据 -->
      <div class="components-item-body-data">
        <div class="data">
          <div class="data-icon">
            <img
              src="../../../assets/apiservice.png"
              alt=""
            >
          </div>
          <div class="data-content">
            <div class="data-content-title">API服务(万次)</div>
            <div class="data-content-number">3.15</div>
          </div>
        </div>
        <div class="data">
          <div class="data-icon">
            <img
              src="../../../assets/serviceinterface.png"
              alt=""
            >
          </div>
          <div class="data-content">
            <div class="data-content-title">服务接口(个)</div>
            <div class="data-content-number">279</div>
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
      yData2: [99, 375, 593, 628, 365, 428, 235],
      /* yData2Formatter: [
        [0, 0, 0, 100, 0, 0, 0],
        [0, 100, 100, 200, 100, 100, 0],
        [0, 200, 200, 300, 200, 200, 100],
        [99, 75, 293, 28, 65, 128, 135]
      ] */
      yData2Formatter: [[], [], [], []]
    };
  },
  methods: {
    draw1() {
      if (!this.myChart1) {
        const myChart = this.$echarts.init(this.$refs.echart1);
        this.myChart1 = myChart;
      }
      const option = {
        title,
        tooltip,
        grid: {
          y: 10,
          y2: 28
        },
        xAxis: {
          data: this.xData1,
          axisLabel,
          axisLine,
          axisTick
        },
        yAxis: {
          axisLabel,
          axisLine,
          axisTick,
          splitLine
        },
        color: ["#87d95d", "#02c7d8"],
        series: [
          {
            name: "流量",
            type: "bar",
            barWidth: "18%",
            data: this.yData1[0]
          },
          {
            name: "流量2",
            type: "bar",
            barWidth: "18%",
            data: this.yData1[1]
          }
        ]
      };
      this.myChart1.setOption(option);
    },
    draw2() {
      if (!this.myChart2) {
        const myChart = this.$echarts.init(this.$refs.echart2);
        this.myChart2 = myChart;
      }
      let color = ["#0982df", "#1ec0cd", "#d01af8", "#eb0550"];
      // 0-100,100-300,300-600,600+
      let data = [[], [], [], []];
      this.yData2.forEach((item, i) => {
        if (item <= 100) {
          data[0][i] = 0;
          data[1][i] = 0;
          data[2][i] = 0;
          data[3][i] = item;
        } else if (item <= 300) {
          data[0][i] = 0;
          data[1][i] = 0;
          data[2][i] = 100;
          data[3][i] = item - 100;
        } else if (item <= 600) {
          data[0][i] = 0;
          data[1][i] = 100;
          data[2][i] = 200;
          data[3][i] = item - 300;
        } else {
          data[0][i] = 100;
          data[1][i] = 200;
          data[2][i] = 300;
          data[3][i] = item - 600;
        }
      });
      this.yData2Formatter = data;

      const option = {
        title,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          formatter: params => {
            return `总量：${this.yData2[params[0].dataIndex]}`;
          }
        },
        grid: {
          y: 10,
          y2: 28
        },
        xAxis: {
          type: "value",
          axisLabel,
          axisLine,
          axisTick,
          splitLine
        },
        yAxis: {
          type: "category",
          data: this.xData2,
          axisLabel,
          axisLine,
          axisTick
        },
        color: color,
        series: [
          {
            name: "A",
            type: "bar",
            stack: "总量",
            data: this.yData2Formatter[0],
            itemStyle: {
              normal: {
                /* color: params => {
                  let item = this.yData2[params.dataIndex];
                  return color[0];
                } */
              }
            }
          },
          {
            name: "B",
            type: "bar",
            stack: "总量",
            data: this.yData2Formatter[1],
            itemStyle: {
              normal: {
                /* color: params => {
                  let item = this.yData2[params.dataIndex];
                  
                } */
              }
            }
          },
          {
            name: "C",
            type: "bar",
            stack: "总量",
            data: this.yData2Formatter[2],
            itemStyle: {
              normal: {
                /*  color: params => {
                  let item = this.yData2[params.dataIndex];
                  if (item > 300) {
                    return color[2];
                  } else {
                    return "transparent";
                  }
                } */
              }
            }
          },
          {
            name: "D",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideRight",
              formatter: params => {
                return `${this.yData2[params.dataIndex]}`;
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: [0, 8, 8, 0],
                /* color: params => {
                  let item = this.yData2[params.dataIndex];
                  if (item <= 100) {
                    return color[0];
                  } else if (item <= 300) {
                    return color[1];
                  } else if (item <= 600) {
                    return color[2];
                  } else {
                    return color[3];
                  }
                } */
              }
            },
            data: this.yData2Formatter[3]
          }
        ]
      };
      this.myChart2.setOption(option);
    }
  },
  created() {
    this.$nextTick(() => {
      this.draw1();
      this.draw2();
    });

    const r = () => {
      return Math.ceil(Math.random() * 800);
    };

    setInterval(() => {
      this.yData1 = [
        [r(), r(), r(), r(), r(), r()],
        [r(), r(), r(), r(), r(), r()]
      ];
      this.draw1();
      // this.draw2();
    }, 5000);
  }
};
</script>

<style lang="scss" scoped>
.data {
  width: 50%;
}
</style>

