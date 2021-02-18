<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="[ '流行','精选', '样式']" class="tab-control" @tabClick="tabClick"></tab-control>
      <good-list :goods="showGoods"></good-list>

    </div>
</template>

<script>

import HomeSwiper from './childrenComponents/HomeSwiper'
import RecommendView from './childrenComponents/RecommendView'
import FeatureView from './childrenComponents/FeatureView'

import NavBar from '@/components/common/navbar/NavBar'

import TabControl from '@/components/content/tabControl/TabControl'
import GoodList from '@/components/content/goods/GoodsList'

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
     GoodList

   },
   data () {
     return {
       banners: [],
       recommends:[],
       goods:{
         'pop': {page: 0,list: []},
         'new': {page: 0,list: []},
         'sell': {page: 0,list: []}
       },
       currentType:'pop'
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
    //  事件监听相关方法
      tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },


    //  网络请求相关方法
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
   },
   computed: {
     showGoods(){
       return this.goods[this.currentType].list
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
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
