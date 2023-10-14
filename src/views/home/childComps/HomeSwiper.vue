<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper.vue";
import SwiperItem from "@/components/common/swiper/SwiperItem.vue";

export default {
  name: "HomeSwiper",
  components: {
    SwiperItem,
    Swiper
  },
  props:{
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>

</style>