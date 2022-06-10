import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    // 微信
    path: '/',
    name: 'Home',
    component: () => import('../views/MainPage/Home.vue')
  },
  {
    //通讯录
    path: '/friends',
    name: 'Friends',
    component: () => import('../views/MainPage/Friends.vue')
  },
  {
    //发现
    path: '/find',
    name: 'Find',
    component: () => import('../views/MainPage/Find.vue')
  },
  {
    //我
    path: '/user',
    name: 'User',
    component: () => import('../views/MainPage/User.vue')
  },
  {
    //搜索页
    path: '/search',
    name: 'Search',
    component: () => import('../views/OtherPage/UsedInHome/SearchPage.vue')
  },
  {
    //下拉菜单发起群聊页
    path: '/group',
    name: 'Group',
    component: () => import('../views/OtherPage/UsedInHome/GroupChat.vue')
  },
  {
    //下拉菜单添加好友
    path: '/add',
    name: 'add',
    component: () => import('../views/OtherPage/UsedInHome/AddFriend.vue')
  },
  {
    //下拉菜单扫一扫
    path: '/scan',
    name: 'scan',
    component: () => import('../views/OtherPage/UsedInHome/Scan.vue')
  },
  {
    //下拉菜单收付款
    path: '/pay',
    name: 'pay',
    component: () => import('../views/OtherPage/UsedInHome/Pay.vue')
  },
  {
    //荣荣荣聊天室
    path: '/chat',
    name: 'chat',
    component: () => import('../views/OtherPage/UsedInHome/ChatRoom.vue')
  },
  {
    //微信团队聊天室
    path: '/notice',
    name: 'notice',
    component: () => import('../views/OtherPage/UsedInHome/OfficalNotice.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
