<template>
  <div>
    <Myheader title="书音影">
    <img class="leftImg" src="../assets/images/ic_actionbar_search_icon.png" alt="" slot="left">
    <img class="rightImg" src="../assets/images/ic_chat_green.png" alt="" slot="right">
    </Myheader>
    <nav class="navTop">
      <span :class="{active:current == 1}" @click="current = 1"><router-link to="/myaudio/film" >电影</router-link></span>
      <span :class="{active:current == 2}" @click="current = 2"><router-link to="/myaudio/read">读书</router-link></span>
      <span :class="{active:current == 3}" @click="current = 3"><router-link to="/myaudio/tv" >电视</router-link></span>
      <span :class="{active:current == 4}" @click="current = 4"><router-link to="/myaudio/music">音乐</router-link></span>
      <span :class="{active:current == 5}" @click="current = 5"><router-link to="/myaudio/city">同城</router-link></span>
    </nav>
    <router-view></router-view>
  </div>

</template>

<script>
  import Myheader from "../components/myheader"
  import Highchar from "../components/highchar"
    export default {
        name: "myaudio",
        components:{
          Myheader,
          Highchar
        },
      data(){
          return {
            current:1
          }
      }
    }
</script>

<style scoped>
.navTop{margin-top: 60px;
  height: 40px;
  display: flex;
width: 100%;
text-align: center;
line-height: 40px;
border-bottom: 1px solid #EEEEEE}
  .navTop span{flex: 1;
  }
.navTop .active{
  border-bottom: 2px solid green;

}
.navTop .active a{
  color:green;
}
  .navTop a{color:#666}
</style>
