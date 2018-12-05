<template>
  <div class="fabric">
    <header class="fabric-header">
      <div class="header-left">
          <span>
             <i class="iconfont icon-shouye"></i>
          </span>
      </div>
      <div class="header-center"></div>
      <div class="header-right">
        <span>
          <i class="iconfont icon-search"></i>
        </span>
        <span>
          <i class="iconfont icon-cart"></i>
        </span>
      </div>
    </header>
    <div class="main">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(txt,index) in fabricInfo.banner" :key="index">
            <div class="swiper">
              <img v-lazy="txt.picUrl" alt="">
              <div class="text">
                <span class="text-title"> — {{txt.subTitle}} —</span>
                <p>{{txt.title}}</p>
                <span class="text-content">{{txt.desc}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contentTab">
        <ul>
          <li v-if="fabricInfo.column" class="tab-item" v-for="(list,index) in fabricInfo.column" :key="index">
            <div class="item">
              <img v-lazy="list.picUrl" alt="">
              <span class="count">{{list.articleCount}}</span>
            </div>
            <p>{{list.title}}</p>
          </li>
        </ul>
      </div>
      <Border/>
      <FarcicComp :recommend="fabricInfo.recommend" />
      <div class="moment">十点一刻</div>
      <FabricTopicality/>
      <Border/>
      <FarcicComp :recommend="fabricInfo.zhen" />
      <Border/>
      <div class="look"  v-if="fabricInfo.yxLook">
        <div class="look-top">严选LOOK</div>
        <img v-if="fabricInfo.yxLook" v-lazy="fabricInfo.yxLook.picUrl" alt="">
        <div class="look-content">
          <div class="look-id">
            <div class="avatar">
              <img v-lazy="fabricInfo.yxLook.avatar" alt="">
            </div>
            <span>{{fabricInfo.yxLook.nickname}}</span>
          </div>
          <p class="look-text">{{fabricInfo.yxLook.content}}</p>
        </div>
      </div>
      <FabricList/>
      </div>
    </div>
</template>

<script>
  import {mapState}from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import FarcicComp from'../../components/fabricComp/FaricComp.vue'
  import FabricTopicality from '../../components/FabrciTopicality/FabrciTopicality.vue'
  import FabricList from '../../components/FabricList/FabricList.vue'
  export default {
    data(){
      return {}
    },
    mounted(){
      this.$store.dispatch('getFabriacInfo',()=>{
        this.$nextTick(()=>{
          new BScroll('.contentTab',{
            scrollX:true
          })
        })
      })
    },
    watch:{
      fabricInfo(){
        this.$nextTick(()=>{
          new Swiper( '.swiper-container',{
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
          new BScroll('.contentTab',{
            scrollX:true
          })
        })
      }
    },
    computed:{
      ...mapState(['fabricInfo']),
     
    },
    components:{
      FarcicComp,
      FabricTopicality,
      FabricList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/mixins.styl'
.fabric
  width 100%
  .fabric-header
    height 40px
    width 100%
    padding 0 15px
    background-color #FAFAFA
    bottom-border-1px(#E8E8E8)
    position fixed
    z-index 100
    .header-left
      position absolute
      left 10px
      top 0
      width 40px
      height 40px
      line-height 40px
      .iconfont
        font-size 24px
    .header-center
      position absolute
      left 150px
      top 10px
      width 90px
      height 22px
      background-image url('./images/logo.png')
      background-size cover
    .header-right
      position absolute
      right 45px
      top 10px
      height 40px
      .iconfont
        margin-left 6px
        font-size 24px
        color #8E8E8E

  .main
    width 100%
    padding-top 40px
    padding-bottom 50px
    .swiper-container
      width 100%
      height 220px
      .swiper-wrapper
        height 100%
        .swiper-slide
          display inline-block
          width 350px
          height 100%
          padding 15px
          box-sizing border-box
          .swiper
            width 100%
            height 100%
            position relative
            
            >img
              width 100%
              height 100%
              border-radius 5px
            .text
              width 220px
              height 120px
              text-align center
              background rgba(255,255,255,0.9)
              display flex
              flex-direction column
              justify-content center
              position absolute
              left 60px
              top 35px
              .text-title
                font-size 12px
                color #999
              >p
                margin-top 15px
                font-weight bold
                margin-bottom 5px
              .text-content
                font-size 12px
                color #333
    .contentTab
      width 100%
      padding 15px 0px 20px 15px
      clearFix()
      box-sizing border-box
      overflow hidden
      >ul
        float left
        white-space nowrap
        font-size 0
        .tab-item
          display inline-block
          width 100px
          height 120px
          margin-right 15px
          .item
            width 100%
            height 90px
            position relative
            >img
              width 100%
              height 90px
            .count
              position absolute
              right 0
              top 0
              height 15px
              width 72%
              letter-spacing 2px
              text-align right
              line-height 15px
              color white
              font-size 13px
          >p
            width 98%
            font-size 14px
            padding-left 5px
            padding-top 10px
    .moment
      width 100%
      height 50px
      text-align center
      line-height 50px
      font-size 14px
    .look
      width 100%
      .look-top
        width 100%
        height 50px
        text-align center
        line-height 50px
      >img
        width 100%
        height 400px
      .look-content
        width 100%
        height 150px
        box-sizing border-box
        padding 15px 20px
        .look-id
          display flex
          width 100%
          .avatar
            width 30px
            height 30px
            >img
              width 100%
              height 100%
              border-radius 50%
          >span
            width 100%
            margin 10px 0px 0px 20px
            font-size 14px
        .look-text
          width 100%
          margin-top 20px
          font-size 14px
          color #ABABAB
          line-height 20px
</style>

