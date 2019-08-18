import Vue from 'vue'
import Router from 'vue-router'
import Middle from '@/components/Middle'
import videoDisplay from '@/components/videoDisplay'
import upload from '@/components/upload'
import shop from '@/components/shop'
import order from '@/components/order'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Middle',
      component: Middle
    },
     {
      path: '/videoDisplay',
      name: 'videoDisplay',
      component: videoDisplay
    },
     {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path:'/order',
      name:'order',
      component:order
    },

    {
      path: '/shop',
      name: 'shop',
      component: shop
    }
  ]
})
