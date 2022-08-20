<template>
  <div v-if="data">
    <div class="container">
      <div class="container1">
        <div class="left">
          <img :src="data[$route.query.hid - 1].hm1" alt="" />
          <div
            class="l1"
            @click="
              selected = !selected;
              selectId();
            "
          >
            <img src="../assets/img/收藏 (1).png" alt="" v-if="selected" />
            <img src="../assets/img/收藏.png" alt="" v-if="!selected" />
            收藏
          </div>
        </div>
        <div class="right">
          <div class="top">
            <div class="t1">
              {{ data[$route.query.hid - 1].htitle1 }}
            </div>
            <div class="t2">
              <span class="t2_1">
                <em>{{ data[$route.query.hid - 1].hprice1 }}</em>
                元起
              </span>
              <span class="t2_2">浏览 7845</span>
              <span class="t2_3">销量 8</span>
            </div>
            <div class="t3">
              <div>
                纯玩不购物无自费~
                <br />
                灵活航班
              </div>
            </div>
            <div class="t4">
              <span class="t4_1">温馨提示</span>
              <span class="t4_2">
                多程机票需按行程顺序完全使用，往返程机票无法单独使用回程</span
              >
            </div>
          </div>
          <div class="bottom">
            <div class="b1">
              <h4 class="b1_1">产品类型</h4>
              <div class="b1_2">自由行</div>
            </div>
            <div class="b">
              <div class="bb">
                <div class="b2">
                  <span class="b2_1">成人</span>
                  <span class="b2_2"
                    >￥{{ data[$route.query.hid - 1].hprice1 }}x{{
                      count
                    }}</span
                  >
                </div>
                <div class="b3">
                  <button :disabled="count == 1" class="jian" @click="count--">
                    -
                  </button>
                  <input type="text" value="1" v-model="count" />
                  <button class="jia" @click="count++">+</button>
                </div>
              </div>
              <div>
                <div class="b2">
                  <span class="b2_1">儿童</span>
                  <span class="b2_2"
                    >￥{{ data[$route.query.hid - 1].hprice1 * 0.5 }}x{{
                      count1
                    }}</span
                  >
                </div>
                <div class="b3">
                  <button
                    :disabled="count1 == 0"
                    class="jian"
                    @click="count1--"
                  >
                    -
                  </button>
                  <input type="text" value="1" v-model="count1" />
                  <button class="jia" @click="count1++">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="b4">
        <div class="b4_1">
          ￥
          <span class="b4_11">{{
            count * data[$route.query.hid - 1].hprice1 +
            count1 * data[$route.query.hid - 1].hprice1 * 0.5
          }}</span>
        </div>
        <div class="b4_2">
          <span class="b4_22">立即预定</span>
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
      count: 1,
      count1: 0,
      selected: true,
      data1: null,
    };
  },
  mounted() {
    this.getData();
    // this.getData1();
  },
  methods: {
    // 插入数据到收藏页面
    insert(a) {
      var params = `hm1=${a[0].hm1}&htitle1=${a[0].htitle1}&hprice1=${a[0].hprice}`;
      // console.log(params);
      this.axios.post("/v1/collects/collect", params).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          alert("收藏成功");
        }
      });
    },
    // 查询单条数据
    selectId() {
      var url = `/v1/collects/hotels?hid=${this.$route.query.hid}`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data1 = res.data.data;
        this.insert(res.data.data);
      });
    },
    getData() {
      var url = `/v1/hotels/hotel?hid=${this.$route.query.hid}`;
      this.axios.get(url).then((res) => {
        // console.log(res);
        this.data = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f5f5f5;
  position: relative;
  .container1 {
    width: 1160px;
    margin: 0 auto;
    padding-top: 40px;
    display: flex;
    .left {
      width: 530px;
      height: 330px;
      margin-right: 20px;
      img {
        width: 100%;
      }

      .l1 > img {
        width: 40px;
        height: 40px;
        vertical-align: bottom;
        margin-top: 10px;
      }
    }
    .right {
      padding: 20px;
      background-color: white;
      width: 590px;
      height: 572px;
      margin-bottom: 40px;
      .top {
        border-bottom: 1px dashed #aaa;
        .t1 {
          font-size: 20px;
          color: #323232;
          margin-bottom: 20px;
        }
        .t2 {
          .t2_1 {
            em {
              font-size: 32px;
              font-weight: 500;
              color: #636363;
              font-style: normal;
            }
          }
          .t2_2 {
            font-size: 14px;
            color: #bbb;
            margin-left: 30px;
          }
          .t2_3 {
            font-size: 14px;
            color: #bbb;
            margin-left: 25px;
          }
        }
        .t3 {
          margin-top: 15px;
          background: #f0faf7;
          padding: 10px 20px;
          color: #636363;
          div {
            line-height: 20px;
            font-size: 12px;
          }
        }
        .t4 {
          margin-top: 15px;
          margin-bottom: 30px;
          .t4_1 {
            font-size: 12px;
            font-weight: 600;
            color: #636363;
            margin-right: 10px;
          }
          .t4_2 {
            font-size: 12px;
            color: #636363;
          }
        }
      }
      .bottom {
        .b1 {
          .b1_1 {
            margin-top: 10px;
            color: #636363;
            margin-right: 20px;
          }
          .b1_2 {
            width: 50px;
            margin-top: 20px;
            border: 2px solid #ff7466;
            box-shadow: 0 8px 10px rgb(255 116 102 / 12%);
            color: #ff7466;
            line-height: 40px;
            padding: 0 24px;
          }
        }
        .b {
          display: flex;
          .bb {
            margin-right: 80px;
          }
        }
        .b2 {
          font-size: 14px;
          line-height: 30px;
          font-weight: 700;
          color: #636363;
          margin-top: 30px;
          margin-bottom: 10px;
          .b2_2 {
            margin-left: 18px;
            color: #ff7466;
            font-size: 12px;
          }
          .b2_3 {
            margin-left: 20px;
          }
          .b2_4 {
            margin-left: 18px;
            color: #ff7466;
            font-size: 12px;
          }
        }
        .b3 {
          user-select: none;
          .jian {
            width: 30px;
            height: 30px;
            text-align: center;
            display: inline-block;
            line-height: 30px;
            color: #a2a2a2;
            cursor: pointer;
            background-color: #f5f5f5;
            border: 1px solid #f5f5f5;
          }
          .jia {
            width: 30px;
            height: 30px;
            text-align: center;
            display: inline-block;
            line-height: 30px;
            color: #a2a2a2;
            cursor: pointer;
            background-color: #f5f5f5;
            border: 1px solid #f5f5f5;
          }
          input {
            font-size: 14px;
            color: #323232;
            width: 40px;
            height: 30px;
            border: none;
            vertical-align: middle;
            text-align: center;
            padding: 0;
            margin: 0;
          }
        }
      }
    }
  }
  .b4 {
    height: 60px;
    background-color: #fafafa;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 52px;
    bottom: 40px;
    width: 621px;
    .b4_1 {
      color: #ff7466;
      .b4_11 {
        font-size: 24px;
        color: #ff7466;
      }
    }
    .b4_2 {
      display: inline-block;
      width: 160px;
      height: 60px;
      line-height: 60px;
      border: none;
      border-radius: 0;
      text-decoration: none;
      font-size: 24px;
      color: #fff;
      cursor: pointer;
      text-align: center;
      background: #ff7466;
    }
  }
}
</style>
