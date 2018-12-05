<template>
  <div class="phone">
    <div class="logo">
      <img src="../../../assets/images/logo.png" alt="">
    </div>
    <div class="main">
      <input type="text" maxlength="11" v-model="mobile" :placeholder="mobile? '':'请输入手机号码'" :class="{}">
      <span class="cuowu" @click="showCw" v-if="mobile">
             <i class="iconfont icon-cuowu"></i>
          </span>
      <div class="captchaWrap">
        <input class="captcha" type="text" v-model="captcha" placeholder="请输入短信验证码">
        <input type="submit" class="getCaptcha" :value="msg" @click.prevent="getCache">
      </div>
      <div class="waring" v-show="waringShow && !isWaringShow">{{waring}}</div>
      <div class="ask-pwd">
        <span class="ask">遇到问题？</span>
        <span class="pwd">使用密码验证登录</span>
      </div>
      <input type="submit" value="登录" class="login" @click.prevent="gotoLogin">
      <input type="submit" value="其他方式登录" class="other" @click.prevent="$router.push('/email_login')">
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        msg:'获取验证码',
        mobile:'',
        captcha:'',
        isShow:true,
        waringShow:false,
        waring:''
      }
    },
    methods:{
      showCw(){
      this.mobile = '';
      this.waringShow = false
     },
      gotoLogin(){
        if(!this.isRightPhone) {
          this.waringShow = true
          return this.waring = '手机号码输入不正确'
        }
        this.$router.replace('/homePages')
      },
      getCache(){
      
      }
    },
    computed:{
      isRightPhone(){ //  判断手机号是否合法
//        return /^1\d{10}$/.test(this.phone)
        return /^1\d{10}$/.test(this.mobile)
      },
      isWaringShow(){
        if(this.captcha){
          this.waringShow = false
        }
      }
    },
    watch:{
    },
    mounted(){
    
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.phone
  width 100%
  height 100%
  padding 40px 20px 0px 20px
  box-sizing border-box
  background white
  .logo
    width 100%
    height 90px
    display flex
    justify-content center
    align-items center
    >img
      width 100px
      height 35px


  .main
    margin-top 60px
    position relative
    input
      outline none
      width 100%
      height 40px
      color initial
      border-bottom 1px solid #EDEDED
      line-height 40px
      font-size 13px
    .cuowu
      font-size 12px
      position absolute
      right 0
      top 10px
    .captchaWrap
      position relative
      height 66px
      width 100%
      .captcha
        margin-top 25px
      .getCaptcha
        width 100px
        height 30px
        line-height 30px
        position absolute
        right 0
        top 30px
        color #666
        background white
        border 1px solid #666
        border-radius 5px
  
    .waring
      width 100%
      height 50px
      font-size 12px
      line-height 50px
      color firebrick
    .ask-pwd
      width 100%
      height 50px
      line-height 50px
      >span
        font-size 12px
      .ask
        float left
      .pwd
        float right
    .login
      background firebrick
      font-size 16px
      height 50px
      color white
      margin 15px 0px
      border-radius 5px
    .other
      font-size 16px
      height 50px
      border-radius 5px
      color #333
      background white
      border 1px solid firebrick
</style>
