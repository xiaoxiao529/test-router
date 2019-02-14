import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Document from '@/components/Document'
import noPath from '@/components/404'

Vue.use(Router)

let router =  new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/document',
      name: 'Document',
      component: Document
    },
    {
      path:'*',
      component:noPath
      //redirect:'/home'
      // redirect:(to)=>{
      //   return {name:''}
      // }
    }
  ]
})

//进入路由前
router.beforeEach( ( to,from,next )=>{  
	if( to.meta.login ){  //要进入的组件需要先进行登录
		console.log(to);
		next('/login');  //如果没有登录就重定向到登录页
	}else{
		next();  //已经登录，就渲染要进入的组件内容
	}
} )

export default router;