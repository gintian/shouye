<template>
  <div class="box">
    <div class="card-header">API服务</div>
    <div class="content">
      <div class="content-header">
        <statistics-item class="a-item">
          <img
            src="~@/assets/apiservice.png"
            alt=""
            slot="img"
          >
          <div slot="label">API服务(万次)</div>
          <count-to
            slot="number"
            :count="3.15"
          ></count-to>
        </statistics-item>
        <statistics-item class="a-item">
          <img
            src="~@/assets/serviceinterface.png"
            alt=""
            slot="img"
          >
          <div slot="label">服务接口(个)</div>
          <count-to
            slot="number"
            :count="276"
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
  name: "ApiService",
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
        title: { show: false },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          y: 24,
          y2: 24
        },
        xAxis: {
          data: ["1", "2", "3", "4", "5", "6"],
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
          axisTick: {
            show: false
          }
        },
        yAxis: {
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
            interval: 2,
            lineStyle: {
              color: ["rgba(14, 137, 212, .15)"],
              width: 2
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "流量",
            type: "bar",
            barWidth: 20,
            itemStyle: {
              color: "#87d95d"
            },
            data: [5, 200, 160, 1000, 100, 260]
          },
          {
            name: "流量2",
            type: "bar",
            barWidth: 20,
            itemStyle: {
              color: "#02c7d8"
            },
            data: [25, 100, 360, 500, 60, 260]
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
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        grid: {
          top: "3%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
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
        yAxis: {
          type: "category",
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
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "直接访问",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [320, 302, 301, 334, 390, 330, 320],
            itemStyle: {
              normal: {
                color: "#0982df"
              }
            }
          },
          {
            name: "邮件营销",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
              normal: {
                color: "#1ec0cd"
              }
            }
          },
          {
            name: "联盟广告",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
              normal: {
                color: "#d01af8"
              }
            }
          },
          {
            name: "视频广告",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [150, 212, 201, 154, 190, 330, 410],
            itemStyle: {
              normal: {
                color: "#eb0550",
                barBorderRadius: [0, 8, 8, 0]
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
      this.draw2();
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
  display: flex;
  flex-direction: column;

  &-header {
    display: flex;
    height: 78px;

    .a-item {
      flex-direction: row;
      padding: 10px;
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
