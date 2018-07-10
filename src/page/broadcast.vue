<template>
    <div>
      <Myheader title="广播">
        <img class="leftImg" src="../assets/images/ic_status_search_user.png" alt="" slot="left">
        <img class="rightImg" src="../assets/images/ic_chat_green.png" alt="" slot="right">
    </Myheader>
        <ul class="broadTop">
          <span :class="{active:cur == 1}" @click="cur = 1"><router-link to="/broadcast/movie" >电影</router-link></span>
          <span :class="{active:cur == 2}" @click="cur = 2"><router-link to="/broadcast/tv" >电视剧</router-link></span>
          <span :class="{active:cur == 3}" @click="cur = 3"><router-link to="/broadcast/game">游戏</router-link></span>
        </ul>
        <router-view></router-view>
    </div>

</template>

<script>
    import Myheader from "../components/myheader"
    export default {
        name: "broadcast",
        components:{
          Myheader
        },
      data:function(){
          return {
            cur:1
          }
      }
    }
</script>

<style scoped>
.broadTop{margin-top: 50px;
display: flex}
.broadTop span{flex: 1;
display: inline-block}
  .broadTop .active{
    border-bottom: 2px solid green;
  }
.broadTop  .active a{
  color:green;
}
</style>
