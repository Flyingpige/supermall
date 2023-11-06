<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <my-scroll class="content" ref="myScroll">
      <home-swiper :banner="this.banner"></home-swiper>
      <recommend-view :recommends="this.recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-con" :titles="['流行','新款','精选']" @tabItemClick="itemClicked"></tab-control>
      <goods-list :goods=showGoods></goods-list>
    </my-scroll>
    <back-top class="back-top" @click.native="backClick"/>
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
import GoodsList from "@/components/content/goods/GoodsList.vue";
import myScroll from "@/components/common/scroll/myScroll.vue";
import BackTop from "@/components/content/backTop/BackTop.vue";

import {getHomeMultiData,getHomeGoods} from "@/network/home";
import backTop from "@/components/content/backTop/BackTop.vue";

export default {
  name: "Home",
  components:{
    GoodsList,
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    MainTabBar,
    myScroll,
    BackTop
  },
  data(){
    return{
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]},
      },
      currentType:'pop'
    }
  },
  created() {
    /*当组件创建的时候就发送网络请求获取数据*/
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('sell')
    this.getHomeGoods('new')

  },
  /**
   * 我就是喜欢解耦
   */
  computed:{
    backTop() {
      return backTop
    },
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  mounted() {

  },
  methods:{
    /**
     * 事件点击相关方法
     */
    itemClicked(index){
      console.log(index)
      switch (index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }
    },
    backClick(){
      console.log('clicked');
      console.log(this.$refs.myScroll.scroll);
      this.$refs.myScroll.scroll.scrollTo(0,0,500)
    },
    /**
       * 网络请求相关方法
       */

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
   height: 100vh;
  /*加上这句话反而导致tab-con的sticky失效*/
   position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
    position: sticky;
    top: 0;
  }
  .tab-con{
    z-index: 0;
    //position: sticky;
    top: 44px;
  }
  /*
  .content {
    position: absolute;
    //overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .content {
    height: calc(100% - 44px - 49px);
    //z-index: 1;
    //overflow: hidden;

  }
  */
  .back-top{

  }

</style>
