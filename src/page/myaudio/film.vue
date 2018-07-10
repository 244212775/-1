<template>
  <Scroll :on-reach-bottom="handleReachBottom" height="450">
    <!--<Card dis-hover v-for="(i, index) in list1" :key="index" style="margin: 32px 0">-->
    <!--</Card>-->
    <FilmItem v-for="i in list1" :title="i.title" :des="i.deta" :rating="i.rating">
      <img :src="i.src" alt="">

    </FilmItem>



  </Scroll>
</template>
<script>
  import FilmItem from "../../components/filmitem"
  import {getCaiList1} from "../../api/data"
  import Star from "../../components/star"
  export default {

    data () {
      return {
        list:[],
        list1: [],
        current:0
      }
    },
    components:{
      FilmItem,

    },
    methods: {
      handleReachBottom () {
        return new Promise(resolve => {
          setTimeout(() => {
            this.current++;
            this.list1 = this.list1.concat(this.list[this.current])
            resolve();
          }, 2000);
        });
      }
    },
    created(){
      getCaiList1().then((des)=>{
        this.list = des
        this.list1 = this.list[this.current]
      })
    }

  }
</script>
