<template>
  <div class="box">
    <div class="card-header">当日全网业务量实时分析</div>
    <div class="content">
      <div class="content-header">
        <statistics-item class="a-item">
          <img
            src="~@/assets/accessunit.png"
            alt=""
            slot="img"
          >
          <div slot="label">接入单位(个)</div>
          <count-to
            slot="number"
            :count="32"
          ></count-to>
        </statistics-item>
        <statistics-item class="a-item">
          <img
            src="~@/assets/dataexchange.png"
            alt=""
            slot="img"
          >
          <div slot="label">数据交换量(万条)</div>
          <count-to
            slot="number"
            :count="3498"
          ></count-to>
        </statistics-item>
        <statistics-item class="a-item">
          <img
            src="~@/assets/fileexchange.png"
            alt=""
            slot="img"
          >
          <div slot="label">文件交换量(GB)</div>
          <count-to
            slot="number"
            :count="1285"
          ></count-to>
        </statistics-item>
        <statistics-item class="a-item">
          <img
            src="~@/assets/servicetimes.png"
            alt=""
            slot="img"
          >
          <div slot="label">提供服务次数(万次)</div>
          <count-to
            slot="number"
            :count="4585"
          ></count-to>
        </statistics-item>
      </div>
      <div class="content-body">
        <div
          ref="ec_1"
          style="height:100%"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import StatisticsItem from "./statistics-item/statistics-item";
import CountTo from "./count-to/count-to";
import jiangsu from "./jiangsu.json";
echarts.registerMap("江苏", jiangsu);
// 市区坐标
var geoCoordMap = {};
var rawData = [];

function getRandom(params) {
  return Math.ceil(Math.random() * 200);
}

jiangsu.features.forEach(item => {
  if (item.properties) {
    geoCoordMap[item.properties.name] = item.properties.cp;
    rawData.push([item.properties.name, getRandom(), getRandom(), getRandom(), getRandom(), getRandom()]);
  }
});
export default {
  name: "BusinessAnalysis",
  props: {
    data: Object
  },
  components: {
    StatisticsItem,
    CountTo
  },
  methods: {
    draw() {
      let myChart = echarts.init(this.$refs.ec_1);

      function makeMapData(rawData) {
        var mapData = [];
        for (var i = 0; i < rawData.length; i++) {
          var geoCoord = geoCoordMap[rawData[i][0]];
          if (geoCoord) {
            mapData.push({
              name: rawData[i][0],
              value: geoCoord.concat(rawData[i].slice(1))
            });
          }
        }
        return mapData;
      }

      var option = {
        animation: false,
        tooltip: {
          trigger: "axis"
        },
        geo: {
          map: "江苏",
          roam: true,
          zoom: 1.4, // 地图初始大小
          label: {
            emphasis: {
              show: false,
              areaColor: "#eee"
            }
          },
          // 地区块儿颜色
          itemStyle: {
            normal: {
              areaColor: "rgba(14, 137, 212, .15)",
              borderColor: "#fff"
            },
            emphasis: {
              areaColor: "#185475"
            }
          }
        },
        series: []
      };

      function renderEachCity() {
        var option = {
          xAxis: [],
          yAxis: [],
          grid: [],
          series: []
        };

        echarts.util.each(rawData, function(dataItem, idx) {
          var geoCoord = geoCoordMap[dataItem[0]];
          var coord = myChart.convertToPixel("geo", geoCoord);
          idx += "";

          var inflationData = [
            dataItem[1],
            dataItem[2],
            dataItem[3],
            dataItem[4],
            dataItem[5]
          ];

          option.xAxis.push({
            id: idx,
            gridId: idx,
            type: "category",
            name: dataItem[0],
            nameLocation: "middle",
            nameGap: 5,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: "#f3f3f3"
              }
            },
            data: ["数据A", "数据B", "数据C", "数据D", "数据E"],
            z: 100
          });
          option.yAxis.push({
            id: idx,
            gridId: idx,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#1C70B6"
              }
            },
            z: 100
          });
          option.grid.push({
            id: idx,
            width: 30,
            height: 40,
            left: coord[0] - 15,
            top: coord[1] - 15,
            z: 100
          });
          option.series.push({
            id: idx,
            type: "bar",
            xAxisId: idx,
            yAxisId: idx,
            barGap: 0,
            barCategoryGap: 0,
            // data: inflationData,
            data: inflationData,
            z: 100,
            itemStyle: {
              normal: {
                color: function(params) {
                  // 柱状图每根柱子颜色
                  var colorList = [
                    "#F75D5D",
                    "#59ED4F",
                    "#4C91E7",
                    "#0982df",
                    "#1ec0cd"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          });
        });
        myChart.setOption(option);
      }

      setTimeout(renderEachCity, 0);
      // 缩放和拖拽
      function throttle(fn, delay, debounce) {
        var currCall;
        var lastCall = 0;
        var lastExec = 0;
        var timer = null;
        var diff;
        var scope;
        var args;

        delay = delay || 0;

        function exec() {
          lastExec = new Date().getTime();
          timer = null;
          fn.apply(scope, args || []);
        }

        var cb = function() {
          currCall = new Date().getTime();
          scope = this;
          args = arguments;
          diff = currCall - (debounce ? lastCall : lastExec) - delay;

          clearTimeout(timer);

          if (debounce) {
            timer = setTimeout(exec, delay);
          } else {
            if (diff >= 0) {
              exec();
            } else {
              timer = setTimeout(exec, -diff);
            }
          }

          lastCall = currCall;
        };

        return cb;
      }

      var throttledRenderEachCity = throttle(renderEachCity, 0);
      myChart.on("geoRoam", throttledRenderEachCity);
      myChart.setOption(option);

      /*  // 点击显示柱状图
      myChart.on("click", function(e) {
        console.log(e);
        // console.log(params);
        if (e.componentSubType == "bar") {
          // 先清除所有柱状图
          $(".tongJiTu").remove();
          // 创建遮挡层
          creatWrap();
          // 创建柱状图容器
          var divObj = document.createElement("div");
          $(divObj).addClass("tongJiTu");
          divObj.id = "zhuzhuang";
          var divX = getMousePos()["x"];
          var divY = getMousePos()["y"];
          $(divObj)
            .css({
              width: 250,
              height: 180,
              border: "1px solid #ccc",
              position: "absolute",
              top: divY,
              left: divX
            })
            .appendTo(".wrap");
          // 创建柱状图
          zhuZhuangTu();
          // 点击遮挡层消失
          clearWrap(".zhedang");
        }
        return;
      });
      // 获取横纵坐标
      function getMousePos(e) {
        var e = event || window.event;
        var scrollX =
          document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollY =
          document.documentElement.scrollTop || document.body.scrollTop;
        var x = e.pageX || e.clientX + scrollX;
        var y = e.pageY || e.clientY + scrollY;
        // console.log(x,y)
        return { x: x, y: y };
      }
      // 生成柱状图
      function zhuZhuangTu() {
        var zhuzhuang = echarts.init(document.getElementById("zhuzhuang"));
        option = {
          backgroundColor: "rgba(255,255,255,.3)",
          legend: {
            data: ["数据A", "数据B", "数据C"]
          },
          xAxis: [
            {
              type: "category",
              data: ["数据A", "数据B", "数据C"]
            }
          ],
          yAxis: [
            {
              splitLine: {
                show: false
              },
              type: "value"
            }
          ],
          series: [
            {
              type: "bar",
              itemStyle: {
                normal: {
                  color: function(params) {
                    var colorList = ["#F75D5D", "#59ED4F", "#4C91E7"];
                    return colorList[params.dataIndex];
                  },
                  label: {
                    show: true,
                    position: "top",
                    textStyle: {
                      color: "#000"
                    }
                  }
                }
              },
              data: [10, 20, 30]
            }
          ]
        };
        zhuzhuang.setOption(option);
      }
      // 生成遮挡层
      function creatWrap() {
        var zheDang = document.createElement("div");
        $(zheDang)
          .addClass("zhedang")
          .css({
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.2)"
          })
          .appendTo(".wrap");
      }
      // 去掉遮挡层
      function clearWrap(id) {
        $(id).click(function(e) {
          // console.log(this);
          this.remove();
          $(".tongJiTu").remove();
          return false;
        });
      } */
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
.card-header {
  background: url("../assets/cardheader.png") no-repeat;
}
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
}
</style>
