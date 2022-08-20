<template>
  <div v-if="data">
    <!-- 头 -->
    <div class="h_img">
      <img :src="data[$route.query.cid - 1].cbm1" alt="" />
    </div>
    <div class="header">
      <div class="h_view">
        <div class="text">
          <h1>{{ data.ctitle1 }}</h1>
        </div>
        <div class="h_dt">
          <img :src="data[$route.query.cid - 1].cm1" alt="" />
          <span>{{ data[$route.query.cid - 1].cdetail1 }}</span>
        </div>
      </div>
    </div>
    <!-- 出行列表 -->
    <div class="travel">
      <ul class="t1">
        <div class="day">
          <div class="d"></div>
          <li>出行天数 <span class="t11">/</span>5天</li>
        </div>
        <div class="people">
          <div class="p"></div>
          <li>人物 <span class="t11">/</span>和朋友、家人</li>
        </div>
        <div class="cost">
          <div class="c"></div>
          <li>人均费用<span class="t11">/</span>5000RMB</li>
        </div>
      </ul>
    </div>
    <!-- 城市简介 -->
    <div class="detail">
      <h1 class="d_title">{{ data[$route.query.cid - 1].ctitle2 }}</h1>
      <div class="d">
        <div class="d1">
          <span>
            {{ data[$route.query.cid - 1].cdetail2_1 }}
          </span>
        </div>
        <div class="d2">
          <span>
            {{ data[$route.query.cid - 1].cdetail2_2 }}
          </span>
        </div>
        <div class="d3">
          <span>
            {{ data[$route.query.cid - 1].cdetail2_3 }}
          </span>
        </div>
      </div>
    </div>
    <!-- 旅游景区板块 -->
    <div class="jzz">
      <h2>{{ data[$route.query.cid - 1].ctitle3 }}</h2>
      <div class="jzz_container">
        <div class="j1">
          <div class="j1_1">
            <img :src="data[$route.query.cid - 1].cm3" alt="" />
          </div>
          <div class="j1_2">
            <img :src="data[$route.query.cid - 1].cm3_1" alt="" />
            <img :src="data[$route.query.cid - 1].cm3_2" alt="" />
          </div>
        </div>
      </div>
      <div class="j2">
        <div class="j2_1">
          <p>
            {{ data[$route.query.cid - 1].cdetail3_1 }}
          </p>
          <p>
            {{ data[$route.query.cid - 1].cdetail3_2 }}
          </p>
          <p>{{ data[$route.query.cid - 1].cdetail3_3 }}</p>
          <p>
            {{ data[$route.query.cid - 1].cdetail3_4 }}
          </p>
        </div>
        <div class="j2_2">
          <div class="j2_21">
            <p>交通</p>
            <p>
              {{ data[$route.query.cid - 1].cb3_1 }}
            </p>
            <p>{{ data[$route.query.cid - 1].cb3_2 }}</p>
          </div>
          <div class="j2_21">
            <p>门票</p>
            <p>{{ data[$route.query.cid - 1].cp3 }}</p>
          </div>
          <div class="j2_21">
            <p>tips:</p>
            <p>
              {{ data[$route.query.cid - 1].ct3_1 }}
            </p>
          </div>
          <div class="j2_21">
            <p>开放时间</p>
            <p>{{ data[$route.query.cid - 1].ct3_2 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="jzz">
      <h2>{{ data[$route.query.cid - 1].ctitle4 }}</h2>
      <div class="jzz_container">
        <div class="j1">
          <div class="j1_1">
            <img :src="data[$route.query.cid - 1].cm4" alt="" />
          </div>
          <div class="j1_2">
            <img :src="data[$route.query.cid - 1].cm4_1" alt="" />
            <img :src="data[$route.query.cid - 1].cm4_2" alt="" />
          </div>
        </div>
      </div>
      <div class="j2">
        <div class="j2_1">
          <p>
            {{ data[$route.query.cid - 1].cdetail4_1 }}
          </p>
          <p>
            {{ data[$route.query.cid - 1].cdetail4_2 }}
          </p>
          <p>
            {{ data[$route.query.cid - 1].cdetail4_3 }}
          </p>
          <p>{{ data[$route.query.cid - 1].cdetail4_4 }}</p>
        </div>
        <div class="j2_2">
          <div class="j2_21">
            <p>交通</p>
            <p>{{ data[$route.query.cid - 1].cb4_1 }}</p>
            <p>{{ data[$route.query.cid - 1].cb4_2 }}</p>
          </div>
          <div class="j2_21">
            <p>门票</p>
            <p>{{ data[$route.query.cid - 1].cp4 }}</p>
          </div>
          <div class="j2_21">
            <p>tips:</p>
            <p>{{ data[$route.query.cid - 1].ct4_1 }}</p>
          </div>
          <div class="j2_21">
            <p>开放时间</p>
            <p>
              {{ data[$route.query.cid - 1].ct4_2 }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="jzz">
      <h2>{{ data[$route.query.cid - 1].ctitle5 }}</h2>
      <div class="jzz_container">
        <div class="j1">
          <div class="j1_1">
            <img :src="data[$route.query.cid - 1].cm5" alt="" />
          </div>
          <div class="j1_2">
            <img :src="data[$route.query.cid - 1].cm5_1" alt="" />
            <img :src="data[$route.query.cid - 1].cm5_2" alt="" />
          </div>
        </div>
      </div>
      <div class="j2">
        <div class="j2_1">
          <p>
            {{ data[$route.query.cid - 1].cdetail5_1 }}
          </p>
          <p>{{ data[$route.query.cid - 1].cdetail5_2 }}</p>
          <p>
            {{ data[$route.query.cid - 1].cdetail5_3 }}
          </p>
          <p>
            {{ data[$route.query.cid - 1].cdetail5_4 }}
          </p>
        </div>
        <div class="j2_2">
          <div class="j2_21">
            <p>交通</p>
            <p>{{ data[$route.query.cid - 1].cb5_1 }}</p>
            <p>{{ data[$route.query.cid - 1].cb5_2 }}</p>
          </div>
          <div class="j2_21">
            <p>门票</p>
            <p>{{ data[$route.query.cid - 1].cp5 }}</p>
          </div>
          <div class="j2_21">
            <p>tips:</p>
            <p>{{ data[$route.query.cid - 1].ct5_1 }}</p>
          </div>
          <div class="j2_21">
            <p>开放时间</p>
            <p>
              {{ data[$route.query.cid - 1].ct5_2 }}
            </p>
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
  watch: {
    "$route.query.cid"() {
      this.getData();
    },
  },
  methods: {
    getData() {
      var url = `v1/cities/city?cid=${this.$route.query.cid}`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// 头
.h_img {
  margin: 0 auto;
  user-select: none;
  > img {
    width: 100%;
    display: block;
  }
}
.header {
  height: 81px;
  .h_view {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    .text {
      color: #fff;
      position: absolute;
      left: 231px;
      top: -68px;
      user-select: none;
    }
    .h_dt {
      height: 80px;
      border-bottom: 1px solid #d7d7d7;
      box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
      position: relative;
      z-index: 16;
      > img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        position: absolute;
        left: 70px;
        top: -84px;
      }
      > span {
        position: absolute;
        left: 200px;
        top: 19px;
        color: #ff7200;
        font-size: 14px;
        font-weight: normal;
      }
    }
  }
}
// 出行列表
.travel {
  width: 1000px;
  margin: 0 auto;
  border: 1px dashed #ddd;
  margin-top: 30px;
  margin-bottom: 30px;
  .t1 {
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-around;
    user-select: none;
    li {
      color: #666;
    }
    .day,
    .people,
    .cost {
      display: flex;
      span {
        color: #ff9d00;
        margin: 0 10px;
      }
    }
    .d,
    .p,
    .c {
      background: url("../assets/img/图标.png");
      width: 22px;
      height: 22px;
      margin-right: 15px;
    }
    .d {
      background-position: -110px -326px;
    }
    .p {
      background-position: -110px -348px;
    }
    .c {
      background-position: -110px -370px;
    }
  }
}
// 城市简介
.detail {
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 30px;
  .d_title {
    margin-bottom: 15px;
    color: rgb(100, 98, 98);
  }
  .d {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .d1,
    .d2,
    .d3 {
      width: 250px;
      height: 280px;
      border: 1px dashed #ddd;
      padding: 10px;
      color: #666;
      user-select: none;
      text-indent: 2em;
      line-height: 25px;
    }
  }
}
// 旅游板块
.jzz {
  > h2 {
    color: #646262;
    margin-left: 128px;
    margin-bottom: 10px;
  }
  .jzz_container {
    background-color: #fafafa;
    padding: 35px;
    .j1 {
      width: 1000px;
      margin: 0 auto;
      display: flex;
      .j1_1 {
        margin-right: 3px;
      }
    }
  }
  .j2 {
    width: 1000px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .j2_1 {
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 10px;
    padding: 30px 30px 30px 0;
  }
  .j2_2 {
    color: #666;
    border-bottom: 1px solid #e5e5e5;
    .j2_21 {
      margin-bottom: 15px;
      > p:first-child {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
