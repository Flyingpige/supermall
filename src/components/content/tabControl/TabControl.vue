
<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item,index) in titles" :key="index"
         :class="{active: index === currentIndex }"
         @click="itemClicked(index)"
    >
    <span>
      {{item}}
    </span>
    </div>
  </div>

</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClicked(index){
      this.currentIndex = index
      this.$emit('tabItemClick',index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  z-index: 1;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
  padding: 5px;
}
</style>