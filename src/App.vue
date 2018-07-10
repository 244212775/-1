
<template>
  <div id="app">
    <Tabbar></Tabbar>
    <router-view/>
  </div>
</template>

<script>
  import Tabbar from "./components/tabbar"
  import "./assets/bootstrap/js/jquery.js"
  import "./assets/bootstrap/js/bootstrap.min.js"
  import "./assets/highchar/highchar"
  import "./assets/swiper/js/swiper.js"
export default {
  name: 'App',
  beforeCreate:function(){
    this.$router.push("/home")
  },
  components:{
    Tabbar
  }
}
</script>

<style>
  @import "./assets/swiper/css/swiper.min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
  *{margin: 0;padding: 0}
  .tabbarNav{display: flex;
  position: fixed;
  bottom: 0;
  background: #EEEEEE;
  width: 100%;
    z-index: 1;}

</style>
