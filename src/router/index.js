import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Member from '../components/Member.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/member',
    name: 'member',
    component: Member
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
