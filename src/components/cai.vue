<template>
    <div class="caiWrap">
      <slot></slot>
      <h5>{{title}}</h5>
      <p>{{des1}}</p>
    </div>
</template>

<script>
    export default {
        name: "cai",
        props:["title","des"],
      data:function(){
          return{
            des1:""
          }
      },
      created:function(){
          if(this.des.length>10){
            this.des1 = this.des.substring(0,10)
            this.des1 = this.des1+"..."
          }
      }
    }
</script>

<style scoped>
.caiWrap{width: 50%;
float: left;
padding: 5px;
box-sizing: border-box;
  }
.caiWrap img{
  width: 100%;
}
.caiWrap p{font-size: 12px}
</style>
