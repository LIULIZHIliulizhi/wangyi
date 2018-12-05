<template>
  <div class="wrap">
    <header>
      <div></div>
      <span>更多精彩</span>
      <div></div>
    </header>
    <ul>
      <li class="card" v-for="(item,index) in fabricInfo.findMore " >
        <img v-lazy="item.itemPicUrl" alt="">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState}from'vuex'
  export default {
    computed:{
      ...mapState(['fabricInfo'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  width 100%
  background #F4F4F4
  padding 0 15px
  box-sizing border-box
  header
    display flex
    height 100px
    align-items center
    justify-content center
    >div
      width 37%
      height 1px
      background #d9d9d9
    >span
      margin 0 15px
      font-size 14px
  >ul
    background #F4F4F4
    width 100%
    .card
      width 100%
      height 250px
      background white
      padding 15px
      box-sizing border-box
      border-bottom 15px solid #F4F4F4
      &:nth-last-child(1)
        border none
      >img
        display inline-block
        width 100%
        height 170px
      >p
        width 100%
        height 50px
        line-height  50px
 
</style>
