import { authService, userService } from '@/services';
import router from "@/router";

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

export const authStore = {
    namespaced: true,
    state: initialState,
    actions: {
        setting({ dispatch, commit }, {
            profilePicture,
            username,
            bio,
            password1,
            password2,
        }) {
            commit('settingRequest', { username });

            userService.setting(profilePicture, username, bio, password1, password2)
            .then(
                user => {
<<<<<<< HEAD
                    console.log(user);
                    const storedProfile = JSON.parse(localStorage.getItem('user'));
                    storedProfile.profile = user.profile;
                    localStorage.setItem('user', JSON.stringify(storedProfile));
                    

=======
                    localStorage.setItem('user', JSON.stringify(data));
>>>>>>> b820a78bff0e3619c96fda9d2523a30f3ecfbc04
                    commit('loginSuccess', user);
                    router.push('/');
                },
                error => {        
                    commit('loginFailure', error);
                    dispatch('alertStore/error', error, { root: true });
                }
            );
        },
        login({ dispatch, commit }, { username, password }) {
            commit('loginRequest', { username });

            authService.login(username, password)
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
        settingRequest(state, user){
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
  