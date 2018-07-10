<template>
    <div>
      <Myheader title="小组"></Myheader>
    <p>{{count}}</p>
    <p>{{name}}</p>
    </div>
</template>

<script>
  import store from "../store/store"
  import {mapState,mapGetters,mapActions,mapMutations} from "vuex"
  import Myheader from "../components/myheader"
    export default {
        name: "group",
        components:{
          Myheader
        },
      store:store,
      computed:mapState([
        'count',
        'name'
      ])
    }
</script>

<style scoped>

</style>
