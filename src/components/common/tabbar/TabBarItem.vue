<script>
export default {
  name: "TabBarItem",
  props: {
      path: String,
    activeColor:{
        type:String,
        default:'red'
      }
},
  data(){
    return {

    }
  },
  methods:{
    itemClick: function (){
        console.log(this.path+"clicked!");
        this.$router.replace(this.path).catch(err => {
          console.log(err);});//重复点击会报错，捕捉到异常后抛出
    }
  },
  computed:{
    isActive:{ //在computed中只通过get获取参数值，没有set无法改变参数值
      get() {
        console.log(this.$route.path);
        return this.$route.path.indexOf(this.path) !== -1;
      },
      set(){

      }
    },
    activeStyle (){
      return this.isActive?{color:this.activeColor}:{}; //v-bind绑定时比较复杂时，可以抽到计算属性compute中
    }
  }
}
</script>

<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="item-icon"><slot name="item-icon"></slot></div>
    <div v-else class="item-icon-active"><slot name="item-icon-active"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<style scoped>
.tab-bar-item {
  flex: 1;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}
.item-icon,.item-icon-active,.item-text {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
