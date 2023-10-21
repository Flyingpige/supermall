<script>
// import TabBarItem from "./TabBarItem.vue";
  export default {
    name:'TabBar',
  }
</script>

<template>
  <div class="tab-tar">
    <slot></slot>
  </div>
</template>

<style scoped>
.tab-tar{
  background-color: #f6f6f6;
  height: 49px;
  border-top: 1px solid #eee;
  box-shadow: 0 -1px 1px rgba(150,150,150, .8);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  text-align: center;
  z-index: 1;
}

</style>
