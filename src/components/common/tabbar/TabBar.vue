<script>
// import TabBarItem from "./TabBarItem.vue";
  export default {
    name:'TabBar',
  }
</script>

<template>
  <div id="tab-tar">
    <slot></slot>
  </div>
</template>

<style scoped>
#tab-tar{
  display:flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -3px 1px rgba(100,100,100,.1);
}

</style>
