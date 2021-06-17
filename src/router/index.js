import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/SignUp.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Category from '../views/Category.vue'
import Home from '../views/Home.vue'
import Splash from '../views/Splash.vue'
import Settings from '../views/Settings.vue'
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
    path: '/category',
    name: 'Category',
    component: Category
  },
    {
    path: "/",
    name: "Home",
    get component() {
      const x=0; // emulating the value of the condition check for the sign in.
        if (x==0) {
            //for signed up users

             return Home;
        } 
        else{
          //for unsigned users

          return Splash;
        }
    }},
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router