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
      <div class="components-item-body-content">
        <div class="components-item-body-content-echart">
          <div class="components-item-body-content-echart-header">流量监控</div>
          <div
            ref="echart1"
            class="components-item-body-content-echart-content"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var pointData = {
  南京市: {
    position: [118.767413, 32.041544],
    value: [100, 70, 60, 50, 45]
  },
  无锡市: {
    position: [120.001663, 31.304729],
    value: [100, 70, 60, 50, 45]
  },
  徐州市: {
    position: [117.684811, 34.261792],
    value: [100, 70, 60, 50, 45]
  },
  常州市: {
    position: [119.946973, 31.672752],
    value: [100, 70, 60, 50, 45]
  },
  苏州市: {
    position: [120.619585, 31.180379],
    value: [100, 70, 60, 50, 45]
  },
  南通市: {
    position: [121.004608, 32.156212],
    value: [100, 70, 60, 50, 45]
  },
  连云港市: {
    position: [119.178821, 34.600018],
    value: [100, 70, 60, 50, 45]
  },
  淮安市: {
    position: [119.201265, 33.597506],
    value: [100, 70, 60, 50, 45]
  },
  盐城市: {
    position: [120.139998, 33.377631],
    value: [100, 70, 60, 50, 45]
  },
  扬州市: {
    position: [119.501003, 32.503159],
    value: [100, 70, 60, 50, 45]
  },
  镇江市: {
    position: [119.502753, 32.054402],
    value: [100, 70, 60, 50, 45]
  },
  泰州市: {
    position: [120.205176, 32.484882],
    value: [100, 70, 60, 50, 45]
  },
  宿迁市: {
    position: [118.605162, 33.808008],
    value: [100, 70, 60, 50, 45]
  }
};
var mapColor = ["#eec93c", "#4EC973", "#935BE4", "#19b6bb", "#e52362"];
var item = [
  "已比对资源数",
  "已监控资源数",
  "监控异常资源数",
  "资源库正常数",
  "资源库异常数"
];
var getMarker = function(i) {
  return (
    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" +
    mapColor[i] +
    ";'></span>"
  );
};
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
      data2: 500,
      data3: 140,
      data4: 3140
    };
  },
  methods: {
    resData(data) {
      let res = [];
      for (var key in data) {
        let inter = 0;
        for (let i = 0; i < 5; i++) {
          let obj = {};
          var arr = [];
          let lat = data[key].position[0];
          lat -= 0.055;
          data[key].position[0] = lat;
          let valueKey = data[key].value;
          var value = Object.assign([], data[key].position);
          value.push(valueKey[i]);
          obj.name = key + item[i];
          obj.value = value;
          var itemStyle = {};
          itemStyle.color = mapColor[i];
          obj.itemStyle = itemStyle;
          obj.refName = key;
          res.push(obj);
        }
        res.push({
          name: key + Math.random() * 5,
          value: [0, 0, 0]
        });
      }
      return res;
    },
    draw() {
      let geoCoordMap = {
        // 0.055
        南京市: [118.767413, 32.041544],
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
        泰州市: [119.915176, 32.484882],
        宿迁市: [118.275162, 33.968008]
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
          formatter: res => {
            var refName = res.data.refName;
            var refData = pointData[refName]["value"];
            var str = "";
            str += refName + "<br />";
            for (var i = 0; i < 5; i++) {
              str += getMarker(i);
              str += item[i] + ": " + refData[i];
              str += "<br />";
            }
            return str;
          }
        },
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
          viewControl: {
            center: [15, -18, 0],
            distance: 95
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
                fontSize: 3
              }
            },
            itemStyle: {
              color: "rgba(0,0,0,0.3)"
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
          }
        },
        series: [
          {
            name: "",
            type: "bar3D",
            coordinateSystem: "geo3D",
            barSize: 1, //柱子粗细
            shading: "lambert",
            opacity: 1,
            bevelSize: 0.3,
            label: {
              show: false,
              formatter: res => {
                return res.value[2];
              }
            },
            emphasis: {
              label: false
            },
            data: this.resData(pointData)
          }
        ]
      };
      console.log(option.series[0].data);
      var echart1 = (window.BusinessAnalysis_myChart = this.$echarts.init(
        this.$refs.echart1
      ));
      echart1.setOption(option);
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
.components-item-body-content-echart {
  height: 100%;
}
</style>
