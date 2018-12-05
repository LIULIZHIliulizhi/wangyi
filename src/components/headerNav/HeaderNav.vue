<template>
  <div class="header-bottom">
    <ul class="header-nav" ref="HeaderNav">
      <li class="nave-item"
          v-for="(item,index) in headCateList"
          :class="{active:index===0}"
          @click.prevent="bordShow(index)"
      >
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll';
  export default {
    data(){
      return {
        headCateList: [],
        index: 0
      }
    },
    mounted(){
      this._initScroll()
    },
    methods: {
      bordShow(index){
        this.index = index;
        const lis = this.$refs.HeaderNav.children
        for (let i = 0; i < lis.length; i++) {
          lis[i].className = 'nave-item';
        }
        lis[index].className = 'nave-item active';
        this.$store.dispatch('getIndex', {index})
        this.$router.push(`/homepages/navData/${index}`)
      },
      _initScroll(){
        let scroll = new BScroll('.header-bottom', {
          scrollX: true,
          click: true
        })
      },
    },
    
    computed: {
      ...mapState(['homeInfo', 'navData']),
    },
    watch: {
      homeInfo(){
        this.headCateList = this.homeInfo.headCateList
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header-bottom
    height 50px
    background-color white
    overflow hidden
    .header-nav
      float left
      white-space nowrap
      font-size 0
      padding 0 10px
      .nave-item
        display inline-block
        padding 10px 10px
        font-size 14px
        color #333333
        &.active
          color firebrick
          border-bottom 3px solid firebrick
</style>
