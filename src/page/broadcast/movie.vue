<template>
    <div>
      <Scroll :on-reach-bottom="handleReachBottom" height="500">
        <Fileitem v-for="i in list1" :title="i.title" :des="i.deta" :rating="i.rating">
          <img :src="i.src" alt="">
        </Fileitem>
      </Scroll>

    </div>
</template>

<script>
  import Fileitem from "../../components/filmItem"
  import {getCaiList1} from "../../api/data"
    export default {
        name: "movie",
      components:{
        Fileitem,
      },
      data:function(){
        return {
          list:[],
          curtent:0,
          list1:[]
        }
      },
      methods: {
        handleReachBottom () {
          return new Promise(resolve => {
            setTimeout(() => {
              this.curtent++;
              this.list1 = this.list1.concat(this.list[this.curtent])

              resolve();
            }, 2000);
          });
        }
      },
      created:function(){
        getCaiList1().then((res)=>{
          this.list = res
          this.list1 = this.list[this.curtent]
        })
      }
    }
</script>

<style scoped>

</style>
