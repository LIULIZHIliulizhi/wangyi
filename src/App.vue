<template>
  <div id="app">
    <router-view/>
    <FooterNav v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterNav from './components/FooterNav/FooterNav.vue';
  export default {
    components:{
      FooterNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #app
      width 100%
      height 100%
      position relative

</style>
