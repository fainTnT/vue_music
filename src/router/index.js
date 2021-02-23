import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		redirect:'/recommend'
	},
  {
    path: '/recommend',
    component:() => import('components/recommend/recommend')
  },
	{
	  path: '/singer',
	  component:() => import('components/singer/singer')
	},
	{
	  path: '/search',
	  component:() => import('components/search/search')
	},
	{
	  path: '/rank',
	  component:() => import('components/rank/rank')
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
