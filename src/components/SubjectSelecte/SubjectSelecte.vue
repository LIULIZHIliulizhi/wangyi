<template>
  <div class="subject">
    <div class="subject-top">
      <span>专题精选</span>
      <span><i class="iconfont icon-jiantou"></i></span>
    </div>
    <div class="subjectwrap">
      <div class="subject" >
        <div class="subject-item" v-for="(topic,index) in homeInfo.topicList" :key="index" >
          <img class="itemImg" :src="topic.itemPicUrl" alt="">
          <div class="subject-text">
            <span class="text">{{topic.title}}</span>
            <span class="price">{{topic.priceInfo}}元起</span>
          </div>
          <p class="describe ellipsis">{{topic.subtitle}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BSrcoll from 'better-scroll'
import {mapState}from 'vuex'
  export default {
    computed:{
      ...mapState(['homeInfo'])
    },
    mounted(){
      new BSrcoll('.subjectwrap',{
        scrollX:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.subject
  width 100%
  .subject-top
    width 100%
    height 50px
    display flex
    justify-content center
    align-items center
    .iconfont
      font-size 12px
      margin-left 5px
    
  .subjectwrap
    width 100%
    height 220px
    overflow hidden
    .subject
      padding-left 20px
      width 250%
      .subject-item
        display inline-block
        width 290px
        height 220px
        margin-right 15px
        >img
          width 280px
          height 150px
        .subject-text
          width 100%
          margin-top 10px
          clearFix()
          .text
            float left
            font-size 16px
          .price
            float right
            color firebrick
            font-size 14px
        .describe
          float left
          width 100%
          margin-right 0px
          margin-top 10px
          font-size 12px
          color #999
</style>
