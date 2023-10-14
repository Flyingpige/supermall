<template>
  <div>
    <div id="home">
      <nav-bar><div slot="center">购物街</div></nav-bar>
    </div>
    <div>
      <home-swiper :banner="this.banner"></home-swiper>
    </div>
    <div>
      <recommend-view :recommends="this.recommend"></recommend-view>
    </div>
  </div>
</template>
<script>
/* eslint-disable*/

import NavBar from "@/components/common/navbar/NavBar.vue";
import {getHomeMultiData} from "@/network/home";
import HomeSwiper from "@/views/home/childComps/HomeSwiper.vue";
import RecommendView from "@/views/home/childComps/RecommendView.vue";
export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data(){
    return{
      banner:[],
      recommend:[],
    }
  },
  created() {
    /*当组件创建的时候就发送网络请求获取数据*/
    getHomeMultiData().then(res=>{
      console.log(res);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      console.log(this.banner);
      console.log(this.recommend);
    })
  }
}
</script>
<style scoped>
  #home{
    background-color: var(--color-tint);
    color: #f6f6f6;
  }
</style>
