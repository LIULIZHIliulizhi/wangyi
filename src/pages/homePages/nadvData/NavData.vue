<template>
 <div class="navData">
   <div class="classShop" v-if="newCateList[indexs]">
     <h2>{{newCateList[indexs].name}}好物</h2>
     <ul>
       <li  v-for="(item,index) in newCateList[indexs].itemList" :key="index">
         <div class="Img">
           <img :src="item.listPicUrl" alt="" :time="timer">
         </div>
         <div class="decripte ellipsis">{{item.simpleDesc}}</div>
         <p class="text ellipsis">{{item.name}}</p>
         <div class="price">￥{{item.retailPrice}}</div>
       </li>
     </ul>
     <Border/>
   </div>
 
 </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    data(){
      return{
        indexs:0,
        newCateList:[]
      }
    },
    mounted(){
        this.newCateList = this.homeInfo.cateList
        if(this.$route.params.index){
          this.indexs = this.$route.params.index
        }
    },
    computed:{
        ...mapState(['homeInfo']),
      indexParams(){
        this.indexs = this.$route.params.index
      },
      timer(){
        return Date.now()
      }
    },
    methods:{
      pushWatch(id){
        this.$router.push(`/home/message/detail/${id}`)
      },
      
    },
    watch:{
      indexParams(){
        this.indexs = this.$route.params.index
      },
      homeInfo(){
        this.newCateList = this.homeInfo.cateList
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/stylus/mixins.styl'
.navData
  width 100%
  height 100%
  padding-top 100px
  padding-bottom 50px
  box-sizing border-box
  .classShop
    width 100%
    h2
      width 100%
      height 50px
      text-align center
      line-height 50px
    >ul
      width 100%
      box-sizing border-box
      padding-left 15px
      clearFix()
      >li
        float left
        width 45%
        height 260px
        padding-right 14px
        .Img
          width 100%
          height 70%
          background-color #F4F4F4
          img
            width 100%
            height 100%
        .decripte
          width 100%
          height 30px
          line-height 30px
          padding-left 5px
          box-sizing border-box
          background #f1ece2
          color #9f8a60
          font-size 12px
          letter-spacing: 0
        .text
          font-size 14px
          margin 8px 0px
        .price
         font-size 16px
         color firebrick


</style>
