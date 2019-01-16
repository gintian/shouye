<template>
  <div>
    <div class="card-header">API服务</div>
    <div class="a">
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
    <div class="card-header2">流量监控</div>
    <div
      ref="ec_1"
      style="height:200px"
    ></div>
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
            lineStyle: {
              interval: 0,
              color: ["rgb(3, 40, 69)"],
              width: 10
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "销量",
            type: "bar",
            barWidth: 20,
            itemStyle: {
              color: "#02c7d8"
            },
            data: [5, 200, 360, 1000, 100, 260]
          }
        ]
      });
    },
    draw2() {}
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
.a {
  display: flex;
  &-item {
    flex-direction: row;
    width: 50%;
    padding: 10px;
  }
}
</style>
