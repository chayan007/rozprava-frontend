import {  userService } from '@/services';
import router from "@/router";

export const userStore = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
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
        settingRequest(updateFields){
            console.log(updateFields);
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
