<template>
    <footer class="footerNav">
      <a href="JavaScript:;" class="footer_item" :class="{active: $route.path=== '/homePages'}" @click="$router.replace('/homePages')">
       <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
        <span class="item-text">首页</span>
      </a>
      <a href="JavaScript:;"  class="footer_item" :class="{active: $route.path=== '/classify'}" @click="$router.replace('/classify')">
       <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
        <span class="item-text">分类</span>
      </a>
      <a href="JavaScript:;" class="footer_item":class="{active: $route.path=== '/fabric'}"  @click="$router.replace('/fabric')">
       <span class="item_icon">
        <i class="iconfont icon-tubiaoCSban-"></i>
      </span>
        <span class="item-text">织物</span>
      </a>
      <a href="JavaScript:;" class="footer_item" :class="{active: $route.path=== '/cart'}"  @click="$router.replace('/cart')">
       <span class="item_icon">
        <i class="iconfont icon-cart"></i>
      </span>
        <span class="item-text">购物车</span>
      </a>
      <a href="JavaScript:;"class="footer_item" :class="{active: $route.path=== '/person'}"  @click="$router.replace('/person')">
       <span class="item_icon">
        <i class="iconfont icon-04geren"></i>
      </span>
        <span class="item-text">个人</span>
      </a>
    </footer>
</template>

<script>

  export default {
  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/mixins.styl';
  .footerNav
    top-border-1px(#ccc)
    position fixed
    bottom 0
    left 0
    width 100%
    height 50px
    display flex
    background-color white
    align-items center
    z-index 100
    .footer_item
      color #666
      flex 1
      display flex
      flex-direction column
      text-align center
      &.active
        color red
      .item_icon
        margin 3px 0px
      .iconfont
        font-size 20px
      .item-text
        font-size 14px

</style>
