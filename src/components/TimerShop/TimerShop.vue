<template>
  <div class="timerShop">
     <header class="timer-header">
       <div class="timer">
         <span>限时</span>
         <span :hours="hour">{{hour}}</span>
         <span>:</span>
         <span :minut="minut">{{minut}}</span>
         <span>:</span>
         <span :second="second">{{second}}</span>
       </div>
       <div class="more" >
         <span>更多</span>
         <span> <i class="iconfont icon-jiantou"></i></span>
       </div>
       
     </header>
     <ul class="timerShopList">
       <li class="timer-item">
         <img src="../../assets/images/test2.png" alt="">
         <span>￥55</span>
       </li>
       <li class="timer-item">
         <img src="../../assets/images/test2.png" alt="">
         <span>￥55</span>
       </li>
       <li class="timer-item">
         <img src="../../assets/images/test2.png" alt="">
         <span>￥55</span>
       </li>
       <li class="timer-item">
         <img src="../../assets/images/test2.png" alt="">
         <span>￥55</span>
       </li>
       <li class="timer-item">
         <img src="../../assets/images/test2.png" alt="">
         <span>10.9</span>
       </li>
       <li class="timer-item">
         <img src="../../assets/images/test2.png" alt="">
         <span>10.9</span>
       </li>
     </ul>
  </div>
</template>

<script>
  import moment from 'moment'
  import '../../filter/index'
  export default {
    data(){
      return{
        hour:0,
        minut:0,
        second:0
      }
    },
    methods:{
    
    },
    mounted(){
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.timerShop
  width 100%
  padding 15px
  box-sizing border-box
  .timer-header
    width 100%
    height 50px
    line-height 40px;
    font-size 16px
    .timer
      float left
    .more
      float right
      font-size 14px
  .timerShopList
    width 100%
    height  260px
    /*background pink*/
    .timer-item
      float left
      height 49%
      width 28%
      margin 0px 9px
      background #f4f4f4
      display flex
      flex-direction column
      align-items center
      >img
        width 90%
        height 85%
  
</style>
