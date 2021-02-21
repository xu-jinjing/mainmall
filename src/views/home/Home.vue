<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll"
      :pull-up-load="true" @pullingUp="loadMore">
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="[ '流行','精选', '样式']" class="tab-control" @tabClick="tabClick"></tab-control>
        <good-list :goods="showGoods"></good-list>
      </scroll>
      <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>

import HomeSwiper from './childrenComponents/HomeSwiper'
import RecommendView from './childrenComponents/RecommendView'
import FeatureView from './childrenComponents/FeatureView'

import NavBar from '@/components/common/navbar/NavBar'
import Scroll from '@/components/common/scroll/Scroll'

import TabControl from '@/components/content/tabControl/TabControl'
import GoodList from '@/components/content/goods/GoodsList'
import BackTop from '@/components/content/backTop/BackTop'

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
     GoodList,
     Scroll,
     BackTop

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
       currentType:'pop',
       isShowBackTop: false
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
      backClick(){
        this.$refs.scroll.scroll.scrollTo(0,0)
      },

      contentScroll(position){
        // console.log(position);
        this.isShowBackTop = (-position)>1000
      },
      loadMore(){
        // console.log('上拉加载更多');
        this.getHomeGoods(this.currentType)
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
        this.$refs.scroll.scroll.finishPullUp()
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
    height: 100vh;
    position: relative;
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

  .content{
    overflow: hidden;
     position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

  }

  /* .content{
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 50px;
  } */


</style>
