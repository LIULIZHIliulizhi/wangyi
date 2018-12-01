<template>
  <div class="wrapNew">
    <div class="new" >
      <div class="new-item" v-for="(newItem,index) in homeInfo.newItemList" :key="index">
        <img :src="newItem.scenePicUrl" alt="">
        <p class="ellipsis">{{newItem.simpleDesc}}</p>
        <p class="newAttr ellipsis">{{newItem.name}}</p>
        <span class="price">￥{{newItem.retailPrice}}</span>
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
        const scroll = new BScroll('.wrapNew',{
          scrollX:true
        })
      },
    },
    computed:{
      ...mapState(['homeInfo'])
    },
    wacth:{
    
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrapNew
  width 100%
  height 240px
  overflow hidden
.new
  padding 20px 0px
  float left
  white-space nowrap
  font-size 0
  .new-item
    display inline-block
    width 140px
    height 200px
    background #f4f4f4
    margin-left 20px
    >img
      width 100%
      height 150px
    .ellipsis
      font-size 14px
      margin 1px 1px
    .newAttr
      font-size 12px
      color #999
      margin 2px 2px
    .price
      color red
      font-size 14px
</style>
