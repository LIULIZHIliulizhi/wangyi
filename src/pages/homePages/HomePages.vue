<template>
  <div class="app">
    <header class="home-header">
      <div class="header-top">
        <div class="logo"></div>
        <div class="search">
          <span>
             <i class="iconfont icon-search"></i>
          </span>
          <span class="search-text">搜索商品，共19604款好物</span>
        </div>
        <input type="submit" value="登录" class="login" @click="$router.replace('/person')">
      </div>
      <HeaderNav ref="headerIndex"/>
    </header>
    <!--<router-link :to="`/homepages/navData/:${index}`"></router-link>-->
    <router-view v-if="index != null"/>
    <section class="main" v-else >
      <Carousel/>
      <div class="posterClass">
        <div class="poster"><span>网易自管商品</span></div>
        <div class="poster"><span>30天无忧退货</span></div>
        <div class="poster"><span>48小时快速退货</span></div>
      </div>
      <Border/>
      <div class="dinglei"></div>
      <div class="companyPay">
        <div class="companytitle">
          <span>品牌制造商直供</span>
          <span>  <i class="iconfont icon-duigouzhong"></i></span>
        </div>
        <ul class="shopList">
          <li class="shop-item"  v-for="(item,index) in newTagList" :key="index">
            <a href="javascript:;">
              <img :src="item.picUrl" alt="">
            </a>
            <div class="shop-title">
              <span>{{item.name}}</span>
              <span>￥{{item.floorPrice}}元起</span>
            </div>
          </li>
        </ul>
      </div>
      <Border/>
      <div class="newgoods">
        <div class="newmsg">
          <p>新品首发</p>
          <a href="javascript:''" class="newwatch">查看全部</a>
        </div>
      </div>
      <BannerNew/>
      <Border/>
      <div class="hotgoods">
        <div class="hotmsg">
          <p>人气推荐，好物精选</p>
          <a href="javascript:''" class="hotwatch">查看全部</a>
        </div>
      </div>
      <BannerHot/>
      <Border/>
      <TimerShop/>
      <Border/>
      <div class="benefit"></div>
      <Border/>
      <SubjectSelecte/>
      <Border/>
      <Border/>
      <div class="foot">
        <div class="download">下载APP</div>
        <div class="computed">电脑版</div>
        <div  class="foot-info">
          <span>网易公司版权所有 © 1997-2018</span>
          <span>食品经营许可证：JY13301080111719</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {mapState,mapGetters} from 'vuex'
  import Carousel from '../../components/Carousel/Carousel.vue';
  import BannerNew from '../../components/BannerNew/BannerNew.vue'
  import BannerHot from '../../components/BannerHot/BannerHot.vue'
  import TimerShop from'../../components/TimerShop/TimerShop.vue'
  import ClassShop from '../../components/classShop/ClassShop.vue'
  import SubjectSelecte from '../../components/SubjectSelecte/SubjectSelecte.vue'
  import HeaderNav from '../../components/headerNav/HeaderNav.vue'
  import NavData from './nadvData/NavData.vue'
  export default {
    data(){
      return{
        index:null,
      }
    },
    components:{
      Carousel,
      BannerNew,
      BannerHot,
      TimerShop,
      SubjectSelecte,
      ClassShop,
      HeaderNav,
      NavData
    },
    methods:{
      _initScroll(){
        let scroll = new BScroll('.header-bottom',{
          scrollX:true
        })
      },
    },
    computed:{
      ...mapState(['homeInfo','getNewTagList','navIndex']),
      newTagList(){
        if(this.homeInfo.tagList){
          return this.homeInfo.tagList.filter((item,index)=>{
            return index < 4
          })
        }
      },
    },
    mounted(){
      this.$store.dispatch('getHomeInfo')
    },
    watch: {
      navIndex(){
        this.index = this.navIndex
      }
    }
   
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/mixins.styl'
  .home-header
    position fixed
    background white
    z-index 100
    width 100%
    .header-top
      width 100%
      height 50px
      background white
      padding 8px 0px 8px 8px
      box-sizing border-box
      .logo
        width 75px
        height 30px
        background-image url('../../assets/images/icons.png')
        background-position 0px -52px
        background-size cover
        background-repeat no-repeat
        margin-top 0.0rem
        float left
      .search
        width 62%
        height 22px
        font-size 14px
        float left
        line-height 22px
        text-align center
        margin-left 5px
        padding-bottom 7px
        color #666
        background-color #ededed
        border-radius 5px
        .search-text
          margin-top 10px
      .login
        float left
        width 40px
        height 20px
        font-size 10px
        color firebrick
        background white
        border 1px solid firebrick
        border-radius 5px
        margin 4px 8px
  .main
    padding-top 100px
    padding-bottom 50px
  .posterClass
    width 100%
    height 40px
    display flex
    .poster
      flex 1
      width 33.3%
      height 40px
      background-image url('../../assets/images/hook.png')
      background-repeat no-repeat
      background-size:15px 15px
      background-position 20px 8px
      span
        color #333
        font-size 12px
        margin-left 35px
        line-height 40px
  .dinglei
    width 100%
    height 100px
    background-image url('./images/111.png')
    background-size 100% 100%
    background-repeat no-repeat
  .companyPay
    padding 0 10px
    .companytitle
      height 50px
      width 100%
      line-height 50px
      font-size 16px
      text-align center
      .iconfont
        font-size 20px
    .shopList
      width 100%
      padding-bottom 2px
      height 240px
      .shop-item
        background #F4F4F4
        float left
        box-sizing border-box
        border 1px solid white
        height 50%
        width 50%
        position relative
        img
          width 100%
          height 100%
        .shop-title
          display flex
          flex-direction column
          position absolute
          left 10px
          top 10px
          font-size 14px
          >span
            margin-top 5px
  .newgoods
    width 100%
    height 120px
    background-image url('../../assets/images/new.png')
    background-size cover
    display flex
    justify-content center
    align-items center
    .newmsg
      display flex
      flex-direction column
      color #8ba0b6
      p
        width 100px
        height 25px
        color #8ba0b6
        line-height 25px
        text-align center
    .newwatch
      display inline-block
      width 100px
      height 25px
      line-height 25px
      text-align center
      background #D8E5F1
      color #8ba0b6
  .newWrap
    width 100%
    height 250px
    box-sizing border-box
    overflow hidden
    >ul
      padding 15px 10px 10px 15px
      float left
      white-space nowrap
      font-size 0
      .new-item
        display inline-block
        margin-right 15px
        width 140px
        height 220px
        >img
          background #f4f4f4
          width 135px
          height 145px
        > p
          margin-top 5px
          margin-bottom 10px
          width 100%
          font-size 14px
        .price
          color red
          font-size 12px
        .newAttr
          font-size
          color #ccc


  .hotgoods
      width 100%
      height 120px
      background-image url('../../assets/images/hot.png')
      background-size cover
      display flex
      justify-content center
      align-items center
      .hotmsg
        display flex
        flex-direction column
        align-items  center
        color #C1AF8A
        p
          width 150px
          height 25px
          color #C1AF8A
          line-height 25px
          text-align center
      .hotwatch
          display inline-block
          width 120px
          height 25px
          line-height 25px
          text-align center
          background #F4E9CB
          color #C1AF8A
    
  .benefit
    width 100%
    height 150px
    background-image  url('./images/fuli.jpg')
    background-size cover
    background-repeat no-repeat
  .foot
    width 100%
    height 150px
    background #414141
    position relative
    >div
      width 100px
      height 30px
      border 1px solid #535353
      color #E5E5E5
      font-size 14px
      text-align center
      line-height 30px
    .download
      position absolute
      left 60px
      top 35px
    .computed
      position absolute
      left 200px
      top 35px
    .foot-info
      border none
      position absolute
      left 0
      top 77px
      display flex
      font-size 12px
      flex-direction column
      width 100%
      height 100px
</style>
