import { createStore } from 'vuex'

import authStore from './modules/auth.store'
import {alertStore} from "@/store/modules/alert.store";
import {userStore} from "@/store/modules/user.store";

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    alertStore,
    authStore,
    userStore
  }
})
