import { createStore } from 'vuex'

import authStore from './modules/auth.store'
import {alertStore} from "@/store/modules/alert.store";
import {caseStore} from "@/store/modules/case.store";
import {userStore} from "@/store/modules/user.store";
import {chatStore} from "@/store/modules/chat.store"; 
import {groupStore} from "@/store/modules/group.store"; 

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
    caseStore,
    userStore,
    chatStore,
    groupStore
  }
})
