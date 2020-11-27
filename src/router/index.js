import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'
import Home from '@/page/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
  
})
