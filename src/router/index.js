import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/SignUp.vue'
import Register from '../views/Register.vue'
import SplashScreen from '../views/SplashScreen.vue'
import Login from '../views/Login.vue'
import Header from '../views/Header.vue'

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
    path: '/splashscreen',
    name: 'SplashScreen',
    component: SplashScreen
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router