<template>
  <div class="newsWrap" @click="toDetail(id,author)">
    <div class="left">
      <h3>{{title}}</h3>
      <p>{{des}}</p>
      <p>{{author}}</p>
    </div>
    <div class="right">
        <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "news",
        props:["title","des","author","id"],
        methods:{
          toDetail(k,author){
            //this.$router.push("/detail/"+k+"/"+author)
            localStorage.setItem("id",k)
            localStorage.setItem("author",author)
            this.$router.push("/detail")
          }
        }
    }
</script>

<style scoped>

.newsWrap{
  width: 100%;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
}
.newsWrap .left{

  flex: 2;
  text-align: left;
}
.newsWrap .right{
  flex:1 ;
}
.right img{width: 90%}
</style>
