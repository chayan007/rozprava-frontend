import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '@/components/SignUp.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Settings from '@/views/Settings.vue'
import Search from '@/views/search.vue'
import Post from '@/views/Post.vue'
const routes = [
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page

  const publicPages = [
      '/',
      '/login',
      '/register',
      '/signup',
      '/settings',
      '/post'
  ];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})

export default router
