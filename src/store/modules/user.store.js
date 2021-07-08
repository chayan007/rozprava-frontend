import {  userService } from '@/services';
import router from "@/router";

export const userStore = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
        getAll({ commit }) {
            commit('getAllRequest');

            userService.getDetails()
                .then(
                    users => commit('getAllSuccess', users),
                    error => commit('getAllFailure', error)
                );
        },
        setting({ dispatch, commit }, {updateFields}) {
            commit('settingRequest', { updateFields });

            userService.settings(updateFields)
            .then(
                user => {
                    commit('refreshUser', user);
                    router.push('/');
                },
                error => {        
                    dispatch('alertStore/error', error, { root: true });
                }
            );
        }       
    },

    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, users) {
            state.all = { items: users };
        },
        getAllFailure(state, error) {
            state.all = { error };
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
        refreshUser(state, error){
            state.all = { error};
            let user=localStorage.getItem('user');
            let storedProfile = JSON.parse(localStorage.getItem('user'));
            storedProfile.profile = user.profile;
            storedProfile.profile = user.updateFields;
            localStorage.setItem('user', JSON.stringify(storedProfile));
        }
    }
}
