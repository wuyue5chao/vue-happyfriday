import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)



export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: '',
      component: App,
      children: [
      	{
      		path: '',
      		component: (resolve) => require(['../page/home'], resolve)
      	},
      	{
      		path: '/item',
      		component: (resolve) => require(['../page/item'], resolve)
      	},
      	{
      		path: '/score',
      		component: (resolve) => require(['../page/score'], resolve)
      	},
      ]
    }
  ]
})
