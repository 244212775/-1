<template>
  <Carousel autoplay v-model="value2" loop class="banner">
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../assets/images/banner/01.jpg"/>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../assets/images/banner/02.jpg"/>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../assets/images/banner/03.jpg"/>
      </div>
    </CarouselItem>
  </Carousel>
</template>
<script>
  export default {
    data () {
      return {
        value2: 0
      }
    }
  }
</script>
<style>
  .banner{margin-top: 50px}
  .banner img{width: 100%}
</style>
