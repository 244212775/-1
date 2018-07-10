import axios from "axios"
var qs = require('qs');//用于参数处理
export var getCaiList = ()=>{
  return axios.get("../../static/cai.json").then( (res) =>{
    return res.data
  })
}
getCaiList()

export var getCaiList1 = ()=>{
  return axios.get("../../static/cai1.json").then( (res) =>{
    return res.data
  })
}
getCaiList1()



