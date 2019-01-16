<template>
  <div>
    <div class="header">API服务</div>
    <div class="content">
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
  </div>
</template>

<script>
import StatisticsItem from "./statistics-item/statistics-item";
import echarts from "echarts";
export default {
  name: "ApiService",
  components: {
    StatisticsItem
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.ec_1);
      // 绘制图表
      myChart.setOption({
        title: { show: false },
        tooltip: {},
        grid: {
          y: 24,
          y2: 24
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#04649e"
            }
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
            lineStyle: {
              interval: 0,
              color: ["#04649e", "#aaa"]
            }
          }
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 200, 360, 1000, 100, 260]
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
          type: "value"
        },
        yAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
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
            data: [320, 302, 301, 334, 390, 330, 320]
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
            data: [120, 132, 101, 134, 90, 230, 210]
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
            data: [220, 182, 191, 234, 290, 330, 310]
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
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: "搜索引擎",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
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
