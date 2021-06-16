import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/SignUp.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
<<<<<<< HEAD
import Category from '../views/Category.vue'
=======
import Home from '../views/Home.vue'
import Splash from '../views/Splash.vue'
import Settings from '../views/Settings.vue'
>>>>>>> 808dc4bc236cf4dab63a9e9797d5535756e0de85
const routes = [
  {
     path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
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