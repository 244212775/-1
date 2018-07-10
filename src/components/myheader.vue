<template>
    <div :class="{headerWrap:true,green:bol}">
      <span>{{title}}</span>
      <slot name="search"></slot>
      <slot name="left"></slot>
      <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
        name: "myheader",
       props: {
         title: {
           type: String,
           default: ""
         }, bol: {
           type:Boolean,
           default:false
         }
       }
    }
</script>

<style scoped>
  .headerWrap{
    background: #f7f7f7;
    width: 100%;
    height: 48px;
    text-align: center;
    line-height: 48px;
    border-bottom: 1px solid #CCCCCC;
    position: fixed;
    top: 0;
    z-index: 1;


  }
  .green{
    background: #48bd5a;}
  .search{
      width: 80%;
    height: 30px;
    top: 9px;
      background: #fff;
    line-height: 30px;
    position: absolute;
    left: 10%;
    border-radius: 5px;


  }
  .headerWrap img{
    position: absolute;
    width: 20px;
    top: 5px;

  }
  .headerWrap .searchLeft{
    left: 5px;
  }
  .headerWrap .searchRight{
    right: 5px;
  }
  .headerWrap input{
    width: 80%;
    height: 29px;
    display: inline-block;
    border: none;
   outline: none;

  }


  .headerWrap img.leftImg{
    right: 94px;
    top: 16px;

  }
  .headerWrap img.rightImg{
    right: 20px;
    top: 16px;
  }
</style>
