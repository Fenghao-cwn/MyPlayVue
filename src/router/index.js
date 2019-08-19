import Vue from 'vue'
import Router from 'vue-router'
import Middle from '@/components/Middle'
import videoDisplay from '@/components/videoDisplay'
import upload from '@/components/upload'
import updateUser from '@/components/updateUser'
import my_follow from '@/components/my_follow'
import my_collection from '@/components/my_collection'
import my_video from '@/components/my_video'
import my_upload from '@/components/my_upload'
import ueditor from '@/components/ueditor'
import videoShow from '@/components/videoShow'

import notice from '@/components/notice'
import inbox from '@/components/inbox'
import outbox from '@/components/outbox'
import notice_content from '@/components/notice_content'

/**/
import shop from '@/components/shop'
import order from '@/components/order'
import my_ueditor from '@/components/my_ueditor'

import solo_message from '@/components/solo_message'
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
      path: '/updateUser',
      name: 'updateUser',
      component: updateUser
    },
     {
      path: '/my_follow',
      name: 'my_follow',
      component: my_follow
    },
     {
      path: '/my_collection',
      name: 'my_collection',
      component: my_collection
    },
     {
      path: '/my_video',
      name: '/my_video',
      component: my_video
    },
     {
      path: '/my_upload',
      name: '/my_upload',
      component: my_upload
    },
     {
      path: '/ueditor',
      name: 'ueditor',
      component: ueditor
    },{
    	path: '/videoShow',
      	name: 'videoShow',
      	component: videoShow
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice
    },
     {
      path: '/inbox',
      name: 'inbox',
      component: inbox
    },
     {
      path: '/outbox',
      name: 'outbox',
      component: outbox
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
    },
    {
      path: '/my_ueditor',
      name: 'my_ueditor',
      component: my_ueditor
    },
    {
      path: '/solo_message',
      name: 'solo_message',
      component: solo_message
    },
    {
      path: '/notice_content',
      name: 'notice_content',
      component: notice_content
    }
    

    



  ]
})
