<template>
  <div class="wrapper">
    <ul class="content">
      <li>1分类列表</li>
      <li>2分类列表</li>
      <li>3分类列表</li>
      <li>4分类列表</li>
      <li>5分类列表</li>
      <li>1分类列表</li>
      <li>2分类列表</li>
      <li>3分类列表</li>
      <li>4分类列表</li>
      <li>5分类列表</li>
      <li>1分类列表</li>
      <li>2分类列表</li>
      <li>3分类列表</li>
      <li>4分类列表</li>
      <li>5分类列表</li>
      <li>1分类列表</li>
      <li>2分类列表</li>
      <li>3分类列表</li>
      <li>4分类列表</li>
      <li>5分类列表</li>
      <li>1分类列表</li>
      <li>2分类列表</li>
      <li>3分类列表</li>
      <li>4分类列表</li>
      <li>5分类列表</li>
      <li>1分类列表</li>
      <li>2分类列表</li>
      <li>3分类列表</li>
      <li>4分类列表</li>
      <li>5分类列表</li>
      <li>1分类列表</li>
      <li>2分类列表</li>
      <li>3分类列表</li>
      <li>4分类列表</li>
      <li>5分类列表</li>
      <li>1分类列表</li>
      <li>2分类列表</li>
      <li>3分类列表</li>
      <li>4分类列表</li>
      <li>5分类列表</li>
      <li>1分类列表</li>
      <li>2分类列表</li>
      <li>3分类列表</li>
      <li>4分类列表</li>
      <li>5分类列表</li>
      <li>1分类列表</li>
      <li>2分类列表</li>
      <li>3分类列表</li>
      <li>4分类列表</li>
      <li>5分类列表</li>
      <li>1分类列表</li>
      <li>2分类列表</li>
      <li>3分类列表</li>
      <li>4分类列表</li>
      <li>5分类列表</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
   name:"category",
   mounted () {
     new BScroll ('.wrapper',{

     })
   }
  }
</script>
<style scoped>
  .wrapper{
    height: 200px;
    background-color:aqua;
    overflow: hidden;
  }
</style>
