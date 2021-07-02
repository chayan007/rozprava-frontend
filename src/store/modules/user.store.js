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
                    // console.log(user);
                    let storedProfile = JSON.parse(localStorage.getItem('user'));
                    console.log(storedProfile.profile.user);
                    storedProfile.profile = user.profile;
                    storedProfile.profile = user.updateFields;
                    localStorage.setItem('user', JSON.stringify(storedProfile));
                    console.log(storedProfile.updateFields);
                    console.log(user);

                    commit('loginSuccess', user);
                    router.push('/');
                },
                error => {        
                    commit('loginFailure', error);
                    dispatch('alertStore/error', error, { root: true });
                }
            );
        },
        
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
            let user=localStorage.getItem("user");
            user.profile.user
        }
    }
}
