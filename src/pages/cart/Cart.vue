<template>
  <div class="cart">
    <header>购物车</header>
    <div class="cart-top">
      <span>30天无忧退货</span>
      <span>48小时快速退款</span>
      <span>满88元免邮费</span>
    </div>
    <div class="center">
    </div>
    <span class="text">去添点什么吧</span>
    <input type="submit" value="登录" @click="$router.replace('/login')"/>
  </div>
</template>

<script>

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/mixins.styl'
.cart
  width 100%
  height 100%
  background #f4f4f4
  position relative
  header
    background white
    width 100%
    height 44px
    text-align center
    line-height 44px
  .cart-top
    width 100%
    height 30px
    line-height 30px
    font-size 12px
    color #666
    padding 5px 0px
    box-sizing border-box
    >span
      margin 0 20px
      
  
  .center
    width 120px
    height 120px
    background-image url('../../assets/images/cart.png')
    background-size cover
    background-repeat no-repeat
    position absolute
    left 135px
    top 240px
  >input
    width 60%
    height 50px
    background firebrick
    color white
    text-align center
    line-height 50px
    position absolute
    left 80px
    top 380px
  .text
    font-size 14px
    color #666
    position absolute
    left 155px
    top 350px
  
</style>
