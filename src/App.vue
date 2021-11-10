<template>
  <div>
    <Header />
    <!-- 加载当前路由组件 -->
    <router-view></router-view>
    <!-- 当不是登录和注册时就显示 -->
    <!-- <Footer v-if="$route.path !== '/login' && $route.path !== '/register'" /> -->
    <Footer v-if="!$route.meta.isFooterHide" />
  </div>
</template>

<script>
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style lang="css" scoped>
</style>
