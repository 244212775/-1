<template>
  <div>
    <myheader title="我的">
      <img class="rightImg" src="../assets/images/ic_settings.png" alt="" slot="right">
  </myheader>
    <Ceil txt="提醒">
      <img src="../assets/images/ic_mine_notification.png" alt="" class="left">
      <img src="../assets/images/ic_arrow_gray_small.png" alt="" class="right">
    </Ceil>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>

    </div>
  </div>

</template>

<script>
  import Myheader from "../components/myheader"
  import Ceil from "../components/ceil"
    export default {
        name: "mine",
      components:{
        Myheader,
        Ceil
      },
      mounted:function () {
        var mySwiper = new Swiper ('.swiper-container', {

        })
      }
    }
</script>

<style scoped>

</style>
