import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/SignUp.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Splash from '../views/Splash.vue'
import Home from '../views/Home.vue'

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
      path: "/",
    name: "Home",
    get component() {
      const x=1; // emulating the value of the condition check for the sign in.
        if (x==0) {
            //for signed up users

             return Home;
        } 
        else{
          //for unsigned users

          return Splash;
        }
    }}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router