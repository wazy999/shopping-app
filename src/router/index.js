import  Vue from 'vue'
import Router from 'vue-router'
import Home  from '@/page/home'
import Shop  from '@/page/shop'
import Vip  from '@/page/vip'
import Search  from '@/page/search'

Vue.use(Router)
export default new Router({
    routes:[
        {
        path:'/',
        name:'home',
        component:Home
    },{
        path:'/vip',
        name:'vip',
        component:Vip
    },{
        path:'/shop',
        name:'shop',
        component:Shop
    },{
        path:'/search',
        name:'search',
        component:Search
    }]
})