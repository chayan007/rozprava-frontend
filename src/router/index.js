import { createRouter, createWebHistory } from 'vue-router'

import SignUp from '@/components/auth/SignUp.vue'
import Register from '@/views/auth/Register.vue'
import Login from '@/views/auth/Login.vue'
import Logout from '@/views/auth/Logout.vue'
import Home from '@/views/Home.vue'
import ForgetLogin from '@/views/ForgetLogin.vue'
import EnterOTP from '@/views/EnterOTP.vue'
import ResetPassword from '@/views/ResetPassword.vue'
import Settings from '@/views/protected/Settings.vue'
import CaseView from '@/views/public/CaseView.vue'
import Activity from '@/views/protected/Activity.vue'
import Profile from '@/views/protected/Profile.vue'
import Inbox from '@/views/protected/chat/Inbox.vue'
import Chat from '@/views/protected/chat/Chat.vue'
import CaseCreate from '@/views/protected/case/Create.vue'
import Notification from '@/views/protected/Notification.vue'
import CaseDetail from '@/views/protected/case/Detail.vue'
import MyGroups from '@/views/protected/group/MyGroups.vue'
import Group from '@/views/protected/group/Group.vue'
import GroupInfo from '@/views/protected/group/GroupInfo.vue'
import GroupSettings from '@/views/protected/group/GroupSettings.vue'
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
    path: '/logout',
    name: 'Logout',
    component: Logout
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
    path: '/my-groups',
    name: 'MyGroups',
    component: MyGroups
  },
  {
    path: '/group/info/:uuid',
    name: 'GroupInfo',
    component: GroupInfo
  },
  {
    path: '/group/:uuid',
    name: 'Group',
    component: Group
  },
  {
    path: '/group-settings',
    name: 'GroupSettings',
    component: GroupSettings
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
      'ForgetLogin',
      'EnterOTP',
      'ResetPassword',
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
