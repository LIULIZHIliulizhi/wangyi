<template>
  <div class="topicality">
    <div class="topicalityWrap">
        <div class="totabkg" v-for="(item,index) in fabricInfo.tenfifteen">
          <p class="title">—今日话题—</p>
          <div class="content">
            <p>{{item.title}}</p>
            <span>{{item.desc}}</span>
          </div>
          <span class="count">{{item.participantNum}}人参与话题</span>
        </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState}from 'vuex'
  export default {
    computed: {
      ...mapState(['fabricInfo'])
    },
    mounted(){
      this.$nextTick(() => {
        new BScroll('.topicality', {
          scrollX: true
        })
      })
    },
    watch:{
      fabricInfo(){
        this.$nextTick(() => {
          new BScroll('.topicality', {
            scrollX: true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topicality
    width 100%
    height 240px
    padding-left 15px
    box-sizing border-box
    overflow hidden
    .topicalityWrap
      float left
      font-size 0
      white-space nowrap
    .totabkg
      display inline-block
      text-align center
      width 300px
      height 220px
      background-image url('./images/qipao.png')
      background-size 300px 220px
      /*background-color #FAFAFA*/
      margin-right 15px
      margin-top 10px
    .title
        font-size 12px
        color #848484
        margin 20px 0px
    .content
      display flex
      align-items center
      flex-direction column
      height 120px
      >p
        font-size 16px
        font-weight bold
        padding 10px
      >span
        font-size 14px
        color #333
    .count
      font-size 12px
</style>
