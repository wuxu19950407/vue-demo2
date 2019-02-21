import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Authorization from '@/components/Authorization'
import Account from '@/components/Account'
import Reset from '@/components/Reset'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path: '/Account',
      name: 'Account',
      component: Account,
      children:[{
        path: 'Login',
        name: 'Login',
        alias:'/',
        component: Login
      },
      {
        path: 'Authorization',
        name: 'Authorization',
        component: Authorization
      },
      {
        path: 'Reset',
        name: 'Reset',
        component: Reset
      }
    ]
    },

  ]
})
