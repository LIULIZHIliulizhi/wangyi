<template>
  <div>
    <header>
      <div class="header-content">
          <span>
             <i class="iconfont icon-search"></i>
          </span>
          <span>搜索商品，共9723件好物</span>
      </div>
    </header>
    <div class="main">
      <div class="classifywrap" >
        <ul class="classifylist" ref="classifyUl">
          <li class="list-item"
              v-for="(category,index) in classifyInfo.categoryL1List"
              :key="index"
              :class="{active:index===0}"
              @click="addActive(index)"
          >{{category.name}}</li>
        </ul>
      </div>
      <div class="contentWrap">
        <div class="classifycontent" >
          <div class="contentWrap" v-for="(category,index) in classifyInfo.categoryL1List"
               :key="index"
               v-if="index === rightIndex">
            <div class="Img">
              <img v-lazy="category.wapBannerUrl" alt="">
            </div>
            <div class="title">
              <div class="left"></div>
              <span>{{category.name}}</span>
              <div class="right"></div>
            </div>
            <ul class="content-list">
              <li class="list-item" v-for="(subCate,index) in category.subCateList" :key="index">
                <img v-lazy="subCate.bannerUrl|| subCate.wapBannerUrl" alt="">
                <p>{{subCate.name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState}from 'vuex'
  import BScroll from'better-scroll'
  export default {
    data(){
      return {
        rightIndex:0
      }
    },
    mounted(){
      this.$store.dispatch('getClassifyInfo')
      new BScroll('.classifywrap')
      new BScroll('.contentWrap')
    },
    computed:{
      ...mapState(['classifyInfo'])
    },
    methods:{
      addActive(index){
        this.rightIndex = index
        const lis = this.$refs.classifyUl.children
        for(let i=0;i<lis.length;i++){
          lis[i].className = 'list-item';
        }
        lis[index].className = 'list-item active'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/mixins.styl'
header
  position fixed !important
  z-index 100
  width 100%
  height 50px
  padding 0px 10px
  box-sizing border-box
  background white
  bottom-border-1px(#E1E1E1)
  .header-content
    margin 10px 0px 10px 0px
    font-size 14px
    text-align center
    line-height 30px
    border-radius 5px
    width 100%
    height 30px
    background-color #EDEDED
.main
  padding-top 50px
  box-sizing border-box
  width 100%
  display flex
  .classifywrap
    width 100px
    height 600px
    overflow hidden
    padding 20px 0px
    box-sizing border-box
    border-right 1px solid #E1E1E1
    .classifylist
      /*margin 20px 0px*/
      width 100%
      height 700px
      .list-item
        font-size 14px
        width 100%
        margin 20px 0px
        height 30px
        text-align center
        line-height 30px
        &.active
          font-size 18px
          font-weight bold
          color firebrick
          border-left 3px solid firebrick
  .contentWrap
    width 90%
    height 550px
    overflow hidden
  .classifycontent
    padding 15px
    box-sizing border-box
    height 700px
    width 100%
    overflow hidden
    /*background blanchedalmond*/
    .contentWrap
      width 100%
      height 800px
      .Img
        width 100%
        height 100px
        >img
          width 100%
          height 100px
      .title
        width 100%
        height 50px
        text-align center
        line-height 50px
        font-size 12px
        display flex
        justify-content center
        >div
          width 20px
          height 1px
          background #E1E1E1
          margin-top 24px
        >span
          margin 0 8px
      .content-list
        width 100%
        clearFix()
        .list-item
          float left
          width 30%
          height 70px
          margin 10px 5px 10px 2px
          display flex
          flex-direction column
          >img
            width 100%
            height 100%
            border-radius 60%
          > p
            width 100%
            font-size 13px
            margin-left 3px
</style>
