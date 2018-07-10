import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)


var state = {
  count:10,
  name:"张三"
}
var getters = {

}
var action = {

}
var mutation = {

}
var store =new Vuex.Store({
  state,
  getters,
  action,
  mutation
})
  export default store;
