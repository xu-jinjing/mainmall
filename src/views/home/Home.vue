<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="[ '流行','精选', '样式']" class="tab-control"></tab-control>
      <ul>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
        <li>列表11</li>
        <li>列表12</li>
        <li>列表13</li>
        <li>列表14</li>
        <li>列表15</li>
        <li>列表16</li>
        <li>列表17</li>
        <li>列表18</li>
        <li>列表18</li>
        <li>列表18</li>
        <li>列表18</li>
        <li>列表18</li>
        <li>列表18</li>
        <li>列表18</li>
        <li>列表18</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表20</li>
      </ul>
    </div>
</template>

<script>

import HomeSwiper from './childrenComponents/HomeSwiper'
import RecommendView from './childrenComponents/RecommendView'
import FeatureView from './childrenComponents/FeatureView'

import NavBar from '@/components/common/navbar/NavBar'

import TabControl from '@/components/content/tabControl/TabControl'

import {getHomeMultidata,getHomeGoods} from '@/network/home.js'
// import Swiper from '@/components/common/swiper/Swiper'
// import SwiperItem from '@/components/common/swiper/SwiperItem'


  export default {
   name:"Home",
   components: {

     HomeSwiper,
     RecommendView,
     FeatureView,
     NavBar,
     TabControl,

   },
   data () {
     return {
       banners: [],
       recommends:[],
       goods:{
         'pop': {page: 0,list: []},
         'new': {page: 0,list: []},
         'sell': {page: 0,list: []}
       }
     }
   },
   created () {
      //1.请求多个数据
      this.getHomeMultidata()
      //2.请求商品数据
     this.getHomeGoods('pop')
     this.getHomeGoods('new')
     this.getHomeGoods('sell')
   },
   methods: {
     //1.请求多个数据
     getHomeMultidata(){

     getHomeMultidata().then(res => {
      //  this.result=res
      this.banners = res.data.data.banner.list;
      this.recommends= res.data.data.recommend.list;
     })
     },

    //2.请求商品数据
     getHomeGoods(type){
       const page = this.goods[type].page + 1
       getHomeGoods(type,page).then(res => {
         this.goods[type].list.push(...res.data.data.list)
         this.goods[type].page +=1
      //  console.log(res.data.data.list);
     })
     }
   }
  }
</script>
<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
  }

  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
