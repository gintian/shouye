<template>
  <div class="box">
    <div class="card-header">数据交换</div>
    <div class="content">
      <div class="content-header">
        <statistics-item class="a-item">
          <img
            src="~@/assets/database.png"
            alt=""
            slot="img"
          >
          <div slot="label">数据库(万条)</div>
          <count-to
            slot="number"
            :count="3.15"
          ></count-to>
        </statistics-item>
        <statistics-item class="a-item">
          <img
            src="~@/assets/file.png"
            alt=""
            slot="img"
          >
          <div slot="label">文件(GB)</div>
          <count-to
            slot="number"
            :count="54.3"
          ></count-to>
        </statistics-item>
        <statistics-item class="a-item">
          <img
            src="~@/assets/task.png"
            alt=""
            slot="img"
          >
          <div slot="label">任务数(次)</div>
          <count-to
            slot="number"
            :count="168"
          ></count-to>
        </statistics-item>
      </div>
      <div class="content-body">
        <div class="echartbox">
          <div class="echartbox-header">流量监控</div>
          <div class="echartbox-body">
            <div
              ref="ec_1"
              style="height:100%"
            ></div>
          </div>
        </div>
        <div class="echartbox">
          <div class="echartbox-header">流量监控</div>
          <div class="echartbox-body">
            <div
              ref="ec_2"
              style="height:100%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatisticsItem from "./statistics-item/statistics-item";
import CountTo from "./count-to/count-to";
import echarts from "echarts";

export default {
  name: "DataExchange",
  props: {
    data: Object
  },
  components: {
    StatisticsItem,
    CountTo
  },
  data() {
    return {};
  },
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
          left: 24,
          right: 24,
          bottom: 24,
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            name: "流量A",
            type: "line",
            data: [120, 200, 300, 400, 500, 550, 600],
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
            data: [600, 500, 250, 300, 290, 200, 100],
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
          show: false,
          data: ["流出", "流入"]
        },
        grid: {
          top: "3%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
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
          }
        ],
        yAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            }
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
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
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
            data: [120, 132, 101, 134, 190, 230, 210]
          },
          {
            name: "流出",
            type: "bar",
            stack: "总量",
            barWidth: 16,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
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
.box {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;

  &-header {
    display: flex;
    height: 78px;

    .a-item {
      flex-direction: row;
      padding: 10px 2px;
    }
  }

  &-body {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .echartbox {
    height: 50%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;

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

    &-body {
      flex: 1;
    }
  }
}
</style>
