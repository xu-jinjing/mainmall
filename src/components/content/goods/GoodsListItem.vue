<template>
  <div class="goods-item">
    <a href=""><img :src="goodsItem.show.img" alt="" @load="imageLoad"></a>
    <div class="goods-info">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
    <span class="collect">{{goodsItem.cfav}}</span>
  </div>
  </div>

</template>

<script>

  export default {
    name:"GoodsListItem",
    components: {
    },
    props: {
      goodsItem: {
        type: Object,
        default(){
        return {}
      }
      }

    },
    methods: {
      imageLoad(){
        this.$bus.$emit('itemImageLoad')
      }
    }
  }
</script>
<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 45%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;

  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-height-text);
    margin-right:20px ;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/detail/collect.png");

  }
</style>
