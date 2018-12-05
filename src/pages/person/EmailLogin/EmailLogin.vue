<template>
    <div class="email">
      <div class="logo">
        <img src="../../../assets/images/logo.png" alt="">
      </div>
      <div class="main">
        <input type="text" v-model="e_mail" :placeholder="e_mail? '':'请输入邮箱账号'">
        <span class="cuowu" @click="showCw" v-if="e_mail">
             <i class="iconfont icon-cuowu"></i>
          </span>
        <div class="mimaWrap">
          <input class="mima" type="password" v-model="mima" placeholder="请输入密码">
        </div>
        <div class="waring" v-show="waringShow && !isWaringShow ">{{waring}}</div>
        <div class="registration-pwd">
          <span class="registration">注册账号</span>
          <span class="pwd">忘记密码</span>
        </div>
        <input type="submit" value="登录" class="login" @click.prevent="gotoLogin">
        <input type="submit" value="其他方式登录" class="other" @click.prevent="$router.push('/phone_login')">
      </div>
    </div>
  </template>
  
  <script>
    
    export default {
      data(){
        return{
          msg:'获取验证码',
          e_mail:'',
          mima:'',
          isShow:true,
          waringShow:false,
          waring:''
        }
      },
      methods:{
        showCw(){
          this.e_mail = ''
          this.waringShow = false;
          this.waring = '';
          this.mima = ''
        },
        gotoLogin(){
          if(!this.e_mail || !this.mima){
            this.waringShow = true
            this.waring = '邮箱或密码不能为空'
            return
          }else if(!this.isRightEmail){
              this.waringShow = true
              this.waring = '邮箱格式不正确'
              return
          }else if(!this.isRightPwd){
              this.waringShow = true
              this.waring = '密码格以字母开头，6-18个字符（只能包含字符，数字，下划线）'
              return
          }
          this.$router.replace('/homePages')
        },
      },
      computed:{
        isRightEmail(){ //  判断手机号是否合法
         const reg = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi;
          return reg.test(this.e_mail)
        },
        isRightPwd(){
          const reg = /^[a-zA-Z]\w{5,17}$/
          return reg.test(this.mima)
        },
        isWaringShow(){
          if(this.mima){
            this.waringShow = false
          }
        }
      },
    }
  </script>
  
  <style lang="stylus" rel="stylesheet/stylus" scoped>
    .email
      width 100%
      height 100%
      padding 40px 20px 0px 20px
      box-sizing border-box
      background white
      .logo
        width 100%
        height 150px
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
        .mimaWrap
          position relative
          height 66px
          width 100%
          .mima
            margin-top 25px
          .getmima
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
          color firebrick
        .registration-pwd
          width 100%
          height 50px
          line-height 50px
          >span
            font-size 12px
          .registration
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
