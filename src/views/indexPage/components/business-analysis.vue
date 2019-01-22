<template>
  <div class="components-item">
    <div class="components-item-header">当日全网业务量实时分析</div>
    <div class="components-item-body">
      <div class="components-item-body-data">
        <div class="data">
          <div class="data-icon">
            <img
              src="../../../assets/accessunit.png"
              alt
            >
          </div>
          <div class="data-content">
            <div class="data-content-title">接入单位(个)</div>
            <div class="data-content-number">
              <count-to :count="data1"></count-to>
            </div>
          </div>
        </div>
        <div class="data">
          <div class="data-icon">
            <img
              src="../../../assets/dataexchange.png"
              alt
            >
          </div>
          <div class="data-content">
            <div class="data-content-title">数据交换量(万条)</div>
            <div class="data-content-number">
              <count-to :count="data2"></count-to>
            </div>
          </div>
        </div>
        <div class="data">
          <div class="data-icon">
            <img
              src="../../../assets/fileexchange.png"
              alt
            >
          </div>
          <div class="data-content">
            <div class="data-content-title">文件交换量(GB)</div>
            <div class="data-content-number">
              <count-to :count="data3"></count-to>
            </div>
          </div>
        </div>
        <div class="data">
          <div class="data-icon">
            <img
              src="../../../assets/servicetimes.png"
              alt
            >
          </div>
          <div class="data-content">
            <div class="data-content-title">提供服务次数(万次)</div>
            <div class="data-content-number">
              <count-to :count="data4"></count-to>
            </div>
          </div>
        </div>
      </div>
      <div
        class="components-item-body-content"
        ref="echart1"
      ></div>
    </div>
  </div>
</template>

<script>
import CountTo from "@/components/count-to/count-to.vue";
import "echarts-gl";
import "@/lib/jiangsu.js";
export default {
  name: "BusinessAnalysis",
  props: {
    data: Object
  },
  components: { CountTo },
  data() {
    return {
      data1: 240,
      data2: 340,
      data3: 140,
      data4: 3140
    };
  },
  methods: {
    draw() {
      let geoCoordMap = {
        // 0.055
        南京市: [118.767413, 32.041544],
        南京市1: [118.712413, 32.041544],
        南京市2: [118.657413, 32.041544],
        南京市3: [118.602413, 32.041544],
        南京市4: [118.547413, 32.041544],
        无锡市: [120.301663, 31.574729],
        徐州市: [117.184811, 34.261792],
        常州市: [119.946973, 31.772752],
        苏州市: [120.619585, 31.299379],
        南通市: [120.864608, 32.016212],
        连云港市: [119.178821, 34.600018],
        淮安市: [119.021265, 33.597506],
        盐城市: [120.139998, 33.377631],
        扬州市: [119.421003, 32.393159],

        镇江市: [119.452753, 32.204402],
        镇江市1: [119.397753, 32.204402],
        镇江市2: [119.342753, 32.204402],
        镇江市3: [119.287753, 32.204402],
        镇江市4: [119.232753, 32.204402],

        泰州市: [119.915176, 32.484882],
        泰州市1: [119.860176, 32.484882],
        泰州市2: [119.805176, 32.484882],
        泰州市3: [119.750176, 32.484882],
        泰州市4: [119.695176, 32.484882],

        宿迁市: [118.275162, 33.968008],
        宿迁市1: [118.220162, 33.968008],
        宿迁市2: [118.165162, 33.968008],
        宿迁市3: [118.110162, 33.968008],
        宿迁市4: [118.055162, 33.968008]
      };

      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
              itemStyle: data[i].itemStyle
            });
          }
        }
        return res;
      };

      var ra = () => {
        return (Math.random() * 400 + 200).toFixed(2);
      };

      var option = {
        title: {
          show: false
        },
        tooltip: {
          show: true,
          formatter: params => {
            let data =
              params.name + "<br/>" + "值: " + params.value[2] + "<br/>";
            return data;
          }
        },
        visualMap: [
          {
            type: "continuous",
            show: true,
            seriesIndex: 0,
            min: 0,
            max: 800,
            text: ["bar3D"],
            calculable: true,
            inRange: {
              color: ["yellow", "green", "red", "blue", "green"]
            }
          }
        ],
        geo3D: {
          map: "江苏",
          roam: true,
          itemStyle: {
            // color: "#38dcff",
            color: "#38dcff",
            opacity: 1,
            borderWidth: 0.4,
            borderColor: "#000"
          },
          groundPlane: {
            show: false
          },
          label: {
            show: true,
            textStyle: {
              color: "#003a5b", //地图初始化区域字体颜色
              fontSize: 8,
              opacity: 1,
              backgroundColor: "transparent"
            }
          },
          emphasis: {
            //当鼠标放上去  地区区域是否显示名称
            label: {
              show: true,
              textStyle: {
                color: "#fcfcfc",
                fontSize: 3,
                backgroundColor: "rgba(0,23,11,0)"
              }
            }
          },
          //shading: 'lambert',
          light: {
            //光照阴影
            main: {
              color: "#ddd", //光照颜色
              intensity: 1.2, //光照强度
              //shadowQuality: 'high', //阴影亮度
              shadow: false, //是否显示阴影
              alpha: 55,
              beta: 10
            },
            ambient: {
              intensity: 0.3
            }
          },
          top: -10
        },
        series: [
          {
            name: "AA",
            type: "bar3D",
            coordinateSystem: "geo3D",
            barSize: 1, //柱子粗细
            shading: "lambert",
            opacity: 1,
            bevelSize: 0.3,
            label: {
              show: false,
              formatter: "{b}"
            },
            data: convertData([
              {
                name: "南京市",
                value: 50,
                itemStyle: params => {
                  console.log(params);
                }
              },
              {
                name: "南京市1",
                value: 100
              },
              {
                name: "南京市2",
                value: 150
              },
              {
                name: "南京市3",
                value: 200
              },
              {
                name: "南京市4",
                value: 250
              },
              {
                name: "无锡市",
                value: [ra(), ra(), ra()]
              },
              {
                name: "徐州市",
                value: [ra(), ra(), ra()]
              },

              {
                name: "常州市",
                value: 800
              },
              {
                name: "常州市1",
                value: 685
              },
              {
                name: "常州市2",
                value: 570
              },
              {
                name: "常州市3",
                value: 455
              },
              {
                name: "常州市4",
                value: 340
              },
              {
                name: "苏州市",
                value: 800
              },
              {
                name: "苏州市1",
                value: 685
              },
              {
                name: "苏州市2",
                value: 570
              },
              {
                name: "苏州市3",
                value: 455
              },
              {
                name: "苏州市4",
                value: 340
              },
              {
                name: "南通市",
                value: 800
              },
              {
                name: "南通市1",
                value: 685
              },
              {
                name: "南通市2",
                value: 570
              },
              {
                name: "南通市3",
                value: 455
              },
              {
                name: "南通市4",
                value: 340
              },
              {
                name: "连云港市",
                value: 800
              },
              {
                name: "连云港市1",
                value: 685
              },
              {
                name: "连云港市2",
                value: 570
              },
              {
                name: "连云港市3",
                value: 455
              },
              {
                name: "连云港市4",
                value: 340
              },
              {
                name: "淮安市",
                value: 800
              },
              {
                name: "淮安市1",
                value: 685
              },
              {
                name: "淮安市2",
                value: 570
              },
              {
                name: "淮安市3",
                value: 455
              },
              {
                name: "淮安市4",
                value: 340
              },
              {
                name: "盐城市",
                value: 800
              },
              {
                name: "盐城市1",
                value: 685
              },
              {
                name: "盐城市2",
                value: 570
              },
              {
                name: "盐城市3",
                value: 455
              },
              {
                name: "盐城市4",
                value: 340
              },

              {
                name: "扬州市",
                value: 800
              },
              {
                name: "扬州市1",
                value: 685
              },
              {
                name: "扬州市2",
                value: 570
              },
              {
                name: "扬州市3",
                value: 455
              },
              {
                name: "扬州市4",
                value: 340
              },
              {
                name: "镇江市",
                value: 800
              },
              {
                name: "镇江市1",
                value: 685
              },
              {
                name: "镇江市2",
                value: 570
              },
              {
                name: "镇江市3",
                value: 455
              },
              {
                name: "镇江市4",
                value: 340
              },
              {
                name: "泰州市",
                value: 800
              },
              {
                name: "泰州市1",
                value: 685
              },
              {
                name: "泰州市2",
                value: 570
              },
              {
                name: "泰州市3",
                value: 455
              },
              {
                name: "泰州市4",
                value: 340
              },
              {
                name: "宿迁市",
                value: 800
              },
              {
                name: "宿迁市1",
                value: 685
              },
              {
                name: "宿迁市2",
                value: 570
              },
              {
                name: "宿迁市3",
                value: 455
              },
              {
                name: "宿迁市4",
                value: 340
              }
            ])
          }
        ]
      };
      var echart1 = (window.BusinessAnalysis_myChart = this.$echarts.init(
        this.$refs.echart1
      ));
      echart1.setOption(option);

      console.log(
        convertData([
          {
            name: "南京市",
            value: 50,
            itemStyle: params => {
              console.log(params);
            }
          },
          {
            name: "南京市1",
            value: 100
          },
          {
            name: "南京市2",
            value: 150
          },
          {
            name: "南京市3",
            value: 200
          },
          {
            name: "南京市4",
            value: 250
          },
          {
            name: "无锡市",
            value: [ra(), ra(), ra()]
          },
          {
            name: "徐州市",
            value: [ra(), ra(), ra()]
          },

          {
            name: "常州市",
            value: 800
          },
          {
            name: "常州市1",
            value: 685
          },
          {
            name: "常州市2",
            value: 570
          },
          {
            name: "常州市3",
            value: 455
          },
          {
            name: "常州市4",
            value: 340
          },
          {
            name: "苏州市",
            value: 800
          },
          {
            name: "苏州市1",
            value: 685
          },
          {
            name: "苏州市2",
            value: 570
          },
          {
            name: "苏州市3",
            value: 455
          },
          {
            name: "苏州市4",
            value: 340
          },
          {
            name: "南通市",
            value: 800
          },
          {
            name: "南通市1",
            value: 685
          },
          {
            name: "南通市2",
            value: 570
          },
          {
            name: "南通市3",
            value: 455
          },
          {
            name: "南通市4",
            value: 340
          },
          {
            name: "连云港市",
            value: 800
          },
          {
            name: "连云港市1",
            value: 685
          },
          {
            name: "连云港市2",
            value: 570
          },
          {
            name: "连云港市3",
            value: 455
          },
          {
            name: "连云港市4",
            value: 340
          },
          {
            name: "淮安市",
            value: 800
          },
          {
            name: "淮安市1",
            value: 685
          },
          {
            name: "淮安市2",
            value: 570
          },
          {
            name: "淮安市3",
            value: 455
          },
          {
            name: "淮安市4",
            value: 340
          },
          {
            name: "盐城市",
            value: 800
          },
          {
            name: "盐城市1",
            value: 685
          },
          {
            name: "盐城市2",
            value: 570
          },
          {
            name: "盐城市3",
            value: 455
          },
          {
            name: "盐城市4",
            value: 340
          },

          {
            name: "扬州市",
            value: 800
          },
          {
            name: "扬州市1",
            value: 685
          },
          {
            name: "扬州市2",
            value: 570
          },
          {
            name: "扬州市3",
            value: 455
          },
          {
            name: "扬州市4",
            value: 340
          },
          {
            name: "镇江市",
            value: 800
          },
          {
            name: "镇江市1",
            value: 685
          },
          {
            name: "镇江市2",
            value: 570
          },
          {
            name: "镇江市3",
            value: 455
          },
          {
            name: "镇江市4",
            value: 340
          },
          {
            name: "泰州市",
            value: 800
          },
          {
            name: "泰州市1",
            value: 685
          },
          {
            name: "泰州市2",
            value: 570
          },
          {
            name: "泰州市3",
            value: 455
          },
          {
            name: "泰州市4",
            value: 340
          },
          {
            name: "宿迁市",
            value: 800
          },
          {
            name: "宿迁市1",
            value: 685
          },
          {
            name: "宿迁市2",
            value: 570
          },
          {
            name: "宿迁市3",
            value: 455
          },
          {
            name: "宿迁市4",
            value: 340
          }
        ])
      );
    }
  },
  created() {
    this.$nextTick(() => {
      this.draw();
    });

    setInterval(() => {
      this.data1 = Math.ceil(Math.random() * 800);
      this.data2 = Math.ceil(Math.random() * 800);
      this.data3 = Math.ceil(Math.random() * 800);
      this.data4 = Math.ceil(Math.random() * 800 + 1000);
    }, 5000);
  }
};
</script>

<style lang="scss" scoped>
.data {
  width: 25%;
}
</style>
