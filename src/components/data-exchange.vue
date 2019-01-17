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
          show: false,
          data: ["邮件营销", "联盟广告"]
        },
        grid: {
          top: "3%",
          left: "3%",
          right: "4%",
          bottom: "3%",
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
              color: ["rgb(3, 40, 69)"]
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
              color: ["rgb(3, 40, 69)"]
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
            lineStyle: {
              color: "#02c7d8"
            }
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
            lineStyle: {
              color: "#9c13ab"
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
          data: ["利润", "支出", "收入"]
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
                color: ["rgb(14, 137, 212)"]
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
                color: ["rgb(14, 137, 212)"]
              }
            }
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
