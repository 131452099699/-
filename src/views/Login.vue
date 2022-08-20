<template>
  <div class="bg">
    <div class="mg">
      <div class="dl">
        <h3>密码登录</h3>
      </div>
      <div class="lp">
        <input v-model="uname" type="text" placeholder="您的用户名" />
        <input v-model="upwd" type="password" placeholder="您的密码" />
        <span @click="login">登录</span>
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
    };
  },
  methods: {
    login() {
      var url = "v1/users/login";
      var params = `uname=${this.uname}&upwd=${this.upwd}`;
      console.log(params);
      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          this.$store.commit("updateUname", this.uname);
          this.$router.push("/");
        } else {
          alert("登录失败!");
        }
      });
    },
  },
};
</script>
<style scoped src="../assets/css/login.css"></style>
<style lang="scss" scoped></style>
