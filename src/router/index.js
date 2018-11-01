import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

/**
 * require.ensure 按需加载
 */
const home = r => require.ensure([], () => r(require('../page/home')), 'home')

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
          // component: home, 
      		component: (resolve) => require(['../page/home'], resolve)
      	},
      	{
      		path: '/item',
          // component: require('../page/item'),   // 非按需加载 同步加载
      		component: (resolve) => require(['../page/item'], resolve)  // 按需加载 异步加载
      	},
      	{
      		path: '/score',
      		component: (resolve) => require(['../page/score'], resolve)
      	},
      ]
    }
  ]
})
