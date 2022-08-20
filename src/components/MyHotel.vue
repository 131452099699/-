<template>
  <div class="cell">
    <div class="c1"><img :src="item1.hm" alt="" /></div>
    <div class="c2">
      <div class="c2_1" @click="hotel">
        {{ item1.htitle }}
      </div>
      <div class="c2_2">{{ item1.hfiy }}</div>
      <div class="c2_3">￥{{ item1.hprice }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item1"],
  methods: {
    hotel() {
      console.log(this.item1.hid);
      this.$router.push(`/hotelpro?hid=${this.item1.hid}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  width: 375px;
  height: 160px;
  display: flex;
  user-select: none;
  cursor: pointer;
  .c1 {
    width: 160px;
    height: 160px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .c2 {
    width: 186px;
    height: 130px;
    padding: 15px;
    background-color: #fff;
    .c2_1 {
      width: 185px;
      height: 52px;
      display: -webkit-box;
      max-height: 52px;
      font-size: 16px;
      color: #000;
      font-weight: 700;
      line-height: 26px;
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .c2_2 {
      display: inline-block;
      padding: 0 6px;
      box-sizing: border-box;
      border-radius: 2px;
      font-size: 14px;
      line-height: 18px;
      height: 20px;
      border: 1px solid #4a90e2;
      color: #4a90e2;
      margin-top: 8px;
    }
    .c2_3 {
      font-size: 24px;
      font-weight: 400;
      color: #ff7362;
      margin-left: 53px;
      margin-top: 25px;
    }
  }
}
</style>
