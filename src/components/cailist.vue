<template>
    <div>
      <Cai v-for="i in caiList" :title="i.title" :des="i.deta"
      :key="i.id">
        <img :src="i.src" alt="" >

      </Cai>
    </div>
</template>

<script>
  import Cai from "./cai"
import {getCaiList} from "../api/data"
    export default {
        name: "cailist",
        components:{
          Cai
        },
      data:function(){
          return {
            caiList:[]
          }
      },
      created:function(){
          // var p = {
          //   name:"张三"
          // }
        getCaiList().then((res)=>{
          this.caiList = res
        })
      }


    }
</script>

<style scoped>

</style>
