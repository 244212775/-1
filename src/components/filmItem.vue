<template>
    <div class="filmitemWrap">
      <div class="left"><slot></slot></div>
      <div class="right">
        <h4>{{title}}</h4>
        <p>{{des}}</p>
        <p><Rate v-model="num"></Rate></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "film-item",
      props:["title","des","rating"],
      data:function(){
          return {
            num:0
          }
      },
      created:function(){
          this.num = Number(this.rating)
      }

    }
</script>

<style scoped>
  .filmitemWrap{width: 100%;
  display: flex}
  .filmitemWrap div{flex: 1}
  .right{text-align: left;margin-left: 20px;
  margin-top: 20px}
.filmitemWrap img{width: 100%}
</style>
