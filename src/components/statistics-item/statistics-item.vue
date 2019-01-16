<template>
  <div class="statistics">
    <div class="statistics-img">
      <img
        src="~@/assets/serviceinterface.png"
        alt=""
      >
    </div>
    <div class="statistics-content">
      <p>服务接口(个)</p>
      <span>
        <count-to :count="276"></count-to>
      </span>
    </div>
  </div>
</template>

<script>
import CountTo from "../count-to/count-to";
export default {
  name: "StatisticsItem",
  components: {
    CountTo
  }
};
</script>

<style lang="scss" scoped>
.statistics {
  display: inline-block;

  &-img {
    display: inline-block;
    padding: 12px;
    vertical-align: middle;

    img {
      display: block;
      width: 36px;
      height: 36px;
    }
  }

  &-content {
    display: inline-block;
    vertical-align: middle;
    width: 100px;
    overflow: hidden;

    p {
      font-size: 14px;
    }

    span {
      font-size: 30px;
      text-shadow: 0px 0px 5px #3ba9c4, 0px 0px 7px #3ba9c4;
    }
  }
}
</style>
