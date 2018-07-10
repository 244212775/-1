<template>
<div class="itemWrap" @click="fn()">
  <div v-show="bol"><slot name="nolImg"></slot></div>
  <div v-show="!bol"><slot name="actImg"></slot></div>
  <p :class="{active:!bol}">{{txt}}</p>
</div>
</template>

<script>
    export default {
        name: "item",
        props:["txt","mark","sel"],
        computed:{
          bol:function(){
            if (this.mark == this.sel){
              return false
            }else{
              return true
            }
          }
        },
      methods:{
          fn(){
            this.$emit("c",this.mark)
            this.$router.push("/"+this.mark)

          }
      }
    }
</script>

<style scoped>
.itemWrap{flex: 1;
  text-align: center;
  list-style: none;
  font-size: 12px}
  .itemWrap img{width: 35px}
  .active{
    color:red
  }
</style>
