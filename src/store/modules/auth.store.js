import { authService } from '@/services';
import router from "@/router";
import { config } from "@/configurations";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

export const authStore = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ dispatch, commit }, { username, password }) {
            commit('loginRequest', { username });

            authService.login(username, password)
                .then(
                    user => {
                        commit('loginSuccess', user);
                        router.push('/');
                    },
                    error => {
                        dispatch('alertStore/error', error, { root: true });
                        commit('loginFailure');
                    }
                );
        },
        logout({ commit }) {
            authService.logout();
            commit('logout');
        },
        register({ dispatch, commit }, {
            username,
            password1,
            password2,
            name,
            email,
            phone
        }) {
            commit('registerRequest', { username });

            authService.register(name, email, phone, username, password1, password2)
                .then(
                    user => {
                        commit('loginSuccess', user);
                        router.push('/');
                    },
                    error => {
                        commit('loginFailure');
                        dispatch('alertStore/error', error, { root: true });
                    }
                );
        },
            
        resetPassword({ dispatch, commit },username, password) {
            authService.resetPassword(username, password)
            .then(
                user => {
                    let storedProfile = JSON.parse(localStorage.getItem('user'));
                    storedProfile['profile'] = user.profile;
                    localStorage.setItem('user', JSON.stringify(storedProfile));
                    commit('loginSuccess');
                    router.push('/login');
                    "alertStore/error", config.messagingConfig.messages.error.password_updated;
                },
                error => {
                    commit('loginFailure');
                    dispatch('alertStore/error', error, { root: true });
                }
            );
        },
    },

    mutations: {
        loginRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        registerRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
        },            
    }
}

export default authStore;
  