<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import  ObserveDom from '@better-scroll/observe-dom'
BScroll.use(ObserveDom)
export default {
  name: "myScroll",
  props: {
    //probe侦测，0，1都是不侦测实时位置
    //2:在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
    //3：只要是滚动，都侦测
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    // 1.创建BScroll对象
    //通过document.querySelector('wrapper')来获取wrapper不是特别好，因为如果有其他的标签设置wrapper,通过这个来获取的就不知道是哪一个了
    this.scroll = new BScroll(this.$refs.wrapper, {
      //这个click是一个布尔类型，默认值为false，作用是：better-scroll默认会阻止浏览器的原生click事件。
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      ObserveDom:true,
      tap:true,
    })

    // 2.监听滚动的位置
    this.scroll.on('scroll', (position) => {
      // console.log(position);
      this.$emit('scroll', position)
    })

    // 3.监听上拉事件（发送网络请求，请求更多页的数据）
    // this.scroll.on('pullingUp', () => {
    //   //pullUpLoad默认false，这个配置用于做上拉加载功能
    //   this.$emit('pullingUp')
    // })
  },
  methods: {
    scrollTo(x, y, time=100) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    },
    // scrollTo(x, y, time=300) {
    //   console.log(x,y)
    //   this.scroll.scrollTo(x, y, time)
    // },
    finishPullUp() {
      // 等数据请求完成，并且将新的数据展示出来以后
      this.scroll.finishPullUp()
    },
    getscrollY(){
      return this.scroll?this.scroll:0
    }
  }
}
</script>

<style scoped>

</style>

