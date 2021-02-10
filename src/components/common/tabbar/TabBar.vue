<template>
   <div id="tab-bar">
     <slot></slot>
    </div>
</template>

<script>
  export default {
    name:"TabBar"
  }
</script>
<style scoped>
  #tab-bar{background-color: #f6f6f6; display: flex; position: fixed; left: 0; right: 0; bottom: 0;
    box-shadow: 1px -1px 1px rgba(100, 100, 100, .18);}
</style>
