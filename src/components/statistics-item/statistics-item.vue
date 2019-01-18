<template>
  <div class="statistics">
    <div class="statistics-img">
      <slot name="img"></slot>
    </div>
    <div class="statistics-content">
      <p>
        <slot name="label"></slot>
      </p>
      <span>
        <slot name="number"></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsItem"
};
</script>

<style lang="scss" scoped>
.statistics {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;

  &-img {
    display: inline-block;
    vertical-align: middle;
    width: 60px;
    height: 60px;
    padding: 12px;

    img {
      display: block;
      width: 35px;
      height: 35px;
    }
  }

  &-content {
    flex: 1;
    flex-basis: auto;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

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
