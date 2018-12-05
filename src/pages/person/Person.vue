<template>
  <div class="person">
    <header class="person-header">
      <div class="header-left">
          <span @click="$router.replace('/homePages')">
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
    <div class="person-main" v-if="isShow">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="phone-login" @click="goTologin('/phone_login')">
        <span>
          <i class="iconfont icon-shouji01"></i>
        </span>
        <span>手机号码登录</span>
      </div>
      <div class="email-login" @click="goTologin('/email_login')">
        <span>
          <i class="iconfont icon-youxiang"></i>
        </span>
        <span class="login-way">邮箱号码登录</span>
      </div>
      <div class="phone-register">
        <span>手机号快捷注册</span>
        <span>
          <i class="iconfont icon-jiantou"></i>
        </span>
      </div>
      <div class="person-foot">
        <span>
          <i class="iconfont icon-weixin1"></i>
        </span>
        <span>微信</span>
        <span>|</span>
        <span>
          <i class="iconfont icon-QQ"></i>
        </span>
        <span>QQ</span>
        <span>|</span>
        <span>
          <i class="iconfont icon-weibo"></i>
        </span>
        <span>微博</span>
      </div>
    </div>
    <router-view v-else/>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        isShow:true
      }
    },
    methods:{
      goTologin(path){
        this.isShow = false
        this.$router.replace(path)
        
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/mixins.styl'
.person
  width 100%
  height 100%
  background #F2F5F4
  .person-header
    height 50px
    width 100%
    padding 0 15px
    background-color #FAFAFA
    bottom-border-1px(#E8E8E8)
    position fixed
    z-index 100
    .header-left
      position absolute
      left 10px
      top 5
      width 50px
      height 50px
      line-height 50px
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
      top 15px
      height 50px
      .iconfont
        margin-left 6px
        font-size 24px
        color #8E8E8E
  .person-main
    width 100%
    padding-top 50px
    
    .logo
      width 100%
      height 200px
      display flex
      justify-content center
      align-items center
      >img
        width 150px
        height 52px
      
  
    .phone-login
      width 85%
      height 40px
      border-radius 5px
      background  firebrick
      text-align center
      line-height 33px
      margin-left 25px
      position relative
      >span
        font-size 14px
        color white
      .iconfont
        position absolute
        left 90px
        top 2px
        font-size 24px
    .email-login
      width 85%
      height 40px
      border-radius 5px
      border 1px solid  firebrick
      text-align center
      line-height 33px
      margin 20px 25px
      position relative
      >span
        font-size 14px
        color firebrick
      .iconfont
        position absolute
        left 90px
        top 2px
        font-size 24px
    .phone-register
      width 85%
      height 40px
      text-align center
      line-height 33px
      margin 20px 25px
      font-size 14px
      .iconfont
        font-size 13px
        color #333
        font-weight bold
        margin-left 5px
  
    .person-foot
      width 85%
      height 40px
      text-align center
      line-height 33px
      margin 20px 25px
      position absolute
      left 0
      bottom 15px
      >span
        margin-right 10px
        font-size 12px
        color #ccc
</style>
