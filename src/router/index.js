import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home'
import Broadcast from '../page/broadcast'
import Group from '../page/group'
import Mine from '../page/mine'
import Myaudio from '../page/myaudio'
import List from '../page/list'
import Dell from '../page/dell'
import Huawei from '../page/huawei'
import Detail from '../page/detail'
import Film from '../page/myaudio/film'
import Read from '../page/myaudio/read'
import Tv from '../page/myaudio/tv'
import Music from '../page/myaudio/music'
import City from '../page/myaudio/city'
import Game from '../page/broadcast/game'
import Movie from '../page/broadcast/movie'
import Btv from '../page/broadcast/tv'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component:Home,
    },
    {
      path: '/broadcast',
      component:Broadcast,children:[
        {path:"movie",component:Movie},
        {path:"",component:Movie},
        {path:"game",component:Game},
        {path:"tv",component:Btv},
      ]
    },
    {
      path: '/group',
      component:Group,
    },
    {
      path: '/mine',
      component:Mine,
    },
    {
      path: '/myaudio',
      component:Myaudio,children:[
        {path:"",component:Film},
        {path:"film",component:Film},
        {path:"read",component:Read},
        {path:"tv",component:Tv},
        {path:"music",component:Music},
        {path:"city",component:City},
      ]
    },
    {
      path: '/list',
      component:List,children:[
        { path: 'dell',component:Dell},
        { path: 'huawei',component:Huawei},
      ]
    },
    {
      path: '/detail',
      component:Detail,
    },

  ]
})
