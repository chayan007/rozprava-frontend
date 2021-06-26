import { userService } from '@/services';
//import router from "@/router";
//const user = JSON.parse(localStorage.getItem('user'));
export const userStore = {
    namespaced: true,
    state: {
        all: {},
        // ? { status: { loggedIn: true }, user }
        // : { status: {}, user: null };
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
        /*edit_settings({dispatch,commit},data)
        {

            userService.edit_settings(data)
            .then(
                user => {
                    commit('edit', user);
                    router.push('/settings');
                },
                error => {
                    commit('edit_failure', error);
                    dispatch('alertStore/error', error, { root: true });
                }
            );
        }*/
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
       /* edit(state, user){
            state.status={edit:true};
            state.user=user;
        },
        edit_failure(state)
        {
            state.status={};
        }*/
    }
}
