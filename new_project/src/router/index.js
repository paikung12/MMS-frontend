import Vue from 'vue'
import VueRouter from 'vue-router'
import course from "./course";
import MMS from "./MMS";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path : "/app",
      component : () => import('../views/Template'),

      children : [
        {
          path : '',
          component : () => import('../views/test')
        },
          course,
          MMS

      ]
    },



]

const router = new VueRouter({
  routes
})

export default router
