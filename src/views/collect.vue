<template>
  <div class="container1" v-if="data">
    <div class="container">
      <div class="c">我收藏的商品</div>
      <div class="c1" v-for="(x, index) in data" :key="index">
        <div class="c2"><img :src="x.hm1" alt="" /></div>
        <div class="c3">
          <div class="c31">
            {{ x.htitle1 }}
          </div>
          <div class="c32">
            <span class="c32_1">￥{{ x.hprice1 }}</span>
            <span class="c32_2" @click="delete1(x.h1id, index)">取消收藏</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 取消收藏
    delete1(h1id, index) {
      var url = `/v1/collects/${h1id}`;
      this.axios.delete(url).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          alert("删除成功");
          // 更新页面 从页面中删除
          this.data.splice(index, 1);
        }
      });
    },
    getData() {
      var url = "/v1/collects/collects";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1160px;
  margin: 0 auto;
  margin-bottom: 100px;
  .c {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .c1 {
    width: 880px;
    height: 152px;
    display: flex;
    border: 1px solid #ddd;
    .c2 {
      width: 340px;
      height: 152px;
      img {
        width: 100%;
      }
    }
    .c3 {
      padding: 10px;
      margin-left: 10px;
      .c31 {
        font-size: 18px;
        margin-bottom: 30px;
      }
      .c32 {
        .c32_1 {
          font-size: 30px;
          color: #ff7362;
        }
        .c32_2 {
          display: inline-block;
          margin-left: 420px;
        }
      }
    }
  }
}
.c1:hover {
  box-shadow: #ccc 0px 10px 10px;
  cursor: pointer;
}
.c32_2:hover {
  color: blue;
}
.c31:hover {
  color: #00b081;
}
</style>
