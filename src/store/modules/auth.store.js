import { authService } from '@/services';
import router from "@/router";

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

        chechUser( {dispatch, commit}, userId){
            authService.chechUser(userId)
            .then(
                () => {
                    if(userId)
                    {
                        this.$router.push({path: '/enter-otp/username'});
                    }
                    else{
                        alert('Enter you email or username');
                    }
                },
                error => {
                    commit('loginFailure');
                    dispatch('alertStore/error', error, { root: true });
                }
            ); 
        },
            
        sendOtp() {

            authService.sendOtp()
        },

        verifyOtp({dispatch}, otp) {

            authService.verifyOtp(otp)
            .then(
                () => {
                    router.push('/reset-password');
                },
                error => {
                    dispatch('alertStore/error', error, { root: true });
                }
            ); 
        },

        resetPassword({ dispatch, commit }, {
            updateFields
        }){

            authService.resetPassword(updateFields)
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
  