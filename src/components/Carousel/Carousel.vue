<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./images/01.jpg" alt="图片">
      </div>
      <div class="swiper-slide">
        <img src="./images/02.jpg" alt="图片">
      </div>
      <div class="swiper-slide">
        <img src="./images/04.jpg" alt="图片">
      </div>
      <div class="swiper-slide">
        <img src="./images/05.jpg" alt="图片">
      </div>
      <div class="swiper-slide">
        <img src="./images/06.jpg" alt="图片">
      </div>
      <div class="swiper-slide">
        <img src="./images/07.jpg" alt="图片">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
 
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
//      this.$store.dispatch('getBannerImg',()=>{
////        this.$nextTick(()=>{
          new Swiper( '.swiper-container',{
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
//        })

//      })
    },
    computed:{
      ...mapState(['bannerImg'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/stylus/mixins.styl'
.swiper-container
  width 100%
  .swiper-slide
    height 200px
    clearFix()
    img
      width 100%
      height 100%
  .swiper-pagination-bullet:nth-children(n)
    width 100px
    
</style>
