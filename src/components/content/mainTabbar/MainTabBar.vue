<script>

import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabBarItem from "@/components/common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {TabBarItem, TabBar}
}
</script>

<template>
  <tab-bar>
    <TabBarItem path="/home">
      <img src="~assets/img/tabbar/home.svg" slot="item-icon" alt="">
      <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <img src="~assets/img/tabbar/category.svg" slot="item-icon" alt="">
      <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart">
      <img src="~assets/img/tabbar/cart.svg" slot="item-icon" alt="">
      <img src="~assets/img/tabbar/cart_active.svg" slot="item-icon-active" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile">
      <img src="~assets/img/tabbar/profile.svg" slot="item-icon" alt="">
      <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </tab-bar>
</template>

<style scoped>

</style>
