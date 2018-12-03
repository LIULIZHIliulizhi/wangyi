<template>
  <div class="introduce">
    <div class="recomments">{{recommend.name}}</div>
    <div>
      <a href="javascript:;" class="introduce-main">
        <div class="introduce-img">
          <img :src="recommend.Item[0].picUrl" alt="">
        </div>
        <div class="introduce-content">
          <div class="content-top">
            <p>{{recommend.Item[0].title}}</p>
            <span>{{recommend.Item[0].priceInfo}}元起</span>
          </div>
          <span class="price">{{recommend.Item[0].subTitle}}</span>
        </div>
      </a>
      <div class="introduce-list" v-for="(obj,index) in recommend.Item" :key="index" v-if="index != 0">
        <div class="list-left">
          <span class="left-title">{{obj.title}}</span>
          <span class=" text ellipsis">{{obj.subTitle}}</span>
        </div>
        <div class="list-right">
          <img class="right-img" :src="obj.picUrl" alt="">
          <div class="right-title">{{obj.typeName}}</div>
        </div>
  
      </div>
    </div>
  </div>
</template>

<script>
import {mapState}from 'vuex'
  export default {
    props:{
      recommend:Object
    },
    mounted(){
      if(!this.recommend){
        return
      }
    },
    watch:{
      recommend(){
        return this.recommend
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.introduce
  width 100%
  padding 5px
  box-sizing border-box
  .recomments
    width 100%
    height 50px
    text-align center
    line-height 50px
    font-size 14px
  .introduce-main
    width 100%
    height 240px
    border 1px solid #f4f4f4
    display inline-block
    padding  0 15px
    box-sizing border-box
    .introduce-img
      margin-top 10px
      width 100%
      height 150px
      >img
        width 100%
        height 100%
    .introduce-content
      width 100%
      height 120px
      padding 0 10px
      box-sizing border-box
      display flex
      flex-direction column
      .content-top
        text-align center
        line-height 40px
        width 100%
        height 40px
        >p
          float left
        >span
          float right
    .price
      font-size 14px
  
  .introduce-list
    width 100%
    height 150px
    margin-top 10px
    padding 0px 10px
    box-sizing border-box
    border 1px solid #f4f4f4
  .list-left
    float left
    width 59%
    height 100%
    display flex
    flex-direction column
    justify-content  center
    align-items center
    .left-title
      margin-bottom 15px
    .text
      width 100%
      text-align left
      font-size 12px
  .list-right
    width 40%
    height 100%
    float left
    position relative
    .right-img
      width 100%
      height 100%
    .right-title
      font-size 12px
      width 70%
      height 15px
      text-align center
      line-height 15px
      color #333
      background #FCF8F1
      position absolute
      left 5px
      top 5px
      border-radius 10px
</style>
