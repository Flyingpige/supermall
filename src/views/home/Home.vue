<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banner="this.banner"></home-swiper>
      <recommend-view :recommends="this.recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-con" :titles="['流行','新款','精选']"></tab-control>
    <ul>
      <li>abc1</li>
      <li>abc2</li>
      <li>abc3</li>
      <li>abc4</li>
      <li>abc5</li>
      <li>abc6</li>
      <li>abc7</li>
      <li>abc8</li>
      <li>abc9</li>
      <li>abc10</li>
      <li>abc1</li>
      <li>abc2</li>
      <li>abc3</li>
      <li>abc4</li>
      <li>abc5</li>
      <li>abc6</li>
      <li>abc7</li>
      <li>abc8</li>
      <li>abc9</li>
      <li>abc10</li>
      <li>abc1</li>
      <li>abc2</li>
      <li>abc3</li>
      <li>abc4</li>
      <li>abc5</li>
      <li>abc6</li>
      <li>abc7</li>
      <li>abc8</li>
      <li>abc9</li>
      <li>abc10</li>
      <li>abc1</li>
      <li>abc2</li>
      <li>abc3</li>
      <li>abc4</li>
      <li>abc5</li>
      <li>abc6</li>
      <li>abc7</li>
      <li>abc8</li>
      <li>abc9</li>
      <li>abc10</li>
    </ul>
<!--         <main-tab-bar class="main-tab-bar"></main-tab-bar>-->
  </div>
</template>
<script>
/* eslint-disable*/

import NavBar from "@/components/common/navbar/NavBar.vue";
import HomeSwiper from "@/views/home/childComps/HomeSwiper.vue";
import RecommendView from "@/views/home/childComps/RecommendView.vue";
import FeatureView from "@/views/home/childComps/FeatureView.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import MainTabBar from "@/components/content/mainTabbar/MainTabBar.vue";

import {getHomeMultiData,getHomeGoods} from "@/network/home";

export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    MainTabBar
  },
  data(){
    return{
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]},
      }
    }
  },
  created() {
    /*当组件创建的时候就发送网络请求获取数据*/
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('sell')
    this.getHomeGoods('new')

  },
  methods:{
    getHomeMultiData(){
      getHomeMultiData().then(res=>{
        // console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        // console.log(this.banner);
        // console.log(this.recommend);
      })
    },

    getHomeGoods(type){
      const page =  this.goods[type].page +1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        console.log(this.goods[type].list)
      })
    }
  }
}
</script>
<style scoped>
  #home{
   /*height: 100vh;
  加上这句话反而导致tab-con的sticky失效*/
   position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    z-index: 1;
    position: sticky;
    top: 0;
  }
  .tab-con{
    z-index: 0;
    position: sticky;
    top: 44px;
  }

</style>
