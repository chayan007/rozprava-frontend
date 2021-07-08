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
        settings({ dispatch, commit }, updateFields ) {
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
        settingRequest(updateFields){
            console.log(updateFields);
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        refreshUser(user){
            let storedProfile = JSON.parse(localStorage.getItem('user'));
            console.log(storedProfile);
            storedProfile.profile = user.profile;
            console.log(user);
            console.log(storedProfile);
            localStorage.setItem('user', JSON.stringify(storedProfile));
        }
    }
}
