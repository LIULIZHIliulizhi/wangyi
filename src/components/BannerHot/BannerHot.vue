<template>
  <div class="wrapHot">
    <div class="hot" >
      <div class="hot-item" v-for="(popularItem,index) in homeInfo.popularItemList" :key="index">
        <img :src="popularItem.scenePicUrl" alt="">
        <p class="ellipsis">{{popularItem.simpleDesc}}</p>
        <p class="hotAttr ellipsis">{{popularItem.name}}</p>
        <span class="price">￥{{popularItem.retailPrice}}</span>
      </div>
    </div>
  </div>
 
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this._initScroll()
    },
    methods:{
      _initScroll(){
        const scrollHot = new BScroll('.wrapHot',{
          scrollX:true
        })
      },
    },
    computed:{
      ...mapState(['homeInfo'])
    },
   
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrapHot
  width 100%
  height 240px
  overflow hidden
.hot
  padding 15px 0px
  float left
  white-space nowrap
  font-size 0
  .hot-item
    display inline-block
    width 140px
    height 200px
    background #f4f4f4
    margin-left 15px
    >img
      width 100%
      height 150px
    .ellipsis
      font-size 14px
      margin 1px 1px
    .hotAttr
      font-size 12px
      color #999
      margin 2px 2px
    .price
      color red
      font-size 14px
</style>
