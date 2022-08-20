<template>
  <div class="container">
    <div class="cell">
      <div class="c1"><img :src="item.cm" alt="" /></div>
      <div class="c2">
        <div class="c2_1">
          <span @click="city">{{ item.ctitle }}</span>
        </div>
        <div class="c2_2">
          <span>{{ item.cname }}</span>
          <span>{{ item.cview }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    city() {
      // console.log(this.item.cid);
      this.$router.push(`/citypro?cid=${this.item.cid}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 275px;
  height: 300px;
  .cell {
    border: 1px solid #ddd;
    width: 275px;
    height: 300px;
    transition-duration: 0.5s;
    user-select: none;
    .c1 {
      width: 275px;
      height: 195px;
      table-layout: fixed;
      word-wrap: break-word;
      overflow: hidden;
      > img {
        width: 100%;
        height: 100%;
        transition: all 1.2s ease;
      }
    }
    .c2 {
      margin-top: 20px;
      width: 237px;
      height: 104px;
      padding: 0 18px 0 18px;

      .c2_1 {
        font-size: 14px;
        color: #323232;
      }
      .c2_2 {
        margin-top: 20px;
        color: #959595;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

.cell:hover {
  box-shadow: #ccc 0px 10px 10px;
  cursor: pointer;
}
.cell:hover img {
  transform: scale(1.1);
}
.c2:hover > .c2_1 > span {
  color: #5ac87b;
}
</style>
