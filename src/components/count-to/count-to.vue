<template>
  <span class="number">{{newCount}}</span>
</template>

<script>
export default {
  name: "CountTo",
  props: {
    count: Number
  },
  data() {
    return {
      newCount: 0
    };
  },
  methods: {
    countTo(newCount, count) {
      if (newCount == count) return;
      const step = Math.ceil((newCount - count) / (1500 / 50));
      let timer = setInterval(() => {
        count += step;
        if (
          (step > 0 && count >= newCount) ||
          (step < 0 && count <= newCount) ||
          step == 0
        ) {
          count = newCount;
          clearInterval(timer);
        }
        this.newCount = count;
      }, 25);
    }
  },
  watch: {
    count(count) {
      this.countTo(count, this.newCount);
    }
  },
  created() {
    this.countTo(this.count, this.newCount);
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: myFont;
  src: url("~@/styles/font/font.TTF");
}
.number {
  font-family: "myFont";
}
</style>
