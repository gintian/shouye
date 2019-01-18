<template>
  <div class="box">
    <div class="card-header">24小时趋势预测</div>
    <div class="content">
      <div
        ref="ec_1"
        style="height:100%"
      ></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "TrendPrediction",
  props: {
    data: Object
  },
  methods: {
    draw() {
      let myChart = echarts.init(this.$refs.ec_1);
      myChart.setOption({
        grid: {
          y: 24,
          y2: 24
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#04649e"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["rgba(14, 137, 212, .15)"]
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#04649e"
            }
          },
          splitLine: {
            lineStyle: {
              color: ["rgba(14, 137, 212, .15)"]
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            data: [820, 932, 901, 434, 690, 630, 320],
            type: "line",
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
            data: [420, 632, 301, 934, 490, 230, 720],
            type: "line",
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
    this.$nextTick(() => {
      this.draw();
    });
    window.onresize = function() {
      console.log(11);
    };
  }
};
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
