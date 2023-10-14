<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in recommends"  :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
        <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eeee;
  }
  .recommend-item {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .recommend-item img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>