<template>
  <div class="my-hrader">
    <div class="header">
      <div class="header-nav-wrapper">
        <div class="header-logo" @click="$router.push('/')">
          <a>
            <img src="../assets/img/1.png" alt="" />
          </a>
        </div>
        <ul>
          <li><a href="">目的地</a></li>
          <li><a href="">旅游攻略</a></li>
          <li><a href="">去旅行</a></li>
          <li><a href="">定酒店</a></li>
          <li><a href="">锦囊</a></li>
          <li><a href="">行程助手</a></li>
        </ul>
      </div>
      <div class="right" v-if="$store.state.uname">
        <span
          >欢迎:{{ $store.state.uname }}
          <button
            @click="
              $store.commit('loginout');
              $router.push('/');
            "
          >
            退出
          </button></span
        >
        <span style="font-size: 20px" @click="$router.push('/collect')">♥</span>
      </div>
      <div class="right" v-else>
        <span @click="$router.push('/login')">登录</span>
        <span @click="$router.push('/register')">注册</span>
        <span style="font-size: 20px" @click="$router.push('/collect')">♥</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="../assets/css/header.css"></style>
<style lang="scss" scoped></style>
