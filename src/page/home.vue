<template>
  <div>

    <myheader  :bol="true">
      <div slot="search" class="search">
        <img class="searchLeft" src="../assets/images/ic_group_search_small.png" alt="">
        <input type="text" placeholder="影视 图片">
        <img class="searchRight" src="../assets/images/ic_scan_gray.png" alt="">
      </div>
      <img  class="right" src="../assets/images/ic_chat_white.png" alt="" slot="right">
    </myheader>
    <Banner></Banner>
    <Ceil txt="热点" :bol=true></Ceil>
    <Newslist></Newslist>
    <Cailist></Cailist>
  </div>


</template>

<script>
  import Myheader from "../components/myheader"
  import Newslist from "../components/newslist"
  import Cailist from "../components/cailist"
  import Banner from "../components/banner"
  import Ceil from "../components/ceil"
    export default {
        name: "home",
      components:{
        Myheader,
        Newslist,
        Cailist,
        Banner,
        Ceil
      }
    }
</script>

<style scoped>

</style>
