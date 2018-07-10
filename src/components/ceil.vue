<template>
    <div class="ceilWrap">
      <slot name="leftImg"></slot>
      <span :class="{active:bol}">{{txt}}</span>
      <slot name="rightImg"></slot>
    </div>
</template>

<script>
    export default {
        name: "ceil",
      props:["txt","bol"]
    }
</script>

<style scoped>
.ceilWrap{width: 100%;
  height: 40px;
line-height: 40px;
position: relative;
}
  .ceilWrap img{width: 25px;
  vertical-align: middle;
  position: absolute;
    top: 28px;
  }
.ceilWrap .left{left:3px}
.ceilWrap .right{right:3px}
.ceilWrap span{
  margin-left: 30px;
}
  .active{color:orange}
.active :before{
  content:"";
  width: 5px;
  height: 20px;
  position: absolute;
  left: 0;
  top: 8px;
  background: orange;
}
</style>
