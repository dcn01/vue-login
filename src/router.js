import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Layout from "./views/Layout.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      redirect: '/home',
      name: "layout",
      component: Layout,
      children: [{
          path: "/home",
          name: "home",
          meta:{
            login:true
          },
          component: Home
        },
        {
          path: "/about",
          name: "about",
          meta:{
            login:true
          },
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import( /* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
          path: "/setting",
          name: "setting",
          meta:{
            login:true
          },
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import( /* webpackChunkName: "about" */ "./views/Setting.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },

  ]
});
router.beforeEach((to,from,next)=>{
  if(to.path === '/login'){
    if(window.localStorage.getItem("token")&&window.localStorage.getItem("token")=="daf9054549rq329ewoq"){
      next('/home');
    }else{
      next()
    }
  }else{
    if(window.localStorage.getItem("token")&&window.localStorage.getItem("token")=="daf9054549rq329ewoq"){
      next();
    }else{
      next('/login')
    }
  }
})

export default router;