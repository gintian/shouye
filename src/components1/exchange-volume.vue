<template>
  <div>
    <div class="header">交换量占比分析</div>
    <div
      ref="ec"
      style="height: 200px"
    ></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "ExchangeVolume",
  methods: {
    draw() {
      let myChart = echarts.init(this.$refs.ec);
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
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
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
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
</style>
