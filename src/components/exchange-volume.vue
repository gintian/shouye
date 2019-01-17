<template>
  <div class="box">
    <div class="card-header">交换量占比分析</div>
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
  name: "ExchangeVolume",
  props: {
    data: Object
  },
  methods: {
    draw() {
      let myChart = echarts.init(this.$refs.ec_1);
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          top: "10%",
          right: "10%",
          itemWidth: 14,
          data: ["公安局", "工商局", "电信公司", "环保局", "其他单位"],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "交换量占比",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["30%", "50%"],
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
              { value: 1548, name: "其他单位" }
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
.box {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
