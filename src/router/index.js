import { createRouter, createWebHistory } from 'vue-router'

import SignUp from '@/components/auth/SignUp.vue'
import Register from '@/views/auth/Register.vue'
import Login from '@/views/auth/Login.vue'
import Home from '@/views/Home.vue'
import ForgetLogin from '@/views/ForgetLogin.vue'
import EnterOTP from '@/views/EnterOTP.vue'
import ResetPassword from '@/views/ResetPassword.vue'
import Settings from '@/views/protected/Settings.vue'
import CaseView from '@/views/public/CaseView.vue'
import Activity from '@/views/protected/Activity.vue'
import Search from '@/views/protected/Search.vue'
import Profile from '@/views/protected/Profile.vue'
import Recommendation from '@/views/protected/Recommendation.vue'
import Inbox from '@/views/protected/chat/Inbox.vue'
import Chat from '@/views/protected/chat/Chat.vue'
import CaseCreate from '@/views/protected/case/Create.vue'
import Notification from '@/views/protected/Notification.vue'
import CaseDetail from '@/views/protected/case/Detail.vue'
import CreateGroup from '@/views/Group/CreateGroup.vue'
import Group from '@/views/Group/Group.vue'
import GeneralSearch from '@/views/GeneralSearch.vue'


const routes = [
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notification
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: Inbox
  },
  {
    path: '/recommendation',
    name: 'Recommendation',
    component: Recommendation
  },
  {
    path: '/profile/:username',
    name: 'Profile',
    component: Profile,
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
     path: '/timeline',
     name: 'CaseView',
     component: CaseView
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/forget-login',
    name: 'ForgetLogin',
    component: ForgetLogin
  },
  {
    path: '/enter-otp/:username',
    name: 'EnterOTP',
    component: EnterOTP
  },
  {
    path: '/reset-password/:username',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/case-create',
    name: 'CaseCreate',
    component: CaseCreate
  },
  {
    path: '/case/:slug',
    name: 'CaseDetail',
    component: CaseDetail
  },
  {
    path: '/activity',
    name: 'Activity',
    component: Activity
  },
  {
    path: '/creategroup',
    name: 'CreateGroup',
    component: CreateGroup
  },
  {
    path: '/group',
    name: 'Group',
    component: Group
  },
  {
    path: '/search',
    name: 'GeneralSearch',
    component: GeneralSearch
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page

  const publicPagesName = [
      'Home',
      'Login',
      'Register',
      'Signup',
      'CaseView',
      'Notifications',
      'ForgetLogin',
      'EnterOTP',
      'ResetPassword',
      'Timeline',
      'Recommendation',
      'Inbox',
      'Chat',
      'CaseCreate',
      'Activity',
      'CaseDetail',
      'CreateGroup',
      'Group',
      'GeneralSearch'
  ];
  const authPagesName = [
      
      'Register',
      'ForgetLogin',
      'EnterOTP'
  ];

  const authRequired = !publicPagesName.includes(to.name);
  const loggedIn = localStorage.getItem('user');

  if (loggedIn && authPagesName.includes(to.name)) {
    next(to.path);
  }

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

export default router
