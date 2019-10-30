import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '@/views/Posts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Posts
  },
  {
    path: '/create-post',
    name: 'create-post',
    // route level code-splitting
    // this generates a separate chunk (create-posts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/CreatePost.vue')
  },
  {
    path: '/edit-post',
    name: 'edit-post',
    // route level code-splitting
    // this generates a separate chunk (create-posts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/EditPost.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
