<template>
<div class="tabbarWrap">
  <ul class="tabbarNav">
    <item txt="首页" mark="home" :sel="select" @c="getVal">
      <img src="../assets/img/1.png" alt="" slot="nolImg">
      <img src="../assets/img/6.png" alt="" slot="actImg">
    </item>
    <item txt="书音影" mark="myaudio" :sel="select" @c="getVal">
      <img src="../assets/img/2.png" alt="" slot="nolImg">
      <img src="../assets/img/7.png" alt="" slot="actImg">
    </item>
    <item txt="广播" mark="broadcast" :sel="select" @c="getVal">
      <img src="../assets/img/3.png" alt="" slot="nolImg">
      <img src="../assets/img/8.png" alt="" slot="actImg">
    </item>
    <item txt="小组" mark="group" :sel="select" @c="getVal">
      <img src="../assets/img/4.png" alt="" slot="nolImg">
      <img src="../assets/img/9.png" alt="" slot="actImg">
    </item>
    <item txt="我的" mark="mine" :sel="select" @c="getVal">
      <img src="../assets/img/5.png" alt="" slot="nolImg">
      <img src="../assets/img/10.png" alt="" slot="actImg">
    </item>
  </ul>
</div>
</template>

<script>
  import Item from "./item"
    export default {
        name: "tabbar",
      components:{
        Item
      },
      data:function(){
          return {
            select:"home"
          }
      },
      methods:{
          getVal(val){
            this.select = val
          }
      },
    }
</script>

<style scoped>

</style>
