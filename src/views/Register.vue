<template>
  <div class="bg">
    <div class="mg">
      <div class="dl">
        <h3>用户注册</h3>
      </div>
      <div class="lp">
        <input v-model="uname" type="text" placeholder="您的用户名" />
        <input v-model="phone" type="text" placeholder="您的手机号" />
        <input v-model="upwd" type="passward" placeholder="您的密码" />
        <span @click="register">注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      phone: "",
    };
  },
  methods: {
    register() {
      var url = "v1/users/reg";
      var params = `uname=${this.uname}&phone=${this.phone}&upwd=${this.upwd}`;
      console.log(params);
      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          alert("注册成功");
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>
<style scoped src="../assets/css/register.css"></style>
<style lang="scss" scoped></style>
