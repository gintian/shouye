<template>
  <div>
    <div class="header">当日全网业务量实时分析</div>
    <div class="content">

    </div>
  </div>
</template>
<script>
export default {
  name: "BussinessAnalysis"
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
  background: url("../assets/cardheader.png") no-repeat;
  background-size: 100% 100%;
}

.content {
  min-height: 300px;
  background: rgba($color: #000000, $alpha: 0.09);
}
</style>