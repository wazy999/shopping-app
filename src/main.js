import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@vant/touch-emulator';
import { Tabbar, TabbarItem,Button ,NavBar,Swipe, SwipeItem } from 'vant';
import Axios from 'axios';
import "@/assets/font_ow0rahc/iconfont.css"
import "@/assets/sass/global.scss"


Vue.use(Button)
Vue.use(NavBar).use(Swipe).use(SwipeItem);
Vue.use(Tabbar).use(TabbarItem);
// Vue.use(VueRouter)
Vue.config.productionTip = false
// Axios.defaults.baseURL = 'http//www.sinya.online/api/'
Vue.prototype.$axios = Axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
