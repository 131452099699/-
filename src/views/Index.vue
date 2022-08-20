<template>
  <div>
    <!-- 轮播图 -->
    <swiper
      class="swiper-container"
      ref="swiper"
      @mouseover.native="stopSwiper"
      @mouseout.native="startSwiper"
      :options="swiperOption"
    >
      <swiper-slide>
        <img class="img" src="../assets/img/index5.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="img" src="../assets/img/index1.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="img" src="../assets/img/index2.webp" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="img" src="../assets/img/index9.png" alt="" />
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!-- 搜索框 -->
      <div class="search">
        <div class="s">
          <input
            v-model="kw"
            class="inp"
            type="text"
            placeholder="搜索目的地/主题攻略"
          />
          <el-button icon="el-icon-search" @click="getSelectData"
            >搜索攻略</el-button
          >
        </div>
      </div>
    </swiper>
    <!-- 中间广告图 -->
    <div class="middle-container">
      <div class="m">
        <div class="m1"><img src="../assets/img/m1.png" alt="" /></div>
        <div class="m2"><img src="../assets/img/m2.png" alt="" /></div>
      </div>
    </div>
    <!-- 城市 -->
    <h2 class="title">城市推荐</h2>
    <div class="city">
      <my-city v-for="x in data1.data" :key="x.cid" :item="x"></my-city>
    </div>
    <!-- 酒店 -->
    <div class="hotel">
      <h2 class="title1">酒店推荐</h2>
      <div class="h1">
        <my-hotel v-for="n in data2.data" :key="n.hid" :item1="n"></my-hotel>
      </div>
    </div>
  </div>
</template>

<script>
import MyCity from "@/components/MyCity.vue";
import MyHotel from "@/components/MyHotel.vue";
export default {
  components: { MyCity, MyHotel },
  data() {
    return {
      kw: "",
      data1: {},
      data2: {},
      // 轮播图配置项
      swiperOption: {
        // 特效:cube方块 fade淡入 slide位移 coverflow flip cards
        effect: "fade",
        loop: true, //无限循环
        // autoplay: true, //开启自动切换
        autoplay: {
          // 利用对象类型,可以详细配置自动滚动
          delay: 3000, //滚动间隔时长，单位是毫秒  1000毫秒=1s
          //   用户操作后是否禁用自动滚动:  假,代表不禁用
          disableOnInteraction: false,
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  mounted() {
    this.getData();
    this.getData1();
  },
  methods: {
    stopSwiper() {
      this.$refs.swiper.$swiper.autoplay.stop();
    },
    startSwiper() {
      // alert("鼠标离开");
      this.$refs.swiper.$swiper.autoplay.start();
    },
    // 城市数据
    getData() {
      var url = "v1/cities/city";
      this.axios.get(url).then((res) => {
        console.log("城市数据", res);
        this.data1 = res.data;
      });
    },
    // 酒店数据
    getData1() {
      var url = `v1/hotels/hotel`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data2 = res.data;
      });
    },
    // 根据城市名字查询
    getSelectData() {
      var url = `v1/cities/select?ctitle2=${this.kw}`;
      this.axios.get(url).then((res) => {
        // console.log("aaa", res);
        this.$router.push(
          `/citypro?cid=${res.data.data[0].cid}&ctitle2=${this.kw}`
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
//酒店组件
.title1 {
  height: 74px;
  color: #636363;
  text-align: center;
  font: 36px/74px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
}
.hotel {
  background: linear-gradient(180deg, #6dd27c, #1bcdae);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .h1 {
    width: 1160px;
    height: 504px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
// 城市组件
.title {
  margin-top: 20px;
  color: #636363;
  text-align: center;
  font: 36px/74px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
}
.city {
  margin-top: 15px;
  width: 1160px;
  height: 724px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
}

// 轮播图
.swiper-container {
  position: relative;
}
.img {
  height: 421px;
}
.swiper-button-prev {
  color: rgba($color: #fff, $alpha: 0.7);
  size: 100px;
}
.swiper-button-next {
  color: rgba($color: #fff, $alpha: 0.7);
  size: 100px;
}

// 搜索框
.search {
  display: flex;
  position: absolute;
  left: 26.5%;
  top: 65%;
  border-radius: 10px;
  overflow: hidden;
  z-index: 999;
  .s {
    .inp {
      font-size: 16px;
      width: 442px;
      height: 44px;
      border-radius: 5px;
      border: #fff;
      text-indent: 1.2em;
      &.inp:focus {
        outline: none;
      }
    }
    .el-button {
      height: 44px;
      background-color: transparent;
      color: #fff;
      margin-left: 10px;
      border: 2px solid #fff;
      text-align: center;
      padding: 12px 14px;
    }
  }
  div {
    background-image: linear-gradient(
      90deg,
      rgba(71, 231, 173, 0.8),
      rgba(21, 219, 145, 0.8)
    );
    padding: 14px;
  }
}

// 中间的广告图
.middle-container {
  background-color: #f5f5f5;
  padding: 25px 0 25px 0;
  .m {
    width: 1160px;
    height: 110px;
    display: flex;
    margin: 0 auto;
    .m1 {
      width: 740px;
      height: 110px;
      > img {
        width: 100%;
      }
    }
    .m2 {
      width: 400px;
      height: 110px;
      > img {
        width: 100%;
      }
    }
  }
}
</style>
