<template>
  <div>
    <!--头  -->
    <my-header v-show="!$route.meta.hideHeader"></my-header>
    <!-- 身体 -->
    <router-view></router-view>
    <!-- 脚 -->
    <my-footer v-show="!$route.meta.hideFooter"></my-footer>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
export default {
  components: { MyHeader, MyFooter },
};
import "./assets/css/base.css";
import MyFooter from "./components/MyFooter.vue";
</script>

<style lang="scss" scoped></style>
