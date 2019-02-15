import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Document from '@/components/Document'
import noPath from '@/components/404'
import User from '@/components/User'
import Hobby from '@/views/Hobby'
import Study from '@/views/Study'
import Work from '@/views/Work'
import Slide from '@/views/Slide'
import Hobby1 from '@/views/Hobby1'

Vue.use(Router)

let router =  new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/user/:tip?/:userId?',
      component:User
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      //name: 'About',
      component: About,
      children:[
        {
          path:'/',
          name: 'Hobby',
          //component:Hobby
          components:{
            default:Hobby,
            hobby1:Hobby1
          }
        },
        {
          path:'study',
          name: 'Study',
          component:Study
        },
        {
          path:'work',
          name: 'Work',
          component:Work
        }
      ]
    },
    {
      path: '/document',
      name: 'Document',
      //component: Document
      components:{
        default:Document,
        slide:Slide
      }
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

// //进入路由前
// router.beforeEach( ( to,from,next )=>{  
// 	if( to.meta.login ){  //要进入的组件需要先进行登录
// 		console.log(to);
// 		next('/login');  //如果没有登录就重定向到登录页
// 	}else{
// 		next();  //已经登录，就渲染要进入的组件内容
// 	}
// } )

export default router;